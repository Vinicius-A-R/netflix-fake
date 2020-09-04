const INITIAL_STATE = {
  list: null,
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES_LIST':
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
