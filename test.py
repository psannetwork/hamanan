import os
import subprocess
import speech_recognition as sr
import time
import pyaudio
import speech_recognition as sr
from gtts import gTTS
from bardapi import Bard  # Bardクラスをインポート

# Bard-APIのAPIキーを環境変数に設定
os.environ['_BARD_API_KEY'] = "cQi2uJoenm91t7F3tZO7qet54AK-zydIxB6FufuGH3UDZbwSPdf3n5ZTvMcUC65zHZZrRA."

# 音声を再生する関数
def speak_text(text, lang='ja', speed=1.0):
    tts = gTTS(text, lang=lang, slow=False)
    tts.save("response.mp3")
    subprocess.run(["mpg321", "response.mp3"])  # この行をあなたのシステムの設定に合わせて調整してください

# 音声認識エンジンを初期化
r = sr.Recognizer()

# コールバック関数
SAMPLERATE = 44100
def callback(in_data, frame_count, time_info, status):
    global sprec
    try:
        audiodata = sr.AudioData(in_data, SAMPLERATE, 2)
        sprec_text = sprec.recognize_google(audiodata, language='ja-JP')
        print("質問: " + sprec_text)

        if sprec_text == "終わり":
            return (None, pyaudio.paComplete)

        bard_response = Bard(timeout=10).get_answer(sprec_text)
        response_text = bard_response['content']
        print("応答: " + response_text)
        speak_text(response_text, lang='ja', speed=1.5)  # 速度を調整してください

    except sr.UnknownValueError:
        pass
    except sr.RequestError as e:
        pass

    return (None, pyaudio.paContinue)

# メイン関数
def main():
    global sprec
    sprec = sr.Recognizer()  # インスタンスを生成
    audio = pyaudio.PyAudio()
    stream = audio.open(format=pyaudio.paInt16,
                        rate=SAMPLERATE,
                        channels=1,
                        input_device_index=1,
                        input=True,
                        frames_per_buffer=SAMPLERATE * 2,  # 2秒周期でコールバック
                        stream_callback=callback)
    stream.start_stream()
    while stream.is_active():
        time.sleep(0.1)

    stream.stop_stream()
    stream.close()
    audio.terminate()

if __name__ == '__main__':
    main()
