import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config.js';
import api from './api';
import db from './db'

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.use(`/api/${config.apiVersion}`, api);

app.get('/', (req, res) => {
	res.send('Hello There!');
});

app.listen(config.port, () => {
	console.log(`Backlog server now up on http://localhost:${config.port}`);
	const dbUri = (config.db.username && config.db.password)
		? `mongodb+srv://${config.db.username}:${config.db.password}@${config.db.url}/${config.db.name}`
		: `mongodb+srv://${config.db.url}/${config.db.name}`;
	db.connect(dbUri);
});
