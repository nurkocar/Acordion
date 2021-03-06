import { acordionData } from "../../data/acordionData";
import { PanelItem } from '../panelItem';
import styles from './Acordion.module.css';


export const Acordion = ({ selectedItem, setSelectedItem }) => {


    const clickHandler = (index) => {
        setSelectedItem(index);
    };

    const handleKeyPress = (e) => {
        e.preventDefault();

        if (e.key === 'ArrowUp' && selectedItem > 0) {
            setSelectedItem(prevState => prevState - 1);
        }
        if (e.key === 'ArrowDown' && selectedItem < acordionData.length - 1) {
            setSelectedItem(prevState => prevState + 1);
        }
    }


    return (
        <section
            className={styles.acordionContainer}
            onKeyDown={handleKeyPress}
        >
            {acordionData.map((item, index) => (
                <PanelItem
                    key={index}
                    data={item}
                    isExpanded={index === selectedItem}
                    clickHandler={() => clickHandler(index)}
                />
            ))}
        </section>
    )
};