import React from "react";
import Image from "next/image";
import Logo from "./images/logo.svg"
import MediaIcon from "./images/Group 899.svg"

const Footer = () => {
    return (
        <section className="mt-12 md:mt-28 px-5 pb-14 container mx-auto">
            <div className="flex justify-between flex-wrap">
                <div className="lg:w-7/12 w-full md:flex justify-between">
                    <div className="hidden lg:block w-1/2">
                        <Image src={Logo} alt="verzo" className="h-9" />
                    </div>
                    <div className="mt-8 md:mt-0 w-1/2">
                        <ul>
                            <li className="text-sm lg:text-base font-medium">Product</li>
                            <li className="text-sm lg:text-base text-darkGrey pt-3">Invoicing</li>
                            <li className="text-sm lg:text-base text-darkGrey pt-3">Purchase</li>
                            <li className="text-sm lg:text-base text-darkGrey pt-3">Bookkeeping</li>
                        </ul>
                    </div>
                    <div className="mt-8 md:mt-0 w-1/2">
                        <ul>
                            <li className="text-sm lg:text-base font-medium">Company</li>
                            <li className="text-sm lg:text-base text-darkGrey pt-3">Pricing</li>
                            <li className="text-sm lg:text-base text-darkGrey pt-3">About</li>
                        </ul>
                    </div>
                    <div className="mt-8 md:mt-0 w-1/2">
                        <ul>
                            <li className="text-sm lg:text-base font-medium">Legal</li>
                            <li className="text-sm lg:text-base text-darkGrey pt-3">Term of Use</li>
                            <li className="ttext-sm lg:text-base text-darkGrey pt-3">Privacy policy</li>
                        </ul>
                    </div>
                    <div className="mt-8 md:mt-0 block lg:hidden">
                        <ul>
                            <li className="text-sm lg:text-base font-medium">Resources</li>
                            <li className=" text-sm lg:text-base text-darkGrey pt-3">Blog</li>
                            <li className=" flex justify-between items-center pt-3"><p className="text-sm lg:text-base text-darkGrey">Careers</p> <Image src={MediaIcon} alt="icon" className="h-4 text-end hidden lg:block" /></li>
                            <li className=" flex justify-between items-center pt-3"> <p className="text-sm lg:text-base text-darkGrey">Knowledge base</p> <p className="text-base hidden lg:block">© 2023 Verzo Inc. All rights reserved</p></li>
                        </ul>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-5/12 ">
                    <div>
                        <ul>
                            <li className="text-sm lg:text-base font-medium">Resources</li>
                            <li className="text-sm lg:text-base text-darkGrey pt-3">Blog</li>
                            <li className=" flex justify-between items-center pt-3"><p className="text-sm lg:text-base text-darkGrey">Careers</p> <Image src={MediaIcon} alt="icon" className="h-4 text-end hidden md:block" /></li>
                            <li className=" flex justify-between items-center pt-3"> <p className="text-sm lg:text-base text-darkGrey">Knowledge base</p> <p className="text-base text-darkGrey hidden md:block">&copy; 2023 Verzo Inc. All rights reserved</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className="block pt-6 lg:hidden">
                        <div className=""><Image src={Logo} alt="verzo" className="h-6 md:h-9 mx-auto" /></div>
                        <div className="pt-3"><Image src={MediaIcon} alt="icon" className="h-3 md:h-4 text-end mx-auto" /></div>
                        <p className="text-sm lg:text-base text-darkGrey text-center pt-3">&copy; 2023 Verzo Inc. All rights reserved</p>
                </div>
            </div>
        </section>
    )
}

export default Footer