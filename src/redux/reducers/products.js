const defaultState = [];

function reducer(state = defaultState, { type, products }) {
  switch (type) {
    case "getAllProducts":
      return [...state,products];
    case "ADD_PRODUCT":
      return [
        ...state,
        {
            products
        },
      ];
    default:
      return state;
  }
}

export default reducer;
