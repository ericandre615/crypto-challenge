function hextobase64(hexStr) {
    return new Buffer(hexStr, 'hex').toString('base64');
}

module.exports = hextobase64;
