import { useState, useContext, useEffect } from 'react';
import { classes } from '../../styles';
import { Project } from './Project';
import { ProjectSearch } from './ProjectSearch';
import { ExpandedProject } from './ExpandedProject';
import { SearchNotFound } from './SearchNotFound';
import BlurContext from '../../context/BlurContext';

export const Projects = () => {
	const [projects, setProjects] = useState([]);
	// proyectos para la busqueda
	const [searchableProjects, setSearchableProjects] = useState([]);
	const [currentProject, setCurrentProject] = useState({});
	const [selected, setSelected] = useState(false);
	const { blur } = useContext(BlurContext);

	useEffect(async () => {
		const response = await fetch('/api/project/get/all');
		const data = await response.json();
		setProjects(data.projects);
		setSearchableProjects(data.projects);
	}, []);

	return (
		<div>
			<div className='flex justify-center'>
				<ExpandedProject project={currentProject} selected={selected} setSelected={setSelected} />
			</div>
			<div className={classes.blurEffect(blur)}>
				<div className='mx-5'>
					<h1 className={`${classes.title} mb-12`}> My projects </h1>
					<ProjectSearch projects={searchableProjects} setProjects={setProjects} />
				</div>
				{projects.length > 0 ? (
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2'>
						{projects.map((project, index) => (
							<div key={index} className='max-w-lg m-5'>
								<Project project={project} setSelected={setSelected} setCurrentProject={setCurrentProject} />
							</div>
						))}
					</div>
				) : (
					<SearchNotFound />
				)}
			</div>
		</div>
	);
};
