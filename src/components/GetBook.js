import axios from "axios";
import { receber } from "../actions/GetLivros.js";


const api = axios.create({
  baseURL: `http://localhost:3004/`,
});

async function getBooks(dispatch) {
  
  

  try {
    const response = await api.get(`/livros`);
    dispatch(receber(response.data))
    return response;
  } catch (error) {
    console.error(error);
  }
}

export { getBooks };
