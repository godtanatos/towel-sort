
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (arguments.length == 0 || matrix.join("") == "") { return [] }
    else {
        let newArray = matrix.map(
            (elem, i) => {
                return i % 2 == 0 ? elem : elem.reverse();

            }).join(",").split(",").map(element => {
                return element * 1
            });
        return newArray.length == 0 ? [] : newArray;
    }
}
