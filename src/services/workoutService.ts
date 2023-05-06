import { iWorkouts } from "../interfaces/iWorkouts";

export async function getAll(): Promise<iWorkouts[]> {
    const res = await fetch('http://localhost:5133/workouts/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const content = await res.json();

    return content;
}