import { Link, Router } from "preact-router";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import Docs from "./pages/Docs.tsx";
import Contact from "./pages/Contact.tsx";

export function App() {
    return (
        <>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/docs/introduction">Documentation</Link>
                <Link href="/contact">Contact</Link>
            </nav>
            <Router>
                <Home path="/" />
                <Docs path="/docs" />
                <Docs path="/docs/:catchAll(.*)" />
                <Contact path="/contact" />
                <NotFound default />
            </Router>
        </>
    );
}
