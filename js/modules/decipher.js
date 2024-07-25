export function decipher(text) {
    const replacements = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };
    return text.replace(/ai|enter|imes|ober|ufat/g, match => replacements[match]);
}
