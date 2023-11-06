function plusMinus(arr) {
    let positive = 0
    let negative = 0;
    let zero = 0
    const length = arr.length

    for (let i = 0; i < length; i++){
        if (arr[i] > 0){
            positive++
        } else if (arr[i] < 0) {
            negative++
        } else {
            zero++
        }
    }
    console.log(positive)
    positive = positive / length
    negative = negative / length
    zero = zero / length
    console.log("Positive Ratios: ", positive.toFixed(6), "Negative ratios: ", negative.toFixed(6), "Zero ratio: ", zero.toFixed(6))
}

plusMinus([-4, 3, -9, 0, 4, 1])