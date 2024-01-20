import React from 'react'

const Newsletter = () => {
    return (
        <div className=' bg-[#2D4059] lg:py-40 py-12'>
            <div className=' !max-w-[1050px] mx-auto px-4 pb-5' id='Contact'>
                <p className='ff_Montserrat text-center text-[#96BB7C] font-bold text-sm tracking-[0.2px]' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="900">Practice Advice</p>
                <h3 className=' text-white text-center ff_Montserrat tracking-[0.1px] leading-[50px] font-bold text-2xl py-[10px]' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="900">Every Client Matters</h3>
                <p className=' text-white tracking-[0.2px] text-center mx-auto font-normal  ff_Montserrat max-w-[469px] text-sm ' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="900">Problems trying to resolve the conflict between
                    <span className=' block'>  the two major realms of Classical physics: Newtonian mechanics </span></p>

                <div className='lg:pt-20 pt-10'>
                    <form action="erugfuru" className=' max-w-[688px]   justify-center mx-auto bg-[#F9F9F9]  w-full flex  border-[1px] border-[#E6E6E6]  rounded-l-[5px]'>
                        <input required type="text" className='text-[#737373]   w-full  max-w-[688px] rounded-r-[none] ff_Montserrat  text-sm py-[15px] leading-7 outline-none  font-normal tracking-[0.2px] ps-5' placeholder='Your Email' />
                        <button className='border-[1px] py-[15px] border-[#E6E6E6] font-normal text-sm leading-7 ff_Montserrat rounded-r-[5px] px-[22px] bg-[#96BB7C] text-white'>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Newsletter