import 'react';
import "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return <p className='error-message'>{message}</p>
};

export default ErrorMessage;