const button1 = document.createElement('button');
button1.textContent = '1. short typing の実行';
button1.style.backgroundColor = 'blue'; // ボタンの背景色
button1.style.color = 'white'; // ボタンの文字色
button1.style.border = 'none'; // ボタンのボーダーをなくす
button1.style.position = 'relative'; // 相対位置指定
button1.style.top = '100px'; // 100px下にずらす
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

const button2 = document.createElement('button');
button2.textContent = '2. auto typing long の実行';
button2.style.backgroundColor = 'red'; // ボタンの背景色
button2.style.color = 'white'; // ボタンの文字色
button2.style.border = 'none'; // ボタンのボーダーをなくす
button2.style.position = 'relative'; // 相対位置指定
button2.style.top = '100px'; // 100px下にずらす
button2.addEventListener('click', () => {
  const password = 'p-san';
  let isPasswordEntered = false;

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
  button1.style.display = 'none'; // ボタン1を非表示にする
  button2.style.display = 'none'; // ボタン2を非表示にする
});

const container = document.createElement('div');
container.style.position = 'fixed';
container.style.top = '10px';
container.style.right = '10px';
container.appendChild(button1);
container.appendChild(button2);

document.body.appendChild(container);
