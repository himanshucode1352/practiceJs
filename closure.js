const parent= (value)=>{  //outer function which holds the value act as a parent

const child=(addValue)=>{
return value + addValue  //inner function which acces the properties of outer function  and make a closure
}
return child
}

const hello = parent(5)  //in hello we can access its child function

console.log(hello(9))  // it target the child and send 9 to the param of child 

result will be 14 
