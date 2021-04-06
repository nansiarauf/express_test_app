const express = require("express");
const {
  getAllStudents,
  addStudent,
  deleteStudent,
} = require("../controllers/studentsController");

const router = express.Router();

router
  .route("/")
  .get(getAllStudents)
  .post(addStudent)
  .delete(deleteStudent);

module.exports = router;
