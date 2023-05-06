import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Workouts from './pages/Workouts';
import Home from './pages/Home';

export default function Router() {

    return (
        <BrowserRouter>
            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/workouts" element={<Workouts />}/>
            </Routes>
        </BrowserRouter>
    )
}
