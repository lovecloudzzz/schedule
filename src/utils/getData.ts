import axios from 'axios';
import {AnimeData} from "../components/WeekSchedule/WeekSchedule.tsx";

export const fetchData = async (): Promise<AnimeData[]> => {
    try {
        const response = await axios.get<AnimeData[]>('https://shikimori.me/api/calendar');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};
