import React from 'react';
import classes from './Input.module.scss';

const Input = ({children, ...props}) => {
	return (
		<input {...props} className={classes.input}>
			{children}
		</input>
	);
};

export default Input;
