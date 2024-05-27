let inputElement = document.createElement('input');
inputElement.type = 'text';
inputElement.id = 'userInput';
inputElement.placeholder = '質問をどうぞ!';

let buttonElement = document.createElement('button');
buttonElement.id = 'submitButton';
buttonElement.textContent = '送信';

let resultDiv = document.createElement('div');
resultDiv.id = 'result';

let container = document.createElement('div');
container.id = 'fixedContainer';

container.appendChild(inputElement);
container.appendChild(buttonElement);
container.appendChild(resultDiv);

document.body.appendChild(container);

let style = document.createElement('style');
style.textContent = `
  #fixedContainer {
    position: fixed;
    bottom: 10px;
    left: 10px;
    z-index: 1000;
    background: white;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
  }
  #userInput {
    margin-right: 5px;
    width: calc(100% - 80px);
    padding: 5px;
  }
  #submitButton {
    padding: 5px 10px;
  }
  #result {
    margin-top: 10px;
    font-size: 14px;
    color: #333;
  }
`;
document.head.appendChild(style);

buttonElement.addEventListener('click', () => {
  let userInput = document.getElementById('userInput').value;
  let AiUrl = 'https://script.google.com/macros/s/AKfycbwEFF-V0jBJGcMFC_dbKTGzY-HeiUvF3QKFv_ETfTRFO1qwszYriL3_HjsalvFEm0sK/exec?text=';
  let AIrequesturl = AiUrl + encodeURIComponent(userInput);

  buttonElement.disabled = true;
  buttonElement.textContent = '読み込み中...';

  fetch(AIrequesturl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      resultDiv.textContent = `回答: ${data.responseno}`;
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      resultDiv.textContent = 'エラーが発生しました。もう一度お試しください。';
    })
    .finally(() => {
      buttonElement.disabled = false;
      buttonElement.textContent = '送信';
    });
});
