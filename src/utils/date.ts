export const formattedDate = (date: Date | null) => {
  return date
    ? `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
    : '';
};
