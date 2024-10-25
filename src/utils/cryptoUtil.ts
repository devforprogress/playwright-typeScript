const CryptoJSUtil = require("crypto-js")

export function encrypt(text: string) {

    const salt = process.env.SALT || "goodSalt"
    const encryptedText = CryptoJSUtil.AES.encrypt(text, salt).toString()
    return encryptedText;

}

export function decrypt(encryptedText: string) {

    const salt = process.env.SALT || "goodSalt"
    const bytes = CryptoJSUtil.AES.decrypt(encryptedText, salt)

    const decryptedText = bytes.toString(CryptoJSUtil.enc.Utf8);

    return decryptedText;

}