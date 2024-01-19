const logger = (req, _, next) => {
	const message = `${req.method} "${req.url}" @ ${new Date().toLocaleString()}`; 

	console.log(message);

	next();
};

module.exports = logger;