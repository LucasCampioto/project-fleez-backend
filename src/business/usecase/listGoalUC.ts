import { GoalsDB } from "../../data/goalsDB";
import { ListGoals } from "../entities/listGoals";
import { AuthenticationGateway } from '../gateway/authenticationGateway';


export class ListGoalUC{
    constructor(private db: GoalsDB, private authenticationGateway: AuthenticationGateway){}

    public async execute(input: ListGoalInput): Promise<ListGoalOutput>{
        const userInfo = this.authenticationGateway.getUsersInfoFromToken(input.userId)
        return {goals: await this.db.getGoals(userInfo.id)}
    }
}

export interface ListGoalInput{
    userId:string
}

export interface ListGoalOutput{
    goals: ListGoals[]
}