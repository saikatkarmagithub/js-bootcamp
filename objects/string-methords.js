let isValidPassword = function (validatingString) {
    return (validatingString.length >= 9 && !validatingString.includes('password'))
}

console.log(isValidPassword('astp'))
console.log(isValidPassword('ast1234%^&&*'))
console.log(isValidPassword('ast123password'))
