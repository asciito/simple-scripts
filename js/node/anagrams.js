// Variable declaration
let output  = {};
let anagrams = [
    'alert', 'angel', 'angle', 'pedro', 'alter', 'ancestro', 'canteros',
    'demo', 'life', 'poder', 'later', 'hello', 'costra', 'mode', 'glean',
];

// Function expresion
const sortWord = (a, b) => (a > b ? 1 : a < b ? -1 : 0);
const alphabetic = word => word.split('').sort(sortWord).join('');

function findAnagrams(anagrams) {
    anagrams.forEach((word1, i) => {
        if (i == anagrams.length - 1) return [word1];
    
        anagrams.slice(i + 1).forEach((word2) => {
            let sortedAnna = alphabetic(word1);
            let sortedWord = alphabetic(word2);
    
            if (sortedAnna !== sortedWord) return;
            if (!output.hasOwnProperty(sortedAnna)) {
                output[sortedAnna] = new Set().add(word1).add(word2);
            } else {
                output[sortedAnna].add(word2);
            }
        });
    });

    return Object.values(output).map(entry => Array.from(entry.values()));
}

console.table(findAnagrams(anagrams));
