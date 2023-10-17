import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CloseIcon from "./images/x-02.svg"
import { useState } from 'react'

const DiscountBanner = () => {
    const [disountBadge, closeDiscountBadge] = useState(true)
    return (
        <div className={`text-sm md:text-base lg:text-xl bg-brandTint  text-lightBlue items-center h-10 text-center px-4 ${disountBadge ? "block" :"hidden"}`}>
            <div className='container flex h-full items-center mx-auto'>
                <div className='grow'></div>
                <div className='grow text-start sm:flex'>
                    <p className='mr-7 lg:mr-24 text-sm md:text-base'>Get 10% off for the first 3 months</p>
                    <Link href="#" className='underline underline-offset-4 decoration-1 text-sm md:text-base'>Learn more</Link>
                </div>
                <div className='mr-5 md:mr-0'>
                    <Image src={CloseIcon} alt='icon' className='cursor-pointer h-5' onClick={() => closeDiscountBadge(false)}/>
                </div>
            </div>
        </div>
    )
}

export default DiscountBanner