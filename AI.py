import os
import subprocess
import time
import pyaudio
import speech_recognition as sr
from gtts import gTTS
from bardapi import Bard
import re

# Set Bard-API's API key as an environment variable
os.environ['_BARD_API_KEY'] = "cQi2uJoenm91t7F3tZO7qet54AK-zydIxB6FufuGH3UDZbwSPdf3n5ZTvMcUC65zHZZrRA."

# Function to speak text
def speak_text(text, lang='ja', speed=2.0):
    tts = gTTS(text, lang=lang, slow=False)
    tts.save("response.mp3")
    # Adjust this line according to your system's MP3 player command
    subprocess.run(["mpg321", "response.mp3"])

# Initialize the speech recognition engine
r = sr.Recognizer()

# Audio processing callback function
SAMPLERATE = 44100

# State variables
is_listening = False
trigger_phrases = ["OK", "オーケー"]

# Regular expression to remove unwanted characters
clean_text = re.compile('[^A-Za-z0-9 あ-んア-ン]+')

def callback(in_data, frame_count, time_info, status):
    global sprec, is_listening
    try:
        audiodata = sr.AudioData(in_data, SAMPLERATE, 2)
        sprec_text = sprec.recognize_google(audiodata, language='ja-JP')
        sprec_text = clean_text.sub('', sprec_text)  # Remove unwanted characters
        print("Recognized: " + sprec_text)

        if not is_listening:
            for phrase in trigger_phrases:
                if phrase in sprec_text:
                    is_listening = True
                    print("Listening mode activated.")
                    break
        else:
            print("質問: " + sprec_text)

            if sprec_text == "終わり":
                is_listening = False
                print("Listening mode deactivated.")
                return (None, pyaudio.paComplete)

            bard_response = Bard(timeout=10).get_answer(sprec_text)
            response_text = bard_response['content']
            print("応答: " + response_text)
            speak_text(response_text, lang='ja', speed=1.5)  # Adjust speed as needed

    except sr.UnknownValueError:
        pass
    except sr.RequestError as e:
        pass

    return (None, pyaudio.paContinue)

# Main function
def main():
    global sprec
    sprec = sr.Recognizer()  # Instantiate the recognizer
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
