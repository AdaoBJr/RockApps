// HELPERS ---------------------------------------------------------------------------------

// VIEW QUANTIDADE DE PRODUTOS EM ESTOQUE
export const showQty = (id, cart) => {
  if (id) {
    const product = cart.filter((c) => c.id === id)[0];
    const qty = (product) ? product.count : 0;
    return qty;
  }
  const qty = cart.reduce((acc, currValue) => acc + currValue.count, 0);
  return qty;
};

// SET / GET LOCALSTORAGE
export const setStorage = (key, value) => (
  localStorage.setItem(key, JSON.stringify(value)));

export const getStorage = (key, value = []) => (
  JSON.parse(localStorage.getItem(key)) || value);

// FUNÇÃO DE REMOÇÃO
export const removeItem = (id, arrayData) => {
  const removedItem = arrayData.filter((item) => item.id !== id);
  setStorage('LScart', removedItem);
  return removedItem;
};

// ----------------------------------------------------------------------------------------------

// LOGIN

export const AddToUsers = (register, users, Email) => {
  const { RuserName: userName, Remail: email, Rpassword: password } = register;

  // DEFINE ALL USERS ACTIVE: FALSE
  const Users = [...users];
  for (let i = 0; i < Users.length; i += 1) {
    Users[i].active = false;
  }

  if (register || Email) {
  // FIND USER
    const findUser = Users.find((item) => item.email === Email);

    // ADD NEW USER
    if (!Users.length || !findUser) {
      const newUsers = [...users, {
        userName, email, password, active: true,
      }];
      setStorage('LSusers', newUsers);
      return newUsers;
    }

    // UPDATE USER
    const key = Users.indexOf(findUser);
    Users[key].active = true;
    if (register) {
      Users[key].userName = userName;
      Users[key].password = password;
    }
  }
  setStorage('LSusers', Users);
  return Users;
};

export const AddPhotoToUsers = (users, photo) => {
  const Users = [...users];
  // FIND USER ACTIVE
  const findUser = Users.find((item) => item.active);

  // ADD PHOTO
  const key = Users.indexOf(findUser);
  Users[key].photo = photo;

  setStorage('LSusers', Users);
  return Users;
};

// ----------------------------------------------------------------------------------------------
