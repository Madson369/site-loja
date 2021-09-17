import cartReducer from "./cart";
import getLivroReducer from "./GetLivros"
import getSingleReducer from "./GetSingle";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  cart: cartReducer,
  livros:getLivroReducer,
  livro:getSingleReducer,
});

export default allReducers;
