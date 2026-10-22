var addDigits = function(num) {
    
//     if(num.toString().length === 1){
//         return num;
//     }
//     let sum = 0;
//     while(num!==0){
//         let digit = num%10;
//         sum += digit;
//         num = Math.floor(num/10)
//     }
//   return addDigits(sum)


   while(num>=10){
      let sum = 0;

       while(num>0){
          let digit = num%10;
          sum += digit;
          num = Math.floor(num/10)
       }
     num = sum;
   }
   return num;
};