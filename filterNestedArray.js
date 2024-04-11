let arr =[
    { name: "Mike", age: 28, tags: ["cricket", "reactjs", "music"] },
    { name: "Anna", age: 32, tags: ["reading", "hobbies", "node"] },
    { name: "John", age: 24, tags: ["hobbies", "vue", "cricket"] },
    { name: "Sophia", age: 29, tags: ["fitness", "hobbies", "java"] },
   
  ]
  
  let value=arr.forEach((x)=>console.log({...x,tags:x.tags.filter((x)=>{ return x!='node'&&x!='reactjs'&&x!='vue' &&x!='java'})}))


//   let arr = [
//     { name: "Mike", age: 28, tags: ["cricket", "reactjs", "music"] },
//     { name: "Anna", age: 32, tags: ["reading", "hobbies", "node"] },
//     { name: "John", age: 24, tags: ["hobbies", "vue", "cricket"] },
//     { name: "Sophia", age: 29, tags: ["fitness", "hobbies", "java"] },
//   ];
  
//   const tagsToRemove = ["reactjs", "vue", "node"];
  
//   // Remove tags from each object
//   let newArr = arr.map(item => {
//     let updatedTags = item.tags.filter(tag => !tagsToRemove.includes(tag));
//     return { ...item, tags: updatedTags };
//   });
  
//   console.log(newArr);
  