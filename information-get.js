const storedData = JSON.parse(localStorage.getItem("storedData"));
const accessToken = "sl.BhaRinC7-tM6Q2C-dOk11dR-b7PckHzO9vvRPecUbTSH66dYoqySbR_cu_JbkTDgfPDmYmVRh5Tj4gm_cl-mGsTTfp3Eu5pSv16mnINE80Sjvjk2fkmwUYBrh39sORUbtLZfVeMeyd8K";

function convertToTxt(data) {
  let txtContent = "";

  // データをテキスト形式に整形する
  for (let i = 0; i < data.length; i++) {
    txtContent += `Name: ${data[i].name}\n`;
    txtContent += `Latitude: ${data[i].latitude}\n`;
    txtContent += `Longitude: ${data[i].longitude}\n\n`;
  }

  return txtContent;
}

function uploadToDropbox(content, fileName) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://content.dropboxapi.com/2/files/upload");
  xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
  xhr.setRequestHeader("Content-Type", "application/octet-stream");
  xhr.setRequestHeader("Dropbox-API-Arg", JSON.stringify({
    path: `/${fileName}`,
    mode: "overwrite"
  }));

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log("Dropboxへのアップロードが成功しました");
      } else {
        console.log("Dropboxへのアップロードが失敗しました");
      }
    }
  };

  xhr.send(content);
}

if (storedData) {
  const txtContent = convertToTxt(storedData);
  const fileName = `data_${Date.now()}.txt`; // ファイル名に現在のタイムスタンプを含める
  uploadToDropbox(txtContent, fileName);
} else {
  console.log("storedDataが見つかりません");
}
