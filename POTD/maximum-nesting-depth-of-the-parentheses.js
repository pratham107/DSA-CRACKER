var maxDepth = function(s) {
    let max = 0;
    let count = 0;
    for(let i=0;i<s.length;i++){
        if(s.charAt(i)=== '('){
            count++;
        }else if(s.charAt(i)===')'){
            count--
        }
        max = Math.max(max, count)
    }
    return max;
};


// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/?envType=daily-question&envId=2026-09-28