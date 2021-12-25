import SimpleCrypto from "simple-crypto-js"

const encryptMessage = ({string, our_key=''}) => {
  const secretKey = our_key
  const simpleCrypto = new SimpleCrypto(secretKey)
  const cipherText = simpleCrypto.encrypt(string)
  return cipherText
}

const decryptMessage = ({encrypted_message, our_key=''}) => {
  const simpleCrypto = new SimpleCrypto(our_key)
  return simpleCrypto.decrypt(encrypted_message)
}

console.log(encryptMessage('Hello World','key'))
console.log(decryptMessage('b8eb6d3daf6a8afcef2dda74dcf0df8bd30e7d6cdec60a211a31a483d110db6cSFrCvKlgHG5aD/IMmtBThg==9de64a116cd01c0bd3895121a5a74d63ec72e2bbe4ff29a60e80d2220a53f8f6', 'our_key'))
