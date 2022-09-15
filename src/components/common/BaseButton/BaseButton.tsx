import { FC, ReactElement } from "react";
import c from "classnames";
import styles from "./BaseButton.module.scss";

interface Props {
  text?: string;
  type?: string;
  testId?: string;
  textColor?: string;
  small?: boolean;
  linkURL?: string;
  large?: boolean;
  className?: any;
  medium?: boolean;
  fontSize?: number;
  success?: boolean;
  keyPress?: string;
  onClick?: Function;
  secundary?: boolean;
  iconLeft?: ReactElement | null;
  iconRight?: ReactElement | null;
  disabled?: boolean;
  marginTop?: number;
  marginRight?: number;
  isLoading?: boolean;
  marginBottom?: number;
  transparent?: boolean;
  isButtonLink?: boolean;
  backgroundColor?: string;
}

const BaseButton: FC<Props> = ({
  text = "",
  type = "",
  testId = "",
  textColor = "",
  iconLeft = null,
  iconRight = null,
  fontSize = 16,
  small = false,
  keyPress = "",
  large = false,
  marginTop = 0,
  medium = false,
  success = false,
  marginBottom = 0,
  disabled = false,
  secundary = false,
  isLoading = false,
  backgroundColor = "",
  onClick = () => {},
  className = null,
  isButtonLink = false,
}) => {
  const click = () => {
    if (isLoading || disabled) {
      return;
    }
    onClick();
  };

  const handleKeyPress = (e: any) => {
    console.log(keyPress);

    if (e.key === keyPress) {
      return onClick();
    }
  };

  return (
    <button
      tabIndex={0}
      onClick={click}
      onKeyPress={handleKeyPress}
      data-testid={`button-${testId}`}
      className={c(
        styles.button,
        small && styles.small,
        large && styles.large,
        className && className,
        medium && styles.medium,
        success && styles.buttonStateSuccess,
        disabled && styles.buttonStateDisabled,
        secundary && styles.secundary,
        isButtonLink && styles.isButtonLink
      )}
      style={{ backgroundColor, marginTop, marginBottom }}
      type={type === "submit" ? "submit" : "button"}
    >
      {iconLeft && <div className={styles.iconLeft}>{iconLeft}</div>}
      <div style={{ color: textColor, fontSize }} className={styles.text}>
        {text}
      </div>
      {iconRight && <div className={styles.iconRight}>{iconRight}</div>}
    </button>
  );
};

export default BaseButton;
