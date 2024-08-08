function renderProduct() {
    

    function fetchProductList() {
        console.log("fetching product list");
        productListFromServer = productList;
        initProduct();
    }

    function initProduct() {
        document.getElementById("productmenu").innerHTML = `
    <h3>List of Products</h3>
            <table>
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>Product Name</th>
                        <th>Product Details</th>
                        <th>Product Price</th>
                    </tr>
                </thead>
                <tbody>
                    ${getProductListHtmlMap()}
                </tbody>
            </table>
            `;
    }

    function getProductListHtmlMap() {
        if (!productListFromServer || productListFromServer?.length === 0) {
            return "Loading data";
        }
        var rowsOfProducts = productListFromServer?.map((item, index) => {
            return `<tr>
                <td> ${index + 1} </td>
                <td> ${item.name} </td>
                <td> ${item.desccription} </td>
                <td> ${item.price} </td>
                </tr>`;
        });
        return rowsOfProducts?.join("");
    }

    initProduct();
    setTimeout(fetchProductList, 2000);
    var productListFromServer = [];

}

renderProduct();
