import React, {useState} from 'react';
import styles from './Card.module.sass';
import CardFlip from "react-card-flip"

export interface CardInterface {
    time: string; // Use 'next_episode_at' for time
    poster: string; // Use 'original' for poster
    title_name: string; // Use 'russian' for title_name
    episode: number; // Use 'next_episode' for episode
    score: number;
}

export const Card: React.FC<CardInterface> = ({ time, poster, title_name, episode, score }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <div className={styles.card}>
            <h2>{time}</h2>
            <CardFlip  isFlipped={isFlipped} flipDirection="horizontal">
            <div className={styles.card__content} onClick={handleCardClick}>
                <div className={styles.card__content__poster}>
                    <img src={'https://shikimori.me' + poster} alt={title_name} className={styles.card__content__poster__img}/>
                </div>
            </div>
            <div className={styles.card__content} onClick={handleCardClick}>
                <div className={styles.card__content__info}>
                    <a>
                        <h1>{title_name || 'Нет названия'}</h1>
                    </a>
                    <a>
                        <h2>Серия: {episode}</h2>
                        <h2>Оценка: {score}</h2>
                    </a>
                </div>
            </div>
        </CardFlip>
        </div>
    );
};
