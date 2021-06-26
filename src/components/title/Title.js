import styles from './Title.module.css';

export const Title = ({ title }) => {
    return (
        <header className = { styles.titleContainer }>
            {title}
        </header>
    )
};