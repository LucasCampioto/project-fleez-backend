import {Request,Response} from 'express'
import { CreateGoalUC } from '../../../business/usecase/createGoalUC'
import { GoalsDB } from '../../../data/goalsDB'
import { JwtAuthorizer } from '../../../utils/JWTAuthentication'

export const createGoalEndpoint = async(req: Request, res: Response)=>{
    try{
        
        const auth = req.headers.authorization || req.headers.Authorization
        const createGoalUC = new CreateGoalUC(new GoalsDB(), new JwtAuthorizer())
        const input = {
            goal:req.body.goal,
            token: auth as string
        }

        const result = await createGoalUC.execute(input)

        res.status(200).send(result)
    }catch(err){
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}