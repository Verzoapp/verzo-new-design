import React from "react";
import MessageIcon from "../components/images/message-chat-01 (1).svg"
import Image from "next/image";
import Link from "next/link";


const GetStarted = () => {

    return (
        <section className="container px-2 lg:px-0 mx-auto md:mt-28">
            <div className="bg-whiteTint rounded-40 border-brightGrey border-0.3">
                <div className="block lg:flex">
                    <div className="text-start lg:w-1/2">
                        <div className="py-10 md:py-14">
                            <div className="text-center md:text-start md:pl-10">
                                <h2 className="text-lg md:text-4xl text-black font-medium max-w-429">Take charge of your operations</h2>
                                <p className="text-darkGrey text-base md:text-lg pt-5 pb-10 md:pb-20 max-w-411">If you&rsquo;d like to meet in person or send us something by mail, here&rsquo;s our physical address</p>
                            </div>
                            <hr className="bg-brightGrey" />
                            <div className="text-center md:text-start md:pl-10">
                                <div className='md:flex md:space-x-6 lg:justify-start justify-center md:items-center pt-10'>
                                    <div className="mb-8 md:mb-0"><Link href="#" className='bg-lightBlue px-4 py-2 md:px-6 md:py-3 rounded-10 text-sm md:text-base text-white  border-1 border-lightBlue'>Get started</Link></div>
                                    <div> <Link href="#" className='px-4 py-2 md:px-6 md:py-3 rounded-10 text-sm md:text-base border-brightGrey border-1'>Speak to sales <Image src={MessageIcon} alt='icon' className='h-4 inline-block'/> </Link> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gradient-to-r from-gradientBlue via-gradientPurple to-gradientIndigo rounded-r-40 ml-auto md:flex-1 hidden lg:block lg:w-1/2'>
                    </div>
                </div>

            </div>
        </section>
    )
}


export default GetStarted