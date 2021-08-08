import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { classes } from '../../../styles';
import { FormInput } from './FormInput';
import { FormTextArea } from './FormTextArea';

export const ContactForm = ({ setSent }) => {
	const recaptchaRef = useRef();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [error, setError] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// validations here
		if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
			setError(true);
			return;
		}
		error && setError(false);

		// validate recaptcha and reset value
		const token = await recaptchaRef.current.executeAsync();
		recaptchaRef.current.reset();

		const response = await fetch('/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				message,
				token,
			}),
		});

		if (response.status === 200) {
			setName('');
			setEmail('');
			setMessage('');
			setSent(true);
		} else {
			alert('There has been an error processing your request, try again later.');
		}
	};

	return (
		<form className={`${classes.stoneBox} flex flex-col p-5 my-8`} onSubmit={handleSubmit}>
			<div className='flex flex-row justify-between'>
				<div className='mr-5 sm:mr-10'>
					<FormInput
						label='Your name'
						htmlFor='fullname'
						type='text'
						name='name'
						placeholder='Enter your fullname'
						setValue={setName}
						maxLength={25}
						value={name}
					/>
				</div>
				<div className='ml-5 sm:ml-10'>
					<FormInput
						label='Your Email'
						htmlFor='email'
						type='email'
						name='email'
						placeholder='Enter your Email'
						setValue={setEmail}
						maxLength={320}
						value={email}
					/>
				</div>
			</div>
			<FormTextArea
				label='Your message'
				htmlFor='message'
				name='message'
				placeholder='Write your message here...'
				setValue={setMessage}
				value={message}
			/>
			<div className={`${classes.flexColCenter} items-center`}>
				<input className={`${classes.primaryBtn} ${classes.hoverPrimaryBtn} px-4 py-2`} type='submit' value='Send' />
				{error && <span className='text-md text-red-500 pt-5'>{`You must fill in all the fields first`}</span>}
			</div>
			<ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} size='invisible' ref={recaptchaRef} />
		</form>
	);
};
