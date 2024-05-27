let inputElement = document.createElement('input');
inputElement.type = 'text';
inputElement.id = 'userInput';
inputElement.placeholder = 'Type something...';

let buttonElement = document.createElement('button');
buttonElement.id = 'submitButton';
buttonElement.textContent = 'Submit';

let container = document.createElement('div');
container.id = 'fixedContainer';

container.appendChild(inputElement);
container.appendChild(buttonElement);

document.body.appendChild(container);

let style = document.createElement('style');
style.textContent = `
  #fixedContainer {
    position: fixed;
    bottom: 10px;
    left: 10px;
    z-index: 1000;
    background: white;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  #userInput {
    margin-right: 5px;
  }
`;
document.head.appendChild(style);

buttonElement.addEventListener('click', () => {
  let userInput = document.getElementById('userInput').value;
  let AiUrl = 'https://script.google.com/macros/s/AKfycbwEFF-V0jBJGcMFC_dbKTGzY-HeiUvF3QKFv_ETfTRFO1qwszYriL3_HjsalvFEm0sK/exec?text=';
  let AIrequesturl = AiUrl + encodeURIComponent(userInput);

  fetch(AIrequesturl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log(data.responseno);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
});
