import styles from './Subtitle.module.css';

export const Subtitle = ({ subtitle }) => {
    return(
        <section className = { styles.subtitleContainer }>
            {subtitle}
        </section>
    )
};