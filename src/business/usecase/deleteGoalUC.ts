import { GoalsDB } from "../../data/goalsDB";
import { AuthenticationGateway } from '../gateway/authenticationGateway';

export class DeleteGoalUC {
    constructor(private db: GoalsDB, private authenticationGateway: AuthenticationGateway){}

    public async execute(input:DeleteGoalInput): Promise<DeleteGoalOutput>{
            const userInfo = this.authenticationGateway.getUsersInfoFromToken(input.token)
            await this.db.deleteGoal(input.goalId, userInfo.id)
            return {message: "Delete goal sucessfuly"}
        
    }
}

export interface DeleteGoalInput{
    goalId:string,
    token:string
}

export interface DeleteGoalOutput{
    message:string
}