import { useContext } from 'react';
import styled from 'styled-components';
import { classes } from '../styles';

import { Layout } from '../components/Layout';
import { Profile } from '../components/Profile';
import { Aptitudes } from '../components/Aptitudes';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { PopupBox } from '../components/PopupBox';
import { Contact } from '../components/Contact';
import { Success } from '../components/Success';
import BlurContext from '../context/BlurContext';

const StyledBox = styled.div`
	/* Triangulo arriba de Profile */
	&::after {
		content: '';
		position: absolute;
		border-top: 20px solid #66ffff;
		border-left: 20px solid transparent;
		border-right: 20px solid transparent;
	}
`;

const Home = () => {
	const { blur } = useContext(BlurContext);

	return (
		<Layout pageName='Home'>
			<div className='flex justify-center'>
				<div className={`${classes.blurEffect(blur)}`}>
					<StyledBox className={`${classes.flexWrapCenter} p-20 sm:p-8`}>
						<Profile
							name='Diego Muñoz'
							ocupation='Software Engineering student'
							description='+1 Year experience in software development'
							picture='/assets/images/avatar.png'
							pictureHover='/assets/images/avatar-hover.png'
						/>
						<div className='my-4 sm:my-12 md:my-16 lg:my-24'>
							<Aptitudes />
						</div>
					</StyledBox>
					<div className='sm:py-16 px-8 bg-alto'>
						<About />
					</div>
					<div className={`${classes.flexWrapCenter} my-10`}>
						<Skills />
					</div>
					<div className={`py-0 sm:py-8 px-8 bg-ebony`} id='contact'>
						<Contact />
					</div>
				</div>
				<PopupBox popup={blur}>
					<Success />
				</PopupBox>
			</div>
		</Layout>
	);
};

export default Home;
