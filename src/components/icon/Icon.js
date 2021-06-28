import { ReactComponent as CustomerIcon } from '../../assets/svgs/customer.svg';
import { ReactComponent as LearningIcon } from '../../assets/svgs/learning.svg';
import { ReactComponent as SecurityIcon } from '../../assets/svgs/security.svg';
import { ReactComponent as TimeIcon } from '../../assets/svgs/time.svg';
import { ReactComponent as WorldIcon } from '../../assets/svgs/world.svg';

import styles from './Icon.module.css';

export const Icon = ({ iconIndex, iconPosition }) => {
    const position = iconPosition === 'right' ? styles.icon : styles.iconLeft;
    const icons = ['customer', 'learning', 'security', 'storage', 'time', 'world']
    return (
        <section className={styles.iconContainer}>
            {icons[iconIndex] === 'customer' && <CustomerIcon className={position} />}
            {icons[iconIndex] === 'learning' && <LearningIcon className={position} />}
            {icons[iconIndex] === 'security' && <SecurityIcon className={position} />}
            {icons[iconIndex] === 'storage' && <WorldIcon className={position} />}
            {icons[iconIndex] === 'time' && <TimeIcon className={position} />}
            {icons[iconIndex] === 'world' && <WorldIcon className={position} />}
        </section>
    )
};