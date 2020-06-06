import { UserDB } from "../../data/userDB";
import { CryptographyGateway } from '../gateway/cryptographyGateway';
import { AuthenticationGateway } from "../gateway/authenticationGateway";


export class LoginUC{
    constructor(private db: UserDB, 
                private cryptographyGateway:CryptographyGateway, 
                private authenticationGateway: AuthenticationGateway ){}

    public async execute(input:LoginInput): Promise<LoginOutput>{

        const user = await this.db.getUserByEmail(input.email)

        if(!user){
            throw new Error('incorrect email')
        }

        const isPasswordCorrect = await this.cryptographyGateway.compare(input.password, user.getPassword())

        if(!isPasswordCorrect){
            throw new Error('incorrect password')
        }
        const token = this.authenticationGateway.generateToken({
            id: user.getId(),
        }, process.env.ACCESS_TOKEN_TIME as string)
            return ({ message: "User successfully logged in", token })
    }

    
}

interface LoginInput {
    email: string
    password: string
}

interface LoginOutput {
    message: string,
    token: string
}