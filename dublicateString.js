let str= 'aaabbbhimanshuuddd'


const removeDublicacy=(value)=>{

    return [...new Set(str)].join('');
//  return   [...new set(value)].join('')

}

// const result= removeDublicacy(str)

// console.log(result,'result')


//2
const removeStringDuplicate = (value) => {
    let arr = value.split('');
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === i) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr.join('');
}

console.log(removeStringDuplicate(str))
