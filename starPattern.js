const starLine=(n)=>{//this is basicaly for printing stars for more better understanding we made another function
    var output="";
    for(i=0;i<n;i++){
        output=output+"**"
    }
console.log(output)
}



const printStar=(n)=>{
    for (i=0;i<=n;i++){  // this function will send calue or initialize above function
        starLine(i)
    }
}

printStar(3) //hence proved