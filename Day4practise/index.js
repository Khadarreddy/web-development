const prompt=require('prompt-sync')();
// function isprime(n){
//     if(n<2)
//     {
//         return false;
//     }
//     else{
//         for(let i=2; i<Math.ceil(n**0.5)+1; i++){
//              if(n%i==0){
//                 return false;
//              }
//         }
//         return true;
//     }
// }

// let a=prompt("Enter a Number :");
// a=Number(a)
// let b=isprime(a);
// if(b){
//     console.log("Given Number" ,a, "is prime number");
// }
// else{
//     console.log("Given number",a,"is not a prime number");
// }



// function isprime(n){
//     if(n<2)
//     {
//         return false;
//     }
//     else{
//         for(let i=2; i<Math.ceil(n**0.5)+1; i++){
//              if(n%i==0){
//                 return false;
//              }
//         }
//         return true;
//     }
// }
//  const prompt=require('prompt-sync')();
// let num=prompt("Enter the number : ");
// n=Number(num)
// for(let i=1;i<=num;i++){
//     if(isprime(i)){
//       console.log(i);
//     }
// }



// function fact(n)
// {
//     if(n===0 | n===1){
//         return 1;
//     }
//     else{
//         return n*fact(n-1);
//     }
// }
// const prompt=require("prompt-sync")();
// let n=prompt("Enter a Number : ");
// n=Number(n)
// let f=fact(n);
// console.log("Factorial of a given number is: ",f);



// const prompt=require("prompt-sync")();
// let n=prompt("Enter the Number : ");
// let s=0;
// n = parseInt(n);
// let m=n; 
// while(n !== 0) {
//   s = s * 10 + n % 10;
//   n = Math.floor(n / 10); // Use Math.floor for integer division
// }
// if(s===m){
//     console.log("Given number",m,"is a palindrome");
// }
// else{
//     console.log("Given number",m,"is not a palindrome");
// }



// function gcd(n,m){
//     let a;
//    while(1){
//    a=n%m;
//    if(a===0)
//    {
//     break;
//    }
//    n=m;
//    m=a;
//    }
//    return m;
// }
// const prompt=require("prompt-sync")();
// let a=prompt("Enter first number: ");
// let b=prompt("Enter second number: ");
// a=Number(a);
// b=Number(b);
// if(a<b){
//     let c=a;
//     a=b;
//     b=c;
// }
// let Gcd=gcd(a,b);
// console.log("GCD of",a,b,"is ",Gcd);
// let Lcm=Math.round((a*b)/Gcd);
// console.log("LCM of",a,b,"is",Lcm);




// const prompt=require("prompt-sync")();
// let n=prompt("Enter the number: ");
// n=Number(n);
// let s=0;
// while(n!=0){
//  s=s+n%10;
//  n=Math.floor(n/10);
// }
// console.log("sum of the digits of a number:",s);




// const prompt=require("prompt-sync")();
// let n=prompt("Enter the number: ");
// n=Number(n);
// let ps=1;
// while(n!=0){
//  ps=ps*(n%10);
//  n=Math.floor(n/10);
// }
// console.log("product of the digits of a number:",ps);




// const prompt=require("prompt-sync")();
// let n=prompt("Enter the number: ");
// n=Number(n);
// let c=0;
// while(n!=0){
//  c++;
//  n=Math.floor(n/10);
// }
// console.log("count of the digits of a number:",c);




// const prompt=require("prompt-sync")();
// let n=prompt("Enter the number: ");
// n=Number(n);
// let r=0;
// while(n!=0){
//  r=r*10+n%10;
//  n=Math.floor(n/10);
// }
// console.log("Reverse of a number:",r);



// function fib(n){
//     if(n==0){
//         return 0;
//     }
//     else if(n==1){
//         return 1;
//     }
//     else{
//         return fib(n-1)+fib(n-2);
//     }

// }
// const prompt=require("prompt-sync")();
// let n=prompt("Enter the Number: ");
// n=Number(n);
// let nthfib=fib(n);
// console.log("nth fibanocci number is",nthfib);



