import React, { useEffect, useRef, useState } from 'react'
import styles from '../../Assets/CSS/TestimonialsSection.module.css'

import testimonial1 from '../../Assets/Images/Testimoials1.png';
import testimonial2 from '../../Assets/Images/Testimoials2.png';
import testimonial3 from '../../Assets/Images/Testimoials3.png';
import testimonial4 from '../../Assets/Images/Testimoials4.png';
import testimonial5 from '../../Assets/Images/Testimoials5.png';


function Testimonials() {
    const [active, setActive] = useState(
        {
            isActive1: true,
            isActive2: false,
            isActive3: false,
            isActive4: false,
        }
    )

    const leftArrowRef = useRef(null)
    const rightArrowRef = useRef(null)

    const circleProfileImage1 = useRef(null)
    const circleProfileImage2 = useRef(null)
    const circleProfileImage3 = useRef(null)
    const circleProfileImage4 = useRef(null)

    const testimonialsDetails1 = useRef(null)
    const testimonialsDetails2 = useRef(null)
    const testimonialsDetails3 = useRef(null)
    const testimonialsDetails4 = useRef(null)

    const testimonialsNameRef = useRef([]);
    const pushTestimonialsNameRef = (ele) => testimonialsNameRef.current.push(ele)


    const slide = (givenX, index) => {
        testimonialsDetails4.current.style.transition = `all 0.6s`
        testimonialsDetails4.current.style.transform = `translateX(${givenX}px)`

        testimonialsDetails3.current.style.transition = `all 0.6s`
        testimonialsDetails3.current.style.transform = `translateX(${givenX}px)`

        testimonialsDetails2.current.style.transition = `all 0.6s`
        testimonialsDetails2.current.style.transform = `translateX(${givenX}px)`

        testimonialsDetails1.current.style.transition = `all 0.6s`
        testimonialsDetails1.current.style.transform = `translateX(${givenX}px)`

        for(let i=0; i<4; i++){
            if(i == index){
                testimonialsNameRef.current[i].style.transition = 'all 0.6s'
                testimonialsNameRef.current[i].style.opacity = '1'
            }
            else{
                testimonialsNameRef.current[i].style.transition = 'all 0.1s'
                testimonialsNameRef.current[i].style.opacity = '0'
            }
        }
    }

    const forward = () => {
        if (active.isActive1) {
            console.log("run")
            setActive({
                isActive1: false,
                isActive2: true,
                isActive3: false,
                isActive4: false,
            })

            leftArrowRef.current.style.opacity = '1'
            rightArrowRef.current.style.opacity = '1'

            circleProfileImage1.current.style.transition = "all 0.6s"
            circleProfileImage1.current.style.transform = "translateX(-17.9rem) translateY(12rem) scale(0.6)"

            circleProfileImage2.current.style.transition = "all 0.6s"
            circleProfileImage2.current.style.transform = "translateX(-2.5rem) translateY(0rem) scale(1)"

            circleProfileImage3.current.style.transition = "all 0.6s"
            circleProfileImage3.current.style.transform = "translateX(-17.9rem) translateY(-12rem) scale(0.60)"

            circleProfileImage4.current.style.transition = "all 0.6s"
            circleProfileImage4.current.style.transform = "translateX(-21.3rem) translateY(0rem) scale(0.60)"

            let x = testimonialsDetails4.current.clientWidth;
            console.log(x);
            slide(x,1);

        }
        else if (active.isActive2) {
            setActive({
                isActive1: false,
                isActive2: false,
                isActive3: true,
                isActive4: false,
            })

            leftArrowRef.current.style.opacity = '1'
            rightArrowRef.current.style.opacity = '1'

            leftArrowRef.current.style.opacity = '1'
            rightArrowRef.current.style.opacity = '1'

            circleProfileImage1.current.style.transition = "all 0.6s"
            circleProfileImage1.current.style.transform = "translateX(-21.3rem) translateY(0rem) scale(0.60)"

            circleProfileImage2.current.style.transition = "all 0.6s"
            circleProfileImage2.current.style.transform = "translateX(-17.9rem) translateY(12rem) scale(0.6)"

            circleProfileImage3.current.style.transition = "all 0.6s"
            circleProfileImage3.current.style.transform = "translateX(-2.5rem) translateY(0rem) scale(1)"

            circleProfileImage4.current.style.transition = "all 0.6s"
            circleProfileImage4.current.style.transform = "translateX(-17.9rem) translateY(-12rem) scale(0.6)"

            let x = testimonialsDetails4.current.clientWidth;
            console.log(x);
            slide(2*x, 2);
        }
        else if (active.isActive3) {
            setActive({
                isActive1: false,
                isActive2: false,
                isActive3: false,
                isActive4: true,
            })

            leftArrowRef.current.style.opacity = '1'
            rightArrowRef.current.style.opacity = '0.5'

            circleProfileImage1.current.style.transition = "all 0.6s"
            circleProfileImage1.current.style.transform = "translateX(-17.9rem) translateY(-12rem) scale(0.6)"

            circleProfileImage2.current.style.transition = "all 0.6s"
            circleProfileImage2.current.style.transform = "translateX(-21.3rem) translateY(0rem) scale(0.60)"

            circleProfileImage3.current.style.transition = "all 0.6s"
            circleProfileImage3.current.style.transform = "translateX(-17.9rem) translateY(12rem) scale(0.6)"

            circleProfileImage4.current.style.transition = "all 0.6s"
            circleProfileImage4.current.style.transform = "translateX(-2.5rem) translateY(0rem) scale(1)"

            let x = testimonialsDetails4.current.clientWidth;
            slide(3 * x , 3);

        }
        else if (active.isActive4) {

        }
    }

    const backward = () => {
        if (active.isActive1) {

        }
        else if (active.isActive2) {
            setActive({
                isActive1: true,
                isActive2: false,
                isActive3: false,
                isActive4: false,
            })

            leftArrowRef.current.style.opacity = '0.5'
            rightArrowRef.current.style.opacity = '1'

            circleProfileImage1.current.style.transition = "all 0.6s"
            circleProfileImage1.current.style.transform = "translateX(-2.5rem) translateY(0rem) scale(1)"

            circleProfileImage2.current.style.transition = "all 0.6s"
            circleProfileImage2.current.style.transform = "translateX(-17.9rem) translateY(-12rem) scale(0.6)"

            circleProfileImage3.current.style.transition = "all 0.6s"
            circleProfileImage3.current.style.transform = "translateX(-21.3rem) translateY(0rem) scale(0.60)"

            circleProfileImage4.current.style.transition = "all 0.6s"
            circleProfileImage4.current.style.transform = "translateX(-17.9rem) translateY(12rem) scale(0.6)"

            let x = testimonialsDetails4.current.clientWidth;
            slide(0 * x, 0);
        }
        else if (active.isActive3) {
            setActive({
                isActive1: false,
                isActive2: true,
                isActive3: false,
                isActive4: false,
            })

            leftArrowRef.current.style.opacity = '1'
            rightArrowRef.current.style.opacity = '1'

            circleProfileImage1.current.style.transition = "all 0.6s"
            circleProfileImage1.current.style.transform = "translateX(-17.9rem) translateY(12rem) scale(0.6)"

            circleProfileImage2.current.style.transition = "all 0.6s"
            circleProfileImage2.current.style.transform = "translateX(-2.5rem) translateY(0rem) scale(1)"

            circleProfileImage3.current.style.transition = "all 0.6s"
            circleProfileImage3.current.style.transform = "translateX(-17.9rem) translateY(-12rem) scale(0.6)"

            circleProfileImage4.current.style.transition = "all 0.6s"
            circleProfileImage4.current.style.transform = "translateX(-21.3rem) translateY(0rem) scale(0.60)"

            let x = testimonialsDetails4.current.clientWidth;
            slide(1 * x, 1);
        }
        else if (active.isActive4) {
            setActive({
                isActive1: false,
                isActive2: false,
                isActive3: true,
                isActive4: false,
            })

            leftArrowRef.current.style.opacity = '1'
            rightArrowRef.current.style.opacity = '1'

            circleProfileImage1.current.style.transition = "all 0.6s"
            circleProfileImage1.current.style.transform = "translateX(-21.3rem) translateY(0rem) scale(0.60)"

            circleProfileImage2.current.style.transition = "all 0.6s"
            circleProfileImage2.current.style.transform = "translateX(-17.9rem) translateY(12rem) scale(0.6)"

            circleProfileImage3.current.style.transition = "all 0.6s"
            circleProfileImage3.current.style.transform = "translateX(-2.5rem) translateY(0rem) scale(1)"

            circleProfileImage4.current.style.transition = "all 0.6s"
            circleProfileImage4.current.style.transform = "translateX(-17.9rem) translateY(-12rem) scale(0.6)"

            let x = testimonialsDetails4.current.clientWidth;
            slide(2 * x, 2);

        }
    }

    useEffect(()=> {

    }, [])

    return (
        <>
            <section className='flex w-screen h-auto pt-72  pb-24 items-center justify-center sm:pt-48'>
                <div className='flex w-full flex-col max-w-6xl items-center gap-x-8 gap-y-8 justify-center lg:flex-row'>

                    <div className={`${styles.testimonials_profile_container} relative hidden items-center justify-center w-1/2 h-auto lg:flex`} >
                        <div className={`${styles.testimonials_profile} flex items-center justify-center absolute w-full`}>
                            <img className={`${active.isActive1 ? 'active' : ''} h-60 w-60 ${styles.testimonials_profile_images} ${styles.testimonial_1}`} src={testimonial1} alt="loading error" ref={circleProfileImage1} />
                            <img className={`${active.isActive2 ? 'active' : ''} h-60 w-60 ${styles.testimonials_profile_images} ${styles.testimonial_2}`} src={testimonial2} alt="loading error" ref={circleProfileImage2} />
                            <img className={`${active.isActive3 ? 'active' : ''} h-60 w-60 ${styles.testimonials_profile_images} ${styles.testimonial_3}`} src={testimonial3} alt="loading error" ref={circleProfileImage3} />
                            <img className={`${active.isActive4 ? 'active' : ''} h-60 w-60 ${styles.testimonials_profile_images} ${styles.testimonial_4}`} src={testimonial4} alt="loading error" ref={circleProfileImage4} />
                            {/* <img className={`h-48 w-48 ${styles.testimonials_profile_images} ${styles.testimonial_5}`} src={testimonial5} alt="loading error" /> */}
                        </div>

                    </div>

                    <div className='flex flex-col items-center gap-y-3 justify-center w-full lg:items-start lg:w-1/2'>
                        <h1 className='text-4xl font-semibold mb-4 sm:text-5xl sm:mb-6'>Testimonials</h1>

                        <span className='w-full flex items-center justify-start max-w-md pl-4 sm:pl-0'>
                            <i className="text-5xl fa-sharp fa-solid fa-quote-left" style={{ color: 'rgb(11 36 75)' }}></i>
                        </span>
                        <span className='relative h-60 flex items-center justify-end w-full max-w-md overflow-x-hidden sm:h-40'>
                            <span className={`${styles.testmonialsDetails} relative text-justify w-full max-w-lg px-4`} ref={testimonialsDetails1}>
                                4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi ipsam eligendi inventore doloribus, vero dolore itaque omnis vitae molestias pariatur. Eius quas consectetur doloremque est inventore quo facilis magni natus. Expedita saepe perspiciatis qui eum officia quaerat tempore deleniti.
                            </span>

                            <span className={`${styles.testmonialsDetails} relative text-justify w-full max-w-lg px-4`} ref={testimonialsDetails2}>
                                3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi ipsam eligendi inventore doloribus, vero dolore itaque omnis vitae molestias pariatur. Eius quas consectetur doloremque est inventore quo facilis magni natus. Expedita saepe perspiciatis qui eum officia quaerat tempore deleniti.
                            </span>

                            <span className={`${styles.testmonialsDetails} relative text-justify w-full max-w-lg px-4`} ref={testimonialsDetails3}>
                                2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi ipsam eligendi inventore doloribus, vero dolore itaque omnis vitae molestias pariatur. Eius quas consectetur doloremque est inventore quo facilis magni natus. Expedita saepe perspiciatis qui eum officia quaerat tempore deleniti.
                            </span>

                            <span className={`${styles.testmonialsDetails} relative text-justify w-full max-w-lg px-4`} ref={testimonialsDetails4}>
                                1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi ipsam eligendi inventore doloribus, vero dolore itaque omnis vitae molestias pariatur. Eius quas consectetur doloremque est inventore quo facilis magni natus. Expedita saepe perspiciatis qui eum officia quaerat tempore deleniti.
                            </span>
                        </span>
                        <span className='w-full flex items-center justify-between max-w-lg'>
                            <span className='flex items-center justify-center gap-x-5 pl-4'>
                                <i onClick={() => backward()} className="z-10 fa-sharp cursor-pointer text-3xl fa-solid fa-circle-arrow-left" ref={leftArrowRef} style={{ opacity: '0.5', color: 'rgb(11 36 75)' }}></i>
                                <i onClick={() => forward()} className="z-10 fa-sharp cursor-pointer text-3xl fa-solid fa-circle-arrow-right" ref={rightArrowRef} style={{ opacity: '1', color: 'rgb(11 36 75)' }}></i>
                            </span>

                            <span className='flex relative flex-col items-cneter justify-center pl-4 pr-16 w-48 lg:pl-4'>
                                <span className='absolute' ref={(ele)=> pushTestimonialsNameRef(ele)} style={{opacity: '1'}}>
                                    <h4 className='text-md font-semibold tracking-wide'>~ Chris Evan 1</h4>
                                    <h4 className='text-sm italic font-light tracking-wide'>Student of California</h4>
                                </span>

                                <span className='absolute' ref={(ele)=> pushTestimonialsNameRef(ele)} style={{opacity: '0'}}>
                                    <h4 className='text-md font-semibold tracking-wide'>~ Chris Evan 2</h4>
                                    <h4 className='text-sm italic font-light tracking-wide'>Student of California</h4>
                                </span>

                                <span className='absolute' ref={(ele)=> pushTestimonialsNameRef(ele)} style={{opacity: '0'}}>
                                    <h4 className='text-md font-semibold tracking-wide'>~ Chris Evan 3</h4>
                                    <h4 className='text-sm italic font-light tracking-wide'>Student of California</h4>
                                </span>

                                <span className='absolute' ref={(ele)=> pushTestimonialsNameRef(ele)} style={{opacity: '0'}}>
                                    <h4 className='text-md font-semibold tracking-wide'>~ Chris Evan 4</h4>
                                    <h4 className='text-sm italic font-light tracking-wide'>Student of California</h4>
                                </span>
                            </span>
                        </span>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Testimonials