import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MessageIcon from "../components/images/message-chat-01 (1).svg"
import ReceiptIcon from "../components/images/receipt.svg"

const Banner = () => {
    return (
        <section className='container mx-auto xl:max-w-1536px xl:mx-auto 2xl:container 2xl:mx-auto'>
            <div className='xl:max-w-93% xl:ml-auto 2xl:max-w-none'>
                <div className='gap-10  mt-14 lg:mt-24 lg:flex flex-row'>
                    <div className='px-5 lg:px-0 flex flex-col space-y-0 md:space-y-6 text-start mt-14 mb-10 lg:w-1/2'>
                        <div className='mb-6'>
                            <h6 className='text-sm md:text-base lg:text-lg xl:text-xl font-normal text-lightBlue mb-4'><Image src={ReceiptIcon} className='inline-block mr-1' alt='icon' />Invoicing</h6>
                            <h3 className='text-black max-w-521 text-2xl md:text-3xl lg:text-36 xl:text-4xl mb-4 font-medium leading-42 md:leading-52'>Invoicing made <br />effortless</h3>
                            <p className='text-darkGrey max-w-506 text-base lg:text-lg xl:text-xl font-normal'>Empower your business with effortless <br /> bookkeeping, lorem ipsum is a placeholder text.</p>
                        </div>
                        <div className='flex space-x-6 items-center'>
                           <div><Link href="#" className='bg-lightBlue px-4 py-2 xl:px-6 xl:py-3 rounded-10 text-sm md:text-base text-white  border-1 border-lightBlue'>Get started for free</Link></div>
                           <div> <Link href="#" className='px-4 py-2 text-sm xl:px-6 xl:py-3 rounded-10 md:text-base border-brightGrey border-1'>Speak to sales <Image src={MessageIcon} alt='icon' className='h-4 inline-block'/> </Link> </div>
                        </div>
                    </div>
                    <div className='pl-5 md:pl-0  lg:w-1/2 relative overflow-hidden'>
                        <div className='w-180px h-180px md:h-300 md:w-300px lg:w-450px lg:h-450px xl:w-500px xl:h-500px bg-gradient-to-r from-gradientBlue via-gradientPurple to-gradientIndigo rounded-full  absolute -right-7 -bottom-12 md:-right-7 md:-bottom-16 lg:-right-8 lg:-bottom-28 xl:-bottom-32 z-0'></div>
                        <div className='w-230 h-160px md:w-440 md:h-310px lg:w-450px lg:h-360px xl:h-460px xl:w-635px bg-white shadow-lg rounded-30 ml-auto mb-10 md:mb-16 mr-8 md:mr-16 lg:mr-16 xl:mr-97px z-10 relative'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner