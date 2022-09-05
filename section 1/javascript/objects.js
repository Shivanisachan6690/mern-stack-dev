// objects are uses to store key value pairs
          // keys:values
let user={ name: 'raju',age:25,email:'raju@gmail.com' ,'enroll-no':'a-123'};
let key='enroll--no';
console.log(user.email);
console.log(user['enroll-no']);
console.log(user[key]);
//  OR
 console.log(user['name']);
 console.log(user);


 console.log(user.address);
// to add new key
 user.address='lucknow-226017';
//  user['address']='lucknow-226017
 console.log(user);


// when a key is already existed it over rites 
 user.name='shamu';
 console.log(user);


//  SHORTCUT to create obj

let brand='samsung';
let model='galaxy S22';
let colors=['white','black','gray'];
let price=60000;

let smartphone={brand,model,colors,price};
console.log(smartphone.colors[1]);



// passing objjects as an argument to  functions
// const printdetails=(obj)=>{
//     console.log(obj.brand);
//     console.log(obj.model);
// }
// printdetails(smartphone);

//     printdetails();                               this will throw error

// when we have to aacess only specific object
const printdetails=({brand,model})=>{
    console.log(brand);
    console.log(model);
}
printdetails(smartphone);




let myorders=[
    {id: 2345,name:'t-shirt',price:500},
    {id: 2347,name:'tie',price:150},
    {id: 2345,name:'trouser',price:1254},
];
console.log(myorders[1].name);

// wap to filter the orders which are less than 1000
const filteredorders=myorders.filter((obj)=>{return obj.price<1000});
console.log(filteredorders);



