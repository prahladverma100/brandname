import React from 'react'
import video_card from '../assets/image/webp/Video_card.webp'
import { Video_btn } from './Icon'

const Practice_advice = () => {
    return (
        <div className=' lg:py-40 py-12'>
            <div className=' mx-auto px-4 !max-w-[1050px]'>
                <p className='text-[#96bb7c] text-center text-sm leading-[24px] tracking-[0.2px] ff_Montserrat font-bold ' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="700">Practice Advice</p>
                <p className=' text-2xl ff_Montserrat text-center tracking-[0.1px] py-[10px] font-bold text-[#252B42]' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="700">Our Popular Courses</p>
                <p className='ff_Montserrat max-w-[469px] mx-auto text-center text-[#737373] font-normal sm:text-sm text-xs tracking-[0.2px]' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="700">Problems trying to resolve the conflict between
                    <span className=' block'>  the two major realms of Classical physics: Newtonian mechanics </span></p>
                <div className=' relative  flex justify-center items-center lg:pt-20 md:pt-10 pt-4' data-aos="fade-up"
                    data-aos-duration="700">
                    <img className='w-full max-w-[688px]' src={video_card} alt="" />
                    <div className=' absolute cursor-pointer'>
                        <div className=' flex justify-center items-center lg:py-[34px] py-5 lg:px-[36px] px-6 bg-[#96BB7C] rounded-[73px]'>
                            <Video_btn />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Practice_advice