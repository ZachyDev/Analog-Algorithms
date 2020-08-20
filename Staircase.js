// the number of stairs as n
const numberOfStairs = n => {
    if( n === 0 || n === 1) {
        return 1;
    }
    else{
        // call the numberOfStasirs each time - finobacci series
        return numberOfStairs(n-1) + numberOfStairs(n-2);
    }
}
console.log(numberOfStairs(5));

// ©Zachy_Dev2020