let arr = ['a', 'a', 'a', 'a', 'a', 'a', 'b', 'b', 'b', 'b', 'b', 'c', 'c', 'c', 'd', 'd'];
let counts = {};

// for (let i = 0; i < arr.length; i++) {
//     counts[arr[i]] = (counts[arr[i]] || 0) + 1;
//     console.log(counts[arr[i]])
// }

//if interviewr provide us string like aaabbbccddd we have to first split it and then same operation
let count=1  //count is 1 bcz for 1st iteration if it is not reoated so it will displayit like 1 or may be it will display false
for (let i = 0; i < arr.length; i++) {
   if(arr[i]===arr[i+1]){
    count++
   }else{
    counts[arr[i]]=count
    count=1
   }
}

console.log(counts, 'hello');
