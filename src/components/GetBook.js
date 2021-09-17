import axios from "axios";
import { receber } from "../actions/GetLivros.js";
import { pegar } from "../actions/GetSingle.js";

const api = axios.create({
  baseURL: `http://localhost:3004/`,
});

async function getBooks(dispatch) {
  try {
    const response = await api.get(`/livros`);
    dispatch(receber(response.data));
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function getSingleBook(dispatch, id) {
  try {
    const response = await api.get(`/livros/${id}`);
    dispatch(pegar(response.data));
    return response;
  } catch (error) {
    console.error(error);
  }
}

export { getBooks, getSingleBook };
