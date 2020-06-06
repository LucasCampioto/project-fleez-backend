export class Goals{
    constructor(
        private id: string,
        private goal: string,
        private userId: string
    ){}

    getId():string{
        return this.id
    }

    getGoal():string{
        return this.goal
    }

    getUserId(): string{
        return this.userId
    }
}