import { classes } from '../../styles';
import { Brand } from '../Brand';
import { Networks } from '../Networks';

export const SideBar = () => {
	return (
		<div className={`hidden ${classes.stoneRightBox} lg:flex flex-col fixed top-0 left-0 w-20 h-full px-4 py-8`}>
			<div className='flex-grow m-auto'>
				<Brand width='38px' alt='Sidebar brand'/>
			</div>
			<div className='mx-auto'>
				<Networks color='text-aquamarine' />
			</div>
		</div>
	);
};
