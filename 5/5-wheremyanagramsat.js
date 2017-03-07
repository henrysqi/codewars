// function anagrams(word, words) {
// 	let wordCount = getLetterCount(word);
// 	return words.filter(elem => {
// 		return objectsAreEqual(wordCount, getLetterCount(elem))
// 	})
// }

// function getLetterCount(string) {
// 	let result = {};
// 	string.split("").forEach(elem => {
// 		if (!result[elem]) {
// 			result[elem] = 1;
// 		} else {
// 			result[elem] += 1;
// 		}
// 	})
// 	return result
// }

// function objectsAreEqual(obj1, obj2) {
// 	if (Object.keys(obj1).length !== Object.keys(obj2).length) {
// 		return false;
// 	} else {
// 		for (let key in obj1) {
// 			if (obj1[key] !== obj2[key]) {
// 				return false;
// 			}
// 		}
// 		return true;
// 	}
// }

function anagrams(word, words) {
  return words.filter(elem => word.split("").sort().join("") === elem.split("").sort().join(""))
}