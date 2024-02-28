const hasValuesFromArray = (set, array) => {
    return array.every((el) => {
        return set.has(el);
    });
}

export default hasValuesFromArray;
