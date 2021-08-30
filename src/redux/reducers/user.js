export const USER = {
  logIn: false,
  signUp: false,
  msgLogin: false,
  msgLoginOK: false,
  msgLoginError: false,
  msgLoginNotExist: false,
  users: [],
};

const userReducer = (state = USER, { type /* payload */ }) => { // Desestruturação do Action
  switch (type) {
    default:
      return state;
  }
};

export default userReducer;
