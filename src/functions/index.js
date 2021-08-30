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

// FUNÇÃO DE DELIMITAR TAMANHO DO TÍTULO
export const threeWordsTitle = (title) => {
  const newName = `${title.split(' ')[0]} ${title.split(' ')[1]} ${title.split(' ')[2]}`;
  return newName;
};

// ----------------------------------------------------------------------------------------------
// SET FAVORITOS

export const Fav = (product, favorited) => {
  const {
    id, title, thumbnail, price, available_quantity: availableQuantity, attributes,
  } = product;
  const favorite = [...favorited];

  const findFav = favorite.find((item) => item.id === id);
  if (!favorite.length || !findFav) {
    const newFav = [...favorite, {
      id, title, thumbnail, price, availableQuantity, attributes,
    }];
    setStorage('LSfav', newFav);
    return newFav;
  }
  // const newFav = favorited.filter((fav) => fav.id !== id);
  const newFav = removeItem(id, favorited);
  setStorage('LSfav', newFav);
  return newFav;
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
// CARRINHO DE COMPRAS

// ADD, REMOVE, UPDATE CART
export const CarT = (product, cart, add) => {
  const {
    id, title, thumbnail, price, available_quantity: availableQuantity, attributes,
  } = product;
  const findProduct = cart.find((item) => item.id === product.id);
  if (!cart.length || !findProduct) {
    const productCart = [...cart, {
      id, title, thumbnail, price, availableQuantity, attributes, count: 1, totalValue: price,
    }];
    setStorage('LScart', productCart);
    return productCart;
  }
  let productCart = [...cart];
  const key = productCart.indexOf(findProduct);

  if (add) { productCart[key].count += 1; }
  if (!add && productCart[key].count >= 1) { productCart[key].count -= 1; }

  productCart[key].totalValue = Math.round((productCart[key].count
      * productCart[key].price) * 100) / 100;

  if (!add && productCart[key].count === 0) { productCart = removeItem(id, cart); }

  setStorage('LScart', productCart);
  return productCart;
};

// ----------------------------------------------------------------------------------------------
// REDUCERS

// SCREEN
// SET FILTER SHIPPING
export const setShip = (state, filterON) => {
  const { lowFilter, highFilter } = state;

  if (!filterON) {
    const filterState = [lowFilter, highFilter];
    const filterOn = (filterState.filter((item) => item)[0] || false);
    const shipFilter = !state.shipFilter;
    return {
      filterOn,
      shipFilter,
    };
  }
  return {
    filterOn: filterON,
    shipFilter: !state.shipFilter,
  };
};
// ----------------------------------------------------------------------------------------------
