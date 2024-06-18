export const  weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const TodayDate = new Date();
export const currentYear = TodayDate.getFullYear();
export const currentMonth = TodayDate.getMonth() + 1;
export const currentWeekDay = TodayDate.getDay();
export const currentDay = TodayDate.getDate() ;
export const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
export const firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1).getDay();