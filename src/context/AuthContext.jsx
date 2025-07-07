import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);

  // Load users on initial render
  useEffect(() => {
    fetch("/api/v1/users.json")
      .then((res) => res.json())
      .then(setUsers)
      .catch(console.error);
  }, []);

  const register = async (userData) => {
    const newUsers = [...users, userData];
    setUsers(newUsers);
    setCurrentUser(userData);
    // In a real app, you would write to the file here
  };

  const login = (email, password) => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) setCurrentUser(user);
    return user;
  };

  const logout = () => setCurrentUser(null);

  return (
    <AuthContext.Provider value={{ currentUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
