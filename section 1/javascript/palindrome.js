// const checkpalindrome=(m)=>{
//  rev=0;
//  temp=m;
 
// while(m>0)
// {
//     rem=m%10;
//     rev=rev*10+rem;
//     m=m/10;
// }
// if(temp==rev)
// console.log('palindrome');
// else
// console.log('not');

// }
// checkpalindrome(121)


const checkpalindrome=(n)=>{
    let org=n;
    let reverse=0;
    console.log(reverse);
    while(n>0){
        let r=n%10;
        reverse=reverse*10+r;
        n=Math.floor(n/10);
        }
        console.log(reverse);
        if(org==reverse){
            console.log('palindrome');
        }
        else{
            console.log('not palindrome')
        }
}
checkpalindrome(54123);