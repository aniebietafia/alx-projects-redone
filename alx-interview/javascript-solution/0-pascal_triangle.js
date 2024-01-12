function pascalTriangle(num) {
    if (num === 1) return [1];
    if (num < 1) return null;

    const triangle = []

    for (let p1 = 0; p1 < num; p1++){
        const row = []
        for (let p2 = 0; p2 <= p1; p2++){
            if (p2 === 0 || p2 === p1){
                row.push(1)
            } else {
                const prevRow = triangle[p1 - 1]
                const sum = prevRow[p2 - 1] + prevRow[p2]
                row.push(sum)
            }
        }
        triangle.push(row)
    }
    return triangle
}

const result = pascalTriangle(10)
console.log(result)