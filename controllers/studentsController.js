const express = require("express");

const getAllStudents = (req, res) => {
  res.send("All students path");
};

const addStudent = (req, res) => {
  res.send("add student");
};
const deleteStudent = (req, res) => {
  res.send("delete student");
};
module.exports = {
  getAllStudents,
  addStudent,
  deleteStudent,
};
