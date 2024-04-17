function clickContinuously() {
  const continueButton = document.querySelector('.btn.btn-lg.pull-right.btn-primary');
  
  if (continueButton) {
    continueButton.click();
  }
}

// 1秒ごとにクリック処理を実行
setInterval(clickContinuously, 1000);




// クリックする関数を定義
function clickElement() {
  var element = document.querySelector('.nav-icon'); // クリックする要素の取得
  var excludedElement1 = document.querySelector('.boxed-line'); // 排除する要素1が存在するか確認
  var excludedElement2 = document.querySelector('.token'); // 排除する要素2が存在するか確認

  if (element && !(excludedElement1 || excludedElement2)) {
    var event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    element.dispatchEvent(event);
  }
}

// 1秒ごとに実行するインターバルを設定
setInterval(clickElement, 1000);





function checkAndExecute() {
  const boxedLineElements = document.getElementsByClassName('boxed-line');
  if (boxedLineElements.length > 0) {
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

    typeCharacters(); // 実行
  }
}

const intervalId = setInterval(checkAndExecute, 1000); // 1秒ごとに要素の確認を行う




function checkTokenElement() {
  const tokenElement = document.querySelector('.token span.token_unit');
  const boxedLineElement = document.querySelector('.boxed-line');

  if (!tokenElement && !boxedLineElement) {
    // Both elements do not exist
    console.log('.token span.token_unit 要素も boxed-line 要素も存在しないため、navID を実行します');
    navID();
  } else {
    // Either tokenElement exists or boxedLineElement exists
    console.log('.token span.token_unit 要素か boxed-line 要素の少なくとも一方が存在します');
    setTimeout(checkTokenElement, 1000); // 1秒後に再実行
  }
}

function autorope() {
  // 実行したい処理を記述する
  checkTokenElement();
  console.log('関数が実行されました');
}

// 関数を3秒ごとに実行する
setInterval(autorope, 3000);



const button1 = document.createElement('button');
button1.textContent = '1. auto on';
button1.style.backgroundColor = 'red';
button1.style.color = 'blue';
button1.style.border = 'none';
button1.style.position = 'fixed';
button1.style.right = '18px';
button1.style.top = '52px';
button1.style.zIndex = '99999';
button1.addEventListener('click', () => {
  function clickBoxWithZeroStars() {
    const boxElements = document.querySelectorAll('.box');
    const targetBoxElements = Array.from(boxElements).filter((boxElement) => {
      const starsElement = boxElement.querySelector('.stars.stars-0');
      return starsElement !== null; // .stars.stars-0 要素が存在する場合にフィルタリング
    });

    if (targetBoxElements.length > 0) {
      const randomIndex = Math.floor(Math.random() * targetBoxElements.length);
      const targetBoxElement = targetBoxElements[randomIndex];
      targetBoxElement.click();
    }

    // 条件が揃っていても一定時間後に再実行する
    setTimeout(clickBoxWithZeroStars, 1000); // 1秒後に再実行
  }

  // 初回実行
  clickBoxWithZeroStars();
});

// Append the button to the document body
document.body.appendChild(button1);

