import React from "react";
import Check from "../components/images/check.svg"
import Image from "next/image";
import SwitchButton from "../components/switch-button";
const Product = () => {

    return (
        <section className="container px-5 lg:px-0 lg:flex justify-between mx-auto pt-16 pb-12 lg:pt-28 lg:pb-20">
            <div className="lg:w-28">
                <h2 className="text-xl md:text-2xl lg:text-36 font-medium lg:max-w-327 text-mainBlack pb-5 lg:pb-8">Lorem ipsum about the product</h2>
                <p className="lg:max-w-320 text-sm md:text-base lg:text-lg text-darkGrey pb-6 lg:pb-9">If you&lsquo;d like to meet in person or send us something by mail, here&lsquo;s our physical address:</p>
                <SwitchButton />
            </div>
            <div className="lg:w-66 md:flex justify-between lg:justify-around pt-12 lg:pt-7">
                <ul>
                    <li className="flex items-center pb-12">
                        <Image src={Check} alt="check" className="inline-block h:6 lg:h-8 mr-2" /> <span className="text-darkGrey inline-block text-sm md:text-base lg:text-lg max-w-309">Design custom invoices that showcase your brand</span>
                    </li>
                    <li className="flex items-center pb-12">
                        <Image src={Check} alt="check" className="inline-block h:6 lg:h-8 mr-2" /> <span className="text-darkGrey inline-block text-sm md:text-base lg:text-lg max-w-309">Generate invoices quickly with pre-filled client and product data</span>
                    </li>
                    <li className="flex items-center pb-12">
                        <Image src={Check} alt="check" className="inline-block h:6 lg:h-8 mr-2" /> <span className="text-darkGrey inline-block text-sm md:text-base lg:text-lg max-w-309">Add line items, descriptions, quantities, and rates effortlessly</span>
                    </li>
                </ul>
                <ul>
                    <li className="flex items-center pb-12">
                        <Image src={Check} alt="check" className="inline-block h:6 lg:h-8 mr-2" /> <span className="text-darkGrey inline-block text-sm md:text-base lg:text-lg max-w-309">Calculate taxes and discounts automatically</span>
                    </li>
                    <li className="flex items-center pb-12">
                        <Image src={Check} alt="check" className="inline-block h:6 lg:h-8 mr-2" /> <span className="text-darkGrey inline-block text-sm md:text-base lg:text-lg max-w-309">Include payment options for faster transactions</span>
                    </li>
                    <li className="flex items-center pb-12">
                        <Image src={Check} alt="check" className="inline-block h:6 lg:h-8 mr-2" /> <span className="text-darkGrey inline-block text-sm md:text-base lg:text-lg max-w-309">Monitor invoice status and payment history in real-time</span>
                    </li>
                </ul>

            </div>
            
        </section>
    )
}


export default Product