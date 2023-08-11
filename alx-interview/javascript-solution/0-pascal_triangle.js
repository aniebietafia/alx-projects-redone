const pascalTriangle = function (n) {
  if (n <= 0) return [];

  const triangle = [];

  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        const prevRow = triangle[i - 1];
        const sum = prevRow[j - 1] + prevRow[j];
        row.push(sum);
      }
    }
    triangle.push(row);
  }
  return triangle;
};

console.log(pascalTriangle(5));
