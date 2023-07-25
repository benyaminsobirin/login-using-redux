// usersActions.js
import axios from "axios";
import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "../types";

export const fetchUsers = () => {
  return (dispatch) => {
    // Kirim permintaan untuk mendapatkan daftar pengguna dari API menggunakan Axios
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        // Jika berhasil, dispatch aksi FETCH_USERS_SUCCESS dengan data pengguna
        dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data.data });
      })
      .catch((error) => {
        // Jika terjadi kesalahan, dispatch aksi FETCH_USERS_FAILURE dengan pesan kesalahan
        dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
      });
  };
};
