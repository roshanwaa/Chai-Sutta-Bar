// import react from 'react';
import classes from '../../CSS/form.module.css';
import { useInput } from '../Hooks/usrInput';

const isEmpty = (value) => value.trim() !== '';
const isEmailEmpty = (value) => value.includes('@');

export const Form = () => {
  const {
    value: nameEntered,
    isValid: nameEnteredIsValid,
    hasError: fNameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameResetInput,
  } = useInput(isEmpty);

  const {
    value: phnEntered,
    isValid: enteredPhnIsValid,
    hasError: phnInputHasError,
    valueChangeHandler: phnChangeHandler,
    inputBlurHandler: phnInputBlurHandler,
    reset: resetPhnInput,
  } = useInput(isEmpty);

  const {
    value: emailEntered,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmailEmpty);

  const {
    value: messageEntered,
    valueChangeHandler: messageChangeHandler,
    reset: resetMessageInput,
  } = useInput(isEmpty);

  let formIsValid = false;

  if (nameEnteredIsValid && enteredPhnIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!nameEntered && !phnEntered && !emailEntered) {
      return;
    }

    alert('Submitted');
    console.log(nameEntered, phnEntered, emailEntered, messageEntered);

    nameResetInput();
    resetPhnInput();
    resetEmailInput();
    resetMessageInput();
  };

  const nameInputClasses = fNameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const phnInputClasses = phnInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <>
      <form
        onSubmit={formSubmitHandler}
        className={classes.form}
        action="https://formsubmit.co/kumroshan120@gmail.com"
        method="POST"
      >
        {/* <div className={nameInputClasses}> */}
        <div className={nameInputClasses}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className={classes.app_form_control}
            onChange={nameChangeHandler}
            onBlur={nameInputBlurHandler}
            value={nameEntered}
            placeholder="Enter Name"
          />
          {fNameInputHasError && (
            <p className={'error-text'}>Please enter a valid Name</p>
          )}
        </div>
        {/* </div> */}

        <div className={phnInputClasses}>
          <label htmlFor="telephone">Phone Number</label>
          <input
            type="tel"
            id="telephone"
            className={classes.app_form_control}
            onChange={phnChangeHandler}
            onBlur={phnInputBlurHandler}
            value={phnEntered}
            placeholder="Enter Phone Number"
          />
          {phnInputHasError && (
            <p className={'error-text'}>Please enter a valid phone number</p>
          )}
        </div>

        <div className={emailInputClasses}>
          <label htmlFor="email">E-Mail Address</label>
          <input
            type="email"
            id="email"
            className={classes.app_form_control}
            onChange={emailChangeHandler}
            onBlur={emailInputBlurHandler}
            value={emailEntered}
            placeholder="Enter Email"
          />
          {emailInputHasError && (
            <p className={'error-text'}>Please enter a valid email address</p>
          )}
        </div>

        <div className={classes.form__message}>
          <label htmlFor="message">Message</label>
          <textarea
            className={`textarea ${classes.app_form_control}`}
            id="message"
            onChange={messageChangeHandler}
            placeholder="Enter Message"
          />
        </div>

        <div className={classes.form__actions}>
          <button disabled={!formIsValid} className={classes.form__actions_Btn}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
