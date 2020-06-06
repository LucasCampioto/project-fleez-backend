import { Goals } from "../entities/goals";

export interface GoalsGateway{
    createGoal(goal: Goals): Promise<void>
}