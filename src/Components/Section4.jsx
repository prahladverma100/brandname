import React from 'react'
import thumb_concept from '../assets/image/webp/thumb_concept.webp'
import { Arrow } from './Icon'

const Section4 = () => {
    return (
        <div className='lg:py-40 py-12 mt-8'>
            <div className=' mx-auto px-4 !max-w-[1050px]'>
                <div className=' md:flex-row flex-col flex justify-between  items-center'>
                    <div className='w-full md:w-1/2' data-aos="fade-right">
                        <img className=' w-full' src={thumb_concept} alt="" />
                    </div>
                    <div className='w-full md:w-5/12' data-aos="fade-left">
                        <div className=' mx-auto md:mx-0 w-[94px] h-[7px] bg-[#E74040]'></div>
                        <h2 className=' text-[#252B42] md:text-[40px] text-2xl sm:text-3xl font-bold md:pt-[35px] pt-3 md:leading-[50px] tracking-[0.2px] ff_Montserrat text-center md:text-start '>Our Popular
                            Courses</h2>
                        <p className=' ff_Montserrat tracking-[0.2px] font-normal text-sm text-[#737373] max-w-[351px] md:py-[35px] py-3 md:mx-0 mx-auto text-center md:text-start'>Problems trying to resolve the conflict between
                            the two major realms of Classical physics:
                            Newtonian mechanics </p>
                        <div className='  gap-2 items-center flex justify-center md:justify-start'>
                            <p className='text-[#96BB7C] tracking-[0.2px] ff_Montserrat text-sm font-bold '>Learn More</p>
                            <Arrow />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4