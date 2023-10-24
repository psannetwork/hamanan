import os
import subprocess
import time
import serial
import pyaudio
import speech_recognition as sr
from gtts import gTTS
from bardapi import Bard

# Set Bard-API's API key as an environment variable
os.environ['_BARD_API_KEY'] = "cQi2uJoenm91t7F3tZO7qet54AK-zydIxB6FufuGH3UDZbwSPdf3n5ZTvMcUC65zHZZrRA."

# Function to speak text
def speak_text(text, lang='ja', speed=1.0):
    tts = gTTS(text, lang=lang, slow=False)
    tts.save("response.mp3")
    # Adjust this line according to your system's MP3 player command
    subprocess.run(["mpg321", "response.mp3"])

# Initialize the speech recognition engine
r = sr.Recognizer()

# Audio processing callback function
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
        speak_text(response_text, lang='ja', speed=1.5)  # Adjust speed as needed

        # Arduinoへのデータ送信
        send_to_arduino(response_text)

    except sr.UnknownValueError:
        pass
    except sr.RequestError as e:
        pass

    return (None, pyaudio.paContinue)

# Function to send data to Arduino over serial communication
def send_to_arduino(text):
    arduino_serial.write(text.encode())

# Main function
def main():
    global sprec
    sprec = sr.Recognizer()  # Instantiate the recognizer

    # Arduinoとのシリアル通信の設定
    arduino_serial = serial.Serial('COM3', 9600)  # ポート名とボーレートを適切に設定

    audio = pyaudio.PyAudio()
    stream = audio.open(
        format=pyaudio.paInt16,
        rate=SAMPLERATE,
        channels=1,
        input_device_index=1,
        input=True,
        frames_per_buffer=SAMPLERATE * 2,  # 2-second buffer
        stream_callback=callback
    )
    stream.start_stream()
    while stream.is_active():
        time.sleep(0.1)

    stream.stop_stream()
    stream.close()
    audio.terminate()

if __name__ == '__main__':
    main()
