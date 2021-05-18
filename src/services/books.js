import { booksUrl } from './service.helpers';

export const getBooks = async () => {
  try {
    const response = await fetch(booksUrl);
    const result = await response.json();
    return result.data;
  } catch (err) {
    console.trace(err);
    return [];
  }
};
