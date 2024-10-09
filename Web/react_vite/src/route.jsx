import ProductList from './components/home/productList.jsx';
import SignUp from "./components/signup/signup";
import SignIn from './components/signin/signin';
import { Layout } from './layout.jsx';

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
        ],
    },
]