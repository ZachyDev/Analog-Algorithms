const calc = (num1,num2,sign) => {
    // set the initial total to 0
    let total = 0;
    let op;
    // check the sign using switch
    switch(sign) {
        // addition
        case '+':
        op = num1 + num2;
        total += op;
        break;
        // subtract
        case '-':
        op = num1 - num2;
        total = op;
        break;
        // division
        case '/':
        op = num1 / num2;
        total = op;
        break;
        // product
        case '*':
        op = num1 * num2;
        total = op;
        break;

        default:
        return 'check the sign and try again';
    }
    return total;
}
// call the calc function
console.log(calc(10,20,'.'))

// ©Zachy_Dev2020