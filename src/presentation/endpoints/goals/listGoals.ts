import {Request,Response} from 'express'
import { JwtAuthorizer } from '../../../utils/JWTAuthentication'
import { ListGoalUC } from '../../../business/usecase/listGoalUC'
import { GoalsDB } from '../../../data/goalsDB'

export const listGoalsEndpoint = async (req: Request, res: Response) => {
    try{ 
        const auth = req.headers.authorization || req.headers.Authorization
        const listGoalsUC = new ListGoalUC(new GoalsDB(),new JwtAuthorizer())
        const result = await listGoalsUC.execute({
            userId: auth as string
        })

        res.status(200).send(result)
    }catch(err){
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}