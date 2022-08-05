import { useState } from 'react' 
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required('Name is a required field'),
    surname: yup.string().required('Surname is a required field'),
    email: yup.string().email('Please enter a valid email format').required('Email is a required field'),
    mobile: yup.number().min(9).max(11).required('Please provide a mobile phone to contact!'),
    link: yup.string().url().required('Please, provide your portfolio or social platform link'),
    message: yup.string().min(1).required('Please, tell something about you!')
}).required();

const Form = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        setIsSubmitting(true)
    }

    return (
        <div className='container'>
            <h1>Let´s talk!</h1>
            <div className='form-wrapper'>
            <form onSubmit={onSubmit}>

            <input 
            {...register('name')} 
            placeholder='name' 
            type='text' 
            required />

            <input 
            {...register('surname')} 
            placeholder='surname' 
            type='text' 
            required />

            <button>Submit</button>
            </form>
            </div>
        </div>
    )
};

export default Form;