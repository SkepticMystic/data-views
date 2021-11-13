async function getImgBuffer(app, fileName) {
    // Get the TFile from the basename
    const file = app.metadataCache.getFirstLinkpathDest(fileName, '')
    // Read the file and return the results
    return file ? await app.vault.readBinary(file) : null
}

// Don't worry about this function, you just have to do it
function _arrayBufferToBase64(buffer) {
    var binary = ''
    var bytes = new Uint8Array(buffer)
    var len = bytes.byteLength
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i])
    }
    return window.btoa(binary)
}

//If file name of img known:
getImgBuffer(app, input).then(buffer => {
    const base64 = _arrayBufferToBase64(buffer)
    dv.paragraph(`<img src='data:image/jpg;base64, ${base64}'>`)
    //dv.el('img', {attr: {src: `<img src='data:image/jpg;base64, ${base64}'>`}})
})
