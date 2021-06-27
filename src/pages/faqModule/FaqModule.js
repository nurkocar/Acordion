import { useState } from 'react';
import { Title } from "../../components/title";
import { Subtitle } from "../../components/subtitle";
import { Acordion } from "../../components/acordion";
import { Icon } from '../../components/icon';
import { Button } from "../../components/button";

import styles from './FaqModule.module.css';

export const FaqModule = ({ data, iconPosition }) => {

    const [icon, setIcon] = useState('customer');

    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    <Title title={item.title} />
                    <Subtitle subtitle={item.text} />
                    <div className={`${styles.acordionAndIconContainer} ${iconPosition === 'left' ? styles.iconLeft : ''}`} >
                        <Acordion setIcon={setIcon} />
                        <Icon iconPosition={iconPosition} icon={icon} />
                    </div>
                    <Button title={item.buttonText} />
                </div>
            ))}

        </div>
    )
};
