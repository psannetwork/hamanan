const text1 = document.createElement('div');
text1.textContent = 'This code is written by p. ver3.0';

// スタイルを設定
text1.style.position = 'fixed';
text1.style.top = '540px';
text1.style.left = '0px';
text1.style.color = 'red';
text1.style.backgroundColor = 'black';
text1.style.padding = '3px';

// 要素を一番下に移動する
document.body.appendChild(text1);


const button1 = document.createElement('button');
button1.textContent = '1. short typing の実行';
button1.style.backgroundColor = 'black';
button1.style.color = 'red';
button1.style.border = 'none';
button1.style.position = 'fixed';
button1.style.right = '20px';
button1.style.transform = 'translateX(-50%)';
button1.style.top = '63px';
button1.style.transform = 'translateY(-50%)';
button1.style.zIndex = '9999';
button1.addEventListener('click', () => {
  const boxedChars = document.querySelectorAll('.boxed-char');

  async function typeCharacters() {
    for (const boxedChar of boxedChars) {
      const text = boxedChar.textContent.trim();
      await new Promise(resolve => {
        window.core.record_keydown_time(text);
        setTimeout(resolve, 50); // 50ミリ秒待機
      });
    }
  }

  typeCharacters();
  button1.style.display = 'none'; // ボタン1を非表示にする
  button2.style.display = 'none'; // ボタン2を非表示にする
});

const button3 = document.createElement('button');
button3.textContent = '3. auto click';
button3.style.backgroundColor = 'black';
button3.style.color = 'green';
button3.style.border = 'none';
button3.style.position = 'fixed';
button3.style.right = '20px';
button3.style.transform = 'translateX(-50%)';
button3.style.top = '111px';
button3.style.transform = 'translateY(-50%)';
button3.style.zIndex = '9999';
button3.addEventListener('click', () => {
const minDelay = 15;
const maxDelay = 30;

const keyOverrides = {
  [String.fromCharCode(160)]: ' '
};

function getTargetCharacters() {
  const els = Array.from(document.querySelectorAll('.token span.token_unit'));
  const chrs = els
    .map(el => {
      if (el.firstChild?.classList?.contains('_enter')) {
        return '\n';
      }
      let text = el.textContent[0];
      return text;
    })
    .map(c => keyOverrides.hasOwnProperty(c) ? keyOverrides[c] : c);
  return chrs;
}

function recordKey(chr) {
  window.core.record_keydown_time(chr);
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function calculateDelay(currentIndex, numChars) {
  const progress = currentIndex / numChars;
  const speedMultiplier = 1 + progress;
  const delay = Math.random() * (maxDelay - minDelay) + minDelay;
  return delay * speedMultiplier;
}

function clickButtonWhenVisible() {
  const button = document.querySelector('.btn.navbar-continue');
  if (button) {
    button.click();
    console.log('ボタンをクリックしました');
  } else {
    console.log('ボタンが見つかりません');
    setTimeout(clickButtonWhenVisible, 1000);
    console.clear();// 1秒ごとに再試行
  }
}

async function autoPlay(finish) {
  const chrs = getTargetCharacters();
  const numChars = chrs.length;
  let delay = maxDelay;
  for (let i = 0; i < numChars - (!finish); ++i) {
    const c = chrs[i];
    recordKey(c);
    await sleep(delay);
    if (i > 0 && i % 10 === 0) {
      delay = calculateDelay(i, numChars);
    }
  }

  // 自動再生が完了した後、5秒後に再度実行
  setTimeout(() => {
    clickButtonWhenVisible();
    autoPlay(true);
  }, 5000);
}

clickButtonWhenVisible();
autoPlay(true);  console.log('新しいモードが実行されました');
});

document.body.appendChild(button3);

//ここまで3

const button2 = document.createElement('button');
button2.textContent = '2.    long  typing の実行';
button2.style.backgroundColor = 'black';
button2.style.color = 'blue';
button2.style.border = 'none';
button2.style.position = 'fixed';
button2.style.right = '20px';
button2.style.transform = 'translateX(-50%)';
button2.style.top = '87px';
button2.style.transform = 'translateY(-50%)';
button2.style.zIndex = '9999';
button2.addEventListener('click', () => {
  const password = 'p-san';
  let isPasswordEntered = false;
  //button finish
function clickButtonWhenVisible() {
  const button = document.querySelector('.btn.navbar-continue');
  if (button) {
    button.click();
    console.log('ボタンをクリックしました');
  } else {
    console.log('ボタンが見つかりません');
    setTimeout(clickButtonWhenVisible, 1000); // 1秒ごとに再試行
  }
}

clickButtonWhenVisible();
//ここまで
  
  function executeCode() {
    const minDelay = 15; // 最小待機時間
    const maxDelay = 50; // 最大待機時間

    const keyOverrides = {
      '\u00A0': ' ',
    };

    function getTargetCharacters() {
      const els = Array.from(document.querySelectorAll('.token span.token_unit'));
      const chrs = els.map(el => {
        if (el.firstChild?.classList?.contains('_enter')) {
          return '\n';
        }
        return el.textContent[0];
      }).map(c => keyOverrides[c] || c);
      return chrs;
    }

    function recordKey(chr) {
      window.core.record_keydown_time(chr);
    }

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function autoPlay(finish) {
      const chrs = getTargetCharacters();
      const numChars = chrs.length;
      for (let i = 0; i < numChars - (!finish); ++i) {
        const c = chrs[i];
        recordKey(c);
        const delay = calculateDelay(numChars, i, minDelay, maxDelay);
        await sleep(delay);
      }
    }

    function calculateDelay(numChars, currentIndex, minDelay, maxDelay) {
      const progress = currentIndex / numChars;
      const speedMultiplier = 1 + progress;
      const delay = Math.random() * (maxDelay - minDelay) + minDelay;
      return delay * speedMultiplier;
    }

    autoPlay(true);
    console.log('コードが実行されました');
  }

  function checkPassword() {
    if (isPasswordEntered) {
      executeCode();
    } else {
      const storedPassword = localStorage.getItem('enteredPassword');
      if (storedPassword === password) {
        isPasswordEntered = true;
        executeCode();
      } else {
        const input = prompt('パスワードを入力してください:');
        if (input === password) {
          isPasswordEntered = true;
          localStorage.setItem('enteredPassword', input);
          alert('ver2.0\nhamanan typing club cheat. please press OK to start!\nDo not copy this code for your own benefit!');
          executeCode();
        } else {
          alert('パスワードが違います');
        }
      }
    }
  }

  checkPassword();
});

const container = document.createElement('div');
container.style.position = 'fixed';
container.style.top = '10px';
container.style.right = '10px';
container.appendChild(button1);
container.appendChild(button2);

document.body.appendChild(container);
container.style.zIndex = '9999';//手前に持ってくる

