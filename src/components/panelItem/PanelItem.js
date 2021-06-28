import ArrowIcon from '../arrowIcon/ArrowIcon';

import styles from './PanelItem.module.css';


export const PanelItem = ({ data, clickHandler, isExpanded }) => {

    const { title, text } = data;

    return (
        <div className={styles.panelContainer}>
            <div
                className={styles.panelTitle}
                onClick={clickHandler}
                role="button"
                aria-pressed="true"
            >
                <span>{title}</span>
                <ArrowIcon className={`${styles.accordionIcon} ${isExpanded ? styles.rotate : ''}`} width={10} fill={"#82009E"} />
            </div>

            <div className={`${styles.panelCollapse} ${isExpanded ? styles.open : ''}`} >
                <div className={styles.panelBody}>
                    {text}
                </div>
            </div>
        </div>
    )
};