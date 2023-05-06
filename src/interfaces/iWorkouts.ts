export interface iWorkouts extends iCategory {
    workoutId : number,
    name : string,
    complexity : number
}

interface iCategory {
    categoryId : number,
    categoryName : string
}