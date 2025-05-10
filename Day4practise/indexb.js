const prompt=require('prompt-sync')();
// n=prompt("Enter the number: ");
// n=Number(n);
// n=Math.floor(n*(n+1)/2);
// console.log("nth taringualar number is",n);


// n=prompt("Enter the number: ");
// n=Number(n);
// console.log("nth square number is",n**2);


// n=prompt("Enter the number: ");
// n=Number(n);
// let k=Math.floor((3*n*n-n)/2);
// console.log(k);


// let n=prompt("Eneter the number :");
// let s=Math.floor(n*(n+1)/2);
// console.log(s);


// let n=prompt("Eneter the number :");
// let s=Math.floor(n*(n+1)*(2*n+1)/6);
// console.log(s);


// let n=prompt("Eneter the number :");
// let s=Math.floor((n*(n+1)/2)**2);
// console.log(s);



// let n=prompt("Enter the Number :");
// n=Number(n);
// let a=n;
// while(a>9){
//     let s=0;
//     while(n!==0){
//         s=s+n%10;
//         n=Math.floor(n/10);
//      }
     
//      a=s; 
//      n=a;  
// }
// console.log(a);



// let n=prompt("Enter The number :");
// n=Number(n);
// if(n>0)
// {
//     let k=n&(n-1);
//     if(k===0){
//         console.log("Given number is a power of 2");
//     }
//     else{
//         console.log("Given number is not a power of 2");
//     }
// }


// let n=prompt("Enter The number :");
// n=Number(n);
// let k;
// let c=0;
// while(n!==0)
// {
//     k=n&1;
//     if(k===1){
//         c++;
//     }
//     n=n>>1;
// }
// console.log(c);



// let a=prompt("Enter first Number :");
// let b=prompt("Enter second number :");
// a=Number(a);
// b=Number(b);
// a=a+b;
// b=a-b;
// a=a-b;
// console.log("After swapping a=",a,"b=",b);


// let n=prompt("Enter The number :");
// n=Number(n);
// let c=0;
// while(n!==0){
//     n=n>>1;
//     c++;
// }
// console.log(c);



// let nums=prompt("Enter the numbers separated by spaces :");
// let arr=nums.split(" ");
// arr.sort();
// let p1,p2;
// let target=prompt("Enter the target number :");
// p1=0;
// p2=arr.length-1;
// let k;
// while(p1<p2){
//     k=Number(arr[p1])+Number(arr[p2]);
//     if(k==target){
//         console.log(arr[p1],",",arr[p2]);
//         p1+=1;
//         p2-=1;
//     }
//     else if(k<target){
//         p1+=1;
//     }
//     else{
//         p2-=1;
//     }
// }

