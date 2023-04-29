import React from 'react'

function DescriptionSidebar() {
    return (
        <div className='flex flex-col items-center justify-center lg:flex-row xl:flex-col'>
            <div className='flex text-justify items-center justify-center py-6 w-full sm:p-6'>
                <span className='flex items-start justify-center gap-2'>
                    <i className="fa-sharp fa-solid fa-quote-left"></i>
                    <p className='text-xs sm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veritatis officiis! Voluptate temporibus, maxime dolorem voluptates delectus blanditiis repudiandae fugiat iste! Impedit, laborum quas dolorem optio iure ipsam quasi quo? <br />
                        <i className='text-sm text-blue-500'>by Jhonson from singapore</i></p>
                </span>
            </div>

            <div className='flex items-center text-justify justify-center py-6 w-full sm:p-6'>
                <span className='flex items-start justify-center gap-2'>
                    <i className="fa-sharp fa-solid fa-quote-left"></i>
                    <span>
                        <h3 className='text-2xl font-bold mb-2.5'>Need Assitance ?</h3>
                        <p className='text-xs mb-3 sm:text-sm md:text-sm lg:text-sm xl:test-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veritatis officiis! Voluptate temporibus, maxime dolorem voluptates delectus blanditiis repudiandae fugiat iste! Impedit, laborum quas dolorem optio iure ipsam quasi quo? </p>
                        <i className='text-3xl text-blue-500'>1-866-599-6674</i>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default DescriptionSidebar