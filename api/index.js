import express from 'express';
const router = new express.Router();

router.use('/someEndPoint', (req, res) => { res.send('in api') });

router.all('*', (req, res) => {
	res.status(400).json({
		error: 'invalid resource',
	});
});

export default router;
