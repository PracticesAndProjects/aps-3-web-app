import React from "react";
import { Form } from "react-bootstrap";
import IPrivateUser from "../../../domain/models/User/PrivateUser";

interface IFormInputProps {
  placeholder?: string;
  label?: string;
  name?: string;
  type?: string;
  value?: string;
  handleChange?: any;
}

export default function FormInput(props: IFormInputProps) {
  return (
    <Form.Group>
      {props.type != "radio" ? (
        <>
          {props.label ? <Form.Label>{props.label}</Form.Label> : null}
          <Form.Control
            type={props.type ? props.type : "input"}
            name={props.name ? props.name : ""}
            placeholder={props.placeholder ? props.placeholder : ""}
            value={props.value}
            onChange={props.handleChange}
          />
        </>
      ) : (
        <>
          {props.label ? (
            <>
              <Form.Label>{props.label}</Form.Label>
              <br />
            </>
          ) : null}
          <Form.Check
            inline
            type="radio"
            label={props.placeholder}
            name={props.name ? props.name : ""}
            value={props.value}
            onChange={props.handleChange}
          />
        </>
      )}
      <br />
    </Form.Group>
  );
}
