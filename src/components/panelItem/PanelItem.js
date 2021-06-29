import { useEffect, useRef } from 'react';
import ArrowIcon from '../arrowIcon/ArrowIcon';

import styles from './PanelItem.module.css';


export const PanelItem = ({ data, clickHandler, isExpanded }) => {

    const { title, text } = data;

    const ref = useRef(null);

    useEffect(() => {
        ref.current?.focus();
    }, []);

    return (
        <div
            className={styles.panelContainer}
            tabIndex='0'
            ref={ref}
        >
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