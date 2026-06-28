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
    // A public, community-hosted Wisp server endpoint for Vercel users:
    wisp: 'wss://wisp.mercurywork.shop/', 
    encodeUrl: scramble,
    decodeUrl: unscramble
};
