import { useRef, useEffect, useState } from "react";
import { PageTitle } from "../elements/pageTitle";

function ManageProduct({ type = "add" }) {
    const productName = useRef(null);
    const productPrice = useRef(null);

    const [selectedProduct, setSelectedProduct] = useState({});

    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showFailureAlert, setShowFailureAlert] = useState(false);

    useEffect(() => {
        if (type !== "edit") return;
        const selectedProductFromStorage = sessionStorage.getItem("selectedProduct");;
        console.log(selectedProductFromStorage);
        setSelectedProduct(JSON.parse(selectedProductFromStorage));
    }, [type]);

    const ProductHandler = async (event) => {
        event.preventDefault();

        var formValuesObject = {
            productName: productName.current.value,
            productPrice: productPrice.current.value,
        };

        if (formValuesObject.productName && formValuesObject.productPrice) {
            console.log("form submitted");

            const url = type === "add" ? "http://localhost:3001/ProductList" : `http://localhost:3001/ProductList/${selectedProduct.id}`;

            const method = type === "add" ? "POST" : "PUT";

            var response = await fetch(url,{
                method,
                body: JSON.stringify({ ...formValuesObject }),
            });

            if (response.ok && (response.status == "201" || response.status == "200")) {
                setShowFailureAlert(false);
                setShowSuccessAlert(true);
            } else {
                setShowSuccessAlert(false);
                setShowFailureAlert(true);
            }
            console.log("The response of POST API call is ", response);
        } else {
            setShowFailureAlert(true);
        }
    }

    return <>

        {type === "add" ? (
            <PageTitle>Add Product Page</PageTitle>
        ) : (
            <PageTitle>Edit Product Page</PageTitle>
        )}

        {showSuccessAlert && (
            <div className="alert alert-success" role="alert">
                Product {type === "add" ? "Added" : "Updated"} successfully
            </div>
        )}

        {showFailureAlert && (
            <div className="alert alert-danger" role="alert">
                Error {type === "add" ? "creating" : "updating"} product
            </div>
        )}

        <form className="row g-3" onSubmit={ProductHandler}>
            <div className="col-md-6">
                <label htmlFor="productName" className="form-label">
                    Product name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="productName"
                    ref={productName}
                    defaultValue={type === "add" ? "" : selectedProduct.productName}
                />
            </div>
            <div className="col-md-6">
                <label htmlFor="productPrice" className="form-label">
                    Product price
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="productPrice"
                    ref={productPrice}
                    defaultValue={type === "add" ? "" : selectedProduct.productPrice}
                />
            </div>

            <div className="col-12" style={{ textAlign: "center" }}>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </div>
        </form>
    </>
}

export default ManageProduct;