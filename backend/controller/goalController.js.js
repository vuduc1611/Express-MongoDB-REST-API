const asyncHandler = require("express-async-handler");
const Goal = require("../model/goalModel");
//@desc Get goals
//@route GET /api/goals
//@access Private

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

//@desc Get goals
//@route GET /api/goals
//@access Private

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a field");
  }
  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});

//@desc Get goals
//@route GET /api/goals
//@access Private

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

//@desc Get goals
//@route GET /api/goals
//@access Private

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});
module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
