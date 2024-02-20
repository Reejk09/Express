arrays = [
    {id : 1, name :"html"},
{id : 2,name : "css"}]
let matched = false
let inputTitle = "oppp"
 arrays.forEach((element,index) => {
    if(element == inputTitle){
         matched = true
    }
    return matched
    console.log(index);
    
});
console.log(matched);