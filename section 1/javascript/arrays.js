// const num=[34,67,12,45,90,56,'nice'];

// console.log(num);
// console.log(typeof(num));

// // 1. arrays can contain multiple type of data
// // 2. arrays can support indexing-index starts from 0
// // 3. arrays are dynamic-size can be changed
// // 4. arrays are mutable-can be changed


// const fruits=['apple','banana','mango','orange','pineapple'];
// // indexing
// console.log(fruits[3]);
// console.log(fruits.indexOf('mango'));

// // slicing - accessing multiple element
// console.log(fruits.slice(1,4));
// // this will give all the elements to end
// console.log(fruits.slice(1));
// //  this will give all the elemnts to end
// console.log(fruits.slice(1,10));
// // this will give undefined
// console.log(fruits[100]);



// to remove first Element
// console.log(fruits.shift());
// console.log(movies);


// // removing elements( starting index of elemnt,number of elements tto be deleted)
// fruits.splice(3,2);
// console.log(fruits);


// // adding new elements
// fruits.push('cherry');
// console.log(fruits);

// // deleting 
// fruits.pop();
// console.log(fruits);



// // traverse using index
// console.log('-----------traverse using index------------')
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// // traverse using for-of loop
// console.log('------------traverse using for-of loop----------')
// for(let fr of fruits){
//     console.log(fr);
// }


// // traverse using for-each function
// console.log('------------traverse using for-each loop----------')

// fruits.forEach((n)=>{
//     console.log(n);
// });







// MAP
const numbers=[2,5,7,3,5,4,3];

// wap to squARE each number in abone array and strore them in array
let newnum=[];
 for(let i=0;i<numbers.length;i++){
    newnum.push(numbers[i]*numbers[i])
    console.log(newnum);
}



// let newnum=[];
// for(let i of numbers){
//     newnum.push(i*i);

// }
// console.log(newnum);
