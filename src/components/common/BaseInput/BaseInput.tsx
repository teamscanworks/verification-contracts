import { FC, useEffect, ChangeEvent, ReactElement } from "react";
import BaseErrorMessage from "../BaseErrorMessage";
import styles from "./BaseInput.module.scss";
import BaseText from "../BaseText";

interface Props {
  value?: any;
  type?: string;
  inputRef?: any;
  label?: string;
  inputName: string;
  marginTop?: number;
  maxLength?: number;
  required?: boolean;
  multiple?: boolean;
  disabled?: boolean;
  placeholder?: string;
  marginBottom?: number;
  iconLeft?: ReactElement | null;
  autoComplete?: string;
  onPaste?: (e: any) => void;
  onBlur?: (value: string) => void;
  errorMessage?: string | undefined;
  onKeyPress?: (value: string) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const BaseInput: FC<Props> = ({
  inputName,
  value = "",
  label = "",
  type = "text",
  onBlur = null,
  marginTop = 0,
  inputRef = null,
  maxLength = 100,
  required = false,
  multiple = false,
  disabled = false,
  marginBottom = 0,
  placeholder = "",
  errorMessage = "",
  onKeyPress = null,
  onPaste = () => {},
  autoComplete = "off",
  handleChange = () => {},
}) => {
  useEffect(() => {
    if (inputRef) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <div className={styles.containerInput} style={{ marginTop, marginBottom }}>
      {label && <BaseText bold marginBottom={2} text={label} />}
      <input
        min="0"
        value={value}
        ref={inputRef}
        name={inputName}
        onPaste={onPaste}
        multiple={multiple}
        required={required}
        disabled={disabled}
        maxLength={maxLength}
        onBlur={() => onBlur}
        onChange={handleChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onKeyPress={() => onKeyPress}
        type={type}
        className={styles.input}
      />
      {errorMessage && <BaseErrorMessage text={errorMessage} />}
    </div>
  );
};

export default BaseInput;
