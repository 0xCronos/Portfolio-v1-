import firebase from '../../../../../firebase';

export default async (req, res) => {
	if (req.method !== 'PATCH') {
		res.status(405).json({
			error: true,
			message: 'invalid method',
		});
		return;
	}

	// actualiza la cantidad de vistas del projecto
	const { projectId } = req.query;
	updateProjectViews(projectId);

	res.status(200).json({
		msg: true,
	});
};

const updateProjectViews = async (projectId) => {
	const projectRef = await firebase.db
	.collection('projects')
	.doc(projectId)
	.get();

	const project = projectRef.data();

	await firebase.db
		.collection('projects')
		.doc(projectId)
		.update({
			views: ++project.views,
		});
};
