// src/components/Card/Card.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardFlip from 'react-card-flip';
import deleteSVG from '../../../assets/delete.svg';
import addSVG from '../../../assets/add.svg';
import { RootState } from '../../../store'; // Adjust the path
import { addTitle, removeTitle } from '../../../store/titleName/actions'; // Adjust the path
import styles from './Card.module.sass';

export interface CardInterface {
    time: string;
    poster: string;
    title_name: string;
    episode: number;
    score: number;
}

export const Card: React.FC<CardInterface> = ({ time, poster, title_name, episode, score }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const dispatch = useDispatch();
    const storedTitleNames = useSelector((state: RootState) => state.titleName.titleNames);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        if (storedTitleNames.includes(title_name)) {
            dispatch(removeTitle(title_name? title_name : 'Без названия'));
        } else {
            dispatch(addTitle(title_name? title_name : 'Без названия'));
        }
    };

    return (
        <div className={styles.card}>
            <h2>{time}</h2>
            <CardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div className={styles.card__content} onClick={handleCardClick}>
                    <div className={styles.card__content__poster}>
                        <img src={'https://shikimori.me' + poster} alt={title_name} className={styles.card__content__poster__img} />
                    </div>
                    <div className={styles.card__content__button}>
                        <button onClick={handleButtonClick}>
                            <img src={storedTitleNames.includes(title_name) ? deleteSVG : addSVG} alt="Button" className={styles.card__content__button__img} />
                        </button>
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
