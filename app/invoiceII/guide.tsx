import React from "react";
import Image from "next/image";
import GroupIcon from "../components/images/Group 48.svg"
import BlurGroupIcon from "../components/images/Group 48 (1).svg"


const Guide = () => {
    return (
        <section className="container px-5 lg:px-0 mx-auto pt-10 lg:pt-20 pb-10 lg:pb-16">
            <h2 className="text-mainBlack text-lg md:text-2xl lg:text-36 text-center font-medium pb-3">Creating invoices has never been easier</h2>
            <p className="text-darkGrey text-sm md:text-base lg:text-lg text-center">How it works</p>
            <div className="flex flex-col-reverse md:flex-row md:justify-between pt-20">
                <div className="pt-10 md:w-45%">
                    <div className="bg-whiteTint border-brightGrey border-0.5 rounded-20 max-w-562 h-332 xl:min-w-562 xl:max-w-none"></div>
                </div>
                <div className="hidden md:block text-center lg:w-10% ">
                    <div className="relative w-8 mx-auto">
                        <Image src={GroupIcon} alt="icon" className="absolute -top-29px" /> <span className="absolute -top-26px left-11px  text-lg text-white">1</span>
                        <div className="mx-auto w-4px h-416 bg-brightGrey"><div className="w-4px h-139px bg-lightBlue"></div></div>
                    </div>
                </div>
                <div className="pt-10 md:pt-36 md:w-45%">
                    <h4 className="text-base md:text-lg lg:text-xl text-lightBlue">Access the feature</h4>
                    <p className="text-darkGrey text-sm md:text-base lg:text-lg max-w-446">Navigate through your finances seamlessly with our user-friendly dashboard. Get an instant overview of your income, expenses, and profits at a glance.</p>
                </div>
            </div>
            <div className="md:flex md:justify-between">
                <div className="pt-10 md:pt-36 md:w-45%">
                    <h4 className="text-base md:text-lg lg:text-xl text-lightBlue">Access the feature</h4>
                    <p className="text-darkGrey text-sm md:text-base lg:text-lg max-w-446">Navigate through your finances seamlessly with our user-friendly dashboard. Get an instant overview of your income, expenses, and profits at a glance.</p>
                </div>
                <div className="text-center hidden md:block w-10% ">
                    <div className="relative w-8 mx-auto">
                        <Image src={BlurGroupIcon} alt="icon" className="absolute -top-29px" /> <span className="absolute -top-26px left-11px text-lg text-mainGrey">2</span>
                        <div className="mx-auto w-4px h-416 bg-brightGrey"></div>
                    </div>
                </div>
                <div className="pt-10 md:w-45%">
                    <div className="bg-whiteTint border-brightGrey border-0.5 rounded-20 max-w-562 h-332 xl:min-w-562 xl:max-w-none"></div>
                </div>
                
            </div>
            <div className="flex flex-col-reverse md:flex-row md:justify-between">
                <div className="pt-10 md:w-45%">
                    <div className="bg-whiteTint border-brightGrey border-0.5 rounded-20 max-w-562 h-332 xl:min-w-562 xl:max-w-none"></div>
                </div>
                <div className="text-center hidden md:block w-10% ">
                    <div className="relative w-8 mx-auto">
                        <Image src={BlurGroupIcon} alt="icon" className="absolute -top-29px" /> <span className="absolute -top-26px left-11px  text-lg text-mainGrey">3</span>
                        <div className="mx-auto w-4px h-416 bg-brightGrey"></div>
                    </div>
                </div>
                <div className="pt-10 md:pt-36 md:w-45%">
                    <h4 className="text-base md:text-lg text-lightBlue">Access the feature</h4>
                    <p className="text-darkGrey text-sm md:text-base lg:text-lg max-w-446">Navigate through your finances seamlessly with our user-friendly dashboard. Get an instant overview of your income, expenses, and profits at a glance.</p>
                </div>
            </div>
        </section>
    )
}



export default Guide
