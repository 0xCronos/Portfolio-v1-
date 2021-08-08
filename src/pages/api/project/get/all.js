import firebase from '../../../../../firebase';

export default async (req, res) => {
	if (req.method !== 'GET') {
		res.status(405).json({
			error: true,
			message: 'invalid method',
		});
		return;
	}
	
	const projects = await getAllProjects();
	res.status(200).json({
		projects: projects,
	});
};

const getAllProjects = async (req, res) => {
	const snapshot = await firebase.db.collection('projects').get();
	const data = snapshot.docs.map((document) => {
		return {
			id: document.id,
			...document.data(),
		};
	});
	return data;
};
