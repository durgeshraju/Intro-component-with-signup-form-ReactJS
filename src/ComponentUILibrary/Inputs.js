import { FaExclamationCircle } from 'react-icons/fa';

const Inputs = ({htmlFor, label, name, id, placeholder, type, error}) => {
    return (
    <div className="signup-form__input-container">
        <label htmlFor={htmlFor} className="signup-form__label">{label}</label>
        <input type={type} name={name} id={id} placeholder={placeholder} 
        className={`signup-form__input ${error && 'signup-form__input--error'}`}/>
        {error && <span className="signup-form__error"><FaExclamationCircle size={24} className="signup-form__error--icon" />{error}</span>}
    </div>
    )
}

export default Inputs;