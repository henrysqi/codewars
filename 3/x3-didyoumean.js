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
    console.log(wordScores)

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

        var diff = Math.abs(target.length - word.length);
        if (word.length <= target.length) {
            return diff + (word.length - lettersMatched);
        } else {
            return word.length - lettersMatched;
        }

        return Math.abs(target.length - lettersMatched);
    }
}
