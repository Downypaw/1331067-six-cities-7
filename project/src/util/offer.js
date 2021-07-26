import dayjs from 'dayjs';

export const capitalizeFirstLetter = (originalString) => originalString.charAt(0).toUpperCase() + originalString.slice(1);

export const formatDate = (date) => dayjs(date).format('MMMM YYYY');
