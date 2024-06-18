import { daysInMonth, firstDayOfMonth } from "./calendarData";

export const getDaysInMonth = () => {
    const days = [];

    const startDayIndex = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    for (let i = 0; i < startDayIndex; i++) {
        days.push({
            day: null,
            disabled: true,
        });
    }

    for (let i = 1; i <= daysInMonth; i++) {
        days.push({
            day: i,
            disabled: false,
        });
    }

    const totalDays = Math.ceil(days.length / 7) * 7;
    const remainingDays = totalDays - days.length;

    for (let i = 0; i < remainingDays; i++) {
        days.push({
            day: null,
            disabled: true,
        });
    }
    console.log("here",days)

    return days;
};

