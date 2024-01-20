import React from 'react'
import { Clock, Cortoon } from './Icon'

const Popular_courses = () => {
    return (
        <div className=' lg:py-40 py-0'>
            <div className=' mx-auto px-4 !max-w-[1050px] pb-7' id='Product'>
                <p className='text-[#96bb7c] text-center text-sm leading-[24px] tracking-[0.2px] ff_Montserrat font-bold ' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="900">Practice Advice</p>
                <p className=' text-2xl ff_Montserrat text-center tracking-[0.1px] py-[10px] font-bold text-[#252B42]' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="900">Our Popular Courses</p>
                <p className='ff_Montserrat max-w-[469px] mx-auto text-center text-[#737373] font-normal sm:text-sm text-xs tracking-[0.2px]' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="900">Problems trying to resolve the conflict between
                    <span className='block'>    the two major realms of Classical physics: Newtonian mechanics </span></p>
                <div className=' md:flex-row flex lg:gap-[30px] gap-4 flex-col justify-center lg:pt-20 pt-4'>
                    <div className='w-full md:w-4/12 '>
                        <div className='max-w-[328px] mx-auto box_shadow py-[35px] px-[40px]' data-aos="fade-right">
                            <span className=' flex justify-center'><Clock /></span>
                            <p className=' tracking-[0.1px] text-center ff_Montserrat font-bold text-base pt-5 text-[#252B42]'>training Courses</p>
                            <div className=' w-[50px] h-[1px] mx-auto bg-[#E74040] my-5'></div>
                            <p className='ff_Montserrat font-normal max-w-[136px] text-center mx-auto text-[#737373] text-sm tracking-[0.2px]'>The gradual
                                accumulation and
                                small-scale..</p>
                        </div>
                    </div>
                    <div className='w-full md:w-4/12'>
                        <div className='max-w-[328px] mx-auto box_shadow py-[35px] px-[40px]' data-aos="fade-left">
                            <span className=' flex justify-center'>  <Cortoon /></span>
                            <p className=' tracking-[0.1px] text-center ff_Montserrat font-bold text-base pt-5 text-[#252B42]'>2,769 online courses	</p>
                            <div className=' w-[50px] h-[1px] mx-auto bg-[#E74040] my-5'></div>
                            <p className='ff_Montserrat font-normal max-w-[136px] text-center mx-auto text-[#737373] text-sm tracking-[0.2px]'>The gradual
                                accumulation and
                                small-scale..</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popular_courses