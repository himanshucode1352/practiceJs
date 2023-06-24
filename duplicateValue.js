var arr =[1,2,3,4,1,3,2,4,6,7,8,9]

// //we have to find duplicate value
// const newAree = []
// //we can do this by indexOf function also bcz index of gives us 0ne index for same number either it repeated 100 times but its index will remain same
// for (let i=0;i<arr.length;i++){
//     if(arr.indexOf(arr[i])!==i){
//         newAree.push(arr[i])
//     }
// }
// console.log(newAree)


for(let i=0;i<arr.length;i++){
    for (let j =i+1;j<arr.length;j++){
        console.log(i,'-------',j)//this loop will add + value to the loop and compares till end 
        if(arr[i]===arr[j]){
console.log(arr[i])
        }
    }
}
