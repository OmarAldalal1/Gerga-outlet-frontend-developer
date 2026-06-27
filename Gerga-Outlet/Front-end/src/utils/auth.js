const USERS_KEY = "users";
const CURRENT_USER = "currentUser";

// Get all users
export const getUsers = () => {
  return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
};

// Save user
export const saveUser = (user) => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

// Login check
export const loginUser = (email, password) => {
  const users = getUsers();

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) return null;

  localStorage.setItem(CURRENT_USER, JSON.stringify(user));
  return user;
};

// Get current user
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem(CURRENT_USER));
};

// Logout
export const logout = () => {
  localStorage.removeItem(CURRENT_USER);
};
