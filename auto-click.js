const minDelay = 40;
const maxDelay = 40;

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
    setTimeout(clickButtonWhenVisible, 1000); // 1秒ごとに再試行
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

  // 自動再生が完了した後、3秒後に再度実行
  setTimeout(() => {
    clickButtonWhenVisible();
    autoPlay(true);
  }, 3000);
}

clickButtonWhenVisible();
autoPlay(true);
