import axios from 'axios'
import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "../Assets/CSS/Register.module.css"
import utilities from '../Assets/Utility/utility';
import swal from 'sweetalert';

import logo from '../Assets/Images/logo.png'

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName_Email: "",
    password: ""
  })

  // const inputUsername = useRef();
  const emptyUserName_email = useRef();
  // const inputPassword = useRef();
  const emptyPassword = useRef();

  const handleUsername = () => {
    if (emptyUserName_email.current.style.display === "inline") {
      emptyUserName_email.current.style.display = "none";
    }
  }

  const handleEmail = () => {
    if (emptyPassword.current.style.display === "inline") {
      emptyPassword.current.style.display = "none";
    }
  }

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const loginSpinnerRef = useRef(null)

  const login = async () => {
    const { userName_Email, password } = user;

    // using fetch api
    // const data = JSON.stringify(user)
    // await fetch(`${utilities.deploy_url}/api/auth/login`,
    // {
    //   method: 'POST',
    //   mode: 'cors',
    //   cache: 'no-cache',
    //   credentials: 'same-origin',
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Content-Length": "calculated",
    //   },
    //   redirect: "follow",
    //   referrerPolicy: 'no-referrer',
    //   body: data
    // })
    // .then((res)=>{
    //    return res.json()
    // })
    // .then((res)=>{
    //   console.log(res)
    // })
    // .catch((err)=>{
    //   console.log(err)
    // })

    if (user.userName_Email && user.password) {
      loginSpinnerRef.current.style.display = 'inline-block';
      await axios.post(`${utilities.deploy_url}/api/auth/login`, user)
        .then((resp) => {
          // console.log(resp)
          sessionStorage.setItem("userId", resp.data._id);

          if (resp.data.isAdmin) {
            navigate("/AdminPanel")
          }
          else {
            navigate("/Home");
          }

        })
        .catch((err) => {
          console.log(err);
          if (err.response.status == 404) {
            swal("Not found!", "No such user of this username or email!", "error")
              .then(() => {
                loginSpinnerRef.current.style.display = "none";
                setUser({
                  userName_Email: '',
                  password: ''
                })
              })
          }
          else if (err.response.status == 400) {
            swal("Invalid!", "Incorrect email/username or password!", "error")
              .then(() => {
                loginSpinnerRef.current.style.display = "none";
                setUser({
                  userName_Email: '',
                  password: ''
                })
              })
          }
        })
    }
    else {
      if (user.userName_Email === "") {
        emptyUserName_email.current.style.display = "inline";
      }

      if (user.password === "") {
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
            <input className={styles.inputs} type="text" name='userName_Email' value={user.userName_Email} id={styles.userName} placeholder='username or email' onChange={handleChange} onClick={handleUsername} />
            <p className={styles.wrongInput} ref={emptyUserName_email}>*required</p>
          </label>
          <label htmlFor="" className={styles.labels}>
            <i className={`${styles.icons} fa-solid fa-key`}></i>
            <input className={styles.inputs} type="email" name='password' value={user.password} id={styles.userName} placeholder='password' onChange={handleChange} onClick={handleEmail} />
            <p className={styles.wrongInput} ref={emptyPassword}>*required</p>
          </label>
          <button type='button' className={`w-64 sm:w-3/5 py-2.5 px-3 text-lg text-center bg-[brown] text-white active:shadow-slate-400 active:shadow-inner`} onClick={login} style={{ marginBottom: "0px", borderRadius: '350px' }} ><i className="mr-2 hidden fa-solid fa-rotate fa-spin" ref={loginSpinnerRef}></i>Login</button>

          <label htmlFor="" className={`${styles.labels} flex justify-between mt-1`} style={{ marginTop: "0px", background: "none" }}>
            <label htmlFor="" className="flex flex-row items-center justify-center"><i style={{ color: "brown" }} className={`${styles.onoff} fa-solid fa-toggle-off mr-2 hover:cursor-pointer`}></i><p className="text-white text-us7" style={{ fontSize: "0.7rem", color: "brown" }}>keep logged in</p></label>
            <label className="hover:cursor-pointer" style={{ color: "brown", fontSize: "0.7rem" }}>
              <a href="/forgotPassword">forgot password ?</a>
            </label>
          </label>

          <label htmlFor="" className={`${styles.labels} flex justify-between bg-none`} style={{ background: "none" }}>
            <label className="hover:cursor-pointer" htmlFor="" style={{ color: "brown", fontSize: "12px" }} onClick={() => { navigate("/register") }}>CREATE ACCOUNT</label>
            <label className="hover:cursor-pointer" style={{ color: "brown", fontSize: "12px" }}>NEED HELP?</label>
          </label>
        </form>

      </div>
    </section>
  )
}
