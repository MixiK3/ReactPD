// src/UserTable.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../Pagination/Pagination"; // Импортируем компонент пагинации
import "./GlobalUserTable.css"; // Импортируем стили

const USERS_PER_PAGE = 5; // Количество пользователей на странице

function UserTable() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dataTable, setDataTable] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Получаем пользователей при монтировании компонента
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );
      const users = response.data.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
      }));

      setDataTable(users);
    };

    fetchUsers();
  }, []);

  // Метод для добавления нового пользователя
  const addUser = () => {
    const newUser = {
      id: id,
      name: name,
      email: email,
    };
    setDataTable((prev) => [...prev, newUser]);
    setId("");
    setName("");
    setEmail("");
  };

  // Пагинация
  const totalPages = Math.ceil(dataTable.length / USERS_PER_PAGE);

  // Получаем пользователей для текущей страницы
  const getCurrentUsers = () => {
    const start = (currentPage - 1) * USERS_PER_PAGE;
    return dataTable.slice(start, start + USERS_PER_PAGE);
  };

  // Массив с примерами марок телефонов
  const phoneBrands = ["Samsung", "Apple", "Xiaomi", "Huawei", "Nokia"];

  return (
    <div className="container">
      <h2 className="table-h2">Список пользователей</h2>
      <p className="table-p">Последние 2 недели</p>
      <div className="row">
        <div className="col">
          <table id="user-table" className="table">
            <thead>
              <tr>
                <th>Код</th>
                <th>Пользователи</th>
                <th>Марка телефона</th>
                <th>Заряд</th>
                <th>Время подключения</th>
                <th>Время отключения</th>
              </tr>
            </thead>
            <tbody>
              {getCurrentUsers().map((user, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "light-row" : "dark-row"}
                >
                  <td>{`${user.id}.`}</td>
                  <td>{user.name}</td>
                  <td>
                    {
                      phoneBrands[
                        Math.floor(Math.random() * phoneBrands.length)
                      ]
                    }
                  </td>{" "}
                  {/* Случайная марка телефона */}
                  <td>{Math.floor(Math.random() * 100)}%</td>
                  <td>{"10:00"}</td>
                  <td>{"11:00"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default UserTable;
