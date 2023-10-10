import React from "react";


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
                    <div className="relative w-4px mx-auto">
                        <span className="w-9 h-9 rounded-full pt-1 bg-brandTint inline-block text-center absolute -top-9 -left-4"><span className="w-7 h-7 text-base rounded-full bg-lightBlue inline-block text-center pt-2px">1</span></span>
                        <div className="w-4px h-416 bg-brightGray"><div className="w-4px h-139px bg-lightBlue"></div></div>
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
                    <div className="relative w-4px mx-auto">
                        <span className="w-9 h-9 rounded-full pt-1 bg-lightGray inline-block text-center absolute -top-9 -left-4"><span className="w-7 h-7 text-base rounded-full bg-brightGrey text-mainGrey inline-block text-center pt-2px">2</span></span>
                        <div className="w-4px h-416 bg-brightGray"></div>
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
                    <div className="relative w-4px mx-auto">
                        <span className="w-9 h-9 rounded-full pt-1 bg-lightGray inline-block text-center absolute -top-9 -left-4"><span className="w-7 h-7 text-base rounded-full bg-brightGrey text-mainGrey inline-block text-center pt-2px">3</span></span>
                        <div className="w-4px h-374 bg-brightGray"></div>
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
