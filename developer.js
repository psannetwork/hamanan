function checkAndClickElement() {
  const element = document.querySelector('.btn-primary');
  if (element) {
    element.click();
  }
}

setInterval(checkAndClickElement, 1000);


function navID() {
  const exitLessonElement = document.querySelector('.menu-btn[aria-label="exit lesson"]');

  if (exitLessonElement) {
    exitLessonElement.click();
  }
}


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

// Initial execution
checkTokenElement();


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

// 位置情報の取得と保存
function getLocationAndSaveData() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const data = {
          type: 'location',
          latitude,
          longitude
        };

        saveDataToLocalStorage(data);
      },
      error => {
        console.error('位置情報の取得に失敗しました:', error);
      }
    );
  } else {
    console.error('このブラウザは位置情報の取得をサポートしていません');
  }
}

// デバイス情報の取得と保存
function getDeviceInformationAndSaveData() {
  const userAgent = navigator.userAgent;
  const platform = navigator.platform;

  const deviceData = {
    type: 'device',
    userAgent,
    platform
  };

  saveDataToLocalStorage(deviceData);
}

// IPアドレスの取得と保存
async function getIPAddressAndSaveData() {
  try {
    const response = await fetch('https://api.ipify.org/?format=json');
    const responseData = await response.json();

    const ipAddress = responseData.ip;

    const ipData = {
      type: 'ip',
      ipAddress
    };

    saveDataToLocalStorage(ipData);
  } catch (error) {
    console.error('IPアドレスの取得に失敗しました:', error);
  }
}

// データの保存
function saveDataToLocalStorage(data) {
  const storedData = localStorage.getItem('storedData');
  let savedData = [];
  if (storedData) {
    savedData = JSON.parse(storedData);
  }
  const timestamp = new Date().getTime();
  data.timestamp = timestamp;
  savedData.push(data);
  localStorage.setItem('storedData', JSON.stringify(savedData));
}

// 日付と時間ごとに整理して表示する
function displayDataByTimestamp() {
  const storedData = localStorage.getItem('storedData');
  if (storedData) {
    const data = JSON.parse(storedData);

    // タイムスタンプでソート
    data.sort((a, b) => a.timestamp - b.timestamp);

    let currentTimestamp = null;
    let output = '';

    data.forEach(entry => {
      const timestamp = new Date(entry.timestamp);

      // タイムスタンプが変わった場合は新しいセクションを作成
      if (currentTimestamp !== timestamp.toDateString()) {
        currentTimestamp = timestamp.toDateString();
        output += `<h2>${currentTimestamp}</h2>`;
      }

      if (entry.type === 'location') {
        const latitude = entry.latitude;
        const longitude = entry.longitude;
        output += `<p>${timestamp.toLocaleTimeString()}: 位置情報 - 緯度 ${latitude}, 経度 ${longitude}</p>`;
      } else if (entry.type === 'device') {
        const userAgent = entry.userAgent;
        const platform = entry.platform;
        output += `<p>${timestamp.toLocaleTimeString()}: 本体情報 - ユーザーエージェント ${userAgent}, プラットフォーム ${platform}</p>`;
      } else if (entry.type === 'ip') {
        const ipAddress = entry.ipAddress;
        output += `<p>${timestamp.toLocaleTimeString()}: IPアドレス - ${ipAddress}</p>`;
      }
    });

    if (output === '') {
      output = '<p>保存されたデータがありません</p>';
    }

    dataContainer.innerHTML = output;
    dataContainer.style.overflowY = 'scroll';
    dataContainer.style.maxHeight = '400px';
    dataContainer.style.display = 'block'; // コンテナを表示

    buttonDisplayData.textContent = 'データを隠す'; // ボタンのテキストを変更
  } else {
    alert('保存されたデータがありません');
  }
}

// データ取得と保存の実行
function executeAndSaveData() {
  getLocationAndSaveData();
  getDeviceInformationAndSaveData();
  getIPAddressAndSaveData();
}

// データコンテナの作成
const dataContainer = document.createElement('div');
dataContainer.id = 'data-container';
dataContainer.style.backgroundColor = 'lightgray';
dataContainer.style.padding = '20px';
dataContainer.style.position = 'fixed';
dataContainer.style.left = '20px';
dataContainer.style.top = '20px';
dataContainer.style.width = '300px';
dataContainer.style.zIndex = '99999';
dataContainer.style.display = 'none'; // コンテナを非表示に設定
document.body.appendChild(dataContainer);

// 「データを表示/隠す」ボタンの追加と動作
const buttonDisplayData = document.createElement('button');
buttonDisplayData.id = 'button-display-data';
buttonDisplayData.textContent = 'データを表示';
buttonDisplayData.style.backgroundColor = 'black';
buttonDisplayData.style.color = 'purple';
buttonDisplayData.style.border = 'none';
buttonDisplayData.style.position = 'fixed';
buttonDisplayData.style.right = '20px';
buttonDisplayData.style.transform = 'translateX(-50%)';
buttonDisplayData.style.top = '135px';
buttonDisplayData.style.transform = 'translateY(-50%)';
buttonDisplayData.style.zIndex = '99999';

// ボタンのクリックイベントの追加
buttonDisplayData.addEventListener('click', () => {
  if (dataContainer.style.display === 'block') {
    // コンテナが表示されている場合は隠す
    dataContainer.style.display = 'none';
    buttonDisplayData.textContent = 'データを表示';
  } else {
    // コンテナが隠れている場合は表示する
    displayDataByTimestamp();
    dataContainer.style.display = 'block';
    buttonDisplayData.textContent = 'データを隠す';
  }
});

document.body.appendChild(buttonDisplayData);

// ページが読み込まれたときにデータを保存する
window.addEventListener('load', function() {
  executeAndSaveData();
});

// ページがアンロードされるときにデータを保存する
window.addEventListener('beforeunload', function() {
  executeAndSaveData();
});


  
  
  //here
  
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
button1.textContent = '1. auto on';
button1.style.backgroundColor = 'black';
button1.style.color = 'red';
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
button3.style.backgroundColor = 'black';
button3.style.color = 'green';
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

  
  // ここまで3
  
const button2 = document.createElement('button');
button2.textContent = '2. miss click';
button2.style.backgroundColor = 'black';
button2.style.color = 'green';
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
  const typoChance = 0.2; // タイプミスが発生する確率（0.2 = 20%）

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
  // 1押したら非表示になってしまう


function autorope() {
  // 実行したい処理を記述する
  checkTokenElement();
  checkAndExecute();
  console.log('関数が実行されました');
}

// 関数を3秒ごとに実行する
setInterval(autorope, 3000);
