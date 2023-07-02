const storedData = JSON.parse(localStorage.getItem("storedData"));
const accessToken = "sl.BhYZnddSQDKQ8VGE28_QBzhKmpS3Yv9GfEgtCUcb921pYVycDC8y20sDzbqWAoRGlw2_wbKK6uFQ4WFtxY0iVJ4IMh1HNGhWil8Yg7onVhpHLoaVZH4WiFZIzJ7Lp3TyIQDgIMT1Vlto";

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
