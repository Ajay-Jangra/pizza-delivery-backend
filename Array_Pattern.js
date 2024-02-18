// Input an array
let myArray = [1, 2, 3];

// var arrSize =  prompt("enter size of array");
// let size = parseInt(arrSize);
// let myArray = [];

// for (var i = 0; i < size; i++){
//     myArray[i] = prompt('Enter Element ' + (i + 1));
// }

function permute(myArray, l, r) {
    if (l == r)
        console.log(...myArray);
    else {
        for (let i = l; i <= r; i++) {
            // swap every time fixed element and the ele comes after it
            myArray = swap(myArray, l, i);
            // recursive call for fixing next ele when prev ele is already fixed
            permute(myArray, l + 1, r);
            // back to the original array
            myArray = swap(myArray, l, i);
        }
    }
} 
// swap fxn
function swap(myArray,i1,i2){
    let temp = myArray[i1];
    myArray[i1] = myArray[i2];
    myArray[i2] = temp;
    return myArray;
}

// call for fixing first element 
let res = permute(myArray,0,myArray.length - 1); 

















// interview approch 


// var size = parseInt("enter size of array");
// let myArray = [];

// for (var i = 0; i < size; i++){
//     myArray[i] = prompt('Enter Element ' + (i + 1));
// }

// // const myArray = ["a", "b", "c","d"]
// // const size = myArray.length;

// console.log(myArray);
 

// const  printSub=(myArray,size)=> {
//     for (var i = 0; i <  size; i++) {
//         for (var j = i; j <  size; j++) {
//             var temp =  myArray[i];
//              myArray[i] =  myArray[j];
//              myArray[j] = temp;

//             for (var k = 0; k <  size; k++) {
//                 console.log( myArray[k]);
//             }
           
//         }
//     }
// }
// console.log(printSub(myArray, size));


