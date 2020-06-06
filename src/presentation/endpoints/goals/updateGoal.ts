import { Request, Response } from 'express'
import { JwtAuthorizer } from '../../../utils/JWTAuthentication'
import { UpdateGoalUC } from '../../../business/usecase/updateGoalUC'
import { GoalsDB } from '../../../data/goalsDB'

export const updateGoalEndpoint = async(req: Request, res: Response) => {
    try{
        const auth = req.headers.authorization || req.headers.Authorization
        const updateGoalUC = new UpdateGoalUC(new GoalsDB(), new JwtAuthorizer())
        const result = await updateGoalUC.execute({
            newGoal:req.body.newGoal,
            id: req.params.id,
            token: auth as string
        })

        res.status(200).send(result)
    }catch(err){
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}