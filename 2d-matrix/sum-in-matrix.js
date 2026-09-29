const matrixSum=(nums)=>{
   let sum = 0;

   for(let i=0;i<nums.length;i++){
      nums[i].sort((a,b)=> a-b)
   }

   let colEnd = nums[0].length-1;
   let rowStart=0;
   let rowEnd = nums.length-1

   for(let i=colEnd; i>=0;i--){
       let max = 0;

       for(let j=rowStart;j<=rowEnd;j++){
          if(nums[j][i] > max){
            max = nums[j][i]
          }
       }
       sum += max;
   }

   return sum;
}

console.log(matrixSum([[7,2,1],[6,4,2],[6,5,3],[3,2,1]]))