const InputGroup = ({ label, name, value, placeholder = "", error, onChange, onBlur, type = "text"}) => {
    return(
        <div className="has-validation mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input 
                type={type}
                className={`form-control ${error ? "is-invalid" : "" }`} 
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                />
                {error && <p className="invalid-feedback">{error}</p>}
        </div>
    )
}

export default InputGroup;