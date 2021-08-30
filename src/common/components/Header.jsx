import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export default function Header({ colec }) {
  const dispatch = useDispatch();
  const {
    screen: {
      home, fav, carT, profile, lightTheme,
    },
    cart: { cart },
    user: { logIn },
  } = useSelector((state) => state);
  return (
    <div />
  );
}

Header.propTypes = {
  colec: PropTypes.bool,
};

Header.defaultProps = {
  colec: undefined,
};
