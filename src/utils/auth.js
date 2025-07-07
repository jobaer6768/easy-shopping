const fs = require('fs').promises;
const path = require('path');

const USERS_FILE = path.join(__dirname, '../data/users.json');

// Initialize users file if it doesn't exist
async function initUsersFile() {
  try {
    await fs.access(USERS_FILE);
  } catch {
    await fs.writeFile(USERS_FILE, JSON.stringify([]));
  }
}

// User management functions
module.exports = {
  registerUser: async (userData) => {
    await initUsersFile();
    const users = JSON.parse(await fs.readFile(USERS_FILE));
    
    if (users.some(user => user.email === userData.email)) {
      throw new Error('Email already registered');
    }

    users.push({
      id: Date.now().toString(),
      ...userData,
      createdAt: new Date().toISOString()
    });

    await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
  },

  loginUser: async (email, password) => {
    await initUsersFile();
    const users = JSON.parse(await fs.readFile(USERS_FILE));
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) throw new Error('Invalid credentials');
    return user;
  },

  getUserById: async (id) => {
    await initUsersFile();
    const users = JSON.parse(await fs.readFile(USERS_FILE));
    return users.find(user => user.id === id);
  }
};