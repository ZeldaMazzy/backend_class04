// imports
const path = require("path");
const express = require("express");
const students = require("./database/students.json")

//config
const PORT = 5000;
const SERVER_URL = `http://localhost:${PORT}`;
const STATIC_PATH = path.resolve(__dirname, './public')

//middleware
const logger = require("./middleware/logger");
const cors = require("./middleware/cors")

//init
const app = express();
app.use(express.json());
app.use(logger);
app.use(cors);
app.use(express.static(STATIC_PATH));

//student routes
app.use('/api/students', require('./routes/students.routes')); 

//grades routes
app.use('/api/grades', require('./routes/grades.routes'));

//home
app.get('/', (req, res) => {
	res.sendFile(path.resolve(STATIC_PATH, './index.html'))
});

// 404
app.all('*', (req, res) => {
	res.status(404).send('<h1>404 Page Not Found</h1>');
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is listening on ${SERVER_URL}`);
});