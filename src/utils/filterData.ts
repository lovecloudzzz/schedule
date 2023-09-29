import { CardInterface } from '../components/DaySchedule/Card/Card';

export const filterData = (data: Record<string, CardInterface[]>, storedTitleNames: string[]): Record<string, CardInterface[]> => {
    const filteredData: Record<string, CardInterface[]> = {};
    for (const dayName in data) {
        const filteredAnimes = data[dayName].filter(anime =>
            storedTitleNames.includes(anime.title_name) //
        );

        if (filteredAnimes.length > 0) {
            filteredData[dayName] = filteredAnimes;
        }
    }

    return filteredData;
};
