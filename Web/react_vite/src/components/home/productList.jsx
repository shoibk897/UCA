import { useEffect, useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";

function ProductList() {

    var [productsList, setProductList] = useState([]);
    var [productsDetails, setproductsDetails] = useState([]);
    var [priceDetails, setpriceDetails] = useState([]);

    //usememo
    //usecallback

    // useEffect
    // variation 1 : only an anonymous func or arrwo function always re render
    // useEffect(()=>{
    //     console.log("component is redender every time");
    // })

    // variation 2 : arrow func, [] - only one time re render
    // useEffect(()=>{
    //     console.log("component is redender one time");
    // },[])

    // variation 3 : arrow func,[dependencis_name] 
    useEffect(() => {
        // make an api call/ web service for fetching price
        setpriceDetails([])
        //api call / web service to fetch reviews
    }, [productsDetails])

    setTimeout(() => {
        setProductList([
            { name: "Product1", price: "100" },
            { name: "Product2", price: "150" },
            { name: "Product3", price: "200" },
            { name: "Product4", price: "250" },
            { name: "Product5", price: "300" },
        ]);
        setproductsDetails([])
    }, 2000);


    return (
        <>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsList.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <button type="button" className="btn btn-success mx-4">
                <Link to={"/signup"}>Sign Up</Link>
            </button>
            <button type="button" className="btn btn-success mx-4">
                <Link to={'/signin'}>SignIn</Link>
            </button>
        </>
    );
}

export default ProductList;