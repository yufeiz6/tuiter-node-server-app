let users = [{"username": "alice",   "type": "FACULTY", "_id": "123,", "password": "alice", "firstName" : "Alice", "lastName" : "Wonder"}, 
{ "username": "bob", "type": "STUDENT", "_id": "234", "password": "bob", "firstName" : "Bob", "lastName" : "Marley"}];


export const findAllUsers = () => users;


export const findUserById = (uid) => {
 const index = users.findIndex((u) => u._id === uid);
 if (index !== -1) return users[index];
 return null;
};


export const findUserByUsername = (username) => {
 const index = users.findIndex((u) => u.username === username);
 if (index !== -1) return users[index];
 return null;
};


export const findUserByCredentials = (username, password) => {
 const index = users.findIndex((u) => u.username === username && u.password === password);
 if (index !== -1) return users[index];
 return null;
};


export const createUser = (user) => users.push(user);


export const updateUser = (username, user) => {
 const index = users.findIndex((u) => u.username === username);
 users[index] = { ...users[index], ...user };
 return {status: 'ok'}
};


export const deleteUser = (uid) => {
 const index = users.findIndex((u) => u._id === uid);
 users.splice(index, 1);
 return {status: 'ok'}
};
