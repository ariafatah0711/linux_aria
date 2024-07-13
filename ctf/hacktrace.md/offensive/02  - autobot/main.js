var _0x10ae = [
  "DOMContentLoaded",
  "addEventListener",
  ".card",
  "querySelectorAll",
  "click",
  "forEach",
  "data-id",
  "getAttribute",
  "stringify",
  "CE3079D025B694ED3584AAD418CF478A",
  "parse",
  "Hex",
  "enc",
  "D01D2F4E94A9C50F0D26BA06590868B4",
  "encrypt",
  "AES",
  "ciphertext",
  "5CA1C12F155310445D5F5488CCE3EAA8",
  "POST",
  "details.php",
  "open",
  "Content-type",
  "application/json",
  "setRequestHeader",
  "X-Signature",
  "onreadystatechange",
  "readyState",
  "status",
  "responseText",
  "send",
  "innerHTML",
  ".modal-body",
  "querySelector",
  "show",
  "modal",
  "#detailModal",
];

document.addEventListener(DOMContentLoaded, function () {
  initializeCardClickListeners();
});

function initializeCardClickListeners() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener(click, handleCardClick);
  });
}

function handleCardClick() {
  const dataId = this.getAttribute("data-id");
  const encryptedId = encryptRobotId(dataId);
  const requestData = JSON.stringify({ id: encryptedId });
  const signature = createHmacSignature(requestData);
  sendRequestToServer(requestData, signature);
}

function encryptRobotId(dataId) {
  const key = CryptoJS.enc.Hex.parse(CE3079D025B694ED3584AAD418CF478A);
  const iv = CryptoJS.enc.Hex.parse(D01D2F4E94A9C50F0D26BA06590868B4);
  const encrypted = CryptoJS.AES.encrypt(dataId, key, { iv: iv });
  return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
}

function createHmacSignature(requestData) {
  const secretKey = "5CA1C12F155310445D5F5488CCE3EAA8";
  return CryptoJS.HmacSHA256(requestData, secretKey).toString();
}

function sendRequestToServer(requestData, signature) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "details.php", true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.setRequestHeader("X-Signature", signature);
  xhr.onreadystatechang = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      displayResponseInModal(xhr.responseText);
    }
  };
  xhr.send(requestData);
}

function displayResponseInModal(responseText) {
  document.querySelector(".modal-body").innerHTML = responseText;
  $("#detailModal").modal("show");
}
