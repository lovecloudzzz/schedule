import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation.tsx';
import { WeekSchedule } from './components/WeekSchedule/WeekSchedule.tsx';

function App() {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="/my" element={<WeekSchedule />} />
                <Route path="/" element={<WeekSchedule />} />
            </Routes>
        </div>
    );
}

export default App;
