// Simple XOR / Scramble function to obfuscate proxy path strings
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

self.__scramjet$config = {
    prefix: '/service/',
    bare: '/bare/',
    encodeUrl: scramble,
    decodeUrl: unscramble
};
