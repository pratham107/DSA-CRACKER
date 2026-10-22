var findGCD = function(nums) {
    // let n = nums.length;
    // let smaller= Infinity;
    // let larger = -Infinity;

    // for(let i=0;i<n;i++){
    //     let element = nums[i];
       
    //     if(element<smaller){
    //         smaller = element;
    //     }else if(element>larger){
    //         larger = element
    //     }
    // }
    let smallest=Math.min(...nums);
    let largest=Math.max(...nums);


    while (largest !== 0) {
    let remainder = smallest % largest;
    smallest = largest;
    largest = remainder;
}

return smallest;
};