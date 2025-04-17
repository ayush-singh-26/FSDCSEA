const sum = (num1,num2) => {
    return num1 + num2;
}

const multiplications = (num1,num2) => {
    return num1 * num2;
}

const obj = {
    sum:sum,
    multiplication: multiplications,
}
module.exports = obj;