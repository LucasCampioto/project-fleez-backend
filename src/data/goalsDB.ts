import { BaseDB } from "./baseDB";
import { GoalsGateway } from "../business/gateway/goalsGateway";
import { Goals } from "../business/entities/goals";
import { ListGoals } from "../business/entities/listGoals";



export class GoalsDB extends BaseDB implements GoalsGateway{
    private goalsTableName = "goals"

    public async createGoal(goal:Goals):Promise<void>{
        await this.connection.insert({
            id: goal.getId(),
            goal: goal.getGoal(),
            userId: goal.getUserId()
        }).into(this.goalsTableName)
    }

    public async getGoals(userId:string): Promise<ListGoals[]>{
        const goals = await this.connection
            .select('goals.*')
            .from(this.goalsTableName)
            .where({userId}) 


            // await this.connection
            // .select('goals.*')
            // .from(this.goalsTableName)
            // .where({userId}) 
            // .and(token)

            return goals.map((goal:any)=>{
                return new ListGoals(
                    goal.id,
                    goal.goal,
                    goal.userId
                )
                
            })
    }


    public async updateGoal(id:string, newGoal:string, userId:string): Promise<void>{
        try{
            await this.connection.raw(`
                UPDATE goals SET goal = '${newGoal}'
                WHERE id='${id}' 
                AND userId='${userId}'
               
            `)
        }catch(err){
            console.log(err)
            throw err
        }
    }

    public async deleteGoal(goalId:string, token:string): Promise<void>{
        try{
            await this.connection.raw(`
                DELETE FROM ${this.goalsTableName}
                WHERE id='${goalId}'
                AND userId='${token}';
            `)
        }catch(err){
            console.log(err)
            throw err
        }
    }


//

}


