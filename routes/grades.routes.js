const express = require("express");
const router = express.Router();

const { getStudentsByGrade } = require("../controllers/grades.controller");

router.get('/', getStudentsByGrade);

module.exports = router;