import React, { useState, useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import logo from '../Assets/Images/logo.png'

// import css files
import styles from "../Assets/CSS/Register.module.css"
import utilities from '../Assets/Utility/utility';

export default function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
    password: "",
  })

  const inputUsername = useRef();
  const emptyUserName = useRef();
  const inputemail = useRef();
  const emptyemail = useRef();
  const inputPassword = useRef();
  const emptyPassword = useRef();
  const emailhandleClick = (e) => {
    if (emptyemail.current.style.display === "inline") {
      emptyemail.current.style.display = "none";
    }
  }

  const passwordhandleClick = () => {
    if (emptyPassword.current.style.display === "inline") {
      emptyPassword.current.style.display = "none";
    }
  }

  const usernamehandleClick = () => {
    if (emptyUserName.current.style.display === "inline") {
      emptyUserName.current.style.display = "none";
    }
  }

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    // console.log(name, value)
    setUser({
      ...user,
      [name]: value,
    })
  }

  const register = async (e) => {
    const { name, email, password } = user;

    // console.log(user)
    if (user.userName && user.userEmail && user.userEmail.includes("@gmail.com") && user.password) {
      await axios.post(`${utilities.deploy_url}/api/auth/register`, user)
        .then((res) => {
          console.log(res);
          navigate("/login")
        })
        .catch((err) => {
          // console.log(err)
          if (err.response.status === 500) {
            if (err.response.data.message.includes("duplicate key error collection")) {
              console.log("username or email not available")
            }
          }
        })
    }
    else {

      // console.log(inputemail.current)
      if (inputemail.current.value === "") {
        emptyemail.current.style.display = "inline";
      }
      else if (!user.userEmail.includes("@gmail.com")) {
        emptyemail.current.style.display = "inline";
        emptyemail.current.innerHTML = "invalid email !"
      }

      if (inputUsername.current.value === "") {
        emptyUserName.current.style.display = "inline";
      }

      if (inputPassword.current.value === "") {
        emptyPassword.current.style.display = "inline";
      }
    }

  }

  return (
    // console.log("user :- ", user),

    <section className={styles.register}>
      <div className={styles.container}>
        <span className='flex w-full items-center justify-center'>
          <img className='h-20 w-20' src={logo} alt="logo" />
          <p className=' -ml-2.5 text-cyan-500 tracking-widest'>OTELIO</p>
        </span>
        <form action="post" className={styles.form}>
          <label htmlFor="" className={styles.labels}>
            <i className={`${styles.icons} fa-solid fa-user`}></i>
            <input className={styles.inputs} type="text" name='userName' value={user.userName} id={styles.userName} placeholder='username' onChange={handleChange} ref={inputUsername} onClick={usernamehandleClick} />
            <p className={styles.wrongInput} ref={emptyUserName}>*required</p>
          </label>
          <label htmlFor="" className={styles.labels}>
            <i className={`${styles.icons} fa-solid fa-envelope`}></i>
            <input className={styles.inputs} type="email" name='userEmail' value={user.userEmail} id="userEmail" placeholder='your email' ref={inputemail} onChange={handleChange} onClick={emailhandleClick} />
            <p className={styles.wrongInput} ref={emptyemail}>*required</p>
          </label>
          <label htmlFor="" className={styles.labels}>
            <i className={`${styles.icons} fa-solid fa-key`}></i>
            <input className={styles.inputs} type="text" name='password' value={user.password} id={styles.userName} placeholder='password' onChange={handleChange} ref={inputPassword} onClick={passwordhandleClick} />
            <p className={styles.wrongInput} ref={emptyPassword}>*required</p>
          </label>
          <button type='button' className={`w-64 sm:w-3/5 py-2.5 px-3 text-lg text-center text-white`} style={{ backgroundColor: 'brown', borderRadius: '350px' }} onClick={register} >Sign up</button>
        </form>
      </div>
    </section>
  )
}


/*
<i class="fa-solid fa-envelope"></i>
*/