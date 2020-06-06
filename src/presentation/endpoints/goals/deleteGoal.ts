import { Request, Response } from 'express'
import { DeleteGoalUC } from '../../../business/usecase/deleteGoalUC'
import { GoalsDB } from '../../../data/goalsDB'
import { JwtAuthorizer } from '../../../utils/JWTAuthentication'

export const deleteGoalEndpoint = async(req:Request, res:Response) => {
    try{
        const auth = req.headers.authorization || req.headers.Authorization
        const deleteGoalUC = new DeleteGoalUC(new GoalsDB(), new JwtAuthorizer())
        const result = await deleteGoalUC.execute({
            goalId: req.params.goalId,
            token: auth as string
        })

        res.status(200).send(result)
    }catch(err){
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}