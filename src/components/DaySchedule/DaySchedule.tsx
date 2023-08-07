import React from 'react';
import styles from './DaySchedule.module.sass';
import {Card, CardInterface } from '../Card/Card';

interface DayScheduleProps {
    animes: CardInterface[];
    dayName: string;
}

const DaySchedule: React.FC<DayScheduleProps> = ({ dayName, animes }) => {
    return (
        <div className={styles.day}>
            <h1 className={styles.day__name}>{dayName}</h1>
            <div className={styles.day__animes}>
                {animes.map((anime, index) => (
                    <Card
                        key={index}
                        time={anime.time}
                        poster={anime.poster}
                        title_name={anime.title_name}
                        episode={anime.episode}
                        score={anime.score}
                    />
                ))}
            </div>
        </div>
    );
};

export default DaySchedule;
