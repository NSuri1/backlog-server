import mongoose from 'mongoose';

const onError = (error) => {
	console.log(`Mongo connection error: ${error}`);
	process.exit(1);
};

const connect = (uri) => {
	mongoose.connection.on('error', onError);
	return mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })
		.then(() => {
			console.log('Mongo successfully connected');
		});
};

export default { connect };
