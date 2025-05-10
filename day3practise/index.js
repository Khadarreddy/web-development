// let a=setInterval(()=>{
//     console.log("hello");
// },1000)
// setTimeout(()=>{
//     clearInterval(a);
// },5000)
// function abc(){
//     document.getElementById("name").innerHTML=`
//    <i> <p> Hello my name is Khadar.I am studying Btech in Raghu Engineering College.</p> </i>
//     `;
// }
// function a(){
//     for(var i=1;i<=5;i++){
//         function b(i)
//         {
//             setTimeout(()=>{
//             console.log(i);
//         },i*1000);
//     }
//     b(i);
    
// }
//     console.log("Hello");

// }
// a();
// function add() {
//     const taskInput = document.getElementById('task');
//     const taskList = document.getElementById('tasklist');
  
//     if (taskInput.value.trim() !== "") {
//       const listItem = document.createElement('li');
//       listItem.textContent = taskInput.value;
//       listItem.style.listStyle="none";
//       taskList.appendChild(listItem);
//       taskInput.value = ""; // Clear the input field
//     } else {
//       alert("Please enter a task.");
//     }

//   }
// let c = document.getElementById("counter");
// let inc = document.getElementById("increase");
// let dec = document.getElementById("decrease");
// let re = document.getElementById("reset");
// let count = 0;

// if (inc && c && dec && re) {
// 	inc.addEventListener("click", function () {
// 		count++;
// 		c.textContent = count;
// 	});

// 	dec.addEventListener("click", function () {
// 		count--;
// 		c.textContent = count;
// 	});

// 	re.addEventListener("click", function () {
// 		count = 0;
// 		c.textContent = count;
// 	});
// }
// let counterDisplay = document.getElementById("counter");
// const increaseBtn = document.getElementById("increaseBtn");
// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");

// let count = 0;

// // Increase Button
// increaseBtn.addEventListener("click", function() {
//   count++;
//   counterDisplay.textContent = count;
// });

// // Decrease Button
// decreaseBtn.addEventListener("click", function() {
//   count--;
//   counterDisplay.textContent = count;
// });

// // Reset Button
// resetBtn.addEventListener("click", function() {
//   count = 0;
//   counterDisplay.textContent = count;
// });