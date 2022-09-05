//  const checkprime=(m)=>{  
//        c=0;
//     for(let i=1;i<=m;i++)
//     {         if(m%i==0)
//         c++;
//     }

    
//  }
//  checkprime(97)
//     if(c==2)
// console.log('prime no'); else
// console.log('not prime');
    


 const checkprime=(num)=>{
     let prime=true;
 for (let i=2;i<num/2;i++){
     if(num%i==0){
         console.log('not prime');
         prime=false;
    

     }
 }
 if(prime){
     console.log('prime');
}
 }
checkprime(34)