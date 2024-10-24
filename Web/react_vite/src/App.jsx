import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from './route';

export function App() {

    const route = createBrowserRouter(routes);

    return (
        <>
            <RouterProvider router={route}></RouterProvider>
        </>);
}




