// Function to capitalize the first letter of a string
const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
interface FormattedDateRange {
  day: string;
  startTime: string;
  endTime: string;
}

export function formatDateRange(
  startISO: string,
  endISO: string,
): FormattedDateRange {
  // Parse the dates
  const startDate = new Date(startISO);
  const endDate = new Date(endISO);

  // Define options for formatting time
  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
  };

  // Formatter for the time
  const formatterTime = new Intl.DateTimeFormat('es-ES', optionsTime);

  // Function to check if a date is today
  const isToday = (someDate: Date): boolean => {
    const today = new Date();
    return (
      someDate.getDate() === today.getDate() &&
      someDate.getMonth() === today.getMonth() &&
      someDate.getFullYear() === today.getFullYear()
    );
  };

  // Determine the day string
  const dayString = isToday(startDate)
    ? 'Hoy'
    : capitalizeFirstLetter(
        startDate.toLocaleDateString('es-ES', { weekday: 'long' }),
      );

  // Format the start and end times
  const startTimeString = formatterTime.format(startDate);
  const endTimeString = formatterTime.format(endDate);

  // Return the formatted day and times
  return {
    day: dayString,
    startTime: startTimeString,
    endTime: endTimeString,
  };
}

// Example usage
// const startISO = '2024-11-21T21:15:00.000Z';
// const endISO = '2024-11-21T23:00:00.000Z';
// const formattedRange = formatDateRange(startISO, endISO);
// console.log(formattedRange);
// Output: { day: 'Hoy', startTime: '21:15', endTime: '23:00' }
