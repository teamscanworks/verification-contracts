import { FC, ReactElement } from 'react';
import BaseText from '../BaseText';

import styles from './BasePill.module.scss';

interface Props {
  text?: string;
  color?: string;
  size?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  iconLeft?: ReactElement;
  backgroundColor: string;
}

const BasePill: FC<Props> = ({
  size,
  color,
  text = '',
  iconLeft,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  backgroundColor,
}) => {
  return (
    <div
      style={{
        marginTop,
        marginLeft,
        marginRight,
        marginBottom,
        fontSize: size,
        backgroundColor,
      }}
      className={styles.pill}
    >
      {iconLeft && <div className={styles.icon}>{iconLeft}</div>}
      <BaseText regular color={color} size={12} text={text} />
    </div>
  );
};

export default BasePill;
