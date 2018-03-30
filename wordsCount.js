// BEGIN (write your solution here)
const wordsCount = (words, stopWords) => {
  const lowerCaseWords = words.map(element => element.toLowerCase());
  const mapping = new Map();
  const result = lowerCaseWords.reduce((acc, value) => {
    if (stopWords.includes(value) || mapping.has(value)) {
      return acc;
    }
    const newWord = value;
    const sameWords = lowerCaseWords.filter(word => word === newWord);
    const amount = sameWords.reduce(ink => ink + 1, 0);
    return acc.set(newWord, amount);
  }, mapping);
  return result;
};

export default wordsCount;
// END

// BEGIN
export default (words, stopWords) =>
  words.map(word => word.toLowerCase())
    .filter(word => !stopWords.includes(word))
    .reduce((acc, word) => {
      if (!acc.has(word)) {
        return acc.set(word, 1);
      }
      return acc.set(word, acc.get(word) + 1);
    }, new Map());
// END
