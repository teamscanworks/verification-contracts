import { FC } from 'react';
import c from 'classnames';
import styles from './BaseTitle.module.scss';

interface Props {
  size?: number;
  title?: string;
  testId?: string;
  className?: any;
  center?: boolean;
  pointer?: boolean;
  marginTop?: number;
  fontWeight?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
}

const BaseTitle: FC<Props> = ({
  size,
  title,
  testId,
  center,
  pointer,
  marginTop,
  className,
  marginLeft,
  fontWeight,
  marginRight,
  marginBottom,
}) => {
  return (
    <div
      data-testid={`title-${testId}`}
      style={{
        marginTop,
        fontWeight,
        marginLeft,
        marginRight,
        marginBottom,
        fontSize: size,
      }}
      className={c(
        styles.title,
        center && styles.center,
        pointer && styles.pointer,
        className && className,
      )}
    >
      {title}
    </div>
  );
};

export default BaseTitle;
