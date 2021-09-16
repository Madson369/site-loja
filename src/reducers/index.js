import cartReducer from "./cart";
import getLivroReducer from "./GetLivros"
import { combineReducers } from "redux";

const allReducers = combineReducers({
  cart: cartReducer,
  livros:getLivroReducer,
});

export default allReducers;
