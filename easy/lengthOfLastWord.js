/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const myArray = s.split(" ") 
    for(let i = myArray.length - 1 ; i>= 0; i--){
      if(myArray[i] != ""){
        return myArray[i].length
      }
    }  
};
