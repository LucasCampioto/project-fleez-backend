import { v4 } from 'uuid'
import { GoalsGateway } from '../gateway/goalsGateway';
import { Goals } from '../entities/goals';
import { AuthenticationGateway } from '../gateway/authenticationGateway';

export class CreateGoalUC {
    constructor(private goalsGateway: GoalsGateway, 
                private authenticationGateway: AuthenticationGateway){}
    public async execute(input: CreateGoalInput): Promise<CreateGoalOutput>{
            const goalId = v4()
            const userInfo = this.authenticationGateway.getUsersInfoFromToken(input.token)
            const newGoal =  new Goals(
                goalId,
                input.goal,
                userInfo.id
            )
            await this.goalsGateway.createGoal(newGoal)
            return { message: "goal successfully created" }
      
    }
}

interface CreateGoalInput {
    goal: string,
    token:string
}

interface CreateGoalOutput {
    message: string
}