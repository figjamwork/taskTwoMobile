import { action, thunk } from "easy-peasy";
//import uuid from "uuid";
//import { v4 as uuidv4 } from 'uuid';
export default {
  users: [],
  // Thunks
  fetchUsers: thunk(async actions => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = await res.json();

    actions.setUsers(users);
  }),
  // Actions
  setUsers: action((state, users) => {
    state.users = users;
  }),
  add: action((state, user) => {
    user.id = Math.floor(1000 + Math.random() * 9000);
		//user.id = uuid.v4();
    //user.id = uuidv4();
    state.users = [user, ...state.users];
  }),
  edit: action((state, id) => {
    state.users.map(user => {
      if (user.id === id) {
       user.name = newName;
      }
      return user;
    });
  }),
  remove: action((state, id) => {
    state.users = state.users.filter(user => user.id !== id);
  })
};
