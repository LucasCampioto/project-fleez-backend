import {Request,Response} from 'express'
import { LoginUC } from '../../../business/usecase/loginUC'
import { UserDB } from '../../../data/userDB'
import { BcryptService } from '../../lambda/services/bcryptServices'
import { JwtAuthorizer } from '../../../utils/JWTAuthentication'

export const loginEndpoint = async(req: Request, res: Response) => {
    try{
        const loginUC = new LoginUC(new UserDB(), new BcryptService(), new JwtAuthorizer())
        const result = await loginUC.execute({
            email: req.body.email,
            password: req.body.password
        })

        res.status(200).send(result)
    }catch(err){
        res.status(err.errorCode || 400).send({
            message: err.message
        })

    }
}