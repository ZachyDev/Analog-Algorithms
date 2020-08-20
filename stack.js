class maxStack {
    constructor(stack) {
        this.stack = stack;
    }
    sPush(element) {
        return this.stack.push(element)
    }
    sPop(element) {
        return this.stack.pop(element);
    }
    sMax() {
        let numsInStack = this.stack;
        return Math.max(...numsInStack)
    }
}
let elem  = new maxStack([]);
elem.sPush(200)
elem.sPush(300)
// elem.sPop()
console.log(elem.sMax())

//©Zachy_Dev2020



