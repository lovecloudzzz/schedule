import { CardInterface } from '../components/DaySchedule/Card/Card.tsx';
import { AnimeData } from "../components/WeekSchedule/WeekSchedule.tsx";

export const sortData = (data: AnimeData[]): Record<string, CardInterface[]> => {
    const days: Record<string, CardInterface[]> = {};
    const currentDate = new Date();
    const sevenDaysFromNow = new Date(currentDate.getTime() + 8 * 24 * 60 * 60 * 1000);

    data.forEach((anime) => {
        const episodeDate = new Date(anime.next_episode_at);
        const dayName = getLocalizedDayWithDate(episodeDate);

        if (episodeDate >= currentDate && episodeDate <= sevenDaysFromNow) {
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
    console.log(days)
    return days;
};

const getLocalizedDayWithDate = (date: Date): string => {
    const dayName = date.toLocaleString('ru-RU', { weekday: 'long' });
    const formattedDate = date.toLocaleDateString('ru-RU');
    return `${dayName} (${formattedDate})`;
};
