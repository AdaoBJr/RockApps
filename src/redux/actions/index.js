// LOGIN ------------------------------------------------------------------------------------------

// SCREEN ---------------------------------------------------------------------------------------

export const SET_FETCHON_DONE = 'SET_FETCHON_DONE'; // ACTION -> SET_FETCHON_DONE
export const setFetchOnDone = (fetchOn, done) => ({ // ACTION-CREATOR -> SET_FETCHON_DONE
  type: SET_FETCHON_DONE, payload: { fetchOn, done },
});

export const SET_DONE_LOADING = 'SET_DONE_LOADING'; // ACTION -> SET_DONE_LOADING
export const setDoneLoading = (done, loading) => ({ // ACTION-CREATOR -> SET_DONE_LOADING
  type: SET_DONE_LOADING, payload: { done, loading },
});

export const HIGH_FILTER = 'HIGH_FILTER'; // ACTION -> HIGH_FILTER
export const setHighFilter = (filterOn) => ({ // ACTION-CREATOR -> setHighFilter
  type: HIGH_FILTER, payload: { filterOn },
});

export const LOW_FILTER = 'LOW_FILTER'; // ACTION -> LOW_FILTER
export const setLowFilter = (filterOn) => ({ // ACTION-CREATOR -> setLowFilter
  type: LOW_FILTER, payload: { filterOn },
});

export const SHIP_FILTER = 'SHIP_FILTER'; // ACTION -> SHIP_FILTER
export const setShipFilter = (filterOn) => ({ // ACTION-CREATOR -> setShipFilter
  type: SHIP_FILTER, payload: { filterOn },
});

export const SET_SCREEN_HOME = 'SET_SCREEN_HOME'; // ACTION -> SET_SCREEN_HOME
export const SET_SCREEN_FAV = 'SET_SCREEN_FAV'; // ACTION -> SET_SCREEN_FAV
export const SET_SCREEN_CART = 'SET_SCREEN_CART'; // ACTION -> SET_SCREEN_CART
export const SET_SCREEN_PROFILE = 'SET_SCREEN_PROFILE'; // ACTION -> SET_SCREEN_PROFILE
export const SET_SCREEN_DETAILS = 'SET_SCREEN_DETAILS'; // ACTION -> SET_SCREEN_DETAILS
export const SET_THEME = 'SET_THEME'; // ACTION -> SET_THEME
export const OPEN_FILTER_MENU = 'OPEN_FILTER_MENU'; // ACTION -> OPEN_FILTER_MENU

// CART ---------------------------------------------------------------------------------------

export const ADD_CART = 'ADD_CART'; // ACTION -> ADD_PRODUCTS
export const addCart = (cart) => ({ // ACTION-CREATOR -> ADD_PRODUCTS
  type: ADD_CART, payload: { cart },
});

// -------------------------------------------------------------------------------------------------
