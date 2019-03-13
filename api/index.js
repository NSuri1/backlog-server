import express from 'express';
import todos from './todos'
const router = new express.Router();

router.use('/todos', todos.router);

router.all('*', (req, res) => {
	res.status(400).json({
		error: 'invalid resource',
	});
});

export default router;
