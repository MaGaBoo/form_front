import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createContact } from "../services/ContactService";

import "./Form.css";

const schema = yup
  .object({
    name: yup.string().required("Field name is required"),
    surname: yup.string().required("Surname is a required field"),
    email: yup
      .string()
      .email("Please enter a valid email format")
      .required("Email is a required field"),
    mobile: yup
      .number()
      .min(9, "Please provide a valid mobile telephone format")
      .required("Please provide a mobile phone to contact!"),
    link: yup
      .string()
      .required("Please, provide your portfolio or social platform link"),
    message: yup
      .string()
      .min(3, "Your message must contain at least three characters")
      .required(),
  })
  .required();

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setIsSubmitting(true);

    if (!data) {
      console.log("Ups, something went wrong!");
    } else {
      createContact(data)
        .then((newContact) => {
          reset();
        })
        .catch((error) => error?.response?.data?.errors)
        .finally(setIsSubmitting);
    }
  };

  return (
    <div className="Container">
        <div className="form-wrapper">
          <h1 className="header">Contact with us:</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name", { required: true })}
              placeholder="Name"
              type="text"
            />
            {errors && <p className="errors">{errors.name?.message}</p>}

            <input
              {...register("surname", { required: true })}
              placeholder="Surname"
              type="text"
            />
            {errors && <p className="errors">{errors.surname?.message}</p>}

            <input
              {...register("email", { required: true })}
              placeholder="Email"
              type="email"
              required
            />
            {errors && <p className="errors">{errors.email?.message}</p>}

            <input
              {...register("mobile", { required: true })}
              placeholder="Mobile"
              type="number"
            />
            {errors && <p className="errors">{errors.mobile?.message}</p>}

            <input
              {...register("link", { required: true })}
              placeholder="Your portfolio or social url"
              type="text"
              required
            />
            {errors && <p className="errors">{errors.link?.message}</p>}

            <input
              {...register("message", { required: true })}
              placeholder="Write your message here"
              type="text"
            />
            {errors && <p className="errors">{errors.message?.message}</p>}

            <button className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
  );
};

export default Form;
