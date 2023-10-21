const express = require("express");

const allTasks = [{ name: "Jorge", status: false }];
const allRoutes = express.Router();

// C
allRoutes.post("/task", (request, response) => {
  const { name } = request.body;
  allTasks.push({ name });
  return response.status(201).json(allTasks);
});

// R
// U
// D

module.exports = allRoutes;
