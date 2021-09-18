const getLivroReducer = (state = [], action) => {
  switch (action.type) {
    case "RECEBER":
      state = [action.payload];
      return state;

    default:
      return state;
  }
};

export default getLivroReducer;
