
function createArr(a) {
    let array1 = [1, 1];
    
    for (let i = 2; i < a; i++) {
      array1[i] = array1[i - 1] + array1[i - 2];
    }
    return array1;
  }
  let a = 4;
  let result = createArr(a);
  console.log(result);


function  createArr2(z){
    let arr2 = [1,1]
    for(let i = 2; i < z; i++){
        arr2[i] =  arr2[i-1] +  arr2[i-2]
    }
    return arr2
}
let z = 6
let all = createArr2(z)
console.log(all);


function finalFn(g){
    let arr3 = [1,1]

    for(let i = 2; i < g ; i++){
        arr3[i] = arr3 [i-1] + arr3[i-2]
    }
    return arr3
}
let g = 5
let final2 = finalFn(g)

console.log(final2);