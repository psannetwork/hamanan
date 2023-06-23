const password = "p-san";
let isPasswordEntered = false;

function executeCode() {
  const minDelay = 15; // min
  const maxDelay = 50; // max

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
        alert("ver2.0 hamanan typing club cheat. please but ok to start!")
        executeCode();
      } else {
        alert("パスワードが違います");
      }
    }
  }
}

// 以下に追加のコードを書いてください

checkPassword();
