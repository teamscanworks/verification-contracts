import { FC } from 'react';
import c from 'classnames';
import styles from './BaseText.module.scss';

interface Props {
  style?: any;
  onClick?: any;
  text: string | number;
  size?: number;
  color?: string;
  bold?: boolean;
  thin?: boolean;
  className?: any;
  center?: boolean;
  medium?: boolean;
  maxWidth?: number;
  regular?: boolean;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  cursor?: string;
}

const BaseText: FC<Props> = ({
  size = 14,
  style,
  text,
  marginTop,
  marginLeft,
  marginRight,
  maxWidth,
  className,
  thin = false,
  marginBottom,
  color = '',
  bold = false,
  onClick = null,
  medium = false,
  center = false,
  regular = false,
  cursor = '',
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        color,
        maxWidth,
        marginTop,
        marginLeft,
        marginRight,
        marginBottom,
        fontSize: size,
        cursor: cursor && 'pointer',
      }}
      className={c(
        style,
        styles.text,
        bold && styles.bold,
        thin && styles.thin,
        center && styles.center,
        medium && styles.medium,
        regular && styles.regular,
        className && className,
      )}
    >
      {text}
    </div>
  );
};

export default BaseText;
