import ProductList from './components/home/productList.jsx';
import SignUp from "./components/signup/signup";
import SignIn from './components/signin/signin';
import { Layout } from './layout.jsx';
import ManageProduct from './components/manageProduct/index.jsx';

export const routes = [

    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <ProductList></ProductList>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>
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
]