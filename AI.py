from bardapi import Bard
from gtts import gTTS
import os

# Bard-APIのAPIキーを環境変数に設定
os.environ['_BARD_API_KEY'] = "cQi2uJoenm91t7F3tZO7qet54AK-zydIxB6FufuGH3UDZbwSPdf3n5ZTvMcUC65zHZZrRA."

# Function to convert text to speech with an increased rate
def speak_text(text, lang='ja', speed=2.0):
    tts = gTTS(text, lang=lang, slow=False)  # Set slow to False for faster speech
    tts.save("response.mp3")
    os.system("mpg321 response.mp3")  # Adjust this line for your system's audio player

# Typing input to interact with Bard API
while True:
    input_text = input("質問または入力してください (終了するには '終わり' と入力): ")
    if input_text == "終わり":
        break

    bard_response = Bard(timeout=10).get_answer(input_text)
    response_text = bard_response['content']
    print("応答: " + response_text)
    speak_text(response_text, lang='ja', speed=9.0)  # Adjust the speed value as needed

print("終了しました。")
