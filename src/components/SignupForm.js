import { useState } from 'react';
import Button from '../ComponentUILibrary/Button';
import Inputs from '../ComponentUILibrary/Inputs';
import content from '../data/data';
const { primaryButton, secondaryButton, inputs, terms, termsAndServices } = content.signupForm;
const SignupForm = () => {
const [formErrors, setFormErrors] = useState({});
 const onSubmitHandler = (e) =>{
    e.preventDefault();
    const errors = {};

    inputs.forEach((item) => {
      if (!e.target[item.name].value) {
        errors[item.name] = item.isError;
      }
    });

    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log(e.target);
    }
  };
  return(
    <div className="signup-form">
        <Button {...primaryButton} onClick={() => console.log('Button clicked!')} />
        <form method="post" action="data" id="form-contact" className="signup-form__control" onSubmit={onSubmitHandler}>
          {inputs.map(item => (
            <Inputs key={item.id} {...item} error={formErrors[item.name]} />
          ))}
          <Button type="submit" {...secondaryButton} className="wid-100" normalText= "Claim  your free trial" fontSize={20} />
          <p className="signup-form__terms-text">{terms} 
            <span className="signup-form__terms-and-services"> {termsAndServices}</span>
          </p>
        </form> 
    </div>
   )
}

export default SignupForm;