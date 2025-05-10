let Mydata={
    "data": [
        {
            "id": 1,
            "name": "John Doe",
            "email": "john@gmail.com",
            "age": 25,
            "address": {
                "street": "123 Main St",
                "city": "New York",
                "state": "NY"
            },
            "phone": "555-1234",
            "isEmployed": true,
            "salary": 50000
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "email": "jane.smith@yahoo.com",
            "age": 30,
            "address": {
                "street": "456 Oak Ave",
                "city": "Los Angeles",
                "state": "CA"
            },
            "phone": "555-5678",
            "isEmployed": false,
            "salary": 0
        },
        {
            "id": 3,
            "name": "Michael Johnson",
            "email": "mjohnson@gmail.com",
            "age": 28,
            "address": {
                "street": "789 Pine Rd",
                "city": "Chicago",
                "state": "IL"
            },
            "phone": "555-9101",
            "isEmployed": true,
            "salary": 60000
        },
        {
            "id": 4,
            "name": "Emily Davis",
            "email": "emily.davis@outlook.com",
            "age": 22,
            "address": {
                "street": "321 Elm St",
                "city": "Houston",
                "state": "TX"
            },
            "phone": "555-1213",
            "isEmployed": false,
            "salary": 0
        },
        {
            "id": 5,
            "name": "William Brown",
            "email": "wbrown@hotmail.com",
            "age": 35,
            "address": {
                "street": "654 Cedar Blvd",
                "city": "Phoenix",
                "state": "AZ"
            },
            "phone": "555-1415",
            "isEmployed": true,
            "salary": 70000
        },
        {
            "id": 6,
            "name": "Olivia Wilson",
            "email": "olivia.w@gmail.com",
            "age": 27,
            "address": {
                "street": "987 Maple Dr",
                "city": "Philadelphia",
                "state": "PA"
            },
            "phone": "555-1617",
            "isEmployed": false,
            "salary": 0
        },
        {
            "id": 7,
            "name": "James Taylor",
            "email": "jtaylor@aol.com",
            "age": 29,
            "address": {
                "street": "741 Spruce Ln",
                "city": "San Antonio",
                "state": "TX"
            },
            "phone": "555-1819",
            "isEmployed": true,
            "salary": 55000
        },
        {
            "id": 8,
            "name": "Sophia Martinez",
            "email": "smartinez@gmail.com",
            "age": 24,
            "address": {
                "street": "258 Birch Ct",
                "city": "San Diego",
                "state": "CA"
            },
            "phone": "555-2021",
            "isEmployed": false,
            "salary": 0
        },
        {
            "id": 9,
            "name": "Liam Anderson",
            "email": "liam.anderson@live.com",
            "age": 31,
            "address": {
                "street": "369 Walnut Ave",
                "city": "Dallas",
                "state": "TX"
            },
            "phone": "555-2223",
            "isEmployed": true,
            "salary": 65000
        },
        {
            "id": 10,
            "name": "Isabella Thomas",
            "email": "isabella.t@hotmail.com",
            "age": 26,
            "address": {
                "street": "147 Redwood St",
                "city": "San Jose",
                "state": "CA"
            },
            "phone": "555-2425",
            "isEmployed": false,
            "salary": 0
        },
        {
            "id": 11,
            "name": "Benjamin Jackson",
            "email": "ben.jackson@gmail.com",
            "age": 32,
            "address": {
                "street": "963 Aspen Dr",
                "city": "Austin",
                "state": "TX"
            },
            "phone": "555-2627",
            "isEmployed": true,
            "salary": 72000
        },
        {
            "id": 12,
            "name": "Mia White",
            "email": "mia.white@yahoo.com",
            "age": 23,
            "address": {
                "street": "852 Fir St",
                "city": "Jacksonville",
                "state": "FL"
            },
            "phone": "555-2829",
            "isEmployed": false,
            "salary": 0
        },
        {
            "id": 13,
            "name": "Noah Harris",
            "email": "noah.harris@protonmail.com",
            "age": 34,
            "address": {
                "street": "369 Cypress Ln",
                "city": "Fort Worth",
                "state": "TX"
            },
            "phone": "555-3031",
            "isEmployed": true,
            "salary": 75000
        },
        {
            "id": 14,
            "name": "Ava Martin",
            "email": "ava.martin@gmail.com",
            "age": 21,
            "address": {
                "street": "753 Chestnut Ave",
                "city": "Columbus",
                "state": "OH"
            },
            "phone": "555-3233",
            "isEmployed": false,
            "salary": 0
        },
        {
            "id": 15,
            "name": "Elijah Thompson",
            "email": "ethompson@icloud.com",
            "age": 36,
            "address": {
                "street": "147 Hemlock Rd",
                "city": "Charlotte",
                "state": "NC"
            },
            "phone": "555-3435",
            "isEmployed": true,
            "salary": 80000
        },
        {
            "id": 16,
            "name": "Charlotte Garcia",
            "email": "cgarcia@hotmail.com",
            "age": 28,
            "address": {
                "street": "951 Juniper Blvd",
                "city": "San Francisco",
                "state": "CA"
            },
            "phone": "555-3637",
            "isEmployed": false,
            "salary": 0
        }
    ]
}
let res={};
// res["Employed"]=0;
// res["UnEmployed"]=0;
// Mydata.data.forEach( (ele) => {
//     if(ele.isEmployed){
//       res.Employed++;
//     } 
//     else{
//     res.UnEmployed++;
//     }  
// });
// console.log(res);


