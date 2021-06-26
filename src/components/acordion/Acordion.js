import { useState } from 'react';
import { acordionData } from "../../data/acordionData";
import { PanelItem } from '../panelItem';
import styles from './Acordion.module.css';


export const Acordion = ({ setIcon }) => {

    const [selectedItem, setSelectedItem] = useState(0);

    const clickHandler = (item, index) => {
        setSelectedItem(index);
        setIcon(item.icon);
    };
    return (
        <section className={styles.acordionContainer}>
            {acordionData.map((item, index) => (
                <PanelItem clickHandler={() => clickHandler(item, index)} key={index} data={item} isExpanded={index === selectedItem} />
            ))}
        </section>
    )
};