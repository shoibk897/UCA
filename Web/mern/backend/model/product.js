import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
        productName : {
            type: String,
            require : true
        },
        productPrice : {
            type : Number,
            require : true
        }
});

const ProductsModel = mongoose.model("product",productSchema);

ProductsModel.addProduct = async (product, successCallback, errorCallback) => {
    try{
        const dbRes = await  ProductsModel.insertMany([product])
        console.log("POST | dbRes is : ", dbRes);
        successCallback(dbRes);
    } catch (dbError){
        console.error("POST | dbError is : ", dbError);
        errorCallback(dbError);
    }
}

ProductsModel.findAllProducts = async (successCallback, errorCallback) => {
    try {
      const dbRes = await ProductsModel.find();
      console.log("GET | dbRes is: ", dbRes);
      successCallback(dbRes);
    } catch (dbErr) {
      console.error("GET | dbErr is: ", dbErr.Error);
      errorCallback(dbErr);
    }
  };

ProductsModel.editProduct = async (product, successCallback, errorCallback) => {
    try {
      const dbRes = await ProductsModel.findByIdAndUpdate(product._id, product);
      console.log("Edit | dbRes is: ", dbRes);
      successCallback(dbRes);
      // throw new Error("abc")
    } catch (dbErr) {
      console.error("Edit | dbErr is: ", dbErr.Error);
      errorCallback(dbErr);
    }
  };

ProductsModel.deleteProduct = async (id, successCallback, errorCallback) => {
    try {
      const dbRes = await ProductsModel.findByIdAndDelete(id);
      console.log("Delete | dbRes is: ", dbRes);
      successCallback(dbRes);
      // throw new Error("abc")
    } catch (dbErr) {
      console.error("Delete | dbErr is: ", dbErr.Error);
      errorCallback(dbErr);
    }
  };

export default ProductsModel;