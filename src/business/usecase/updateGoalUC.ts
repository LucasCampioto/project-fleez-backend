import { GoalsDB } from "../../data/goalsDB";
import { AuthenticationGateway } from '../gateway/authenticationGateway';

export class UpdateGoalUC {
    constructor(private db: GoalsDB, private authenticationGateway: AuthenticationGateway){}

    public async execute(input: UpdateGoalInput):Promise<UpdateGoalOutput>{
      
            const userInfo = this.authenticationGateway.getUsersInfoFromToken(input.token)
            await this.db.updateGoal(input.id,input.newGoal, userInfo.id)
            return { message: "goal updated successfully" }
       
    }
}

export interface UpdateGoalInput{
    id:string,
    newGoal:string,
    token:string
}

export interface UpdateGoalOutput{
    message:string  
}