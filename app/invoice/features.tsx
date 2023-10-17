import React from "react";
import Link from "next/link";
import Image from "next/image";
import MessageIcon from "../components/images/message-chat-01 (1).svg"
import AlarmIcon from "../components/images/alarm-check.svg"
import CurrencyIcon from "../components/images/currency-coin-dollar.svg"
import PresentationIcon from "../components/images/presentation-01.svg"
import FileIcon from "../components/images/file-edit-02.svg"
import UserIcon from "../components/images/users-profiles-02.svg"
import ChartIcon from "../components/images/bar-chart-square-up-01.svg"


const Features = () => {
    return (
        <section className="bg-white shadow-sm pb-14 lg:pb-28 mt-16 md:mt-20">
            <div className="mx-5 md:mx-10">
                <div className="text-center flex flex-col space-y-2 md:space-y-3">
                    <h2 className="font-medium text-2xl md:text-3xl lg:text-36 xl:text-4xl leading-none">We make the difference</h2>
                    <p className="text-darkGrey text-base md:text-xl">Unlock the benefits of our solution</p>
                    <div className="pt-4 md:pt-6"> <Link href="#" className='px-6 py-3 rounded-10 text-sm md:text-base border-brightGrey border-1'>Speak to sales <Image src={MessageIcon} alt='icon' className='h-4 inline-block'/> </Link> </div>
                </div>
                <div className="pt-5 md:pt-10 flex flex-col lg:mt-14 space-y-0 lg:space-y-12 container mx-auto">
                    <div className="block lg:flex lg:justify-between">
                        <div className="mt-5 lg:mt-0 text-start lg:max-w-675 xl:max-w-none xl:min-w-675 lg:mr-5">
                            <div className="pt-12 min-h-308 px-6 bg-lightGrey border-0.3 border-brightGrey rounded-20 pb-10 md:pb-0">
                                <Image src={AlarmIcon} className="h-9 text-center" alt="icon" />
                                <h4 className="pt-7 text-lg md:text-xl font-medium">Save previous time</h4>
                                <p className="text-base md:text-lg pt-4 text-darkGrey md:w-11/12 text-start">Our application streamlines your bookkeeping tasks, freeing you to focus on what matters most - growing your business. Spend less time on paperwork and more time making strategic decisions.</p>
                            </div>
                        </div>
                        <div className="mt-5 lg:mt-0 lg:max-w-525 xl:max-w-none xl:min-w-525 text-start">
                            <div className="pt-12 px-6 bg-lightGrey border-0.3 border-brightGrey min-h-308 rounded-20 pb-10 md:pb-0">
                                <Image src={CurrencyIcon} className="h-8" alt="icon"/>
                                <h4 className="pt-7 text-lg md:text-xl font-medium">Boost financial health</h4>
                                <p className="text-base md:text-lg pt-4 text-darkGrey">With precise expense tracking, you&rsquo;ll gain a crystal-clear view of your financial health. Identify cost-saving opportunities and ensure your business stays profitable</p>
                            </div>
                        </div>
                    </div>
                    <div className="block lg:flex lg:flex-row-reverse lg:justify-between">
                        <div className="mt-5 lg:mt-0 text-start lg:max-w-675 xl:max-w-none xl:min-w-675 lg:ml-5">
                            <div className="pt-12 min-h-308 px-6 bg-lightGrey border-0.3 border-brightGrey rounded-20 pb-10 md:pb-0">
                                <Image src={FileIcon} className="h-8" alt="icon" />
                                <h4 className="pt-7 text-lg md:text-xl font-medium">Simplify compliance</h4>
                                <p className="text-base md:text-lg pt-4 text-darkGrey w-11/12">Say goodbye to the headache of tax season. Our software helps you maintain accurate financial records, ensuring compliance with tax regulations, and reducing the risk of costly errors.</p>
                            </div>
                        </div>
                        <div className="mt-5 lg:mt-0 lg:max-w-525 xl:max-w-none xl:min-w-525 text-start">
                            <div className="pt-12 px-6 bg-lightGrey border-0.3 border-brightGrey min-h-308 rounded-20 pb-10 md:pb-0">
                                <Image src={PresentationIcon} className="h-8" alt="icon"/>
                                <h4 className="pt-7 text-lg md:text-xl font-medium">Enhance professionalism</h4>
                                <p className="text-base md:text-lg pt-4 text-darkGrey">Impress your clients with polished, branded invoices. Present your business as a well-organized, trustworthy entity, leading to increased customer confidence and loyal</p>
                            </div>
                        </div>
                    </div>
                    <div className="block lg:flex lg:justify-between">
                        <div className="mt-5 lg:mt-0 text-start lg:max-w-675 xl:max-w-none xl:min-w-675 lg:mr-5">
                            <div className="pt-12 min-h-308 px-6 bg-lightGrey border-0.3 border-brightGrey rounded-20 pb-10 md:pb-0">
                                <Image src={UserIcon} className="h-8" alt="icon" />
                                <h4 className="pt-7 text-lg md:text-xl font-medium">Seamless collaboration</h4>
                                <p className="text-base md:text-lg pt-4 text-darkGrey md:w-10/12">Effortlessly collaborate with your team, accountant, or bookkeeper. Share access securely and keep everyone on the same page, no matter their location or experience level</p>
                            </div>
                        </div>
                        <div className="mt-5 lg:mt-0 lg:max-w-525 xl:max-w-none xl:min-w-525 text-start">
                            <div className="pt-12 px-6 bg-lightGrey border-0.3 border-brightGrey min-h-308 rounded-20 pb-10 md:pb-0">
                                <Image src={ChartIcon} className="h-8" alt="icon"/>
                                <h4 className="pt-7 text-lg md:text-xl font-medium">Scale your business</h4>
                                <p className="text-base md:text-lg pt-4 text-darkGrey">As your business grows, our application scales with you. Easily add new clients, products, or services, and adapt your financial processes without missing a beat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features