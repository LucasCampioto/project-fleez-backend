import { User } from '../entities/user'

export interface UserGateway{
    createUser(user: User): Promise<void>
}