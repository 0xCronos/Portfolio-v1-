export const Aptitude = ({ img, description }) => {
	return (
		<div className='flex p-4 items-center'>
			<img 
				className='w-10 h-10 xl:w-16 xl:h-16 bg-aquamarine rounded-full' 
				src={img}
				alt='Aptitude avatar'
			/>
			<h3 className='text-sm sm:text-lg text-primary ml-4'>{description}</h3>
		</div>
	);
};