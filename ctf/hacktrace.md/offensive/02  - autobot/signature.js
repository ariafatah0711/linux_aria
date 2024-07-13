function encryptRobotId(dataId) {
  const key = CryptoJS[enc][Hex][parse](CE3079D025B694ED3584AAD418CF478A);
  const iv = CryptoJS[enc][Hex][parse](D01D2F4E94A9C50F0D26BA06590868B4);
  const encrypted = CryptoJS[AES][encrypt](dataId, key, { iv: iv });
  return encrypted[ciphertext].toString(CryptoJS[enc].Base64);
}

function createHmacSignature(requestData) {
  const secretKey = "5CA1C12F155310445D5F5488CCE3EAA8";
  return CryptoJS.HmacSHA256(requestData, secretKey).toString();
}

function generate() {
  const encryptedId = encryptRobotId(1);
  const requestData = JSON.stringify({ id: encryptedId });
  const signature = createHmacSignature(requestData);
  return signature;
}

generate();
