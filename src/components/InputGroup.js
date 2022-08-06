const InputGroup = ({ label, id, name, type, placeholder, register, error }) => {
    return (
        <div className="form-wrapper">
            <label htmlFor={id}>
                {label}
            </label>

            <input
            name={name}
            type={type}
            className= {`form-control ${error ? 'is invalid' : '' }`}
            id={id}
            placeholder={placeholder}
            {...register(id)}
            />

            <p className="invalid-feedback">{error}</p>
        </div>
    )
};

InputGroup.defaultProps = {
    type: "text"
};

export default InputGroup;