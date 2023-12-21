// let arr=[12,8,9,10,1,4]
let sortedArr=[];

// for(let i=0;i<arr.length;i++){
//     console.log(arr,'-------',i)
// if(arr[i]<arr[i+1]){
// let temp= arr[i]
// arr[i]=arr[i+1]

// arr[i+1]= temp
// i=-1

// }
    
//     }
let arr = [12, 8, 9, 10, 1, 4];
let n = arr.length;

for (let i = 0; i < n - 1; i++) { 
    for (let j = 0; j <n; j++) {
        if (arr[j] > arr[j + 1]) {
            // Swap arr[j] and arr[j+1]
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr, 'Sorted array');

      
        
    



console.log(arr,'yoo')