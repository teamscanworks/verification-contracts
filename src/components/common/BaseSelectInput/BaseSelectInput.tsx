import { FC } from 'react';
import Select from 'react-select';
import BaseErrorMessage from '../BaseErrorMessage';
import BaseText from '../BaseText';
import { FormikErrors } from 'formik';
import styles from './BaseSelectInput.module.scss';

type OptionType = { label: string; value: string }[];

interface ISelectInputProps {
  value: string;
  label?: string;
  testId?: string;
  isMulti?: boolean;
  inputName?: string;
  marginTop?: number;
  options: OptionType;
  setFieldValue?: any;
  isLoading?: boolean;
  placeholder: string;
  myCustomOptions?: any;
  isClearable?: boolean;
  marginBottom?: number;
  isSearcheable?: boolean;
  errorMessage: FormikErrors<string> | string;
}

const BaseSelectInput: FC<ISelectInputProps> = ({
  value,
  options,
  isLoading,
  label = '',
  setFieldValue,
  marginTop = 0,
  isMulti = false,
  inputName = '',
  myCustomOptions,
  marginBottom = 0,
  placeholder = '',
  errorMessage = '',
  isClearable = false,
}) => {
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      cursor: 'pointer',
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
    }),
  };

  const handleSelect = (isMulti: boolean, options: any, inputName: string) => {
    let optionSelected: any;
    if (isMulti) {
      optionSelected = [];
      options.forEach((option: any) => {
        optionSelected.push(option.value);
      });

      return setFieldValue(inputName, optionSelected);
    }
    setFieldValue(inputName, options.value);
  };

  const setValues = (options: any, value: any, isMulti: boolean) => {
    let values: any;
    if (isMulti) {
      values = [];
      value &&
        value.forEach((element: any) => {
          values.push(options.find((option: any) => option.value === element));
        });
      return values;
    }
    values = options.find((option: any) => option.value === value);
    return values;
  };

  return (
    <div style={{ marginTop, marginBottom }}>
      {label && <BaseText bold marginBottom={2} text={label} />}
      <Select
        name={inputName}
        isMulti={isMulti}
        options={options}
        isLoading={isLoading}
        styles={customStyles}
        placeholder={placeholder}
        className={styles.select}
        isClearable={isClearable}
        components={
          myCustomOptions ? { Option: myCustomOptions } : { IndicatorSeparator: null }
        }
        value={setValues(options, value, isMulti)}
        onChange={(option: any) => {
          handleSelect(isMulti, option, inputName);
        }}
        theme={(theme: any) => ({
          ...theme,
          colors: {
            ...theme,
            primary25: '#31b237',
            neutral50: '#1e1e20',
            neutral0: '#fff',
          },
        })}
      />
      {errorMessage && <BaseErrorMessage text={errorMessage} />}
    </div>
  );
};

export default BaseSelectInput;
