const getSingleReducer = (state = [], action) => {
  switch (action.type) {
    case "PEGAR":

      state = [action.payload];
      //console.log("aaa");
      //console.log(action.payload);
      return state;

    default:
      return state;
  }
};



export default getSingleReducer;
