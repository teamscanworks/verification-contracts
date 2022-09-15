import { motion } from 'framer-motion';
import { FC } from 'react';
import c from 'classnames';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import styles from './BaseLoading.module.scss';

interface Props {
  center?: boolean;
  isLoadingButton?: boolean;
  marginTop?: number | string;
}

const BaseLoading: FC<Props> = ({ center, marginTop = 0, isLoadingButton = false }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      style={{ marginTop }}
      transition={{ ease: 'easeOut', delay: 0.1 }}
      className={c(
        styles.container,
        center && styles.center,
        isLoadingButton && styles.isLoading,
      )}
    >
      <AiOutlineLoading3Quarters
        size={30}
        className={c(styles.spinner, isLoadingButton && styles.isLoadingButton)}
      />
    </motion.div>
  );
};

export default BaseLoading;
