//  1. map is a function of array
//  2. map returns a new array

arr1=[23,5,2,5,26,3];

const newnums=arr1.map((n)=>{return n*n});
console.log(newnums);



price=[100,99,4724,999,3199]
// prices = ['Rs.100','Rs.99']
 const newarr =price.map((n)=>{return 'Rs'+n});
// OR       const newarr =price.map(n=>{return 'Rs'+n});
// OR       const newarr =price.map(n=> ('Rs'+n));
console.log(newarr);


const arr2=[23,43,6,8,10,3,6,27]
// create  new array - where if old element is even divide it by 2 and if it is odd multiply by 2
const narr=arr2.map((n)=>{
    if(n%2==0)
    return n/2;
else return n*2});
console.log(narr)

// OR                                  by using ternary operator
// return condition==true?cond1:cond2;
// const newarr2=arr2.map((n)=>(n%2==0?n/2:n*2))
// console.log(newarr2);





//---------------------------filter----------------------

// const arr2=[23,43,6,8,10,3,6,27]
// remove even element 


const filteredarr2=arr2.filter((a)=>{return a%2!=0});
console.log(filteredarr2);