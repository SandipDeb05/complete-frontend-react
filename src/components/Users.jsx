import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async (url, params = {}) => {
    setLoading(true);
    try {
      const response = await axios.get(url, { params });
      return response.data;
    } catch (error) {
      console.error("Error fetching data", error);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchData(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (data) setUsers(data);
    };
    loadUsers();
  }, [fetchData]);

  const handleUserClick = async (userId) => {
    const data = await fetchData("https://jsonplaceholder.typicode.com/users", {
      id: userId,
    });
    if (data) setUser(data[0]);
  };

  const handleBackClick = () => {
    setUser(null);
  };

  return (
    <div>
      <ul>
        {loading ? (
          <p>Loading...</p>
        ) : user ? (
          <div>
            <p>{user.username}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <button onClick={handleBackClick}>Back</button>
          </div>
        ) : (
          users.map((user) => (
            <div key={user.id}>
              <li>{user.name}</li>
              <button onClick={() => handleUserClick(user.id)}>
                Learn more
              </button>
            </div>
          ))
        )}
      </ul>
    </div>
  );
};

export default Users;
