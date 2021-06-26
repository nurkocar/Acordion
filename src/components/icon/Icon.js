import { ReactComponent as CustomerIcon } from '../../assets/svgs/customer.svg';
import { ReactComponent as LearningIcon } from '../../assets/svgs/learning.svg';
import { ReactComponent as SecurityIcon } from '../../assets/svgs/security.svg';
import { ReactComponent as TimeIcon } from '../../assets/svgs/time.svg';
import { ReactComponent as WorldIcon } from '../../assets/svgs/world.svg';

import styles from './Icon.module.css';

export const Icon = ({ icon }) => {
    return (
        <section className={styles.iconContainer}>
            {icon === 'customer' && <CustomerIcon className={styles.icon} />}
            {icon === 'learning' && <LearningIcon className={styles.icon} />}
            {icon === 'security' && <SecurityIcon className={styles.icon} />}
            {icon === 'storage' && <WorldIcon className={styles.icon} />}
            {icon === 'time' && <TimeIcon className={styles.icon} />}
            {icon === 'world' && <WorldIcon className={styles.icon} />}
        </section>
    )
};