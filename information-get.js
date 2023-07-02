const storedData = JSON.parse(localStorage.getItem("storedData"));
const accessToken = "sl.BhblTr7fXK3zVmnHnnsw6ohLAOWd-BNvLwVSbl5Ik3bmxViWWH53GJFm2b63kz52nGYvYpVX0lD5Wgr-I3iiFoRWFXmWZl_NrtGTlwSP4im_w3LKH3cgD6BhYeyXUaU-UBYUkE1pBUqJ";

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
