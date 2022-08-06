import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createContact } from "../services/ContactService";

import "./Form.css";

const schema = yup
  .object({
    name: yup.string().required("Name is a required field"),
    surname: yup.string().required("Surname is a required field"),
    email: yup
      .string()
      .email("Please enter a valid email format")
      .required("Email is a required field"),
    mobile: yup
      .number()
      .min(9)
      .required("Please provide a mobile phone to contact!"),
    link: yup
      .string()
      .required("Please, provide your portfolio or social platform link"),
    message: yup.string().min(1).required("Please, tell something about you!"),
  })
  .required();

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState(false);

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    if (!data) {
      console.log("Ups, something went wrong!");
    } else {
      createContact(data)
        .then((newContact) => {
          reset();
        })
        .catch((error) => setErrors(error?.response?.data?.errors));
    }

    setIsSubmitting(true);
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h2 className="header">Let´s talk!</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name")}
            placeholder="name"
            type="text"
            required
          />

          <input
            {...register("surname")}
            placeholder="surname"
            type="text"
            required
          />

          <input
            {...register("email")}
            placeholder="email"
            type="email"
            required
          />

          <input
            {...register("mobile")}
            placeholder="mobile"
            type="number"
            required
          />

          <input
            {...register("link")}
            placeholder="portfolio or social url"
            type="text"
            required
          />

          <input
            {...register("message")}
            placeholder="Write your message here"
            type="text"
            required
          />

          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
