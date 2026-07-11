import styles from "./Paragraph.module.css";

export function P({ children }) {
    return (
        <p className={styles.p}>
            {children}
        </p>
    );
}