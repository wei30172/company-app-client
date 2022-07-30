import React, { useState } from "react";
import ErrorIcon from "@material-ui/icons/Error";
import "./FormInput.scss";

export type InputType = {
  id: number;
  label: string;
  errorMessage: string;
  name: string;
  type: string;
  placeholder: string;
  pattern?: string;
  required: boolean;
};

interface Props extends InputType {
  value: string;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  focused?: boolean;
}

export function Input(props: InputProps) {
  const { focused, ...rest } = props;
  return focused ? (
    <input {...rest} className="focused" />
  ) : (
    <input {...rest} />
  );
}

const FormInput: React.FC<Props> = ({
  id,
  label,
  errorMessage,
  handleChange,
  ...inputProps
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="form-input">
      <label>{label}</label>
      <br />
      <Input
        {...inputProps}
        onChange={handleChange}
        onBlur={handleFocus}
        focused={focused}
      />
      <span>
        <ErrorIcon />
        {errorMessage}
      </span>
    </div>
  );
};

export default FormInput;
