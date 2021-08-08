import { useState } from 'react';
import { classes } from '../../../../styles';

export const FormTextArea = ({ label, htmlFor, name, placeholder, setValue, ...rest }) => {
	const [error, setError] = useState(false);

	const validateInput = (e) => {
		const value = e.target.value;

		if (value.trim() === '') {
			setValue('');
			setError(true);
			return;
		}
		error && setError(false);

		setValue(value);
	};

	return (
		<div className='flex flex-col py-5'>
			<label className='text-3xl text-secondary' htmlFor={htmlFor}>
				{label}
			</label>
			<textarea
				className={`${classes.ebonyBox} resize-none text-lg text-tertiary my-2 p-4`}
				name={name}
				placeholder={placeholder}
				rows='6'
				maxLength='450'
				onChange={validateInput}
				{...rest}
			/>
			{error && (
				<div className={classes.flexCenter}>
					<span className='text-md text-yellow-500 pt-2'>{`This field is required`}</span>
				</div>
			)}
		</div>
	);
};
