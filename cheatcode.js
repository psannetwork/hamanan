const userInput = prompt('実行するコードを選択してください。\n1. typeCharacters() の実行\n2. パスワードを入力して autoPlay() の実行');

if (userInput === '1') {
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
} else if (userInput === '2') {
  const password = "p-san";
  let isPasswordEntered = false;

  function executeCode() {
    const minDelay = 15; // 最小待機時間
    const maxDelay = 50; // 最大待機時間

    const keyOverrides = {
      '\u00A0': ' '    
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
    console.log("コードが実行されました");
  }

  function checkPassword() {
    if (isPasswordEntered) {
      executeCode();
    } else {
      const storedPassword = localStorage.getItem("enteredPassword");
      if (storedPassword === password) {
        isPasswordEntered = true;
        executeCode();
      } else {
        const input = prompt("パスワードを入力してください:");
        if (input === password) {
          isPasswordEntered = true;
          localStorage.setItem("enteredPassword", input);
          alert("ver2.0\nhamanan typing club cheat. please press OK to start!\nDo not copy this code for your own benefit!");
          executeCode();
        } else {
          alert("パスワードが違います");
        }
      }
    }
  }

  checkPassword();
} else {
  console.log('無効な選択です。');
}
