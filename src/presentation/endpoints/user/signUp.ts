import { Request, Response } from "express";
import { SignUpUC } from "../../../business/usecase/signUpUC";
import { UserDB } from "../../../data/userDB";
import { BcryptService } from "../../lambda/services/bcryptServices";


export const signUpEndpoint = async (req: Request, res:Response) => {
    try{
        const signUpUC =  new SignUpUC(new UserDB(), new BcryptService())
        const result = await signUpUC.execute({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            photo: req.body.photo
        })
        res.status(200).send(result)
    }catch(err){
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}