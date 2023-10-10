import React from "react";
import Link from "next/link";
import MessageIcon from "../components/images/message-chat-01 (1).svg";
import Image from "next/image";



const Contact = () => {

    return (
        <section className="pt-16 lg:pt-32 pb-20 px-5 lg:px-0 container mx-auto">
            <div className="lg:flex">
                <div className="lg:w-50% pt-6">
                    <div className="max-w-595px mx-auto h-402px bg-white shadow-md rounded-30"></div>
                </div>
                <div className="pt-6 lg:pt-0 lg:w-50%">
                    <div className="max-w-595px lg:max-w-511px h-374 md:h-473px mx-auto rounded-20 bg-gradient-to-r from-gradientBlue via-gradientPurple to-gradientIndigo">
                        <div className="max-w-232px md:max-w-415px mx-auto pt-72px">
                            <p className="text-white text-lg md:text-2xl lg:text-32px pb-9">Transform a once tedious task into a smooth and efficient process. Try it today and experience the difference for yourself</p>
                            <Link href="#" className='px-4 py-2 text-sm md:px-6 md:py-3 rounded-10 md:text-base border-brightGrey bg-white border-1'>Speak to sales <Image src={MessageIcon} alt='icon' className='h-4 inline-block'/> </Link>
                        </div>  
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Contact