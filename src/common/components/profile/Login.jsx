import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setMsgLogin, setSignUp } from '../../../redux/actions';

import Footer from '../general/Footer';
import Header from '../general/Header';
import LoginDash from '../animations/LoginDash';

export default function Login() {
  const dispatch = useDispatch();

  const renderGoLogin = () => (
    <>
      <Header />
      <h1 className="goLoginTitle">Para continuar, efetue o acesso a sua conta GoShoes</h1>
      <br />
      <div className="cartLogin">
        <LoginDash />
        <Link to="/profile">
          <button
            type="button"
            className="loginSignin"
            onClick={() => { dispatch(setMsgLogin(false)); }}
            style={{ marginBottom: '.8rem' }}
          >
            Acessar Login
          </button>
          <FaArrowAltCircleRight style={{ verticalAlign: 'middle' }} className="footerSocial" />
        </Link>
        <p className="loginAccount">Não tem uma conta ?</p>
        <Link to="/profile">
          <button
            type="button"
            onClick={() => { dispatch(setSignUp()); dispatch(setMsgLogin(false)); }}
            className="loginSignin"
          >
            Registre-se
          </button>
          <FaArrowAltCircleRight style={{ verticalAlign: 'middle' }} className="footerSocial" />
        </Link>
      </div>
      <Footer />
    </>
  );

  return (
    renderGoLogin()
  );
}
