import React from 'react';
import {
  Switch, Route,
} from 'react-router-dom';

import Cart from './common/pages/Cart';
import Checkout from './common/pages/Checkout';
import Favorited from './common/pages/Favorited';
import Home from './common/pages/Home';
import Profile from './common/pages/Profile';
import Purchased from './common/pages/Purchased';
import ShoesDetails from './common/pages/ShoesDetails';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/favorited" component={Favorited} />
      <Route exact path="/details/:id" component={ShoesDetails} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/purchased" component={Purchased} />
    </Switch>
  );
}

export default App;
