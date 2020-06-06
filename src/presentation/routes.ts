import express, { Request, Response } from "express";
import cors from "cors";
import { signUpEndpoint } from "./endpoints/user/signUp";
import { loginEndpoint } from "./endpoints/user/login";
import { createGoalEndpoint } from "./endpoints/goals/createGoal";
import { listGoalsEndpoint } from "./endpoints/goals/listGoals";
import { updateGoalEndpoint } from "./endpoints/goals/updateGoal";
import { deleteGoalEndpoint } from "./endpoints/goals/deleteGoal";


const app = express();

app.use(cors());
app.use(express.json()); // Linha mágica (middleware)

app.post('/singup', signUpEndpoint)
app.post('/login', loginEndpoint)
app.post('/create/goal', createGoalEndpoint)
app.get('/listGoals', listGoalsEndpoint)
app.post('/goal/update/:id', updateGoalEndpoint)
app.delete('/goal/delete/:goalId',deleteGoalEndpoint)


export default app;
