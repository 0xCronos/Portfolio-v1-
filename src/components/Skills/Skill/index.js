import { classes } from '../../../styles';

const { stoneBox } = classes;

export const Skill = ({ title, technologies, img, description, alt }) => {
	return (
		<div className={`flex flex-col ${stoneBox}`}>
			<img className='bg-ebony-clay h-80 p-4' src={img} alt={alt}/>
			<div className='flex-grow'>
				<h2 className='text-aquamarine text-lg pt-4'>{title}</h2>
				<p className='px-2 py-4'>{description}</p>
			</div>
			<h2 className='border-t-2 border-ebony-clay text-tertiary text-md px-2 py-4'>{technologies}</h2>
		</div>
	)
};