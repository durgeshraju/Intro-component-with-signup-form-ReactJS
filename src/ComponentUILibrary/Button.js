import React from 'react';
import classNames from 'classnames';

const Button = ({ boldText, normalText, color, type, className, onClick, fontSize}) => {
  const classes = classNames('button', {
    'button--primary': color === 'primary',
    'button--secondary': color === 'secondary',
    [className]: className
  });

  return (
    <button type={type} className={classes} onClick={onClick} style={{fontSize}}>
      <span><strong>{boldText}</strong> <span>{normalText}</span></span>
    </button>
  );
};

export default Button;
