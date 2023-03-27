//   -------------------------------------------------********-------------------------------------------

//  Q1

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/post/comments") {
//         resolve({
//           status: 200,
//           message: "Success",
//           data: [
//             { email: "xyz@gmail.com", commentBody: "Well done keep it up" },
//             {
//               email: "hello@outlook.com",
//               commentBody: "Good going a lot to learn from you awesome",
//             },
//             {
//               email: "ram99@gmail.com",
//               commentBody: "Anyone from Vadodara here",
//             },
//           ],
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "No Commentes found.",
//         });
//       }
//     }, 2000);
//   });
// };

// const ansList = document.querySelector("#ans-list");

// fakeFetch("https://example.com/post/comments")
//   .then((response) => {
//     response.data.forEach(({ email }) => {
//       const listItem = document.createElement("li");
//       listItem.appendChild(document.createTextNode(email));
//       ansList.appendChild(listItem);
//     });
//   })
//   .catch((err) => console.log(err));

// Output on the DOM should be:
// 1. xyz@gmail.com
// 2. hello@outlook.com
// 3. ram99@gmail.com

//   -------------------------------------------------********-------------------------------------------

//  Q2

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/winner-team") {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success",
//             data: ["Jhon", "Raju", "Anjali", "Sakshi"],
//           },
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "No Users found.",
//         });
//       }
//     }, 2000);
//   });
// };

// const ansBox = document.querySelector("#output-box");

// fakeFetch("https://example.com/winner-team")
//   .then((response) => {
//     const team = response.data.data;
//     ansBox.textContent = `Congratulation to the members of winning team ${[
//       ...team,
//     ]}, great work keep it up.`;
//   })
//   .catch((err) => console.log(err));

// Output on the DOM should be:
// Congratulation to the members of winning team Jhon, Raju, Anjali, Sakshi, great work keep it up.

//   -------------------------------------------------********-------------------------------------------

//  Q3

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/login") {
//         resolve({
//           status: 200,
//           data: {
//             auth: true,
//           },
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "Status not found",
//         });
//       }
//     }, 2000);
//   });
// };

// const ansBox = document.querySelector("#output-box");

// fakeFetch("https://example.com/login")
//   .then((response) => {
//     if (response.status === 200) ansBox.textContent = "Verified";
//   })
//   .catch((err) => console.log(err));

// Output on the DOM should be:
// Verified

//   -------------------------------------------------********-------------------------------------------

//  Q4

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/order/status/OR00A12") {
//         resolve({
//           status: 200,
//           data: {
//             order: {
//               orderId: "OR00A12",
//               status: "delivery pending",
//               userName: "Kajal Kumari",
//             },
//           },
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "No order found",
//         });
//       }
//     }, 2000);
//   });
// };

// const ansBox = document.querySelector("#output-box");

// fakeFetch("https://example.com/order/status/OR00A12")
//   .then((response) => {
//     const {
//       order: { status, userName },
//     } = response.data;

//     ansBox.textContent = `Hello ${userName} your order status is ${status}`;
//   })
//   .catch((err) => console.log(err));

// Output on the DOM should be:
// Hello Kajal Kumari your order status is delivery pending.

//   -------------------------------------------------********-------------------------------------------

//  Q5

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/photo") {
//         resolve({
//           status: 200,
//           data: {
//             photo: {
//               link: "https://source.unsplash.com/featured/300x201",
//               title: "Random Image",
//             },
//           },
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "No order found",
//         });
//       }
//     }, 2000);
//   });
// };

// const imageBox = document.querySelector("#ans-box");

// fakeFetch("https://example.com/photo")
//   .then((response) => {
//     const {
//       photo: { link },
//     } = response.data;
//     const imgElem = document.createElement("img");
//     imgElem.src = link;
//     imageBox.appendChild(imgElem);
//   })
//   .catch((err) => console.log(err));

// Output: an image on the DOM

//   -------------------------------------------------********-------------------------------------------

//  Q6

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/productlist") {
//         resolve({
//           status: 200,
//           message: "Success",
//           data: [
//             { itemName: "Shoes", price: 100, quantity: 2 },
//             { itemName: "Hat", price: 350, quantity: 1 },
//             { itemName: "Tshirt", price: 410, quantity: 5 },
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

// const ansBox = document.querySelector("#output-box");

// const giveTotalValue = (dataItems) =>
//   dataItems.reduce((accum, { price, quantity }) => {
//     return (accum += price * quantity);
//   }, 0);

// fakeFetch("https://example.com/api/productlist")
//   .then((response) => {
//     const dataItems = response.data;
//     const tot = giveTotalValue(dataItems);
//     ansBox.textContent = `Total: INR ${tot}`;
//   })
//   .catch((err) => console.log(err));

// Output on the DOM should be:
// Total: INR 2600

//   -------------------------------------------------********-------------------------------------------

//  Q7

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/users") {
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

// const ansBox = document.querySelector("#output-box");

// fakeFetch("https://example.com/api/users")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     if (err.status === 500) {
//       ansBox.textContent = `Oops. Unexpected Error. Please try again.`;
//       ansBox.style.color = "red";
//     }
//   });

// Output on the DOM should be (in red color):
// Oops. Unexpected Error. Please try again.

//   -------------------------------------------------********-------------------------------------------

//  Q8

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/allbooks") {
//         reject({
//           status: 400,
//           message: "Bad Request",
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

// const ansBox = document.querySelector("#output-box");

// fakeFetch("https://example.com/api/allbooks")
//   .then((response) => console.log(response))
//   .catch((err) => {
//     if (err.status === 400) {
//       ansBox.textContent = "Bad Request! Requested size too large.";
//     }
//   });

// Output on the DOM should be:
// Bad Request! Requested size too large.

//   -------------------------------------------------********-------------------------------------------

//  Q9

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!(url === "https://example.com/welcome")) {
//         reject({
//           status: 511,
//           message: "Network auth required",
//         });
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             logged: true,
//           },
//         });
//       }
//     }, 2000);
//   });
// };

// const ansBox = document.querySelector("#output-box");
// const msg = `Welcome to the server`;

// fakeFetch("https://example.com/welcome")
//   .then((response) => {
//     if (response.data.logged === true) {
//       ansBox.textContent = response.data.message || msg;
//     }
//   })
//   .catch((err) => console.log(err));
// Output: As per the response from server

//   -------------------------------------------------********-------------------------------------------

//  Q10

// const fakeFetch = (url, dimensions) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/getImage") {
//         resolve({
//           status: 200,
//           data: {
//             image: {
//               link: `https://picsum.photos/${dimensions[0]}/${dimensions[1]}`,
//               title: "Random Image",
//             },
//           },
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "No photo of such dimension found",
//         });
//       }
//     }, 2000);
//   });
// };

// const imageBox = document.querySelector("#ans-box");

// fakeFetch("https://example.com/getImage", [500, 500])
//   .then((response) => {
//     const imageElem = document.createElement("img");
//     imageElem.src = response.data.image.link;
//     imageBox.appendChild(imageElem);
//   })
//   .catch((err) => {
//     console.log(error);
//   });

// Output on the DOM should be an image.
