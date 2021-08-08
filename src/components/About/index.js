import { classes } from '../../styles';

const {flexWrapCenter, transition, primaryBtn, hoverPrimaryBtn} = classes;

export const About = () => {
	return (
		<div className={`${flexWrapCenter} items-center p-8`}>
			<img className='sm:max-w-2xl 2xl:max-w-max' src='assets/images/about.svg' alt='A person sitted on a forest' />
			<div className='sm:flex-0 2xl:flex-1 2xl:ml-8'>
				<h4 className='text-2xl sm:text-4xl xl:text-5xl tracking-widest text-eastern-blue font-light my-8'>
					Learn more about me
				</h4>
				<p className='text-md sm:text-base md:text-lg xl:text-xl text-stone tracking-wider whitespace-pre-line text-justify mb-8'>
					I'm a 23 years old Chilean Software Engineering student at Pontificia Universidad Católica de Valparaíso.
					I'm also currently working as freelance Full Stack developer.
					<br />
					<br />
					I considered myself a responsible, eager for knowledge and self-taught person, I always try to understand
					things from its background and I never close myself to new knowledge.
					<br />
					I really love animals, nature and videogames.
					<br /> <br />
					<span className='text-sm sm:text-base italic' style={{ color: '#3d9999' }}>
						"Always do your best, whether there are awards or not, you'll be proud you made the effort"
					</span>
				</p>
				<a className={`${transition} ${primaryBtn} ${hoverPrimaryBtn} no-underline py-2 px-4`}
				   href='#'
				   target='_blank' rel='noopener'
				>
					Get my Resume
				</a>
			</div>
		</div>
	);
};
