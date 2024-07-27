import styles from "./NotFound.module.css";

interface NotFoundProps {
    default?: boolean
}

const NotFound = ({}: NotFoundProps) => (
    <div>
        <h1>404 Not Found</h1>
        <h2 className={styles.details}>The requested resource could not be found.</h2>
    </div>
);

export default NotFound;
