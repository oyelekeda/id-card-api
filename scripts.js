// const url = "https://dummyjson.com/users";
// const fetchData = {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
// }

// let allProducts = document.querySelector("#allProducts");

// fetch(url, fetchData)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     let products = data.products;
//     console.log(products);

//     allProducts.innerHTML = products
//       .map(function (value, index, array) {
//         let newPrice = ((100 - value.discountPercentage) / 100) * value.price;
//         return `
//             <div class="eachProduct">
//                 <img src="${value.thumbnail}" alt="">
//                 <span class="discount">-${value.discountPercentage}%</span>
//                 <p>${value.title}</p>
//                 <p>
//                     <span class="oldPrice">$${value.price}</span>
//                     <span>$${newPrice.toFixed(2)}</span>
//                 </p>
//                 <button>Add to Cart</button>
//             </div>
//         `;
//       })
//       .join("");
//   })
//   .catch(function (error) {
//     alert("Error fetching product");
//     console.log(error);
//   });

const url = "https://dummyjson.com/users";
const fetchData = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

let allUsers = document.querySelector("#allProducts"); 

// fetch(url, fetchData)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     let users = data.users;


    fetch(url, fetchData)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        let users = data.users;
        console.log(user);

        allUsers.innerHTML = users
          .map(function (user) {
            return `
          <div class="eachUser">
            <img src="${user.image}" alt="${user.firstName}">
            <h3>${user.firstName} ${user.lastName}</h3>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Company: ${user.company.name}</p>
          </div>
        `;
          })
          .join("");
      })
      .catch((error) => {
        alert("Error fetching users");
        console.log(error);
      });

