import React from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowIcon from "../components/images/Icon.svg"

const Guide = () => {
    return (
        <section className="container px-2 sm:px-5 lg:px-0 mx-auto mt-16 md:mt-28 ">
            <div className="text-center pb-12">
                <h2 className="text-2xl md:text-3xl lg:text-36 xl:text-4xl font-medium leading-none pb-4">How to use Verzo</h2>
                <p className="text-darkGrey text-base md:text-xl">Effortless small business bookkeeping</p>
            </div>
            <div className="md:mt-8 relative">
                <div className="flex ml-2 md:ml-7">
                    <Link href="" className="text-sm text-center  md:text-base ml-5 px-6 py-4 bg-brightGray border-0.3 border-brightGrey text-lightBlue rounded-20">Financial overview</Link>
                    <Link href="" className="text-base text-center ml-5 px-6 py-4 bg-brightGray border-0.3 border-brightGrey text-mainGrey rounded-20 lg:block hidden">Sales management</Link>
                    <Link href="" className="text-base text-center ml-5 px-6 py-4 bg-brightGray border-0.3 border-brightGrey  text-mainGrey rounded-20 lg:block hidden">Automation & Integration</Link>
                </div>
                <div className="bg-whiteTint min-h-563 w-full rounded-30 px-4 sm:px-10 pt-10 pb-16 border-brightGrey border-0.3 absolute top-10 md:top-12 lg:top-11">
                    <div className="lg:flex lg:flex-row pt-10 ">
                            <div className=" lg:w-1/2">
                                <ul className="">
                                    <li className='border-l-1 border-dotted border-lightBlue relative  sm:pl-6 pb-8 md:pb-16'>
                                        <div className='h-5 w-5 md:h-6 md:w-6 text-center text-sm md:text-base bg-lightBlue rounded-full absolute -top-3 -left-3'><span className='text-white'>1</span></div>
                                        <h4 className='text-lightBlue text-lg md:text-xl absolute -top-4 left-6'>Intuitive Dashboard</h4>
                                        <ul className='text-base md:text-xl pt-7 md:pt-10 text-darkGrey list-disc pl-6 max-w-446'>
                                            <li className="pb-3 text-base md:text-lg sm:pb-5">Navigate through your finances seamlessly with our user-friendly dashboard.</li>
                                            <li>Get an instant overview of your income, expenses, and profits at a glance.</li>
                                        </ul>
                                    </li>
                                    <li className="relative pl-6">
                                        <div className='h-5 w-5 md:h-6 md:w-6 text-center text-sm md:text-base bg-brightGrey rounded-full absolute -left-3'><span className='text-mainGrey'>2</span></div>
                                        <div>
                                            <h4 className='absolute text-mainGrey text-lg md:text-xl -top-1 left-6'>Smart expense tracking</h4>
                                        </div>
                                    </li>
                                </ul>
                                <div className="pt-12 md:pt-24">
                                    <div className="pt-6"> <Link href="#" className='px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base bg-white border-brightGrey border-1 rounded-10'>Try our dashboard <Image src={ArrowIcon} alt='icon' className='h-4 inline-block'/> </Link> </div>
                                </div>
                            </div>
                            <div className="mt-16 relative lg:w-1/2 md:block">
                                <div className='w-220 h-210 md:w-400 md:h-300 bg-white shadow-lg rounded-30  left-16 md:left-28 lg:left-0 lg:ml-auto absolute lg:right-3 mx-auto lg:mx-0 -top-2'></div>
                                <div className='w-220 h-210 md:w-400 md:h-300 bg-gradient-to-r from-gradientBlue via-gradientPurple to-gradientIndigo rounded-30 mx-auto lg:mx-0 lg:ml-auto'></div>
                            </div>
                    </div>
                </div>
            </div>
            <div className="h-920 sm:h-840 lg:h-512 rounded-20 px-10 py-10"></div>
        </section>
    )
}

export default Guide