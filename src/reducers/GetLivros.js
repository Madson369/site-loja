const getLivroReducer = (state = [], action) => {
  switch (action.type) {
    case "RECEBER":
      state = [...state, action.payload];
      console.log("aaa");
      return state;

    default:
      return state;
  }
};



export default getLivroReducer;
