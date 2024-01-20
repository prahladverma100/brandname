import React from 'react'
import product_cover1 from '../assets/image/webp/product_cover1.webp'
import product_cover from '../assets/image/webp/product_cover.webp'
import { Arrow, Download, Favorite, Icon1, Star, Trolli } from './Icon'

const Client_matter = () => {
    return (
        <div className='lg:py-40 py-0'>
            <div className=' !max-w-[1050px] mx-auto px-4'>
                <p className='ff_Montserrat text-center text-[#96BB7C] font-bold text-sm tracking-[0.2px]' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="900">Practice Advice</p>
                <h3 className=' text-[#252B42] text-center ff_Montserrat tracking-[0.2px] font-bold md:leading-[50px]   md:text-[40px] text-2xl sm:text-3xl py-[10px]' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="900">Every Client Matters</h3>
                <p className=' text-[#737373] tracking-[0.2px] text-center mx-auto font-normal  ff_Montserrat max-w-[469px] sm:text-sm text-xs' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="900">Problems trying to resolve the conflict between
                    <span className=' block'>    the two major realms of Classical physics: Newtonian mechanics</span> </p>
                <div className=' md:flex-row flex gap-[15px] pb-14 lg:pt-20 pt-3 flex-col justify-center' id='Pricing'>
                    <div className='w-full md:w-4/12' data-aos="fade-right"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine">
                        <div className=' max-w-[348px] w-full mx-auto'>
                            <div className=' relative'>
                                <img className=' w-full' src={product_cover1} alt="" />
                                <button className='ff_Montserrat tracking-[0.2px] top-[20px] left-[20px] leading-6 absolute font-bold px-[10px] rounded-[3px] light_shadow bg-[#E74040] text-white text-sm'>Sale</button>
                                <div className=' flex gap-[10px] absolute bottom-[24px] translate-x-[-50%] left-[50%] '>
                                    <a href="" className=' bg-white cursor-pointer  px-[10px] py-[10px] rounded-[44.786px]'><Favorite /></a>
                                    <a href="" className=' bg-white cursor-pointer  px-[10px] py-[10px] rounded-[44.786px]'><Trolli /></a>
                                    <a href="" className=' bg-white cursor-pointer  px-[10px] py-[10px] rounded-[44.786px]'><Icon1 /></a>
                                </div>
                            </div>
                            <div className=' md:px-[25px] px-0'>
                                <div className=' flex justify-between pt-6 '>
                                    <h5 className='ff_Montserrat tracking-[0.2px] text-[#96BB7C] text-sm font-bold'>Books Liberary	</h5>
                                    <div className='bg-[#2D4059] rounded-[20px] flex items-center gap-[5px] py-[5px] px-[5px]'>
                                        <Star />
                                        <p className=' text-white text-xs ff_Montserrat tracking-[0.2px] font-normal'>4.9</p>
                                    </div>
                                </div>
                                <h5 className=' pt-[10px]  tracking-[0.1px] ff_Montserrat md:max-w-[131px] max-w-[none] font-bold text-base  text-[#252B42]'>Get Quality Education</h5>
                                <p className=' pt-[10px] text-[#737373] tracking-[0.2px] font-normal  ff_Montserrat text-sm'>We focus on ergonomics and meeting
                                    you where you work. It's only a
                                    keystroke away.</p>
                                <div className=' flex gap-[10px] py-[10px] items-center'>
                                    <span className=' cursor-pointer'>  <Download /></span>
                                    <p className='text-[#737373] ff_Montserrat text-sm font-bold tracking-[0.2px] '>15 Sales</p>
                                </div>
                                <div className=' flex pt-1'>
                                    <p className='ff_Montserrat text-base font-bold tracking-[0.1px] text-[#BDBDBD]'>$16.48</p>
                                    <p className='ff_Montserrat ps-1 text-base font-bold tracking-[0.1px] text-[#FFAB71]'>$6.48</p>

                                </div>
                                <div className=' flex items-center gap-[10px] pt-4'>
                                    <button className=' ff_Montserrat arrow hover:bg-[#96BB7C] hover:text-white text-[#96BB7C] py-[10px] px-5 rounded-[37px] border-[1px] border-[#96BB7C]  flex items-center gap-[10px] text-sm font-bold tracking-[0.2px]'>Learn More
                                        <Arrow />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-4/12'>
                        <div className=' w-full max-w-[348px] mx-auto' data-aos="fade-left"
                            data-aos-offset="100"
                            data-aos-easing="ease-in-sine">
                            <div className=' relative '>
                                <img className='w-full' src={product_cover} alt="" />
                                <button className='ff_Montserrat tracking-[0.2px] top-[20px] left-[20px] absolute leading-6 font-bold px-[10px] rounded-[3px] light_shadow bg-[#E74040] text-white text-sm'>Sale</button>
                                <div className=' flex gap-[10px] absolute bottom-[24px] translate-x-[-50%] left-[50%] '>
                                    <a href="" className=' bg-white cursor-pointer  px-[10px] py-[10px] rounded-[44.786px]'><Favorite /></a>
                                    <a href="" className=' bg-white cursor-pointer  px-[10px] py-[10px] rounded-[44.786px]'><Trolli /></a>
                                    <a href="" className=' bg-white cursor-pointer  px-[10px] py-[10px] rounded-[44.786px]'><Icon1 /></a>
                                </div>
                            </div>
                            <div className=' md:px-[25px] px-0'>
                                <div className=' flex justify-between pt-6 '>
                                    <h5 className='ff_Montserrat tracking-[0.2px] text-[#96BB7C] text-sm font-bold'>Training Courses</h5>
                                    <div className='bg-[#2D4059] rounded-[20px] flex items-center gap-[5px] py-[5px] px-[5px]'>
                                        <Star />
                                        <p className=' text-white text-xs ff_Montserrat tracking-[0.2px] font-normal'>4.9</p>
                                    </div>
                                </div>
                                <h5 className=' pt-[10px]  tracking-[0.1px] ff_Montserrat font-bold text-base md:max-w-[131px] max-w-[none] text-[#252B42]'>Video in Live Action</h5>
                                <p className=' pt-[10px] text-[#737373] tracking-[0.2px] font-normal  ff_Montserrat text-sm'>We focus on ergonomics and meeting
                                    you where you work. It's only a
                                    keystroke away.</p>
                                <div className=' flex gap-[10px] py-[10px] items-center'>
                                    <span className=' cursor-pointer'>  <Download /></span>
                                    <p className='text-[#737373] ff_Montserrat text-sm font-bold tracking-[0.2px] '>15 Sales</p>
                                </div>
                                <div className=' flex pt-1'>
                                    <p className='ff_Montserrat text-base font-bold tracking-[0.1px] text-[#BDBDBD]'>$16.48</p>
                                    <p className='ff_Montserrat ps-1 text-base font-bold tracking-[0.1px] text-[#FFAB71]'>$6.48</p>

                                </div>
                                <div className=' flex items-center gap-[10px] pt-4'>
                                    <button className=' ff_Montserrat arrow text-[#96BB7C] hover:bg-[#96BB7C] hover:text-white py-[10px] px-5 rounded-[37px] border-[1px] border-[#96BB7C]  flex items-center  text-sm font-bold tracking-[0.2px] gap-[10px]'>Learn More
                                        <Arrow />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Client_matter