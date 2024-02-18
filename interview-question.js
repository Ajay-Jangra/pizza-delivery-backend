//  question 1

// sum(5)(8) = 13   concept of function curring 

function sum(a){
    return function (b){ // this fxn have access of it parent fxn variables 
        return (a+b);
    }
}
console.log(sum(5)(13));



// // another way with arrow fxn
// const sum =(a) => (b) => a+b;
// console.log(sum(5)(13));


// question 2
//  what happen when we click on two button at same time
// Ans :-  both click are triggering the setState
// this is sync process directly setting the states
// react process them in the order they occur in the code
// second update override the first .

// question3 
// given routes and we need to match "/ajay"
//  /ajay1        // this does'nt match
//  /ajay
//  /ajay/hisar    // These routes won't be considered because "/ajay" is already matched.
//  /ajayhisar


 //react have priority based first it find the exact match then 

