import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Make sure axios is installed in your project
import styles from './WeekSchedule.module.sass'
import { CardInterface } from '../Card/Card';
import DaySchedule from '../DaySchedule/DaySchedule.tsx';

interface AnimeData {
    next_episode: number;
    next_episode_at: string;
    anime: {
        russian: string;
        image: {
            original: string;
        };
        score: number;
    };
}

export const WeekSchedule: React.FC = () => {
    const [weekData, setWeekData] = useState<AnimeData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<AnimeData[]>('https://shikimori.me/api/calendar');
                setWeekData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call the internal async function to fetch data
    }, []); // Empty dependency array ensures the effect runs only once

    // Distribute data into arrays based on the day of the week in Russian
    const days: Record<string, CardInterface[]> = {};

    // Get the current date and a date 6 days from now
    const currentDate = new Date();
    const sixDaysFromNow = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);

    // Iterate over the data and populate the corresponding arrays for relevant anime
    weekData.forEach((anime) => {
        const episodeDate = new Date(anime.next_episode_at);
        const dayName = episodeDate.toLocaleString('ru-RU', { weekday: 'long' });

        if (episodeDate >= currentDate && episodeDate <= sixDaysFromNow) {
            if (!days[dayName]) {
                days[dayName] = [];
            }
            days[dayName].push({
                time: episodeDate.toLocaleString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
                poster: anime.anime.image.original,
                title_name: anime.anime.russian,
                episode: anime.next_episode,
                score: anime.anime.score,
            });
        }
    });

    // Rearrange the days based on the current day of the week
    console.log(days)
    const orderedDays = Object.keys(days);
    const currentDayIndex = orderedDays.indexOf(currentDate.toLocaleString('ru-RU', { weekday: 'long' }));
    const daysToShow = orderedDays
        .slice(currentDayIndex)
        .concat(orderedDays.slice(0, currentDayIndex))
        .filter((day) => days[day].length > 0);
    console.log(daysToShow)
    return (
        <div className={styles.week}>
            {daysToShow.map((dayName) => (
                <DaySchedule key={dayName} dayName={dayName} animes={days[dayName]} />
            ))}
        </div>
    );
};