// Mydata.data.forEach((ele)=>{
//     if(ele.address.state in res){
//         res[ele.address.state]+=1
//     }
//     else{
//         res[ele.address.state]=1;
//     }
// });
// console.log(res);

// let min=0;
// let Ename;
// Mydata.data.forEach((ele)=>{
//     if(ele.salary>min){
//         min=ele.salary;
//         Ename=ele.name;
//     }
// })
// res[Ename]=min;
// console.log(res);



// let max=80000;
// let Ename;
// Mydata.data.forEach((ele)=>{
//     if(ele.salary<max){
//         max=ele.salary;
//         Ename=ele.name;
//     }
// })
// res[Ename]=max;
// console.log(res);



// let min=-Infinity;
// let max=0;
// let hEname;
// Mydata.data.forEach((ele)=>{
//     if(ele.salary>min){
//         min=ele.salary;
//         hEname=ele.name;
//     }
// });
// res[hEname]=min;
// let lst=Mydata.data.filter((ele)=>{
//     if(ele.salary<=max){
//         return ele.name;
//     }
// }).map((ele)=>ele.name);
// lst.forEach((ele)=>{
//     res[ele]=0;
// })
// console.log(res);


// let min=0;
// let Ename;
// Mydata.data.forEach((ele)=>{
//     if(ele.salary>min){
//         min=ele.salary;
//         Ename=ele.name;
//     }
// })
// Mydata.data.forEach((ele)=>{
//     if(ele.salary===min){
//         ele.isHighpaid=true;
//     }
//     else{
//         ele.isHighpaid=false;
//     }
// });
// console.log(Mydata);

// let c=0;
// let s=0;
// Mydata.data.forEach((emp)=>{
//     s+=emp.salary;
//     c++;
// })
// console.log(Math.floor(s/c));


// let c=0;
// let s=0;
// Mydata.data.forEach((emp)=>{
//     if(emp.age>30){
//         s+=emp.salary;
//         c++;
//     }  
// })
// console.log(Math.floor(s/c));


// let c=0;
// let s=0;
// Mydata.data.forEach((emp)=>{
//     if(emp.age<30){
//         s+=emp.salary;
//         c++;
//     }  
// })
// console.log(Math.floor(s/c));


Mydata.data.forEach((emp)=>{
    if(emp.age<=25){
        emp.classification="Young adults";
    }
    else if(emp.age>25 & emp.age<=30){
        emp.classification="Early professionals";
    }
    else if(emp.age>30 & emp.age<=35){
        emp.classification="Mid-career professionals";
    }
    else{
        emp.classification="Experienced professionals";
    }
});
console.log(Mydata);