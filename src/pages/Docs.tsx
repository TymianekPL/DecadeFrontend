import styles from "./docs.module.css";
import {Link, Router} from "preact-router";
import Setup from "./docs/Setup";
import Introduction from "./docs/Introduction.tsx";

interface DocsProps {
    path: string;
}

const docs = [
    {id: "introduction", title: "Introduction"},
    {id: "setup", title: "Setup"},
    {id: "usage", title: "Usage"},
    {id: "api", title: "API Reference"}
];

const Docs = ({}: DocsProps) => {
    const currentPath = window.location.pathname;

    // Determine current section index
    const currentIndex = docs.findIndex(section => section.id === currentPath.split("/")[currentPath.split("/").length - 1]);

    // Define next and previous sections
    const prevSection = docs[currentIndex - 1] || null;
    const nextSection = docs[currentIndex + 1] || null;

    return (
        <>
            <h1>Documentation</h1>
            <div className={styles.docsContainer}>
                <ul className={styles.docsList}>
                    {docs.map((doc, index) => (
                        <li key={doc.id}>
                            <Link href={`/docs/${doc.id}`} className={index == currentIndex ? styles.docsListSelectedItem : ""}>{doc.title}</Link>
                        </li>
                    ))}
                </ul>

                <div className={styles.content}>
                    <Router>
                        <Introduction path="/docs/introduction" default/>
                        <Setup path="/docs/setup"/>
                    </Router>
                </div>
            </div>

            <div className={styles.navigationButtons}>
                {prevSection && (
                    <Link href={"/docs/" + prevSection.id}>
                        <button className={styles.navButton}>Previous: {prevSection.title}</button>
                    </Link>
                )}
                {nextSection && (
                    <Link href={"/docs/" + nextSection.id}>
                        <button className={styles.navButton}>Next: {nextSection.title}</button>
                    </Link>
                )}
            </div>
        </>
    );
}

export default Docs;