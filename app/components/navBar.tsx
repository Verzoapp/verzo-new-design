"use client"
import React from 'react'
import Image from 'next/image'
import Logo from "./images/logo.svg"
import DropDown from "./images/dropdown.svg"
import Link from 'next/link'
import Hambuger from "./images/burger.svg"
import CloseIcon from "./images/x-02.svg"
import DiscountBanner from './discountBanner'
import { useState } from 'react'

const NavBar = () => {
    const [displayNav, setDisplayNav] = useState(false);
    return (
        <div className='sticky top-0 z-10 bg-white' >
            <DiscountBanner />
            <nav className='container mx-auto h-24 pr-3 md:pr-0 md:px-3 lg:px-0 bg-white flex items-center justify-between '>
                <div className='mb-2'>
                    <Image src={Logo} alt='verzo' />
                </div>
                <ul className='hidden text-darkGrey lg:flex justify-between items-center w-7/12 mx-auto text-base lg:text-lg '>
                    <li className='inline-block'><Link href="#">About us</Link></li>
                    <li className='inline-block'> <Link href="#">Features <Image src={DropDown} className=' h-6 inline-block cursor-pointer' alt='' /></Link> </li>
                    <li className='inline-block'><Link href="#">Pricing</Link></li>
                    <li className='inline-block'><Link href="#">Resources <Image src={DropDown} className='cursor-pointer inline-block h-6' alt='' /></Link></li>
                    <li className='inline-block'><Link href="#">Contact</Link></li>
                </ul>
                <div>
                    <Link href="#" className='hidden lg:block text-sm  md:text-base  md:px-6 md:py-3 px-4 py-2 rounded-10 border-brightGrey border-1 text-black'>Sign in</Link>
                </div>
                <div className='block lg:hidden'>
                    <button className={`border-1 rounded-5 border-brightGrey ${!displayNav ? "inline-block" : "hidden"}`} onClick={() => setDisplayNav(true)}>
                        <Image src={Hambuger} className='h-8' alt='icon'   />
                    </button>
                    <button className={`border-1 rounded-5 border-brightGrey left-0 ${displayNav ? "inline-block": "hidden"}`} onClick={() => setDisplayNav(!displayNav)}>
                        <Image src={CloseIcon} className={`h-8`} alt='icon' />
                    </button>
                </div>
            </nav>
            <div className={`pl-10 w-full h-460 bg-white absolute ${displayNav ? "block" : "hidden"}`}>
                <ul className='text-base'>
                    <li className='pt-8'><Link href="#">About us</Link></li>
                    <li className='pt-8'> <Link href="#">Features <Image src={DropDown} className=' h-6 inline-block cursor-pointer' alt='' /></Link> </li>
                    <li className='pt-8'><Link href="#">Pricing</Link></li>
                    <li className='pt-8'><Link href="#">Resources <Image src={DropDown} className='inline-block cursor-pointer h-6' alt='' /></Link></li>
                    <li className='pt-8'><Link href="#">Contact</Link></li>
                </ul>
                <div className='pt-16 text-center'>
                    <Link href="#" className='text-base text-center  md:text-lg  px-10 py-3 sm:px-24 sm:py-4 rounded-10 border-brightGrey border-1 text-black'>Sign in</Link>
                </div>
            </div>
        </div>
    )
}


export default NavBar