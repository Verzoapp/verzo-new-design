import React from "react";
import Image from "next/image";
import Image1 from "../components/images/Ellipse 7 (1).png"
import Image2 from "../components/images/Ellipse 7 (2).png"


const Testimonials = () => {

    return (
        <section className="container mx-auto px-5 lg:px-0 pt-12 lg:pt-24 pb-28">
            <h2 className="text-xl md:text-2xl lg:text-36 text-mainBlack pb-2 font-medium">Testimonials</h2>
            <p className="text-darkGrey text-base md:text-lg lg:text-xl">Hear what our clients have to say</p>
            <div className="lg:flex justify-between mt-16">
                <div className="lg:w-50% pb-6 lg:pb-0">
                    <div className="lg:max-w-675 xl:max-w-none xl:min-w-675 md:h-315px rounded-20 bg-lightGray pl-4 md:pl-9">
                        <Image src={Image1} alt="img" className="pt-9" />
                        <p className="text-darkGrey text-sm md:text-base lg:text-lg pt-6 lg:max-w-477px">Our application streamlines your bookkeeping tasks, freeing you to focus on what matters most - growing your business. Spend less time on paperwork and more time making strategic decisions.</p>
                        <p className="text-mainBlack text-sm md:text-base lg:text-lg pt-6 pb-9">John Doe <span className="text-mainGrey">| Head of Strategy - Doe Inc.</span></p>
                    </div>
                </div>
                <div className="lg:w-45%">
                    <div className="lg:max-w-525 xl:max-w-none xl:min-w-525 md:h-315px rounded-20 bg-lightGray pl-4 md:pl-9">
                        <Image src={Image2} alt="img" className="pt-9" />
                        <p className="text-darkGrey text-sm md:text-base lg:text-lg pt-6 lg:max-w-452px">With precise expense tracking, you&lsquo;ll gain a crystal-clear view of your financial health. Identify cost-saving opportunities and ensure your business stays profitable.</p>
                        <p className="text-mainBlack text-sm md:text-base lg:text-lg pt-6 pb-9">Kate Doe <span className="text-mainGrey">|  CEO - Squared hairs</span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Testimonials