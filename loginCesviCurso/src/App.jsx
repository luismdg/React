import { useState } from 'react';
import cesviLogo from './assets/logo-cesvi.png';
import './App.css';

function Header() {
  return (
    <section className="main-login">
      <div className="logo-cont">
        <img src={cesviLogo} alt="" className='logo'/>
      </div>
    </section>
  )
}

function Forms(){
  return(
    <div className="login-cont">  
      <h1>Login</h1>
      <div className="login-input">
        <input type="text" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
      </div>
      <div className="password">
        <div className="checkbox">
          <input type="checkbox"/>
          <p>Remember Me</p>
        </div>
        <p>Forgot Passwrod?</p>
      </div>
      <button>Login</button>
    </div>
  )

}

function App() {
  return (
    <>
      <div>
        <Header/>
      </div>
      <div>
        <Forms/>
      </div>
    </>
  )
}

export default App
