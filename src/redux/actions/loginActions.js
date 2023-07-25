// loginActions.js
import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../types";

export const loginUser = (email, password) => {
  return (dispatch) => {
    // Kirim permintaan login ke API menggunakan Axios
    axios
      .post("https://reqres.in/api/login", { email, password })
      .then((response) => {
        // Jika berhasil, dispatch aksi LOGIN_SUCCESS
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch((error) => {
        // Jika terjadi kesalahan, dispatch aksi LOGIN_FAILURE dengan pesan kesalahan
        dispatch({ type: LOGIN_FAILURE, payload: error.message });
      });
  };
};
