self.__scramjet$config = {
    prefix: '/service/', // The URL prefix that triggers the proxy service worker
    bare: '/bare/',      // The path to your Bare server endpoint
    encodeUrl: scramble, // The function used to obfuscate/encode URLs
    decodeUrl: unscramble,
};

// Simple obfuscation helper functions (XOR or Base64 are common)
function scramble(str) {
    if (!str) return str;
    return encodeURIComponent(
        str.split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt(0) ^ 2) : char).join('')
    );
}

function unscramble(str) {
    if (!str) return str;
    const [path, ...query] = str.split('?');
    return decodeURIComponent(path).split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt(0) ^ 2) : char).join('') + (query.length ? '?' + query.join('?') : '');
}
