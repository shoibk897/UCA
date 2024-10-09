import { Header } from "./header";
import { Outlet } from "react-router-dom";

export function Layout() {

    return (
        <>
            <header>
                <Header></Header>
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>)
}
