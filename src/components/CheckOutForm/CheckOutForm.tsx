import { useState } from "react";
import {
  CreateOrderPayload,
  CreateOrderRequest,
} from "../../store/order/types";
import FormInput, { InputType } from "../Form/FormInput";
import "./CheckOutForm.scss";

type Props = {
  cartItems: IProduct[];
  total: number;
  createOrderRequest: (payload: CreateOrderPayload) => CreateOrderRequest;
  closeModal: () => void;
};

const CheckOutForm: React.FC<Props> = ({
  cartItems,
  total,
  createOrderRequest,
  closeModal,
}) => {
  const formInputs: InputType[] = [
    {
      id: 1,
      label: "Name",
      errorMessage:
        "Name should be 2-16 characters and shouldn't include any special character.",
      name: "name",
      type: "text",
      placeholder: "Name",
      pattern: "^[A-Za-z0-9]{2,16}$",
      required: true,
    },
    {
      id: 2,
      label: "Email",
      errorMessage: "Email should be a valid email address.",
      name: "email",
      type: "email",
      placeholder: "Email",
      pattern: "^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
      required: true,
    },
    {
      id: 3,
      label: "Address",
      errorMessage: "Address is required.",
      name: "address",
      type: "text",
      placeholder: "Address",
      required: true,
    },
  ];

  type IInputs = {
    email: string;
    name: string;
    address: string;
  };

  const [inputs, setInputs] = useState<IInputs>({
    email: "",
    name: "",
    address: "",
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setInputs({ ...inputs, [target.name]: target.value });
  };

  const handleJobSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    createOrderRequest({
      order: {
        ...inputs,
        total: total,
        cartItems: [...cartItems],
      },
    });
    setInputs({ email: "", name: "", address: "" });
    // closeModal();
  };
  return (
    <div className="checkout-form">
      <form onSubmit={handleJobSubmit}>
        <>
          {formInputs.map((input: InputType) => (
            <FormInput
              key={input.id}
              {...input}
              value={inputs[input.name as keyof IInputs]}
              handleChange={handleChange}
            />
          ))}
        </>
        <input type="submit" value="Create" className="btn create-button" />
      </form>
    </div>
  );
};

export default CheckOutForm;
