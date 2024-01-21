/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DaysWeek {
  SUNDAY = 'Sunday',
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WENDESDAY = 'Wendesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
}

function isWeekend(dayWeek: string): boolean {
  return dayWeek === DaysWeek.SUNDAY || dayWeek === DaysWeek.SATURDAY
    ? true
    : false;
}
