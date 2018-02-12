function Dictionary(words) {
    this.words = words;
}

Dictionary.prototype.findMostSimilar = function(term) {
    var wordScores = {};
    for (var i = 0; i < this.words.length; i++) {
        wordScores[this.words[i]] = getScore(term, this.words[i])
    }

    var lowestScore;
    var bestWord;

    for (var key in wordScores) {
        if (!lowestScore) {
            lowestScore = wordScores[key];
            bestWord = key
        } else {
            if (wordScores[key] < lowestScore) {
                lowestScore = wordScores[key];
                bestWord = key
            }
        }
    }

    return bestWord;

    function getScore(target, word) {
        if (target === word) return -1;
        var wordLetters = {};
        var lettersMatched = 0;
        for (var i = 0; i < word.length; i++) {
            if (!wordLetters[word[i]]) {
                wordLetters[word[i]] = 1
            } else {
                wordLetters[word[i]]++;
            }
        }
        for (var j = 0; j < target.length; j++) {
            if (wordLetters[target[j]] && wordLetters[target[j]] > 0) {
                wordLetters[target[j]]--;
                lettersMatched++;
            }
        }
        return Math.abs(word.length - lettersMatched);
    }
}

/*

example:
beer
barrel

b:1 -> 0
a:1 
r:2 -> 1
e:1 -> 0
l:1

lettersMatched = 3
word.length - lettersMatched = score => 3

only thing that matters is if the same letters are in both words, unless they are the same?

rank by # of changes

how to get # of changes
    store number of occurrences of letters in {} for dictWord
    loop thru target, if letter exist in dictWord {}, counter--, lettersMatched++
    get absolute difference between lettersMatched and word.length => score
    return word in dictionary with lowest score

*/


