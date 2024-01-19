const express = require("express");
const router = express.Router();

const {
	getAllStudents,
	getStudentById,
	editStudent,
	createNewStudent,
	deleteStudent
} = require("../controllers/students.controller");

router.get('/', getAllStudents);
router.get('/:id', getStudentById);
router.post('/', createNewStudent);
router.put('/:id', editStudent);
router.delete('/:id', deleteStudent);

module.exports = router;