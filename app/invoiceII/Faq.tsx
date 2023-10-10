import React from "react";
import Image from "next/image";
import ClickUp from "../components/images/chevron-up.svg";
import ClickDown from "../components/images/chevron-down.svg"


const Faq = () => {

    return (
        <section className="container px-5 lg:px-0 mx-auto pb-20">
            <div className="lg:flex justify-between">
                <div className="lg:w-50% pt-16 lg:pt-122px">
                    <h2 className="w-347px font-medium text-xl md:text-2xl lg:text-36 text-mainBlack">Frequently asked questions</h2>
                    <p className="text-darkGrey text-xl pt-6">All you need to know about Invoicing</p>
                </div>
                <div className="lg:w-50% pt-120px">
                    <div className="pb-12">
                       <div className="flex justify-between items-center pb-6"> 
                            <h4 className="font-medium text-mainBlack text-xl lg:text-xl">Question goes here</h4>
                            <Image src={ClickUp} alt="up" />
                        </div>
                        <p className="text-darkGrey text-sm md:text-base lg:text-lg max-w-479px">Automatic payouts are made to your account at the end of the day but you can request whenever you want.</p>
                    </div>
                    <hr />
                    <div className="pt-6 pb-3">
                        <div className="flex justify-between items-center"> 
                            <h4 className="text-darkGrey text-xl lg:text-xl">Question goes here</h4>
                            <Image src={ClickDown} alt="down" />
                        </div>
                    </div>
                    <hr />
                    <div className="pt-6">
                        <div className="flex justify-between items-center"> 
                            <h4 className="text-darkGrey text-xl lg:text-xl">Question goes here</h4>
                            <Image src={ClickDown} alt="down" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq