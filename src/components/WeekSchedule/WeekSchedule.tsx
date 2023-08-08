import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './WeekSchedule.module.sass';
import DaySchedule from '../DaySchedule/DaySchedule.tsx';
import { sortData } from "../../utils/sortData.ts";
import { fetchData } from "../../utils/getData.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { filterData } from "../../utils/filterData"; // Import the new filter function

export interface AnimeData {
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
    const location = useLocation();
    const storedTitleNames = useSelector((state: RootState) => state.titleName.titleNames);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchData();
            setWeekData(data);
        };

        getData();
    }, []);

    const daysToShow = sortData(weekData);

    // Use filterData function to filter the data based on storedTitleNames
    const filteredDaysToShow = location.pathname.includes('/my')
        ? filterData(daysToShow, storedTitleNames)
        : daysToShow;

    return (
        <div className={styles.week}>
            {Object.keys(filteredDaysToShow).map((dayName) => (
                <DaySchedule key={dayName} dayName={dayName} animes={filteredDaysToShow[dayName]} />
            ))}
        </div>
    );
};
