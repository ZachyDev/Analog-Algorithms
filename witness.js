function getWitness(heights) {
    var maxHeight = Number.NEGATIVE_INFINITY;
    var total = 0;
    for(var i = 0; i < heights.length ;i++){
       if(heights[i] > maxHeight) {
         maxHeight = heights[i];
         total += 1;
       }
    }
  return total;
}

console.log(getWitness([3,6,3,4,1]))