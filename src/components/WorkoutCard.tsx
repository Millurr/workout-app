import { FC } from "react";
import { iWorkouts } from "../interfaces/iWorkouts";

export const WorkoutCard : FC<iWorkouts> = (workout) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">{workout.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{workout.categoryName}</h6>
                <p className="card-text">{workout.complexity}</p>
            </div>
        </div>
    )
}