// class student {
//   #firstName
//   lastName
  
//   constructor(marks,firstName) {
//     this.obtainedMarks = marks;
//     this.#firstName = firstName;
//     this.lastName = "khan"
//   }
// }


// var student1 = new student(400, "Joe");


// function renderProducts() {
//   let productsListFromServer = [];

//   function getProductsList() {
//     productsListFromServer = productList;
//     initProductsListTable();
//   }

//   function initProductsListTable() {
//     if (!productsListFromServer || productsListFromServer?.length === 0) {
//       document.getElementById("productMenu").innerHTML = `${getLoader()}`;
//       return;
//     }
//     document.getElementById("productMenu").innerHTML = `
//           <div class="row center">
//           <div>${student1.obtainedMarks} : ${student1.firstName} ${student1.lastName} </div>
//             <div class="col-6">
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Sr. No. </th>
//                     <th>Product Name</th>
//                     <th>Description</th>
//                     <th>Price</th>
//                   </tr>
//                 </thead>
//                 ${getProductListHTMLUsingMap()}
//               </table>
//             </div>
//           </div>
//         `;
//   }

//   function getProductListHTMLUsingMap() {
//     if (!productsListFromServer || productsListFromServer?.length === 0) {
//       return ``;
//     }
//     var rowsOfProducts = productsListFromServer?.map((item, index) => {
//       return `<tr>
//                 <td>${index + 1}</td>
//                 <td>${item.name}</td>
//                 <td>${item.description}</td>
//                 <td>${item.price}</td>
//               </tr>`;
//     });

//     return `
//         <tbody>
//           ${rowsOfProducts?.join("")}
//         </tbody>
//       `;
//   }

//   function getLoader() {
//     if (!productsListFromServer || productsListFromServer?.length === 0) {
//       return `
//           <div class="row">
//             <div class="col">
//               Loading Data
//             </div>
//           </div>
//         `;
//     } else return ``;
//   }

//   initProductsListTable();
//   setTimeout(getProductsList, 5000);
// }


// renderProducts();


  