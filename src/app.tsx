import {Link, Router} from "preact-router";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import Docs from "./pages/Docs.tsx";

export function App() {
    return (
        <>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/docs">Documentation</Link>
                <Link href="/login">Login</Link>
                <Link href="/signup">Signup</Link>
            </nav>
            <Router>
                <Home path="/"/>
                <Docs path="/docs" />
                <Docs path="/docs/:catchAll(.*)" />
                <NotFound default />
            </Router>
        </>
    );
}
