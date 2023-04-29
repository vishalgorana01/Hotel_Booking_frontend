import React, { useState, useRef, useEffect } from 'react'
import axios, { all } from 'axios'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import styles from '../../Assets/CSS/Admin.module.css'
import PieChartReact from '../../Components/ReactCharts/PieChartReact'
import AreaChartReact from '../../Components/ReactCharts/AreaChartReact'

// for accessing utilities variable
import utilities from '../../Assets/Utility/utility'
import swal from 'sweetalert'

function Dashboard() {
    const [lastDaysReport, setLastDaysReport] = useState('Last 30 Days')
    const [roomBookingReport, setLastDaysRoomBooking] = useState('30 Days')

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];


    const data2 = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    const refReports = useRef()

    let check = true
    const showHide = (ele) => {
        if (!check) {
            refReports.current.classList.remove("flex");
            refReports.current.classList.add("hidden");
            check = true
        }
        else {
            refReports.current.classList.remove("hidden");
            refReports.current.classList.add("flex");
            check = false
        }
    }

    const newCustomersData = [
        {
            firstName: 'Vishal',
            lastName: 'Gorana',
            emailId: 'vishal@gmail.com'
        },
        {
            firstName: 'Vinayak',
            lastName: 'Malviya',
            emailId: 'vinayak@gmail.com'
        },
        {
            firstName: 'Sahil',
            lastName: 'Yadav',
            emailId: 'sahil@gmail.com'
        },
        {
            firstName: 'Pratik',
            lastName: 'Singh',
            emailId: 'pratik@gmail.com'
        },
        {
            firstName: 'Vineet',
            lastName: 'Singh',
            emailId: 'vineet@gmail.com'
        },
        {
            firstName: 'Naman',
            lastName: 'Gorana',
            emailId: 'Naman@gmail.com'
        },
        {
            firstName: 'Vikas',
            lastName: 'Lohar',
            emailId: 'vikas@gmail.com'
        },
        {
            firstName: 'Tannu',
            lastName: 'Gorana',
            emailId: 'tannu@gmail.com'
        },
        {
            firstName: 'Akshay',
            lastName: 'Chandawla',
            emailId: 'ak@gmail.com'
        },
        {
            firstName: 'Dev',
            lastName: 'Chandawla',
            emailId: 'dev@gmail.com'
        },
    ];

    const colors = [
        {
            borderColor: '#28195f',
            bgColor: '#101022',
            color: 'blue'
        },
        {
            borderColor: '#15540a',
            bgColor: '#112411',
            color: '#2eeb2e'
        },
        {
            borderColor: '#592121',
            bgColor: '#1f1111',
            color: 'red'
        },
        {
            borderColor: '#1a5753',
            bgColor: '#142929',
            color: '#14ede5'
        },
        {
            borderColor: 'rgb(86 92 15)',
            bgColor: 'rgb(33 34 16)',
            color: '#c3b013'
        },
    ]


    // for new Customers
    const [newCustomers, setNewCustomers] = useState(newCustomersData.map((newCustomer, index) => {
        return (
            <span key={index} className='flex w-full items-center justify-between px-3 py-3' style={{ borderBottom: '2px solid #020d1e' }}>
                <span className='flex items-center justify-center gap-2'>
                    <span className='flex items-center justify-center h-11 w-11' style={{ border: `2px solid ${colors[index % 5].borderColor}`, borderRadius: '50%', backgroundColor: `${colors[index % 5].bgColor}`, color: `${colors[index % 5].color}` }}>{newCustomer.firstName.charAt(0)}{newCustomer.lastName.charAt(0)}</span>
                    <span className='flex flex-col items-start justify-center gap-1'>
                        <h6 className='text-sm text-cyan-100 lg:text-md'>{newCustomer.firstName}&nbsp;{newCustomer.lastName}</h6>
                        <p className='text-xs text-cyan-100 cursor-pointer italic'>{newCustomer.emailId}</p>
                    </span>
                </span>
                <i className="text-cyan text-md cursor-pointer fa-solid fa-ellipsis-vertical"></i>
            </span>
        )
    })
    )

    const getAllUsers = async () => {
        try {
            await axios.get(`${utilities.deploy_url}/api/users`)
                .then((resp) => {
                    console.log(resp)
                    const allusers = resp.data.filter((ele, index) => {
                        return !(ele.isAdmin)
                    })

                    setNewCustomers(allusers.reverse().map((ele, index) => {
                        return (
                            <span key={index} className='flex w-full items-center justify-between px-3 py-3' style={{ borderBottom: '2px solid #020d1e' }}>
                                <span className='flex items-center justify-center gap-2'>
                                    <span className='flex items-center justify-center h-11 w-11' style={{ border: `2px solid ${colors[index % 5].borderColor}`, borderRadius: '50%', backgroundColor: `${colors[index % 5].bgColor}`, color: `${colors[index % 5].color}` }}>{ele.userName.charAt(0)}</span>
                                    <span className='flex flex-col items-start justify-center gap-1'>
                                        <h6 className='text-sm text-cyan-100 lg:text-md'>{ele.userName}</h6>
                                        <p className='text-xs text-cyan-100 cursor-pointer italic'>{ele.email}</p>
                                    </span>
                                </span>
                                <i className="text-cyan text-md cursor-pointer fa-solid fa-ellipsis-vertical"></i>
                            </span>
                        )
                    }))

                })
        } catch (error) {
            console.log(error)
        }
    }


    // for recent activities -------
    const recentActivityArray = [1, 2, 3, 4, 5];

    // for Recent Activities
    const [recentActivities, setRecentActivities] = useState(recentActivityArray.map((recent, index) => {
        return (
            <span key={index} className='flex w-full items-center justify-between px-3 py-3' style={{ borderBottom: '2px solid #020d1e' }}>
                <span className='flex items-center justify-center gap-2'>
                    <span className='flex items-center justify-center h-11 w-11' style={{ border: `2px solid ${colors[index % 5].borderColor}`, borderRadius: '50%', backgroundColor: `${colors[index % 5].bgColor}`, color: `${colors[index % 5].color}` }}>XY</span>
                    <span className='flex flex-col items-start justify-center gap-1'>
                        <h6 className='text-sm text-cyan-100 lg:text-md'>Xyz renofgorer</h6>
                        <p className='text-xs text-cyan-100 cursor-pointer italic'>want to book rooms</p>
                    </span>
                </span>
                <i className="text-cyan text-md cursor-pointer fa-solid fa-ellipsis-vertical"></i>
            </span>
        )
    }))



    // for confirm request and Bookings
    const confirmBooking = async (booking_id) => {
        swal("click on 'OK' to confirmed the booking")
        .then(async ()=> {
            console.log(booking_id)

            const updation = {status: 'confirmed'}
            await axios.put(`${utilities.deploy_url}/api/requests/updateRequest/${booking_id}`, updation)
            .then((res)=> {
                console.log(res)
                getAllRequests()
                .then(()=>{
                    swal("confirmed"," ", "success");
                })
                
            })
            .catch((err)=>{
                console.log(err)
            })

        })
    }

    const getAllRequests = async (req, res) => {
        await axios.get(`${utilities.deploy_url}/api/requests/receivedAll`)
            .then((res) => {
                console.log(res.data)

                const userActivities = res.data.filter((ele, index) => {
                    return ele.status == "payment pending"
                })

                setRecentActivities(userActivities.map((ele, index) => {
                    return (
                        <span key={index} className='relative flex w-full items-center justify-between px-3 py-3' style={{ borderBottom: '2px solid #020d1e' }}>
                            <span className='flex items-center justify-center gap-2'>
                                <span className='flex items-center justify-center h-11 w-11' style={{ border: `2px solid ${colors[index % 3].borderColor}`, borderRadius: '50%', backgroundColor: `${colors[index % 3].bgColor}`, color: `${colors[index % 3].color}` }}>{ele.userName.charAt(0)}</span>
                                <span className='flex flex-col items-start justify-center gap-1'>
                                    <h6 className='text-sm text-cyan-100 lg:text-md'>{ele.userName}</h6>
                                    <p className='text-xs text-cyan-100 cursor-pointer italic'>want to book rooms</p>
                                </span>
                            </span>

                            <span className='relative  flex flex-row items-center justify-center'>
                                <span className='px-2 py-1 text-xl font-bold cursor-pointer text-green-500' style={{ border: '2px solid rgb(2, 13, 30)' }} onClick={()=> {confirmBooking(ele._id)}}>
                                    <i className="fa-solid fa-check"></i>
                                </span>
                                <span className='w-full cursor-pointer text-xl font-bold px-2.5 py-1 text-red-500' style={{ border: '2px solid rgb(2, 13, 30)' }}>
                                    <i className="fa-solid fa-xmark"></i>
                                </span>
                            </span>
                        </span>
                    )
                }));
            })
    }

    useEffect(() => {
        getAllUsers()
            .then(() => {
                getAllRequests();
            })
    }, [])

    return (
        <>
            <div className={`${styles.hideScrollbar} flex items-center justify-start overflow-y-scroll flex-col w-full max-w-7xl py-2 my-3`}>
                <div className='flex items-center px-3 justify-between w-full'>
                    <span className='flex flex-col items-start justify-center gap-1'>
                        <h2 className='text-cyan-100 text-xl sm:text-3xl'>Dashboard Overview</h2>
                        <i className='text-cyan-100 text-xs sm:text-md'>Welcome, &nbsp;Admin Name</i>
                    </span>

                    <span className='flex relative items-center justify-center'>
                        <span className="dropdown absolute top-10 right-2 items-center justify-center py-2 rounded-sm  px-2.5 hidden sm:relative sm:top-auto sm:right-auto sm:flex lg:mx-2" style={{ border: '2px solid #020d1e', backgroundColor: 'rgb(4 17 37)' }} ref={refReports}>
                            <span className="dropdown-toggle text-cyan-200" role="button" id="dropdownMenuLink" data-mdb-toggle="dropdown"
                                aria-expanded="false"><i className="text-2xl mr-3 text-cyan-100 fa-sharp fa-solid fa-calendar-days"></i> {lastDaysReport} </span>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li onClick={(ele) => setLastDaysReport(ele.target.textContent)}><a className="dropdown-item">Last 1 Month</a></li>
                                <li onClick={(ele) => setLastDaysReport(ele.target.textContent)}><a className="dropdown-item">Last 6 Months</a></li>
                                <li onClick={(ele) => setLastDaysReport(ele.target.textContent)}><a className="dropdown-item">Last 1 Year</a></li>
                            </ul>
                        </span>
                        <i className="fa-solid fa-ellipsis-vertical text-cyan-100 text-xl sm:hidden" onClick={() => showHide(refReports.current)}></i>
                    </span>
                </div>

                <div className='flex items-center justify-center my-2 py-2 px-2 w-full gap-2 max-w-7xl flex-col sm:flex-row sm:flex-wrap md:flex-wrap lg:flex-wrap xl:flex-nowrap'>

                    <span className='flex flex-col items-start justify-center p-4 text-cyan-100 rounded-sm w-full sm:w-auto lg:w-1/3' style={{ border: '2px solid #020d1e', backgroundColor: '#020d1e4a' }}>
                        <span className='flex items-center justify-between py-1 mb-3 w-full'>
                            <h5>Total Booking</h5>
                            <i className="fa-solid fa-circle-question"></i>
                        </span>

                        <span className='flex py-1 mb-3 gap-3.5 items-center justify-start'>
                            <h5 className='text-lg'>11,120</h5>
                            <span className='flex items-end justify-center text-red-600'><i className="fa-sharp fa-solid fa-arrow-down mr-1.5"></i>1.93 %</span>
                        </span>

                        <span className='flex items-center gap-3.5 justify-between py-1 w-full'>
                            <span className='text-start text-sm'>This Month <br />1913</span>
                            <span className='text-start text-sm'>This Week <br />1913</span>
                            <span className='h-12 w-20'>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart width={150} height={40} data={data}>
                                        <Bar dataKey="uv" fill="#8884d8" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </span>
                        </span>
                    </span>


                    <span className='flex flex-col items-start justify-center p-4 text-cyan-100 rounded-sm w-full sm:w-auto lg:w-1/3' style={{ border: '2px solid #020d1e', backgroundColor: '#020d1e4a' }}>
                        <span className='flex items-center justify-between py-1 mb-3 w-full'>
                            <h5>Total Booking</h5>
                            <i className="fa-solid fa-circle-question"></i>
                        </span>

                        <span className='flex py-1 mb-3 gap-3.5 items-center justify-start'>
                            <h5 className='text-lg'>11,120</h5>
                            <span className='flex items-end justify-center text-red-600'><i className="fa-sharp fa-solid fa-arrow-down mr-1.5"></i>1.93 %</span>
                        </span>

                        <span className='flex items-center gap-3.5 justify-between py-1 w-full'>
                            <span className='text-start text-sm'>This Month <br />1913</span>
                            <span className='text-start text-sm'>This Week <br />1913</span>
                            <span className='h-12 w-20'>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart width={150} height={40} data={data}>
                                        <Bar dataKey="uv" fill="#8884d8" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </span>
                        </span>
                    </span>


                    <span className='flex flex-col items-start justify-center p-4 text-cyan-100 rounded-sm w-full sm:w-auto lg:w-1/3' style={{ border: '2px solid #020d1e', backgroundColor: '#020d1e4a' }}>
                        <span className='flex items-center justify-between py-1 mb-3 w-full'>
                            <h5>Total Booking</h5>
                            <i className="fa-solid fa-circle-question"></i>
                        </span>

                        <span className='flex py-1 mb-3 gap-3.5 items-center justify-start'>
                            <h5 className='text-lg'>11,120</h5>
                            <span className='flex items-end justify-center text-red-600'><i className="fa-sharp fa-solid fa-arrow-down mr-1.5"></i>1.93 %</span>
                        </span>

                        <span className='flex items-center gap-3.5 justify-between py-1 w-full'>
                            <span className='text-start text-sm'>This Month <br />1913</span>
                            <span className='text-start text-sm'>This Week <br />1913</span>
                            <span className='h-12 w-20'>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart width={150} height={40} data={data}>
                                        <Bar dataKey="uv" fill="#8884d8" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </span>
                        </span>
                    </span>

                </div>

                <div className='flex items-center justify-center my-2 py-2 px-2 w-full gap-2 max-w-7xl flex-col sm:flex-row sm:flex-wrap md:flex-wrap lg:flex-wrap xl:flex-nowrap'>

                    <span className='flex flex-col items-center justify-center h-auto text-cyan-100 p-4 w-full lg:w-1/2 xl:h-full' style={{ border: '2px solid #020d1e', backgroundColor: '#020d1e4a' }}>
                        <span className='flex items-center justify-between w-full mb-3'>
                            <span className='flex flex-col items-start justify-center'>
                                <h5 className='text-lg mb-1.5'>Sales Revenue</h5>
                                <p className='text-xs'>In last 30 days revenue from rent</p>
                            </span>
                            <i className="fa-solid fa-circle-question"></i>
                        </span>

                        <span className='flex items-center justify-between w-full mb-3'>
                            <span className='flex flex-col items-start justify-center'>
                                <p className='text-xs'>Monthly</p>
                                <span className='text-2xl'>9.28K</span>
                                <span className='flex text-sm items-end justify-center text-green-600'><i className="fa-sharp fa-solid fa-arrow-up text-xs mr-1.5"></i>4.63 %</span>
                            </span>

                            <span className='flex flex-col items-center justify-center'>
                                <p className='text-xs'>Monthly</p>
                                <span className='text-2xl'>9.28K</span>
                                <span className='flex text-sm items-end justify-center text-red-600'><i className="fa-sharp fa-solid fa-arrow-down text-xs mr-1.5"></i>1.92 %</span>
                            </span>

                            <span className='flex flex-col items-end justify-center'>
                                <p className='text-xs'>Monthly</p>
                                <span className='text-2xl'>9.28K</span>
                                <span className='flex text-sm items-end justify-center text-green-600'><i className="fa-sharp fa-solid fa-arrow-up text-xs mr-1.5"></i>3.45 %</span>
                            </span>
                        </span>

                        <span className='w-full flex items-center justify-center h-52 mt-9'>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart width={150} height={40} data={data2}>
                                    <Bar dataKey="uv" fill="#8884d8" />
                                </BarChart>
                            </ResponsiveContainer>
                        </span>
                    </span>

                    <span className='flex flex-col items-center justify-center text-cyan-100 p-4 w-full lg:w-1/2' style={{ border: '2px solid #020d1e', backgroundColor: '#020d1e4a' }}>
                        <span className='flex items-center justify-between w-full'>
                            <h5 className='text-lg text-left'>Room Booking Chart</h5>
                            <span className="dropdown relative items-center text-sm justify-center py-1 rounded-sm  px-2.5" style={{ border: '2px solid #020d1e', backgroundColor: 'rgb(4 17 37)' }}>
                                <span className="dropdown-toggle text-cyan-200" role="button" id="dropdownMenuLink" data-mdb-toggle="dropdown"
                                    aria-expanded="false">{roomBookingReport} </span>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li onClick={(ele) => setLastDaysRoomBooking(ele.target.textContent)}><a className="dropdown-item">7 days</a></li>
                                    <li onClick={(ele) => setLastDaysRoomBooking(ele.target.textContent)}><a className="dropdown-item">15 Days</a></li>
                                    <li onClick={(ele) => setLastDaysRoomBooking(ele.target.textContent)}><a className="dropdown-item">30 Days</a></li>
                                </ul>
                            </span>
                        </span>

                        <span className='w-full flex flex-col items-center justify-center h-full'>
                            <span className='w-full flex items-center justify-center h-64'>
                                <PieChartReact />
                            </span>

                            <span className='grid grid-cols-2 w-full'>
                                <span className='flex items-start justify-center gap-2 mb-2'>
                                    <span className='bg-slate-100 w-3 h-3'></span>
                                    <span className='flex flex-col items-start justify-center'>
                                        <h6 className='text-sm font-normal'>Single</h6>
                                        <span className='text-lg flex items-center justify-center'>1913 &nbsp; <p className='text-xs'>89.34%</p></span>
                                    </span>
                                </span>

                                <span className='flex items-start justify-center gap-2 mb-2'>
                                    <span className='bg-slate-100 w-3 h-3'></span>
                                    <span className='flex flex-col items-start justify-center'>
                                        <h6 className='text-sm font-normal'>Single</h6>
                                        <span className='text-lg flex items-center justify-center'>1913 &nbsp; <p className='text-xs'>89.34%</p></span>
                                    </span>
                                </span>

                                <span className='flex items-start justify-center gap-2 mb-2'>
                                    <span className='bg-slate-100 w-3 h-3'></span>
                                    <span className='flex flex-col items-start justify-center'>
                                        <h6 className='text-sm font-normal'>Single</h6>
                                        <span className='text-lg flex items-center justify-center'>1913 &nbsp; <p className='text-xs'>89.34%</p></span>
                                    </span>
                                </span>

                                <span className='flex items-start justify-center gap-2 mb-2'>
                                    <span className='bg-slate-100 w-3 h-3'></span>
                                    <span className='flex flex-col items-start justify-center'>
                                        <h6 className='text-sm font-normal'>Single</h6>
                                        <span className='text-lg flex items-center justify-center'>1913 &nbsp; <p className='text-xs'>89.34%</p></span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </span>
                </div>

                <div className='flex items-center justify-center my-2 py-2 px-2 w-full gap-2 max-w-7xl flex-col sm:flex-row sm:flex-wrap md:flex-wrap lg:flex-wrap xl:flex-nowrap'>
                    <span className='flex w-full flex-col h-full items-center justify-center text-cyan-100 p-4' style={{ border: '2px solid #020d1e', backgroundColor: '#020d1e4a' }}>
                        <span className='flex relative flex-col top-0 gap-4 items-center justify-between w-full sm:flex-row'>
                            <span className='flex flex-col items-center justify-center sm:items-start'>
                                <h5 className='text-lg text-center sm:text-left'>Income vs Expenses</h5>
                                <p className='text-xs text-center sm:text-left'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                            </span>

                            <span className='flex items-center justify-center rounded-sm' style={{ border: '2px solid rgb(54 58 65)', backgroundColor: '#020d1e4a' }}>
                                <span className='py-2 px-3'>7D</span>
                                <span className='py-2 px-3' style={{ borderLeft: '2px solid rgb(54 58 65)', borderRight: '2px solid rgb(54 58 65)' }}>1M</span>
                                <span className='py-2 px-3'>3M</span>
                            </span>
                        </span>

                        <span className='flex relative top-0 mt-36 mb-4 items-center justify-center w-full h-56'>
                            <AreaChartReact />
                        </span>
                    </span>
                </div>

                <div className='flex items-center justify-center my-2 py-2 px-2 w-full gap-2 max-w-7xl flex-col xl:flex-row'>
                    <span className='flex flex-col text-cyan-100 items-center justify-center w-full xl:w-1/2' style={{ border: '2px solid #020d1e', backgroundColor: '#020d1e4a' }}>
                        <span className='flex items-center w-full justify-between py-3 px-3' style={{ borderBottom: '2px solid #020d1e' }}>
                            <h5 className='text-lg'>New Customer's</h5>
                            <p className='text-purple-500 text-md cursor-pointer'>view all</p>
                        </span>

                        <span className={`${styles.modifiedScrollbar} flex flex-col items-center justify-start overflow-y-scroll h-96 w-full`}>
                            {newCustomers}
                        </span>
                    </span>

                    <span className='flex flex-col text-cyan-100 items-center justify-center w-full xl:w-1/2' style={{ border: '2px solid #020d1e', backgroundColor: '#020d1e4a' }}>
                        <span className='flex items-center w-full justify-between py-3 px-3' style={{ borderBottom: '2px solid #020d1e' }}>
                            <h5 className='text-lg'>Recent Activities</h5>
                            <span className='flex items-center justify-center gap-4'>
                                <p className='text-cyan-100 text-md cursor-pointer'>Cancel</p>
                                <p className='text-cyan-100 text-md cursor-pointer'>All</p>
                            </span>
                        </span>

                        <span className={`${styles.modifiedScrollbar} flex flex-col items-center justify-start overflow-y-scroll h-96 w-full`}>
                            {recentActivities}
                        </span>
                    </span>

                </div>

            </div>
        </>
    )
}

export default Dashboard