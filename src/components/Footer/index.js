import Link from 'next/link';
import { classes } from '../../styles';
import { Brand } from '../Brand';
import { Networks } from '../Networks';

const { flexCenter, flexColCenter, stoneTopBox, transition, primaryBtn, hoverPrimaryBtn, footerTitle } = classes;

export const Footer = () => {

	return (
		<footer className={`${stoneTopBox} flex justify-center p-4`}>
			<div className='flex flex-col text-center'>
				<div className={`${flexColCenter} flex-grow items-center`}>
					<Brand width='48px' alt='Footer brand' />
				</div>
				<div className={`${flexCenter} flex-grow items-center`}>
					<Link href='/portfolio' passHref>
						<a className={`${transition} ${primaryBtn} ${hoverPrimaryBtn} w-3/6 p-2 m-4`}>Go to Projects</a>
					</Link>
				</div>
				<div className='flex justify-center mb-4'>
					<Networks color='text-primary' margin='m-16' />
				</div>
				<h3 className={`${footerTitle}`}>Handcrafted by Diego Muñoz - © 2021</h3>
				<h5 className='text-tertiary'>Made with ☕ and ❤️</h5>
			</div>
		</footer>
	);
};
