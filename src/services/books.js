const booksUrl = 'https://fakerapi.it/api/v1/books?_quantity=3';

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
