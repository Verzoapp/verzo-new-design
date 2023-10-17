"use client"
import React from "react";
import Image from "next/image";
import ClickUp from "../components/images/chevron-up.svg";
import ClickDown from "../components/images/chevron-down.svg";
import { useState } from "react";



const Faq = () => {
    const [Display, setDisplay] = useState(true);
    const [DisplayQ2, setDisplayQ2] = useState(false);
    const [DisplayQ3, setDisplayQ3] = useState(false)
    return (
        <section className="container px-5 lg:px-0 mx-auto h-540 lg:h-473px pb-20">
            <div className="lg:flex justify-between">
                <div className="lg:w-50% pt-16 lg:pt-122px">
                    <h2 className="w-347px font-medium text-xl md:text-2xl lg:text-36 text-mainBlack">Frequently asked questions</h2>
                    <p className="text-darkGrey text-xl pt-6">All you need to know about Invoicing</p>
                </div>
                <div className="lg:w-50% pt-120px">
                    <div className={`cursor-pointer ${Display ? "pb-12" : "pb-0"}`}>
                       <div className="flex justify-between items-center pb-3" onClick={() => setDisplay(!Display)}> 
                            <h4 className={`font-medium text-xl lg:text-xl ${Display ? "text-mainBlack" : "text-darkGrey"}`}>Question goes here</h4>
                            <Image src={ClickUp} className={Display ? "block" : "hidden"} alt="up" />
                            <Image src={ClickDown} alt="up" className={Display ? "hidden" : "block"}/>
                        </div>
                        <p className={`text-darkGrey text-sm md:text-base lg:text-lg max-w-479px ${Display ? "block" : "hidden"}`}>Automatic payouts are made to your account at the end of the day but you can request whenever you want.</p>
                    </div>
                    <hr />
                    <div  className={`cursor-pointer ${DisplayQ2 ? "pb-12" : "pb-3"} pt-6`}>
                        <div className="flex justify-between items-center" onClick={() => setDisplayQ2(!DisplayQ2)}> 
                            <h4 className={`font-medium text-xl lg:text-xl ${DisplayQ2 ? "text-mainBlack" : "text-darkGrey"}`}>Question goes here</h4>
                            <Image src={ClickUp} className={DisplayQ2 ? "block" : "hidden"} alt="up" />
                            <Image src={ClickDown} alt="up" className={DisplayQ2 ? "hidden" : "block"}/>
                        </div>
                        <p className={`text-darkGrey text-sm md:text-base lg:text-lg max-w-479px pt-6 ${DisplayQ2 ? "block" : "hidden"}`}>Automatic payouts are made to your account at the end of the day but you can request whenever you want.</p>
                    </div>
                    <hr />
                    <div className={`cursor-pointer ${DisplayQ3 ? "pb-12" : "pb-3"} pt-6`}>
                        <div className="flex justify-between items-center" onClick={() => setDisplayQ3(!DisplayQ3)}> 
                            <h4 className={`font-medium text-xl lg:text-xl ${DisplayQ3 ? "text-mainBlack" : "text-darkGrey"}`}>Question goes here</h4>
                            <Image src={ClickUp} className={DisplayQ3 ? "block" : "hidden"} alt="up" />
                            <Image src={ClickDown} alt="up" className={DisplayQ3 ? "hidden" : "block"}/>
                        </div>
                        <p className={`text-darkGrey text-sm md:text-base lg:text-lg max-w-479px pt-6 ${DisplayQ3 ? "block" : "hidden"}`}>Automatic payouts are made to your account at the end of the day but you can request whenever you want.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq