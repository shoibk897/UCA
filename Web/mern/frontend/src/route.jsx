import  {ManageProduct}  from "./components/manageProduct/index.jsx";
import ProductList from "./components/home/productList.jsx";
import { SignIn } from "./components/signin/signin.jsx";
import { SignUp } from "./components/signup/signup.jsx";
import { Layout } from "./layout.jsx";

export const routes = [
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <ProductList></ProductList>,
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/addproduct",
                element: <ManageProduct type="add"></ManageProduct>,
            },
            {
                path: "/editproduct",
                element: <ManageProduct type="edit"></ManageProduct>,
            },
        ],
    },
];