const initialState = {
  counter: 0,
  auth: null,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
