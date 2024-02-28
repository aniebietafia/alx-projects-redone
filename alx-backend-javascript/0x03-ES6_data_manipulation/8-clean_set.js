export default function cleanSet(set, startString) {
    const result = [];

    set.forEach((el) => {
        if (el.startsWith(startString) && startString) {
            const elArray = el.split(startString);
            result.push(elArray[1]);
        }
    });

    return result.join("-");
}
