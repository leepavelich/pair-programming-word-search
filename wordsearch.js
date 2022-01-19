// Pair programmed by Jordan Benson and Lee Pavelich

const wordSearch = (letters, word) => {
  if (letters.length === 0) return false;

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const transposedLetters = transpose(letters);
  const verticalJoin = transposedLetters.map(ls => ls.join(''));
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

const transpose = matrix => {
  let transposed = [];
  for (let col = 0; col < matrix[0].length; col++) {
    transposed[col] = [];
    for (let row = 0; row < matrix.length; row++) {
      transposed[col][row] = matrix[row][col];
    }
  }
  return transposed;
};

module.exports = wordSearch;