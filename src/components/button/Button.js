import styles from './Button.module.css';

export const Button = ({ title }) => {
    return (
        <div className={styles.buttonContainer}>
            <button className={styles.button}>{title}</button>
        </div>
    )
}