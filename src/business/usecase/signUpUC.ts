import { UserDB } from "../../data/userDB";
import { v4 } from "uuid"
import { User } from "../entities/user";
import { CryptographyGateway } from "../gateway/cryptographyGateway";


export class SignUpUC {
    constructor(private db: UserDB, private cryptographyGateway: CryptographyGateway){}

    public async execute(input: SignUpInput): Promise<SignUpOutput> {
        try{
            const id = v4()

            const hashPassword = await this.cryptographyGateway.encrypt(input.password)
            const user = await this.db.getUserByEmail(input.email)
            

            if(!input.name && !input.email && !input.password){
                throw new Error('create account invalid')
            }

            const newUser = new User(
                id,
                input.name,
                input.email,
                hashPassword,
                input.photo
            )

            await this.db.createUser(newUser)
            
            return({
                message: "User created successfully"
            })

        }catch(err){
            console.log(err)
            throw new Error("There was a problem creating a user!")
        }
    }
}

interface SignUpInput {
    name: string
    email: string
    password: string
    photo: string
}

interface SignUpOutput {
    message: string
}