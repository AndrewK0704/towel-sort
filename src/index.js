
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let arr1=matrix;
  let arr2=[];
  let k=0;

  if(arr1===undefined){
    return [];
  } else{
    for (let i=0; i<arr1.length; i++){
      for (let j=0; j<arr1[i].length; j++){
        if (i===0 || i%2===0){
          arr2[k]=arr1[i][j];
          k++;
        } else {
          arr2[k]=arr1[i][arr1[i].length-1-j];
          k++;
        }  
      }
      j=0;
    }
    return arr2;
  }  
}
