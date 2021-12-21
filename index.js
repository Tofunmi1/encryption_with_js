import { CryptoJS } from 'aes-js'

const encryptData = (message, key) => {
  const encryptedData = CryptoJS.AES.encrypted(message, key)
  return encryptData.toString()
}

const decryptData = (encryptedData, key) => {
  const decryptedData = CryptoJS.AES.decrypt(encryptData, key)
  return decryptedData.toString(CryptoJS.enc.Utf8)
}

console.log(encryptData('Hello World', 'key'))
console.log(decryptData('U2FsdGVkX1/0oPpnJ5S5XTELUonupdtYCdO91v+/SMs=', 'key'))

