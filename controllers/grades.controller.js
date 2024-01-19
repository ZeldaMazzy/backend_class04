const students = require("../database/students.json");

const getStudentsByGrade = (req, res) => {
	const minGrade = +req.query.minGrade;
	const filteredStudents = students.filter(s => {
		return s.grade >= minGrade;
	});

	if(filteredStudents.length == 0) {
		res.status(404).json({ message: 'No students match this criterion' });
		return;
	}
	else {
		res.status(200).json(filteredStudents);
	}
};

module.exports = { getStudentsByGrade };