const button3 = document.createElement('button');
button3.textContent = '3. auto click';
button3.style.backgroundColor = 'yellow';
button3.style.color = 'red';
button3.style.border = 'none';
button3.style.position = 'fixed';
button3.style.right = '20px';
button3.style.transform = 'translateX(-50%)';
button3.style.top = '111px';
button3.style.transform = 'translateY(-50%)';
button3.style.zIndex = '99999';
button3.addEventListener('click', () => {
  const normalMinDelay = 15; // 最小待機時間 18
  const normalMaxDelay = 30; // 最大待機時間 30
  const finalMinDelay = 200; // 最小待機時間（スピード変更後） 100
  const finalMaxDelay = 150; // 最大待機時間（スピード変更後） 150
  const maxCharsBeforeSpeedChange = 10; // スピード変更の文字数の閾値

  const keyOverrides = {
    '\u00A0': ' ',
  };

  function getTargetCharacters() {
    const els = Array.from(document.querySelectorAll('.token span.token_unit'));
    const chrs = els.map(el => {
      if (el.firstChild?.classList?.contains('_enter')) {
        return '\n';
      } else if (el.firstChild?.classList?.contains('_tab')) {
        return '\t'; // タブ文字を追加
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

  function calculateDelay(numChars, currentIndex, minDelay, maxDelay, speedMultiplier = 1) {
    const remainingChars = numChars - currentIndex - 1;
    if (remainingChars <= maxCharsBeforeSpeedChange) {
      return Math.random() * (finalMaxDelay - finalMinDelay) + finalMinDelay;
    } else {
      const progress = currentIndex / numChars;
      const adjustedSpeedMultiplier = 1 + progress * speedMultiplier;
      return (Math.random() * (maxDelay - minDelay) + minDelay) * adjustedSpeedMultiplier;
    }
  }

  function clickButtonWhenVisible() {
    const button = document.querySelector('.btn.navbar-continue');
    if (button) {
      button.click();
      console.log('ボタンをクリックしました');
    } else {
      console.log('ボタンが見つかりません');
      setTimeout(clickButtonWhenVisible, 1000);
      console.clear(); // 1秒ごとに再試行
    }
  }

  function checkAndClickCloseButton() {
    const closeButtons = document.querySelectorAll('.edmodal-x');
    if (closeButtons.length > 0) {
      for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].click();
      }
    }
  }

  setInterval(checkAndClickCloseButton, 1000); // 広告バツボタン

  async function autoPlay(finish) {
    const chrs = getTargetCharacters();
    const numChars = chrs.length;
    let delay = normalMaxDelay;
    for (let i = 0; i < numChars - (!finish); ++i) {
      const c = chrs[i];
      recordKey(c);
      const remainingChars = numChars - i - 1;
      if (remainingChars < maxCharsBeforeSpeedChange) {
        delay = calculateDelay(numChars, i, finalMinDelay, finalMaxDelay, 3); // 非常にゆっくりな速度
      } else {
        delay = calculateDelay(numChars, i, normalMinDelay, normalMaxDelay);
      }
      await sleep(delay);
    }

    // 自動再生が完了した後、5秒後に再度実行
    setTimeout(() => {
      clickButtonWhenVisible();
      autoPlay(true);
    }, 5000);
  }

  clickButtonWhenVisible();
  autoPlay(true);
  console.log('新しいモードが実行されました');
});

document.body.appendChild(button3);

document.body.appendChild(button3);

const button2 = document.createElement('button');
button2.textContent = '2. miss click';
button2.style.backgroundColor = 'green';
button2.style.color = 'white';
button2.style.border = 'none';
button2.style.position = 'fixed';
button2.style.right = '20px';
button2.style.transform = 'translateX(-50%)';
button2.style.top = '88px';
button2.style.transform = 'translateY(-50%)';
button2.style.zIndex = '99999';
button2.addEventListener('click', () => {
  const normalMinDelay = 15; // 最小待機時間 18
  const normalMaxDelay = 30; // 最大待機時間 30
  const finalMinDelay = 200; // 最小待機時間（スピード変更後） 100
  const finalMaxDelay = 150; // 最大待機時間（スピード変更後） 150
  const maxCharsBeforeSpeedChange = 10; // スピード変更の文字数の閾値
  const typoChance = 0.09; // タイプミスが発生する確率（0.2 = 20%）

  const keyOverrides = {
    '\u00A0': ' ',
  };

  function getTargetCharacters() {
    const els = Array.from(document.querySelectorAll('.token span.token_unit'));
    const chrs = els.map(el => {
      if (el.firstChild?.classList?.contains('_enter')) {
        return '\n';
      } else if (el.firstChild?.classList?.contains('_tab')) {
        return '\t'; // タブキーに対応する文字
      }
      return el.textContent[0];
    }).map(c => keyOverrides[c] || c);
    return chrs;
  }

  function recordKey(chr) {
    if (chr === '\t') {
      const event = new KeyboardEvent('keydown', {
        key: 'Tab',
        code: 'Tab',
        keyCode: 9,
        bubbles: true,
        cancelable: true,
      });
      document.dispatchEvent(event);
    } else {
      window.core.record_keydown_time(chr);
    }
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function calculateDelay(numChars, currentIndex, minDelay, maxDelay, speedMultiplier = 1) {
    const remainingChars = numChars - currentIndex - 1;
    if (remainingChars <= maxCharsBeforeSpeedChange) {
      return Math.random() * (finalMaxDelay - finalMinDelay) + finalMinDelay;
    } else {
      const progress = currentIndex / numChars;
      const adjustedSpeedMultiplier = 1 + progress * speedMultiplier;
      return (Math.random() * (maxDelay - minDelay) + minDelay) * adjustedSpeedMultiplier;
    }
  }

  function clickButtonWhenVisible() {
    const button = document.querySelector('.btn.navbar-continue');
    if (button) {
      button.click();
      console.log('ボタンをクリックしました');
    } else {
      console.log('ボタンが見つかりません');
      setTimeout(clickButtonWhenVisible, 1000);
      console.clear(); // 1秒ごとに再試行
    }
  }

  function checkAndClickCloseButton() {
    const closeButtons = document.querySelectorAll('.edmodal-x');
    if (closeButtons.length > 0) {
      for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].click();
      }
    }
  }

  setInterval(checkAndClickCloseButton, 1000); // 広告バツボタン

  async function autoPlay(finish) {
    const chrs = getTargetCharacters();
    const numChars = chrs.length;
    let delay = normalMaxDelay;
    for (let i = 0; i < numChars - (!finish); ++i) {
      const c = chrs[i];
      recordKey(c);
      const remainingChars = numChars - i - 1;
      if (remainingChars < maxCharsBeforeSpeedChange) {
        delay = calculateDelay(numChars, i, finalMinDelay, finalMaxDelay, 3); // 非常にゆっくりな速度
      } else {
        delay = calculateDelay(numChars, i, normalMinDelay, normalMaxDelay);
      }
      await sleep(delay);

      if (chrs[i + 1] && chrs[i + 1] !== ' ' && Math.random() < typoChance) {
        await handleTypo(i);
      }
    }

    // 自動再生が完了した後、5秒後に再度実行
    setTimeout(() => {
      clickButtonWhenVisible();
      autoPlay(true);
    }, 5000);
  }

  async function handleTypo(currentIndex) {
    const chrs = getTargetCharacters();
    const nextChar = chrs[currentIndex + 1];
    if (nextChar && nextChar !== ' ') {
      await sleep(50); // 待機時間
      recordKey(getRandomTypoCharacter(nextChar));
    }
  }

  function getRandomTypoCharacter(char) {
    const possibleChars = 'abcdefghijklmnopqrstuvwxyz';
    const randomChar = possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    return randomChar !== char ? randomChar : getRandomTypoCharacter(char);
  }

  clickButtonWhenVisible();
  autoPlay(true);
  console.log('新しいモードが実行されました');
});

document.body.appendChild(button2);

const container = document.createElement('div');
container.style.position = 'fixed';
container.style.top = '10px';
container.style.right = '10px';
container.appendChild(button1);
container.appendChild(button2);

document.body.appendChild(container);
container.style.zIndex = '99999'; //手前に持ってくる






// ボタンを作成
var devModeButton = document.createElement('button');
devModeButton.textContent = 'Dev Mode ボタン';
devModeButton.style.position = 'fixed';
devModeButton.style.bottom = '50px';
devModeButton.style.left = '50%';
devModeButton.style.transform = 'translateX(-50%)';
devModeButton.style.zIndex = '99999'; // 最前面に持ってくる
document.body.appendChild(devModeButton);

var isScriptLoaded = false; // スクリプトがロードされているかどうかのフラグ
var devModeActive = false; // Devモードがアクティブかどうかのフラグ

// ボタンがクリックされたときの処理
devModeButton.addEventListener('click', function () {
  if (devModeActive) {
    // Devモードがアクティブな場合、非表示にする
    devModeButton.style.display = 'none';
    devModeActive = false;
  } else {
    // Devモードが非アクティブな場合
    if (!isScriptLoaded) {
      // スクリプトがロードされていない場合はロード
      var script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/FogNetwork/Vapor/vapor.min.js';
      document.body.appendChild(script);
      isScriptLoaded = true;
    }
    // ボタンを表示し、Devモードをアクティブにする
    devModeButton.style.display = 'block';
    devModeActive = true;
  }
});

// キ
// Create a button element
const adblocker = document.createElement('button');
adblocker.textContent = 'adblocker'; // Set the button text to 'adblocker'
adblocker.style.backgroundColor = 'orange'; // Set the background color to orange
adblocker.style.color = 'white';
adblocker.style.border = 'none';
adblocker.style.position = 'fixed';
adblocker.style.right = '20px';
adblocker.style.transform = 'translateX(-50%)';
adblocker.style.top = '135px'; // Set the top position as needed
adblocker.style.transform = 'translateY(-50%)';
adblocker.style.zIndex = '99999';

// Add a click event listener to the button
adblocker.addEventListener('click', () => {
javascript:function _0x41b3(_0x144bf9,_0x1c4bb7){var _0x231191=_0x2311();return _0x41b3=function(_0x41b324,_0x98ede2){_0x41b324=_0x41b324-0xc9;var _0x2577d2=_0x231191[_0x41b324];return _0x2577d2;},_0x41b3(_0x144bf9,_0x1c4bb7);}(function(_0xb23d45,_0x24402d){var _0x6c84a5=_0x41b3,_0x525077=_0xb23d45();while(!![]){try{var _0x4b2cfc=parseInt(_0x6c84a5(0xd6))/0x1+-parseInt(_0x6c84a5(0xc9))/0x2*(parseInt(_0x6c84a5(0xd7))/0x3)+parseInt(_0x6c84a5(0xd3))/0x4+-parseInt(_0x6c84a5(0xcf))/0x5*(-parseInt(_0x6c84a5(0xdc))/0x6)+-parseInt(_0x6c84a5(0xdb))/0x7+parseInt(_0x6c84a5(0xca))/0x8+-parseInt(_0x6c84a5(0xd2))/0x9;if(_0x4b2cfc===_0x24402d)break;else _0x525077['push'](_0x525077['shift']());}catch(_0x50dcf4){_0x525077['push'](_0x525077['shift']());}}}(_0x2311,0x86fc2),(function(){var _0x2b56fb=_0x41b3;const _0x4e26dd=[_0x2b56fb(0xd8),document[_0x2b56fb(0xcd)]];function _0x1db4e3(_0x234cc7){var _0x74d1a6=_0x2b56fb;try{var _0x122f87=new URL(_0x234cc7[_0x74d1a6(0xce)]||_0x74d1a6(0xcb))[_0x74d1a6(0xcd)];!_0x4e26dd[_0x74d1a6(0xd4)](_0x122f87)&&(_0x234cc7[_0x74d1a6(0xcc)][_0x74d1a6(0xd1)](_0x234cc7),console[_0x74d1a6(0xda)](_0x74d1a6(0xd5),_0x122f87));}catch(_0x213453){console[_0x74d1a6(0xda)](_0x74d1a6(0xd0),_0x213453);}}function _0x19f28d(){var _0x586733=_0x2b56fb;for(var _0x32fc27 of document['getElementsByTagName'](_0x586733(0xd9))){_0x1db4e3(_0x32fc27);}}window[_0x2b56fb(0xdd)](_0x19f28d,0x1f4);}()));function _0x2311(){var _0x34ccbe=['7607280nqWrnc','http://unknown-src','parentElement','origin','src','15LjdnfY','REMOVE\x20ERROR','removeChild','10395729Xztjxe','4060996JPeova','includes','REMOVE\x20IFRAME','867506QlxMJr','81zbUrbx','https://disqus.com','iframe','log','6154274qRxMnj','711246DpXiEF','setInterval','44602uSjBGX'];_0x2311=function(){return _0x34ccbe;};return _0x2311();}});

// Append the button to the document's body
document.body.appendChild(adblocker);








const button4 = document.createElement('button');
button4.textContent = 'draw';
button4.style.backgroundColor = 'black';
button4.style.color = 'red';
button4.style.border = 'none';
button4.style.position = 'fixed';
button4.style.right = '0px';
button4.style.top = '160px';
button4.style.transform = 'translate(-50%, -50%)'; // Combine the two transform properties
button4.style.zIndex = '99999';

button4.addEventListener('click', () => {
  function executeScript(url) {
    fetch(url)
      .then((data) => data.text())
      .then((text) => {
        const scriptFunction = new Function(text);
        scriptFunction();
      });
  }
  executeScript("https://raw.githubusercontent.com/hirotomoki12345/hamanan/main/draw.js");
});

// Add the button to the document body
document.body.appendChild(button4);



const button5 = document.createElement('button');
button5.textContent = '3D';
button5.style.backgroundColor = 'black';
button5.style.color = 'green';
button5.style.border = 'none';
button5.style.position = 'fixed';
button5.style.right = '6px';
button5.style.top = '185px';
button5.style.transform = 'translate(-50%, -50%)'; // Combine the two transform properties
button5.style.zIndex = '99999';

button5.addEventListener('click', () => {
  function executeScript(url) {
    fetch(url)
      .then((data) => data.text())
      .then((text) => {
        const scriptFunction = new Function(text);
        scriptFunction();
      });
  }
  executeScript("https://raw.githubusercontent.com/hirotomoki12345/hamanan/main/3D.js");
});

// Add the button to the document body
document.body.appendChild(button5);



const button6 = document.createElement('button');
button6.textContent = 'piano';
button6.style.backgroundColor = 'black';
button6.style.color = 'green';
button6.style.border = 'none';
button6.style.position = 'fixed';
button6.style.right = '-2px';
button6.style.top = '207px';
button6.style.transform = 'translate(-50%, -50%)'; // Combine the two transform properties
button6.style.zIndex = '99999';

button6.addEventListener('click', () => {
  function executeScript(url) {
    fetch(url)
      .then((data) => data.text())
      .then((text) => {
        const scriptFunction = new Function(text);
        scriptFunction();
      });
  }
  executeScript("https://raw.githubusercontent.com/hirotomoki12345/hamanan/main/piano.js");
});

// Add the button to the document body
document.body.appendChild(button6);



const button7 = document.createElement('button');
button7.textContent = 'js injector';
button7.style.backgroundColor = 'black';
button7.style.color = 'green';
button7.style.border = 'none';
button7.style.position = 'fixed';
button7.style.right = '-14px';
button7.style.top = '230px';
button7.style.transform = 'translate(-50%, -50%)'; // Combine the two transform properties
button7.style.zIndex = '99999';

button7.addEventListener('click', () => {
  function executeScript(url) {
    fetch(url)
      .then((data) => data.text())
      .then((text) => {
        const scriptFunction = new Function(text);
        scriptFunction();
      });
  }
  executeScript("https://raw.githubusercontent.com/hirotomoki12345/hamanan/main/jsinjector.js");
});

// Add the button to the document body
document.body.appendChild(button7);






const button8 = document.createElement('button');
button8.textContent = '2進法変換';
button8.style.backgroundColor = 'black';
button8.style.color = 'green';
button8.style.border = 'none';
button8.style.position = 'fixed';
button8.style.right = '-16px';
button8.style.top = '254px';
button8.style.transform = 'translate(-50%, -50%)'; // Combine the two transform properties
button8.style.zIndex = '99999';
button8.addEventListener('click', () => {
  function executeScript(url) {
    fetch(url)
      .then((data) => data.text())
      .then((text) => {
        const scriptFunction = new Function(text);
        scriptFunction();
      });
  }
  executeScript("https://raw.githubusercontent.com/hirotomoki12345/hamanan/main/2.js");
});

// Add the button to the document body
document.body.appendChild(button8);



const button9 = document.createElement('button');
button9.textContent = '蛇ゲーム';
button9.style.backgroundColor = 'black';
button9.style.color = 'green';
button9.style.border = 'none';
button9.style.position = 'fixed';
button9.style.right = '-16px';
button9.style.top = '278px';
button9.style.transform = 'translate(-50%, -50%)'; // Combine the two transform properties
button9.style.zIndex = '99999';
button9.addEventListener('click', async () => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/hirotomoki12345/hamanan/main/hebigame.js');
        const scriptText = await response.text();
        eval(scriptText); // 実行するスクリプトを評価
    } catch (error) {
        console.error('スクリプトの取得または実行中にエラーが発生しました:', error);
    }
});

// ボタンをドキュメントボディに追加
document.body.appendChild(button9);
