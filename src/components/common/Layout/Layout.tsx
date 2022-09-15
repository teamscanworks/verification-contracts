import { FC, ReactElement } from 'react';
import { motion } from 'framer-motion';
import styles from './Layout.module.scss';

interface Props {
  children?: ReactElement;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <motion.div
      id="layout"
      initial="hidden"
      animate="visible"
      className={styles.layout}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ ease: 'easeOut', delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
