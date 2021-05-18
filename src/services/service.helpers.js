const AUTH_URL = process.env.REACT_APP_AUTH_URL;
const API_URL = process.env.REACT_APP_AUTH_URL;

export const booksUrl = `${API_URL}/books?_quantity=3`;

// AUTH
export const loginUrl = `${AUTH_URL}/login`;
export const registerUrl = `${AUTH_URL}/register`;
