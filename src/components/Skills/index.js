import { Skill } from './Skill';
 
const SkillsList = [
	{
		key: 0,
		title: 'Back End Development',
		technologies: 'Node.js, PHP, MYSQL, MongoDB, AWS',
		img: 'assets/images/backend.svg',
		description: "Experience in developing REST APIs, Databases, Web scraping, Discord bots and so on. Deployments with AWS, heroku and firebase.",
		alt: 'Back End Development',
	},
	{
		key: 1,
		title: 'Front End Development',
		technologies: 'React, Next.js, Tailwind, Material-ui',
		img: 'assets/images/frontend.svg',
		description: 'I have been learning a lot about Front End development the last few years. Knowledge in responsive design, UX and UI.',
		alt: 'Front End Development',
	},
	{
		key: 2,
		title: 'CyberSecurity and Pentesting',
		technologies: 'STRIDE, DREAD, Kali Linux',
		img: 'assets/images/backend.svg',
		description:
			'Focused on security by design and offensive security. knowledge about Threat modeling and penetration testing.',
		alt: 'CyberSecurity and Pentesting',
	},
];

export const Skills = () => {
	return (
		<div>
			<h4 className='text-4xl sm:text-4xl xl:text-5xl tracking-wide text-eastern-blue text-center font-light' >My knowledge & skills</h4>
			<div className='flex text-center py-10 px-10 sm:px-0'>
				<div className='grid xl:grid-flow-col xl:grid-cols-3 grid-flow-row gap-x-8 gap-y-8'>
					{SkillsList.map((skill) => (
						<div key={skill.key} className='flex max-w-md'>
							<Skill
								title={skill.title}
								technologies={skill.technologies}
								img={skill.img}
								description={skill.description}
								alt={skill.alt}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
