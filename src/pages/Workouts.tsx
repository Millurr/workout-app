import { useEffect, useState } from "react";
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
        <div>
            Workout Page
        </div>
    )
}