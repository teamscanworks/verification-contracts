import { FC } from 'react';
import BaseText from 'components/common/BaseText';
import { ScanworksLogo } from '../../../../../public/assets/logos';

import styles from './Navbar.module.scss';

const Navbar: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.containerActions}>
        <BaseText size={25} bold text="Contract regitry" />
      </div>
      <a
        target="_blank"
        rel="noreferrer "
        href="https://www.scanworks.org/"
        className={styles.navigationContainer}
      >
        <ScanworksLogo width={150} />
      </a>
    </div>
  );
};

export default Navbar;
