const users = [
    { username: 'test', password: 'test' }
  ];
  
  export const login = (username, password) => {
    return users.some(user => user.username === username && user.password === password);
  };
  
  export const signup = (username, password) => {
    users.push({ username, password });
  };
  