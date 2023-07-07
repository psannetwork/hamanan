// Cloudinaryの設定
const cloud_name = "dxzsajngl";
const upload_preset = "gmr5c3hg";
const folder_name = "date";

// 位置情報を取得する関数
function getLocation() {
  // 位置情報の取得に対応しているかチェック
  if (navigator.geolocation) {
    // 位置情報の取得開始
    navigator.geolocation.getCurrentPosition(uploadLocation);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
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
    }
  }
}

// 位置情報の取得とファイルの作成とアップロードを実行
function uploadLocation(position) {
  // 緯度と経度の取得
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // 名前の取得
  const storedName = localStorage.getItem("information1");

  // ファイルの作成とアップロード
  createAndUploadFile(storedName, latitude, longitude);
}

// 名前の入力とファイルのアップロードを実行
uploadWithStoredName();
