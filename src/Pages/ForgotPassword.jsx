import React, { useRef, useState } from 'react'
import '../Assets/CSS/Global.css'
import axios from 'axios';
import utilities from '../Assets/Utility/utility';
import swal from 'sweetalert';

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const loginSpinnerRef = useRef(null)

    const sendResetLink = async (ele) => {
        if (email == '') {
            swal('Not Provided', 'Email is not provided !', 'info')
        }
        else {
            try {
                loginSpinnerRef.current.style.display = 'inline'
                await axios.post(`${utilities.deploy_url}/api/users/findbyemail`, { email })
                    .then(async (resp) => {
                        console.log(resp.data)
                        const Reset_id = resp.data._id

                        await axios.post(`${utilities.deploy_url}/api/users/find`, { Reset_id: Reset_id, email: email })
                            .then((resp) => {
                                console.log(resp)
                                swal("Send", `${resp.data} !`, "success")
                                    .then(() => {
                                        loginSpinnerRef.current.style.display = 'none'
                                        // swal("Check Your Email", "", "info")
                                    })
                            })

                    })
                    .catch((err) => {
                        if (err.response.status === 404) {
                            swal("Not Found", "This email is not registered !", "error")
                                .then(() => {
                                    loginSpinnerRef.current.style.display = 'none'
                                })
                        }
                    })
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <>
            <section className='FP_bg flex items-center justify-center w-screen h-screen'>
                <div className='flex items-center justify-center w-full max-w-7xl h-full'>
                    <div className='flex flex-col items-start justify-center gap-y-5 w-80 max-w-2xl sm:w-10/12'>
                        <h1 className='text-xl sm:text-3xl text-left font-semibold text-[#f2f2f2]'>Forgot Password</h1>
                        <span className='text-justify text-sm text-[#f2f2f2a1] sm:text-md md:text-md lg:text-md'>Enter your email address which associated with your account. We will email you a link to reset your password.</span>
                        <form action="" className='flex flex-col gap-y-5 items-start justify-center w-full'>
                            <label htmlFor="" className=' bg-[#ffffff0f] py-1.5 px-3 w-full flex items-center justify-start' style={{ borderRadius: '300px' }}>
                                <i className={`mr-2 fa-solid fa-envelope`}></i>
                                <input type="email" id='email' name='email' placeholder='email address' value={email} required onChange={(ele) => setEmail(ele.currentTarget.value)} className='outline-none bg-transparent w-full text-[#f2f2f2a1] py-2' />
                                {/* <input type="email" /> */}
                            </label>
                            <button type='button' className='flex items-center w-40 cursor-pointer justify-center py-2.5 px-3 bg-[brown] text-cyan-100' style={{ borderRadius: '300px' }} onClick={(ele) => sendResetLink(ele)}><i className="mr-2 hidden fa-solid fa-rotate fa-spin" ref={loginSpinnerRef}></i>send</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ForgotPassword