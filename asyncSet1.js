//   -------------------------------------------------********-------------------------------------------

//  Q1

// const delayedGreeting = () => {
//   setTimeout(() => {
//     console.log("Hello, welcome to my portfolio!");
//   }, 2000);
// };

// delayedGreeting();

// Hello, welcome to my portfolio!

//   -------------------------------------------------********-------------------------------------------

//  Q2

// const delayedAddition = (num1, num2) => {
//   setTimeout(() => {
//     console.log(num1 + num2);
//   }, 4000);
// };

// delayedAddition(2, 3);
// 5

//   -------------------------------------------------********-------------------------------------------

//  Q3

// const delayedAlert = (msg, time) => {
//   setTimeout(() => {
//     alert(msg);
//   }, time);
// };

// delayedAlert("Hello, world!", 2000);
// Should display an alert box with the message, Hello, world!

//   -------------------------------------------------********-------------------------------------------

//  Q4

// const delayedLoop = (n) => {
//   for (let i = 1; i <= n; i++) {
//     setTimeout(() => {
//       console.log("Hello");
//     }, i * 1000);
//   }
// };

// delayedLoop(3);
// should print Hello three times after 1 second each
// Output:
// Hello -- after 1 second
// Hello -- after another 1 second
// Hello -- after another 1 second

//   -------------------------------------------------********-------------------------------------------

//  Q5

// const fakeFetch = (msg, shouldSucceed) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldSucceed) {
//         resolve(`message from server: ${msg}`);
//       }
//       reject(`error from server: ${msg}`);
//     }, 3000);
//   });
// };

// fakeFetch("Hello Jii", true)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Hi -- after 3 seconds

//   -------------------------------------------------********-------------------------------------------

//  Q6

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/itemlist") {
//         reject({
//           status: 404,
//           message: "Items list not found.",
//         });
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success",
//             data: [
//               { itemName: "Bread", price: 30 },
//               { itemName: "Water Bottle", price: 50 },
//               { itemName: "Dairy Milk", price: 20 },
//             ],
//           },
//         });
//       }
//     }, 2000);
//   });
// };

// const outputBox = document.querySelector("#output-box");

// fakeFetch("https://example.com/api/itemlist")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     if (error.status === 404) {
//       outputBox.textContent = "The data you are looking for, does not exist.";
//     }
//   });

// Output on the DOM should be:
// The data you are looking for, does not exist.

//   -------------------------------------------------********-------------------------------------------

//  Q7

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/chat") {
//         reject({
//           status: 503,
//           message: "Service Unavailable",
//         });
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success",
//           },
//         });
//       }
//     }, 2000);
//   });
// };

// const outputBox = document.querySelector("#output-box");

// fakeFetch("https://example.com/api/chat")
//   .then((respose) => {
//     console.log(respose);
//   })
//   .catch((err) => {
//     if (err.status === 503) {
//       outputBox.textContent =
//         "We are facing high demand at the moment. Please check back later in sometime.";
//     }
//   });

// Output on the DOM should be:
// We are facing high demand at the moment. Please check back later in sometime.

//   -------------------------------------------------********-------------------------------------------

//  Q8

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/itemlist") {
//         resolve({
//           status: 200,
//           message: "Success",
//           data: [
//             { itemName: "Bread", price: 30, quantity: 10 },
//             { itemName: "Water Bottle", price: 50, quantity: 50 },
//             { itemName: "Dairy Milk", price: 20, quantity: 30 },
//           ],
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "Items list not found.",
//         });
//       }
//     }, 2000);
//   });
// };

// const ansList = document.querySelector("#ans-list");

// fakeFetch("https://example.com/api/itemlist")
//   .then((response) => {
//     const dataItem = response.data;

//     dataItem.forEach(({ itemName, price, quantity }) => {
//       const listItem = document.createElement("li");
//       listItem.appendChild(
//         document.createTextNode(`${itemName} -- INR ${price} -- ${quantity}`)
//       );
//       ansList.appendChild(listItem);
//     });
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// Output on the DOM should be in the format, {itemName} -- INR {price} -- {quantity}:
// 1. Bread -- INR 30 -- 10
// 2. Water Bottle -- INR 50 -- 50
// 3. Dairy Milk -- INR 20 -- 30

//   -------------------------------------------------********-------------------------------------------

//  Q9

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/data") {
//         reject({
//           status: 500,
//           message: "Internal Server Error",
//         });
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success",
//           },
//         });
//       }
//     }, 2000);
//   });
// };

// const outputBox = document.querySelector("#output-box");

// fakeFetch("https://example.com/api/data")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     if (err.status === 500) {
//       outputBox.textContent = `${err.message}! The server crashed. Please try again in some time.`;
//     }
//   });

// Output on the DOM should be:
// Internal Server Error! The server crashed. Please try again in some time.

//   -------------------------------------------------********-------------------------------------------

//  Q10

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/profile") {
//         reject({
//           status: 401,
//           message: "Unauthorized Access",
//         });
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success",
//           },
//         });
//       }
//     }, 2000);
//   });
// };

// const outputBox = document.querySelector("#output-box");

// fakeFetch("https://example.com/api/profile")
//   .then((response) => console.log(response))
//   .catch((err) => {
//     if (err.status === 401) {
//       outputBox.textContent = `${err.message}! Looks like you are not logged in. Please login to see your profile data.`;
//     }
//   });

// Output on the DOM should be:
// Unauthorized Access! Looks like you are not logged in. Please login to see your profile data.

//   -------------------------------------------------********-------------------------------------------

//  Q11

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/profile/NC002") {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success",
//             data: { id: "NC002", name: "Roshan", institute: "neoG Camp" },
//           },
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "Resource not found",
//         });
//       }
//     }, 2000);
//   });
// };

// const outputBox = document.querySelector("#output-box");

// fakeFetch("https://example.com/api/profile/NC002")
//   .then((response) => {
//     const {
//       data: { name, institute },
//     } = response.data;

//     outputBox.textContent = `Welcome!, ${name} from ${institute}`;
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Your Code here
// Output on the DOM should be: Welcome!, Roshan from neoG Camp
