import express from "express";
// import fileSystem from "fs";
import ProductsModel from "../model/product.js";
// import { ProductsModel } from "../models/products.js";

const router = express.Router();

// router.get("/", (req, res) => {
//     console.log("Response now from router");
//     let fileData = fileSystem.readFileSync("./db.json", { encoding: "utf-8" });
//     const products = JSON.parse(fileData)?.products;
//     console.log("The products data is: ", products);
//     if (products && products.length > 0) {
//         res.send(products);
//     } else {
//         res.status(204);
//         res.send();
//     }
// });

// router.post("/", (req, res) => {
//     const product = req.body;
//     // Logic to update the content in file
//     let db;
//     try {
//         db = fileSystem.readFileSync("./db.json", { encoding: "utf-8" });
//     } catch (error) {
//         res.status(500);
//         return res.send({
//             message: "Problem connecting with database",
//             error: error,
//         });
//     }
//     let dbParsed = JSON.parse(db);
//     console.log(dbParsed);
//     let currentProductsList = dbParsed.products;
//     let updatedProductsList = [...currentProductsList, product];
//     let updatedDbParsed = { ...dbParsed, products: updatedProductsList };
//     let updatedDb = JSON.stringify(updatedDbParsed);

//     try {
//         fileSystem.writeFileSync("./db.json", updatedDb);
//         res.send({ message: "Post api success", product: product });
//     } catch (error) {
//         res.status(500);
//         res.send({ error: error, message: "Post api failure" });
//     }

// });
router.get("/", (req, res) => {
    console.log("Response now from router");
  
    ProductsModel.findAllProducts(
      (dbRes) => {
        if (dbRes) {
          res.send(dbRes);
        } else {
          res.status(204);
          res.send(dbRes);
        }
      },
      (dbErr) => {
        console.log(dbErr.name);
        res.status(500);
        res.send({ error: dbErr.message });
      }
    );
  });


// router.post("/", (req, res) => {
//     const product = req.body;

//     ProductsModal.addProduct(
//         product,
//         (dbRes) => {
//             res.send(dbRes);
//         }, (dbError) => {
//             res.status(500);
//             res.send(dbError);
//         });
// })
router.post("/", (req, res) => {
    const product = req.body;
  
    ProductsModel.addProduct(
      product,
      (dbRes) => {
        if (dbRes) {
          res.send(dbRes);
        } else {
          res.status(400);
          res.send(dbRes);
        }
      },
      (dbErr) => {
        console.log(dbErr.name);
        if (dbErr.name === "ValidationError") {
          res.status(400);
        } else {
          res.status(500);
        }
        res.send({ error: dbErr.message });
      }
    );
  });

// router.put("/", (req, res) => {
//     const product = req.body;
//     // Logic to update the content in file
//     let db;
//     try {
//         db = fileSystem.readFileSync("./db.json", { encoding: "utf-8" });
//     } catch (error) {
//         res.status(500);
//         return res.send({
//             message: "Problem connecting with database",
//             error: error,
//         });
//     }
//     let dbParsed = JSON.parse(db);
//     let currentProductsList = dbParsed.products;

//     // Update the products list with updated data
//     let productToBeUpdatedIndex = currentProductsList.findIndex(
//         (item) => item.id === product.id
//     );
//     if (productToBeUpdatedIndex > -1) {
//         currentProductsList[productToBeUpdatedIndex] = product;
//     } else {
//         res.status(400);
//         res.send({ error: "Product does not exist" });
//     }

//     let updatedDbParsed = { ...dbParsed, products: currentProductsList };
//     let updatedDb = JSON.stringify(updatedDbParsed);

//     try {
//         fileSystem.writeFileSync("./db.json", updatedDb);
//         res.send({ message: "Post api success", product: product });
//     } catch (error) {
//         res.status(500);
//         res.send({ error: error, message: "Post api failure" });
//     }
// });
router.put("/", (req, res) => {
    const product = req.body;
  
    ProductsModel.editProduct(
      product,
      (dbRes) => {
        if (dbRes) {
          res.send(dbRes);
        } else {
          res.status(400);
          res.send(dbRes);
        }
      },
      (dbErr) => {
        console.log(dbErr.name);
        if (dbErr.name === "ValidationError") {
          res.status(400);
        } else {
          res.status(500);
        }
        res.send({ error: dbErr.message });
      }
    );
  });

// router.delete("/", (req, res) => {
//     const product = req.body;
//     // Logic to update the content in file
//     let db;
//     try {
//         db = fileSystem.readFileSync("./db.json", { encoding: "utf-8" });
//     } catch (error) {
//         res.status(500);
//         return res.send({
//             message: "Problem connecting with database",
//             error: error,
//         });
//     }
//     let dbParsed = JSON.parse(db);
//     let currentProductsList = dbParsed.products;

//     // Update the products list with updated data
//     let productToBeUpdatedIndex = currentProductsList.findIndex(
//         (item) => item.id === product.id
//     );
//     let updatedProductsList;
//     if (productToBeUpdatedIndex > -1) {
//         currentProductsList.splice(productToBeUpdatedIndex, 1);
//         updatedProductsList = currentProductsList.filter(
//             (item) => item.id !== product.id
//         );
//     } else {
//         res.status(400);
//         res.send({ error: "Product does not exist" });
//     }

//     let updatedDbParsed = { ...dbParsed, products: updatedProductsList };
//     let updatedDb = JSON.stringify(updatedDbParsed);

//     try {
//         fileSystem.writeFileSync("./db.json", updatedDb);
//         res.send({ message: "Product removed succesfully", product: product });
//     } catch (error) {
//         res.status(400);
//         res.send({ error: error, message: "Delete api failure" });
//     }
// });
router.delete("/", (req, res) => {
    const productId = req.body._id;
  
    ProductsModel.deleteProduct(
      productId,
      (dbRes) => {
        if (dbRes) {
          res.send(dbRes);
        } else {
          res.status(400);
          res.send({error: "Product does not exist"});
        }
      },
      (dbErr) => {
        console.log(dbErr.name);
        if (dbErr.name === "ValidationError") {
          res.status(400);
        } else {
          res.status(500);
        }
        res.send({ error: dbErr.message });
      }
    );
  });

export default router;  