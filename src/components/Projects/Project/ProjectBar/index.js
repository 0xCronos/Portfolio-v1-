import { useContext } from 'react';
import { GitHub, Language, AspectRatio } from '@material-ui/icons';
import { classes } from '../../../../styles';
import BlurContext from '../../../../context/BlurContext';

const { transition, projectBar } = classes;

export const ProjectBar = ({ visible, project, setSelected, setCurrentProject }) => {
	const { setBlur } = useContext(BlurContext);
	const { github, website } = project;

	// muestra vista expandida
	const expandProject = () => {
		setCurrentProject(project);
		setSelected(true);
		setBlur(true);
        project.views++;
        
		fetch('/api/project/update/' + project.id, {
            method: 'PATCH',
		});
	};

	return (
		<div className={`${transition} ${projectBar} ${visible ? 'opacity-90' : 'opacity-0'}`}>
			<a href={github} target='_blank' rel='noopener'>
				<GitHub className='m-4' fontSize='large' />
			</a>
			<a href={website} target='_blank' rel='noopener' className={!website ? 'opacity-50 cursor-default' : ''}>
				<Language className='m-4' fontSize='large' />
			</a>
			<AspectRatio className='m-4' fontSize='large' onClick={expandProject} />
		</div>
	);
};
