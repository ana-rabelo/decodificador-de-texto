export function cipher(text) {
    const replacements = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    return text.replace(/[aeiou]/g, match => replacements[match]);
}
