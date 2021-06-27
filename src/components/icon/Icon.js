import { ReactComponent as CustomerIcon } from '../../assets/svgs/customer.svg';
import { ReactComponent as LearningIcon } from '../../assets/svgs/learning.svg';
import { ReactComponent as SecurityIcon } from '../../assets/svgs/security.svg';
import { ReactComponent as TimeIcon } from '../../assets/svgs/time.svg';
import { ReactComponent as WorldIcon } from '../../assets/svgs/world.svg';

import styles from './Icon.module.css';

export const Icon = ({ icon, iconPosition }) => {
    const position = iconPosition === 'right' ? styles.icon : styles.iconLeft;
    return (
        <section className={styles.iconContainer}>
            {icon === 'customer' && <CustomerIcon className={position} />}
            {icon === 'learning' && <LearningIcon className={position} />}
            {icon === 'security' && <SecurityIcon className={position} />}
            {icon === 'storage' && <WorldIcon className={position} />}
            {icon === 'time' && <TimeIcon className={position} />}
            {icon === 'world' && <WorldIcon className={position} />}
        </section>
    )
};