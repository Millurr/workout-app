import { useEffect, useState } from "react";
import { WorkoutCard } from "../components/WorkoutCard";
import { iWorkouts } from "../interfaces/iWorkouts";
import * as workoutService from '../services/workoutService';

export default function Workouts() {
    const [workouts, setWorkouts] = useState<iWorkouts[]>();

    async function getWorkouts() {
        const content = await workoutService.getAll();
        setWorkouts(content);
        console.log(content);
    }

    useEffect(() => {
        getWorkouts();
    }, []);

    return (
        <div className="text-center">
            Workout Page

            {
                workouts?.map((workout, ind) => (
                    <WorkoutCard key={workout.workoutId} workoutId={workout.workoutId} name={workout.name} complexity={workout.complexity} categoryId={workout.categoryId} categoryName={workout.categoryName}/>
                ))
            }
        </div>
    )
}