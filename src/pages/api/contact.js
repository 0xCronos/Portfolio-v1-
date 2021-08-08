import firebase from '../../../firebase';
import validator from 'email-validator';

export default async (req, res) => {
	if (req.method !== 'POST') {
		res.status(405).json({
			error: true,
			message: 'Invalid method',
		});
		return;
	}

	// comprueba body
	const contactData = req.body;
	if (!checkContactData(contactData)) {
		res.status(403).json({
			error: true,
			message: 'The information provided is not valid',
		});
		return;
	}

	const human = await verifyHuman(contactData.token);
	if (!human) {
		res.status(403).json({
			error: true,
			message: 'Invalid token',
		});
		return;
	}

	// borra token, ya no lo necesitamos
	delete contactData.token;

	// get ip for analitics
	let ip = req.headers['x-forwarded-for'];
	if (typeof ip != 'undefined') {
		const ipList = ip.split(',');
		ip = ipList[ipList.length - 1];
	} else {
		ip = req.connection.remoteAddress;
	}

	firebase.db.collection('contacts').add({
		...contactData,
		ip,
	});

	res.status(200).json({
		error: false,
		message: 'OK',
	});
};

const verifyHuman = async (token) => {
	const secret = process.env.RECAPTCHA_SECRET_KEY;
	const uri = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;

	const response = await fetch(uri, {
		method: 'POST',
	});

	const data = await response.json();

	return data.success;
};

const checkContactData = (data) => {
	// comprueba que los campos se ingresaron
	if (!data.hasOwnProperty('name')) return false;
	if (!data.hasOwnProperty('email')) return false;
	if (!data.hasOwnProperty('message')) return false;
	if (!data.hasOwnProperty('token')) return false;

	// comprueba largos y valida correo
	if (data.name.length == 0 || data.name.length > 25) return false;
	if (data.email.length == 0 || !validator.validate(data.email) || data.email.length > 320) return false;
	if (data.message.length == 0 || data.message.length > 450) return false;
	return true;
};
