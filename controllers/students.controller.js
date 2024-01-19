const students = require("../database/students.json");

const getAllStudents = (req, res) => {
	res.status(200).json(students);
};

const getStudentById = (req, res) => {
	const id = +req.params.id;
	const student = students.find(s => s.id == id);

	if(!student) {
		res.status(404).json({ message: 'Student not found' });
		return;
	}
	else {
		res.status(200).json(student);
	}
};

const createNewStudent = (req, res) => {
	const { name, grade } = req.body;
	if(name == undefined || grade == undefined) {
		res.status(400).json({message: "Name and Grade must be defined"});
		return;
	}
	const newStudent = {
		id: students.length + 1,
		name: name,
		grade: grade
	};

	students.push(newStudent);

	res.status(201).json(newStudent);
};

const editStudent = (req, res) => {
	const id = +req.params.id;
	const student = students.find(s => s.id == id);

	if(!student) {
		res.status(404).json({ message: 'Student not found' });
		return;
	}

	const { name, grade } = req.body;
	
	if(name == undefined || grade == undefined) {
		res.status(400).json({message: "Name and Grade must be defined"});
		return;
	}

	student.name = name;
	student.grade = grade;
	res.status(201).json(student);
};

const deleteStudent = (req, res) => {
	const id = +req.params.id;
	const studentIndex = students.findIndex(s => s.id == id);

	if(studentIndex < 0) {
		res.status(404).json({ message: 'Student not found' });
		return;
	}

	students.splice(studentIndex, 1);

	res.status(204).json({ message: 'Student successfully deleted :(' });
};

module.exports = {
	getAllStudents,
	getStudentById,
	editStudent,
	createNewStudent,
	deleteStudent
};