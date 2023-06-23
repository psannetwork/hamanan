const boxedChars = document.querySelectorAll('.boxed-char');

function recordKey(chr) {
  window.core.record_keydown_time(chr);
}

for (let i = 0; i < boxedChars.length; i++) {
  const boxedChar = boxedChars[i];
  const text = boxedChar.textContent.trim();
  recordKey(text);
}
