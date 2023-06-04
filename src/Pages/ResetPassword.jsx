import React, { useState, useRef } from 'react'
import '../Assets/CSS/Global.css'
import swal from 'sweetalert'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import utilities from '../Assets/Utility/utility'

function ResetPassword() {
    const queryParameters = new URLSearchParams(window.location.search)
    const user_id = queryParameters.get('id');
    console.log(user_id)

    const [newPassword, setNewPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')

    const checkRef = useRef([])
    const pushCheckRef = (ele) => checkRef.current.push(ele)

    const handleChange = (val) => {
        setNewPassword(val);

        if (newPassword.includes('a') && newPassword.includes('A')) {
            checkRef.current[0].style.display = 'inline-block'
        }
        else {
            checkRef.current[0].style.display = 'none';
        }
    }

    const Reset = async (ele) => {
        try {
            if (newPassword != confirmedPassword) {
                swal('', `confirmed password does not match`, 'info')
            }
            else {
                await axios.put(`${utilities.deploy_url}/api/users/updateUser/${user_id}`, { password: newPassword })
                    .then((resp) => {
                        console.log(resp.data)
                        swal('Reset', `password is successfully reset`, 'success')
                    })
            }
        } catch (error) {

        }
    }

    return (
        <>
            <section className='FP_bg flex items-center justify-center w-screen h-screen'>
                <div className='flex items-center justify-center w-full max-w-7xl h-full'>
                    <div className='flex flex-col items-start justify-center gap-y-5 w-80 max-w-2xl sm:w-96'>
                        <h1 className='text-xl sm:text-3xl text-left font-semibold text-[#f2f2f2]'>Reset Password</h1>
                        <span className='text-justify text-sm text-[#f2f2f2a1] sm:text-md md:text-md lg:text-md'>Your password should contains <br /> 1. Small and Capital letter, <i className={`hidden ml-1.5 fa-solid text-green-600 fa-check`} ref={(ele) => pushCheckRef(ele)}></i> <br /> 2. Atleast one number, <i className={`hidden ml-1.5 fa-solid text-green-600 fa-check`} ref={(ele) => pushCheckRef(ele)}></i> <br /> 3. and Special symbols. <i className={`hidden ml-1.5 fa-solid text-green-600 fa-check`} ref={(ele) => pushCheckRef(ele)}></i> </span>
                        <form action="" className='flex flex-col gap-y-5 items-start justify-center w-full'>
                            <label htmlFor="" className=' bg-[#ffffff0f] py-1.5 px-3 w-full flex items-center justify-start' style={{ borderRadius: '300px' }}>
                                <i className={`mr-2 fa-solid fa-key`}></i>
                                <input type="email" id='email' name='email' placeholder='New password' value={newPassword} onChange={(ele) => handleChange(ele.currentTarget.value)} className='outline-none bg-transparent w-full text-[#f2f2f2a1] py-2' />
                            </label>
                            <label htmlFor="" className=' bg-[#ffffff0f] py-1.5 px-3 w-full flex items-center justify-start' style={{ borderRadius: '300px' }}>
                                <i className={`mr-2 fa-solid fa-key`}></i>
                                <input type="email" id='email' name='email' placeholder='Confirm password' value={confirmedPassword} onChange={(ele) => setConfirmedPassword(ele.currentTarget.value)} className='outline-none bg-transparent w-full text-[#f2f2f2a1] py-2' />
                            </label>
                            <button type='button' className='flex items-center w-40 cursor-pointer justify-center py-2.5 px-3 bg-[brown] text-cyan-100' style={{ borderRadius: '300px' }} onClick={(ele) => Reset(ele)}>Reset</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ResetPassword