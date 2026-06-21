// ---------------------------------------------------------------------------------------
// function checkEvenOdd(num) {
//   if (num % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }
// let result = checkEvenOdd(8);

// console.log(result);
// ---------------------------------------------------------------------------------------
// function checker(a){
//     return a % 2 ===0? "even": "odd"
// }
// console.log(checker(5));
// ---------------------------------------------------------------------------------------
// function greet(name, age){
// return `Hello, ${name}! You are ${age} years old`

// }
// console.log(greet("areyan", 23))
// ---------------------------------------------------------------------------------------
// function rectangleArea(width, height) {
//   console.log(`AREA = ${width} x ${height}`);
//   return width * height;
// }
// console.log(rectangleArea(5,5));
// ---------------------------------------------------------------------------------------
// function createCounter() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter = createCounter();

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3
// ---------------------------------------------------------------------------------------
// function createCounter() {
//   let count = 100;

//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter = createCounter();
// console.log(counter());
// ---------------------------------------------------------------------------------------
// function findLargest(arr) {
//   let largest = arr[0];

// for( let i =1; i>arr.length; i++){
//     if (arr[i]>largest){
//         largest = arr[i]
//     }
// }

//   return largest;
// }

// console.log(findLargest([5, 8, 2, 20, 10]));
// console.log(findLargest([100, 50, 200, 75]));
// console.log(findLargest([-10, -5, -20, -1]));
// ---------------------------------------------------------------------------------------
// const products = [
//   { name: "scissors", price: 786, category: "shears" },
//   { name: "Phone", price: 500, category: "Electronics" },
//   { name: "Shirt", price: 30, category: "Clothing" },
//   { name: "Jeans", price: 50, category: "Clothing" },
// ];
// const productNames = products.map(product => product.name);
// console.log(productNames);

// // 2. Filter products by category
// const electronics = products.filter(
//   product => product.category === "Electronics"
// );
// console.log(electronics);

// const totalPrice= products.reduce((total, product) => total + product.price ,0)

// console.log(productNames);
// console.log(electronics);
// console.log(totalPrice);
// ---------------------------------------------------------------------------------------
// function debounce(fn, delay) {
//   let timer;

//   return function (...args) {
//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       fn(...args);
//     }, delay);
//   };
// }

// // Example
// function search(text) {
//   console.log("Searching:", text);
// }

// const debouncedSearch = debounce(search, 1000);

// debouncedSearch("A");


// Only the last call runs after 1 second:
// Searching: Areyan
// ---------------------------------------------------------------------------------------
// function step1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 1 done");
//       resolve();
//     }, 1000);
//   });
// }

// function step2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 2 done");
//       resolve();
//     }, 5000);
//   });
// }

// function step3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 3 done");
//       resolve();
//     }, 1000);
//   });
// }

// async function runSteps() {
//   await step1();
//   await step2();
//   await step3();
// }

// runSteps();
// ---------------------------------------------------------------------------------------
// const button = document.querySelector("#colorBtn")
// const colors = ["red", "green", "blue", "orange"]
// let currentIndex= 0;
// button.addEventListener("click", function(){
//     document.body.style.backgroundColor = colors[currentIndex];
//     currentIndex++;
//     if (currentIndex ===colors.length)
//     {currentIndex= 0

//     }
// })
// ---------------------------------------------------------------------------------------
// const textarea = document.querySelector("#message");
// const count = document.querySelector("#count");

// textarea.addEventListener("input", function () {
//     count.textContent = textarea.value.length;
// });
// ---------------------------------------------------------------------------------------
// const toggleBtn = document.querySelector("#toggleBtn")
// const extraText = document.querySelector("#extraText");

// toggleBtn.addEventListener("click", function(){
// if(extraText.classList.contains("hidden")){
//     extraText.classList.remove("hidden")
//     toggleBtn.textContent = "read less"
// }
// else{
//     extraText.classList.add("hidden")
//     toggleBtn.textContent = "read more"
// }
// })
// ---------------------------------------------------------------------------------------
// const countText = document.querySelector("#count")
// const btn = document.querySelector("#btn")
// let count=0

// btn.addEventListener("click", function(){
//     count++
//     countText.textContent = count
// })
// ---------------------------------------------------------------------------------------
// const taskInput = document.querySelector("#taskInput");
// const addBtn = document.querySelector("#addBtn");
// const taskList = document.querySelector("#taskList");

// addBtn.addEventListener("click", function () {

//     const task = taskInput.value;

//     if (task.trim() === "") {
//         alert("Please enter a task");
//         return;
//     }

//     const li = document.createElement("li");
//     li.textContent = task;

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";

//     deleteBtn.addEventListener("click", function () {
//         li.remove();
//     });

//     li.appendChild(deleteBtn);

//     taskList.appendChild(li);

//     taskInput.value = "";
// });
// -----------------------------------------------------------------------------
const celsiusInput = document.querySelector("#celsius");
const fahrenheitText = document.querySelector("#fahrenheit");

celsiusInput.addEventListener("input", function () {

    const celsius = Number(celsiusInput.value);

    const fahrenheit = (celsius * 9 / 5) + 32;

    fahrenheitText.textContent = fahrenheit;

});
// -----------------------------------------------------------------------------
const clock = document.querySelector("#clock");

function updateClock() {

    const now = new Date();

    const time = now.toLocaleTimeString();

    clock.textContent = time;
}

updateClock();

setInterval(updateClock, 1000);
// -----------------------------------------------------------------------------
const themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
