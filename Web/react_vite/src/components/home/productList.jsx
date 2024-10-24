import { useEffect, useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../elements/button/index";

function ProductList() {

    const navigate = useNavigate();
    var [productList, setProductList] = useState([]);
    var [productsDetails, setproductsDetails] = useState([]);
    var [priceDetails, setPriceDetails] = useState([]);

    //usememo
    //usecallback

    // Variation 1: Do this, Whenever component re-renders
    useEffect(() => {
        // console.log("Component is re-renderd");
    });

    // Variation 2: Do this, only at initial render
    useEffect(() => {
        // console.log("Component is re-renderd");
        // Fetch the details of the produict
        setproductsDetails([]);
    }, []);

    useEffect(() => {
        fetchProductData();
    }, []);

    const fetchProductData = async () => {
        var productResponse = await fetch("http://localhost:3001/ProductList");
        var productList = await productResponse.json();

        console.log("The products list is: ", productList);

        if (
            productResponse.ok &&
            (productResponse.status == "201" || productResponse.status == "200")
        ) {
            setProductList(productList);
        } else {
            // setShowFailureAlert(true);
        }
    };

    // Variation 3: Do this, based on the dependency update
    useEffect(() => {
        // Make an API/web service call to fetch the prices
        setPriceDetails([]);
        // Make an API/web service call to fetch reviews
    }, [productsDetails]);

    // setTimeout(() => {
    //   setProductList([
    //     { name: "Product1 Name", price: 20.0 },
    //     { name: "Product2 Name", price: 30.0 },
    //     { name: "Product3 Name", price: 30.0 },
    //     { name: "Product4 Name", price: 30.0 },
    //   ]);
    //   setProductsDetails([]);
    // }, 1000);


    const navigateToEditProduct = (item) => {
        sessionStorage.setItem("selectedProduct", JSON.stringify(item));
        // navigate("editproduct", { state: item });
        navigate("/editproduct");
    };

    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.productName}</td>
                                <td>{item.productPrice}</td>
                                <td className="d-flex">
                                    <Button type="primary">
                                        <Link className="nav-link" onClick={() => { navigateToEditProduct(item) }}>
                                            Edit Product
                                        </Link>
                                    </Button>
                                    <Button type="danger">
                                        Delete Product
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;