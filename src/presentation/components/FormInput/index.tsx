import { useState } from "react";
import { Form } from "react-bootstrap";
import styles from "./styles.module.scss";

interface IFormInputProps {
  placeholder?: string;
  title?: string;
  options?: IRadioOption[];
  label?: string;
  name?: string;
  type?: string;
  value?: string;
  handleChange?: any;
  errorMessage?: string;
  required?: boolean;
  pattern?: string;
}

interface IRadioOption {
  label: string;
  value: number;
}

export default function FormInput(props: IFormInputProps) {
  const {
    type,
    name,
    value,
    label,
    options,
    placeholder,
    handleChange,
    errorMessage,
    required,
    pattern,
  } = props;

  const [focused, setFocused] = useState(false);

  return (
    <Form.Group className={styles.formContainer}>
      {type != "radio" ? (
        type == "label" ? (
          <>
            <Form.Label>{label}</Form.Label>
          </>
        ) : (
          <>
            {label ? <Form.Label>{label}</Form.Label> : null}
            <Form.Control
              required={required}
              pattern={pattern}
              type={type ? type : "input"}
              name={name ? name : ""}
              placeholder={placeholder ? placeholder : ""}
              value={value}
              onChange={handleChange}
            />
            <span className={styles.errorMessage}>{errorMessage}</span>
          </>
        )
      ) : (
        <>
          {label ? (
            <>
              <Form.Label>{label}</Form.Label>
              <br />
            </>
          ) : null}
          {options?.map((option) => (
            <>
              <Form.Check
                required={required}
                inline
                type="radio"
                key={option.value}
                label={option.label}
                value={option.value}
                name={name}
                onChange={handleChange}
              />
              <span>{errorMessage}</span>
              <br />
            </>
          ))}
        </>
      )}
    </Form.Group>
  );
}
