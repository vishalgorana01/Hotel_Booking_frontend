import React, {useRef} from 'react'
import testimonialImage from '../../Assets/Images/user5.jpg'
import newNewsImage from '../../Assets/Images/empty-gazebo-garden.jpg'
import styles from '../../Assets/CSS/Testimonials.module.css'

export default function Testimonials() {
    const newRef = useRef([]);
    const newsList = (ele)=>newRef.current.push(ele);

    const loadMore = ()=>{
        console.log(newRef.current[0])
        for(let i=0; i<newRef.current.length; i++){
            // if(newRef.current[i].style.display === 'none'){
            //     console.log("done")
            //     newRef.current[i].style.display = 'flex';
            // }

            console.log(newRef.current[i].className)
        }

        // newRef.map((ele)=>{
        //     console.log(ele)
        // })
    }

    return (
        <div className='flex items-center justify-center flex-col h-auto w-full xl:w-4/12'>
            <div className='flex items-center w-full justify-start py-3 text-lg'>
                Testimonials
            </div>

            <div className={`${styles.hideScrollbar} mb-2 flex overflow-x-scroll w-full gap-4 snap-x snap-mandatory`}>
                <div className='snap-always snap-center flex flex-col rounded-sm items-center justify-center w-full min-w-full p-4 shadow-lg shadow-slate-600 bg-slate-300'>
                    <span className='my-1 text-center text-5xl w-full py-2'><i className="fa-sharp fa-solid fa-quote-left"></i></span>
                    <div className='my-1 py-1 text-center w-full text-sm sm:text-sm md:text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptates? Quisquam voluptatibus sequi neque adipisci perspiciatis sunt esse minus nemo, excepturi nisi, numquam deleniti, facere doloremque eveniet at distinctio similique?</div>
                    <img className='my-3 w-20 h-20 object-cover border-solid border-2 border-red-500' style={{ borderRadius: "50%" }} src={testimonialImage} alt="error loading" />
                    <h3 className='flex text-md items-center justify-center text-center text-black w-full'>Vishal Gorana <p className='text-slate-700 px-2 italic text-sm'>designation</p></h3>
                </div>

                <div className='snap-always snap-center flex flex-col rounded-md items-center justify-center min-w-full w-full p-4 shadow-lg shadow-slate-600 bg-slate-300'>
                    <span className='my-1 text-center text-5xl w-full py-2'><i className="fa-sharp fa-solid fa-quote-left"></i></span>
                    <div className='my-1 py-1 text-center w-full text-sm sm:text-sm md:text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptates? Quisquam voluptatibus sequi neque adipisci perspiciatis sunt esse minus nemo, excepturi nisi, numquam deleniti, facere doloremque eveniet at distinctio similique?</div>
                    <img className='my-3 w-20 h-20 object-cover border-solid border-2 border-red-500' style={{ borderRadius: "50%" }} src={testimonialImage} alt="error loading" />
                    <h3 className='flex text-md items-center justify-center text-center text-black w-full'>Vishal Gorana <p className='text-slate-700 px-2 italic text-sm'>designation</p></h3>
                </div>

                <div className='snap-always snap-center flex flex-col rounded-md items-center justify-center min-w-full w-full p-4 shadow-lg shadow-slate-600 bg-slate-300'>
                    <span className='my-1 text-center text-5xl w-full py-2'><i className="fa-sharp fa-solid fa-quote-left"></i></span>
                    <div className='my-1 py-1 text-center w-full text-sm sm:text-sm md:text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptates? Quisquam voluptatibus sequi neque adipisci perspiciatis sunt esse minus nemo, excepturi nisi, numquam deleniti, facere doloremque eveniet at distinctio similique?</div>
                    <img className='my-3 w-20 h-20 object-cover border-solid border-2 border-red-500' style={{ borderRadius: "50%" }} src={testimonialImage} alt="error loading" />
                    <h3 className='flex text-md items-center justify-center text-center text-black w-full'>Vishal Gorana <p className='text-slate-700 px-2 italic text-sm'>designation</p></h3>
                </div>

                <div className='snap-always snap-center flex flex-col rounded-md items-center justify-center min-w-full w-full p-4 shadow-lg shadow-slate-600 bg-slate-300'>
                    <span className='my-1 text-center text-5xl w-full py-2'><i className="fa-sharp fa-solid fa-quote-left"></i></span>
                    <div className='my-1 py-1 text-center w-full text-sm sm:text-sm md:text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptates? Quisquam voluptatibus sequi neque adipisci perspiciatis sunt esse minus nemo, excepturi nisi, numquam deleniti, facere doloremque eveniet at distinctio similique?</div>
                    <img className='my-3 w-20 h-20 object-cover border-solid border-2 border-red-500' style={{ borderRadius: "50%" }} src={testimonialImage} alt="error loading" />
                    <h3 className='flex text-md items-center justify-center text-center text-black w-full'>Vishal Gorana <p className='text-slate-700 px-2 italic text-sm'>designation</p></h3>
                </div>

                <div className='snap-always snap-center flex flex-col rounded-md items-center justify-center min-w-full w-full p-4 shadow-lg shadow-slate-600 bg-slate-300'>
                    <span className='my-1 text-center text-5xl w-full py-2'><i className="fa-sharp fa-solid fa-quote-left"></i></span>
                    <div className='my-1 py-1 text-center w-full text-sm sm:text-sm md:text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptates? Quisquam voluptatibus sequi neque adipisci perspiciatis sunt esse minus nemo, excepturi nisi, numquam deleniti, facere doloremque eveniet at distinctio similique?</div>
                    <img className='my-3 w-20 h-20 object-cover border-solid border-2 border-red-500' style={{ borderRadius: "50%" }} src={testimonialImage} alt="error loading" />
                    <h3 className='flex text-md items-center justify-center text-center text-black w-full'>Vishal Gorana <p className='text-slate-700 px-2 italic text-sm'>designation</p></h3>
                </div>
            </div>

            <h2 className='w-full py-2 text-sm'>Recent news</h2>
            <div ref={newsList} className='flex rounded-sm mb-1 border-b-2 border-b-slate-300 items-center gap-4 justify-between px-1.5 py-2 w-full'>
                <img className='h-20 w-20' src={newNewsImage} alt="error loading" />

                <div className='w-full flex items-start justify-center flex-col'>
                    <h3 className='text-sm'>New Hotel Name</h3>
                    <span className='text-sm mb-2 italic'>Indore, Madhya Pradesh</span>
                    <span className='py-0.5 cursor-pointer hover:-translate-y-1 transition-all duration-300 text-blue-500 text-sm'>visit now</span>
                </div>
            </div>

            <div ref={newsList} className='flex rounded-sm mb-1 border-b-2 border-b-slate-300 items-center gap-4 justify-between px-1.5 py-2 w-full'>
                <img className='h-20 w-20' src={newNewsImage} alt="error loading" />

                <div className='w-full flex items-start justify-center flex-col'>
                    <h3 className='text-sm'>New Hotel Name</h3>
                    <span className='text-sm mb-2 italic'>Indore, Madhya Pradesh</span>
                    <span className='py-0.5 cursor-pointer hover:-translate-y-1 transition-all duration-300 text-blue-500 text-sm'>visit now</span>
                </div>
            </div>

            <div ref={newsList} className='flex rounded-sm mb-1 border-b-2 border-b-slate-300 items-center gap-4 justify-between px-1.5 py-2 w-full'>
                <img className='h-20 w-20' src={newNewsImage} alt="error loading" />

                <div className='w-full flex items-start justify-center flex-col'>
                    <h3 className='text-sm'>New Hotel Name</h3>
                    <span className='text-sm mb-2 italic'>Indore, Madhya Pradesh</span>
                    <span className='py-0.5 cursor-pointer hover:-translate-y-1 transition-all duration-300 text-blue-500 text-sm'>visit now</span>
                </div>
            </div>

            <div ref={newsList} className='hidden rounded-sm mb-1 border-b-2 border-b-slate-300 items-center gap-4 justify-between px-1.5 py-2 w-full'>
                <img className='h-20 w-20' src={newNewsImage} alt="error loading" />

                <div className='w-full flex items-start justify-center flex-col'>
                    <h3 className='text-sm'>New Hotel Name</h3>
                    <span className='text-sm mb-2 italic'>Indore, Madhya Pradesh</span>
                    <span className='py-0.5 cursor-pointer hover:-translate-y-1 transition-all duration-300 text-blue-500 text-sm'>visit now</span>
                </div>
            </div>

            <div ref={newsList} className='hidden rounded-sm mb-1 border-b-2 border-b-slate-300 items-center gap-4 justify-between px-1.5 py-2 w-full'>
                <img className='h-20 w-20' src={newNewsImage} alt="error loading" />

                <div className='w-full flex items-start justify-center flex-col'>
                    <h3 className='text-sm'>New Hotel Name</h3>
                    <span className='text-sm mb-2 italic'>Indore, Madhya Pradesh</span>
                    <span className='py-0.5 cursor-pointer hover:-translate-y-1 transition-all duration-300 text-blue-500 text-sm'>visit now</span>
                </div>
            </div>

            <div ref={newsList} className='hidden rounded-sm mb-1 border-b-2 border-b-slate-300 items-center gap-4 justify-between px-1.5 py-2 w-full'>
                <img className='h-20 w-20' src={newNewsImage} alt="error loading" />

                <div className='w-full flex items-start justify-center flex-col'>
                    <h3 className='text-sm'>New Hotel Name</h3>
                    <span className='text-sm mb-2 italic'>Indore, Madhya Pradesh</span>
                    <span className='py-0.5 cursor-pointer hover:-translate-y-1 transition-all duration-300 text-blue-500 text-sm'>visit now</span>
                </div>
            </div>

            <div ref={newsList} className='hidden rounded-sm mb-1 border-b-2 border-b-slate-300 items-center gap-4 justify-between px-1.5 py-2 w-full'>
                <img className='h-20 w-20' src={newNewsImage} alt="error loading" />

                <div className='w-full flex items-start justify-center flex-col'>
                    <h3 className='text-sm'>New Hotel Name</h3>
                    <span className='text-sm mb-2 italic'>Indore, Madhya Pradesh</span>
                    <span className='py-0.5 cursor-pointer hover:-translate-y-1 transition-all duration-300 text-blue-500 text-sm'>visit now</span>
                </div>
            </div>

            <div className='flex text-blue-500 text-sm cursor-pointer px-1.5 py-2 w-full' onClick={loadMore}>
                Load more...
            </div>
        </div>
    )
}
