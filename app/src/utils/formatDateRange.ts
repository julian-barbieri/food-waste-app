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
  const formatterTime = new Intl.DateTimeFormat('en-US', optionsTime);

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
    ? 'Today'
    : startDate.toLocaleDateString('en-US', { weekday: 'long' });

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
// Output: { day: 'Today', startTime: '21:15', endTime: '23:00' }
