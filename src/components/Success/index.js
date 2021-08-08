import { useContext } from 'react';
import Router from 'next/router';
import { classes } from '../../styles';
import BlurContext from '../../context/BlurContext';

export const Success = () => {
	const { setBlur } = useContext(BlurContext);

	const handleClick = () => {
		setBlur(false);
	}

	return (
		<div className='flex flex-col text-center items-center'>
			<img src='/assets/images/sent.svg' alt='Message sent image'/>
			<h4 className={classes.subtitle}>Your message has been sent successfully!</h4>
			<h5 className={classes.subsubtitle}>I'll be in touch as fast as I can!</h5>
			<div className={classes.flexCenter}>
				<button
					className={`${classes.primaryBtn} ${classes.hoverPrimaryBtn} m-4 px-6 py-2`}
					onClick={handleClick}
				>
					Got it!
				</button>
			</div>
		</div>
	);
};
