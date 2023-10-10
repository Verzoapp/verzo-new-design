import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MessageIcon from "../components/images/message-chat-01 (1).svg"
import ReceiptIcon from "../components/images/receipt.svg"

const Banner = () => {
    return (
        <div className='gap-10  mt-14 lg:mt-24 lg:flex flex-row container mx-auto'>
            <div className='px-5 lg:px-0 flex flex-col space-y-0 md:space-y-6 text-start mt-14 mb-10 lg:w-1/2'>
                <div className='mb-6'>
                    <h6 className='text-lg md:text-xl font-normal text-lightBlue mb-4'><Image src={ReceiptIcon} className='inline-block' alt='icon' /> Invoicing</h6>
                    <h3 className='text-black max-w-521 text-4xl md:text-4xl mb-4 font-medium leading-42 md:leading-52'>Your business&rsquo; financial <br />support starts here</h3>
                    <p className='text-darkGrey max-w-506 text-lg md:text-xl font-normal'>Empower your business with effortless <br /> bookkeeping, lorem ipsum is a placeholder text.</p>
                </div>
                <div className='flex flex-col md:flex-row space-x-0 space-y-6 md:space-y-0  md:space-x-6 md:items-center'>
                   <div><Link href="#" className='bg-lightBlue px-4 py-2 md:px-6 md:py-3 rounded-10 text-sm md:text-base text-white  border-1 border-lightBlue'>Get started for free</Link></div>
                   <div> <Link href="#" className='px-4 py-2 text-sm md:px-6 md:py-3 rounded-10 md:text-base border-brightGrey border-1'>Speak to sales <Image src={MessageIcon} alt='icon' className='h-4 inline-block'/> </Link> </div>
                </div>
            </div>
            <div className='pl-5 md:pl-0 relative lg:w-1/2'>
                    <div className='mt-24 md:mt-36 w-170 h-215 md:w-353 md:h-364 lg:w-440 lg:h-440 overflow-hidden ml-auto'>
                        <div className='w-230 h-230 md:h-429 md:w-429 lg:w-500 lg:h-500 bg-gradient-to-r from-gradientBlue via-gradientPurple to-gradientIndigo rounded-full ml-auto md:ml-0'></div>
                    </div>
                    <div className='w-230 h-230 md:w-398 md:h-357 lg:w-500 lg:h-460 bg-white shadow-lg rounded-2xl absolute -top-9 lg:top-0 right-10 md:right-14'></div>
            </div>
        </div>
    )
}

export default Banner