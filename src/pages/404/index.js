import styled from 'styled-components';
import { Seo } from '../../components/Seo';

const GoBack = styled.a`
	&:hover {
		background-color: #0c1621;
		color: #efefef;
	}
`;

const Custom404 = () => {
	return (
		<>
			<Seo pageName='Error 404' />
			<div className='h-screen max-h-screen flex flex-col justify-center items-center bg-alto'>
				<img className='max-w-sm md:max-w-xl m-4 p-4' src='/assets/images/404.svg' alt='lost in the forest - 404' />
				<h2 className='text-2xl md:text-3xl text-ebony'>Oops, you get lost in the forest...</h2>
				<GoBack href='/' className='bg-gallery text-ebony-clay decoration-none border border-ebony m-4 p-2 cursor-pointer'>
					Take me back!
				</GoBack>
			</div>
		</>
	);
};

export default Custom404;