// const prompt=require("prompt-sync")();
// let n=prompt("Enter the Number: ");
// let l=n.length;
// l=Number(l);
// n=Number(n);
// let m=n;
// let s=0;
// let r;
// while(n!==0){
//  r=n%10;
//  s=s+r**l;
//  n=Math.floor(n/10);
// }
// if(m===s){
//     console.log("Given Number is Amstrong Number");
// }
// else{
//     console.log("Given Number is not an Amstrong Number");
// }



// const prompt=require("prompt-sync")();
// let n=prompt("Enter the Number: ");
// n=Number(n);
// let s=0;
// for(let i=1;i<=Math.floor(n/2)+1;i++)
// {
//     if(n%i==0){
//        s+=i;
//     }
// }
// if(n===s)
// {
//     console.log("Given number is perfect number");
// }
// else{
//     console.log("Given number is not a perfect number");
// }


// const prompt=require("prompt-sync")();
// let n=prompt("Enter the Number: ");
// n=Number(n);
// for(let i=1;i<=n;i++){
//     if(n%i===0){
//         console.log(i);
//     }
// }



// function gcd(n,m){
//     let a;
//    while(1){
//    a=n%m;
//    if(a===0)
//    {
//     break;
//    }
//    n=m;
//    m=a;
//    }
//    return m;
// }
// const prompt=require("prompt-sync")();
// let a=prompt("Enter the first Number: "); 
// let b=prompt("Enter the second Number: ");
// a=Number(a);
// b=Number(b);
// if(b>a){
//     a=a+b;
//     b=a-b;
//     a=a-b;

// }
// let c=gcd(a,b);
// if(c===1){
//     console.log("Both are co-primes");
// }
// else{
//     console.log("Both are not a co-primes");
// }


// const prompt=require("prompt-sync")();
// let n=prompt("Enter the Number: ");
// n=Number(n);
// let s=0;
// for(let i=1;i<=n;i++){
//     if(n%i===0){
//         s+=i;
//     }
// }
// console.log("sum of all divisors of a number is :",s);


// const prompt=require("prompt-sync")();
// let n=prompt("Enter the Number: ");
// n=Number(n);
// let c=0;
// for(let i=1;i<=n;i++){
//     if(n%i===0){
//         c++;
//     }
// }
// console.log("Number of divisors for a number is :",c);




// function isprime(n){
//     for(let i=2;i<Math.floor(n**0.5)+1;i++)
//         {
//             if(n%i===0)
//             {
//                 return false;
//             }
//         }
//         return true;
// }
// n=prompt("Enter the Number :");
// n=Number(n);
// let lst=[];
// for(let i=2;i<=n;i++)
// {
//    if(isprime(i)){
//     lst.push(i)
//    }
// }
// lst.forEach((i)=>{
//     if(n%i===0){
//         console.log(i);
//     }
// });




// function isprime(n){
//     for(let i=2;i<Math.floor(n**0.5)+1;i++)
//         {
//             if(n%i===0)
//             {
//                 return false;
//             }
//         }
//         return true;
// }
// n=prompt("Enter the Number :");
// n=Number(n);
// let lp;
// let lst=[];
// for(let i=2;i<=n;i++)
// {
//    if(isprime(i)){
//     lst.push(i);
//    }
// }
// lst.forEach((i)=>{
//     if(n%i===0){
//         lp=i;
//     }
// });
// console.log("Largest prime factor is :",lp);


// let n = prompt("Enter the Number of Armstrong numbers to print: ");
// n = Number(n);
// let count = 0;
// let num = 1;

// while (count < n) {
//     let temp = num;
//     let sum = 0;
//     let digits = temp.toString().length;

//     while (temp > 0) {
//         let digit = temp % 10;
//         sum += Math.pow(digit, digits);
//         temp = Math.floor(temp / 10);
//     }

//     if (sum === num) {
//         console.log(num);
//         count++;
//     }

//     num++;
// }




