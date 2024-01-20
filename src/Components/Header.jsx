import React, { useState } from 'react'
import hero_ractangle from '../assets/image/webp/hero_ractangle.webp'
import ractangle from '../assets/image/webp/rectangle.webp'
import hero_img from '../assets/image/webp/hero_img.webp'
import { Btn_arrow } from './Icon'
import Hamburger from 'hamburger-react'

const Header = () => {
    const [Show, setShow] = useState(false)
    const [isOpen, setOpen] = useState(false)
    if (Show === true) {
        document.body.classList.add("overflow-hidden")
    }
    else {
        document.body.classList.remove("overflow-hidden")
    }
    const moment = () => {
        setShow(!true);
    };
    return (
        <div className=' relative z-30 lg:pb-12 pb-3'>
            <img className='left-0 absolute w-full lg:max-w-[111px] max-w-[90px] z-[-1]' src={hero_ractangle} alt="" />
            <img className='right-0 absolute w-full lg:max-w-[179px] max-w-[111px] z-[-1]' src={ractangle} alt="" />
            <div className=' max-w-[1050px] mx-auto px-4'>
                <nav className=' flex justify-between py-5'>
                    <div className=' flex items-center '>
                        <h2 className=' text-2xl font-bold  tracking-[0.1px] z-50 text-[#252B42] ff_Montserrat cursor-pointer'>Brandname</h2>
                        <ul className={`gap-[21px] flex lg:justify-end bg-white justify-center ${Show ? 'left-0' : 'left-[-100%]'} h-full w-full  flex-col lg:flex-row top-0 text-center z-20   items-center duration-500 fixed lg:static  lg:ps-20 ps-0`}>
                            <li><a href="#home" onClick={moment} className='text-[#737373] text-sm ff_Montserrat font-bold  tracking-[0.2px] leading-6 after:right-0  after:w-0 after:h-[2px] after:bg-[#737373] after:left-0 after:absolute relative  after:bottom-[-3px] after:hover:w-full after:hover:left-0  after:duration-300 ease-out navline'>Home</a></li>
                            <li><a href="#Product" onClick={moment} className='text-[#737373] text-sm ff_Montserrat font-bold  tracking-[0.2px] leading-6 after:right-0  after:w-0 after:h-[2px] after:bg-[#737373] after:left-0 after:absolute relative  after:bottom-[-3px] after:hover:w-full after:hover:left-0  after:duration-300 ease-out navline'>Product</a></li>
                            <li><a href="#Pricing" onClick={moment} className='text-[#737373] text-sm ff_Montserrat font-bold  tracking-[0.2px] leading-6 after:right-0  after:w-0 after:h-[2px] after:bg-[#737373] after:left-0 after:absolute relative  after:bottom-[-3px] after:hover:w-full after:hover:left-0  after:duration-300 ease-out navline'>Pricing</a></li>
                            <li><a href="#Contact" onClick={moment} className='text-[#737373] text-sm ff_Montserrat font-bold  tracking-[0.2px] leading-6 after:right-0  after:w-0 after:h-[2px] after:bg-[#737373] after:left-0 after:absolute relative  after:bottom-[-3px] after:hover:w-full after:hover:left-0  after:duration-300 ease-out navline'>Contact</a></li>
                            <div className=' lg:hidden  block'>
                                <div className=' flex items-center gap-[21px] flex-col'>
                                    <p className='text-[#96BB7C] text-sm ff_Montserrat font-bold  tracking-[0.2px] leading-6 cursor-pointer'>Login</p>
                                    <button className='ff_Montserrat font-bold text-sm bg-[#96BB7C] hover:bg-[#FC724D] hover:text-white tracking-[0.2px] text-white rounded-[5px] flex items-center gap-[15px] px-[25px] py-[15px]'>JOIN US
                                        <Btn_arrow />
                                    </button>
                                </div>
                            </div>
                        </ul>

                    </div>
                    <div className=' hidden lg:block'>
                        <div className=' flex items-center gap-[45px] pe-[77px]'>
                            <a href="" className='text-[#96BB7C] lg:block hidden text-sm ff_Montserrat font-bold  tracking-[0.2px] leading-6 cursor-pointer'>Login</a>
                            <button className='ff_Montserrat font-bold  text-sm bg-[#96BB7C]  hover:bg-[#FC724D] hover:text-white  border-[#96BB7C] duration-300 tracking-[0.2px] text-white rounded-[5px] flex items-center gap-[15px] px-[25px] py-[15px]'>JOIN US
                                <Btn_arrow />
                            </button>
                        </div>
                    </div>
                    <div className='z-30 lg:hidden' onClick={() => setShow(!Show)}>
                        <button className='{ show ?}'><Hamburger toggled={isOpen} toggle={setOpen} /></button>
                    </div>
                </nav>
            </div>
            <div className=' max-w-[1440px] mx-auto lg:pt-[172px] pt-3' id='home'>
                <div className=' container-fluid  mx-auto lg:ps-[132px] ps-4 lg:pe-[116px] pe-4'>
                    <div className=' lg:flex-row flex-col flex'>
                        <div className='w-full lg:w-1/2' data-aos="fade-right">
                            <p className=' text-[#96BB7C] tracking-[0.2px] ff_Montserrat font-bold text-base text-center lg:text-start'>Join Us</p>
                            <h1 className=' lg:pt-[30px] pt-4 lg:text-[48px] md:text-4xl text-3xl text-center lg:text-start mx-auto lg:mx-0 font-bold lg:leading-[80px] text-[#252B42] ff_Montserrat  max-w-[542px]'>HIGH QUALITY COURSES </h1>
                            <p className=' text-[#737373] ff_Montserrat text-xl  tracking-[0.2px] font-normal lg:pt-[30px] pt-[15px] mx-auto lg:mx-0 text-center lg:text-start max-w-[458px]'>Every day brings with it a fresh set of learning possibilities.</p>
                            <div className=' gap-[10px] lg:mt-[30px] mt-[15px] flex justify-center lg:justify-start'>
                                <button className=' px-9 lg:px-10 lg:py-[15px] py-3  hover:bg-[#FC724D] bg-[#96BB7C] duration-300 ff_Montserrat lg:text-sm text-xs font-bold rounded-[5px] text-white tracking-[0.2px]'>Join Us</button>
                                <button className=' px-9 lg:px-10 lg:py-[15px] py-3 hover:bg-[#FC724D] hover:text-white bg-transparent hover:border-[1px] hover:border-[#FC724D] border-[1px] border-[#96BB7C] lg:text-sm text-xs ff_Montserrat duration-150 font-bold rounded-[5px]  tracking-[0.2px] text-[#96BB7C] '>Learn More </button>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2 flex justify-center pt-8 lg:pt-0' data-aos="fade-left">
                            <img className=' w-full max-w-[531px]' src={hero_img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header