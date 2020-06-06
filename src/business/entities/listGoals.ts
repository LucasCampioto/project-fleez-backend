import { Goals } from "./goals";

export class ListGoals extends Goals{
    constructor(
        id: string,
        goal:string,
        userId:string
    ){
        super(
            id,
            goal,
            userId
        )
    }
}