import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../actions/usersActions";

const UsersPage = () => {
  const users = useSelector((state) => state.users.users);
  const error = useSelector((state) => state.users.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>Daftar Pengguna</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar} alt={user.first_name} />
            <div>
              <p>ID: {user.id}</p>
              <p>Email: {user.email}</p>
              <p>Nama Depan: {user.first_name}</p>
              <p>Nama Belakang: {user.last_name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
