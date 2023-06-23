//1こめ
const spans = document.querySelectorAll('span[style="opacity: 1;"]');
const targetTexts = Array.from(spans).map(span => span.textContent.trim());

async function typeText(text) {
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    recordKey(char);
    await sleep(Math.random() * (maxDelay - minDelay) + minDelay);
  }
}

async function typeTargetTexts() {
  for (let i = 0; i < targetTexts.length; i++) {
    const text = targetTexts[i];
    await typeText(text);
  }
}

typeTargetTexts();
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitTwoSeconds() {
  await sleep(2000);
  console.log('2 seconds have passed.');
}

waitTwoSeconds();
//止める
//2こめ？
const boxedChars = document.querySelectorAll('.boxed-char');

function recordKey(chr) {
  window.core.record_keydown_time(chr);
}

for (let i = 0; i < boxedChars.length; i++) {
  const boxedChar = boxedChars[i];
  const text = boxedChar.textContent.trim();
  recordKey(text);
}
//3
const minDelay = 60;
const maxDelay = 60;

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
  }).map(c => keyOverrides[c] || c); // convert special characters
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
  for (let i = 0; i < chrs.length - (!finish); ++i) {
    const c = chrs[i];
    recordKey(c);
    await sleep(Math.random() * (maxDelay - minDelay) + minDelay);
  }
}

autoPlay(true);


