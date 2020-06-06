import { BaseDB } from "./baseDB";
import { User } from "../business/entities/user";


export class UserDB extends BaseDB{
    private usersTableName = "users"

    public async createUser(user: User): Promise<void>{
        await this.connection.insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            photo: user.getPhoto()
        }).into(this.usersTableName)
    }

    public async getUserByEmail(email:string): Promise<User | undefined>{
        const user = await this.connection.select('*')
        .from(this.usersTableName)
        .where({email})

        if (!user[0]) {
            return undefined
        }

        return new User(
            user[0].id,
            user[0].name,
            user[0].email,
            user[0].password,
            user[0].photo
        )
    }

   
}