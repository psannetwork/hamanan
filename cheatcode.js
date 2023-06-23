//1
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
  for (let i = 0; i < chrs.length - (!finish); ++i) {
    const c = chrs[i];
    recordKey(c);
    await sleep(Math.random() * (maxDelay - minDelay) + minDelay);
  }
}

autoPlay(true);
