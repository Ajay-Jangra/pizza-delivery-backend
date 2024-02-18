const arr = ["a","b",0,2,4,null,"","0",9]

 const count={};   // obj

for (let ele of arr) {
    if (count[ele]) {
        count[ele] += 1;
    } else {
        count[ele] = 1;
    }
}
 
console.log(count );





 







// console.log(`${Object.keys(count)} = ${Object.values(count)}`);
 




// let newArr = arr.map(function (val, index) {
//     return { key: index, value: val * val };
// })

// console.log(newArr)