import React from 'react'

const OperationSection = () => {
    return (
        <section className='container mx-auto py-0 md:py-8 mt-16 lg:mt-28 px-5'>
            <div>
                <h2 className='text-black font-medium text-2xl md:text-3xl lg:text-36 xl:text-4xl text-center'>Scale operations in <span className='text-lightBlue'>4 steps</span></h2>
                <div className='pt-10 lg:pt-28 lg:flex lg:gap-10 lg:flex-row'>
                    <div className='lg:w-1/2'>
                        <ul className=''>
                            <li className='border-l-1 border-dotted border-lightBlue relative pl-6 pb-8 md:pb-12'>
                                <div className='h-5 w-5 md:h-6 md:w-6 text-center text-sm md:text-base bg-lightBlue rounded-full absolute -top-3 -left-3'><span className='text-white'>1</span></div>
                                <h4 className='text-lightBlue text-base md:text-xl absolute -top-4 left-6'>Invoice like a pro</h4>
                                <p className='text-base md:text-lg pt-7 max-w-446 text-darkGrey'>Navigate through your finances seamlessly with our user-friendly dashboard. Get an instant overview of your income, expenses, and profits at a glance.</p> 
                            </li>
                            <li className="border-l-1 border-dotted border-mainGrey relative pl-6 pb-8 md:pb-12">
                                <div className='h-5 w-5 md:h-6 md:w-6 text-center text-sm md:text-base bg-brightGrey rounded-full absolute -left-3'><span className='text-mainGrey'>2</span></div>
                                <div>
                                    <h4 className='absolute text-mainGrey text-base md:text-xl -top-1 left-6'>Effortless bookkeeping</h4>
                                    <p className='text-base md:text-lg pt-10 max-w-446 text-mainGrey'>Create professional invoices effortlessly. Customize templates, add client details, and send invoices with just a few clicks. Monitor payments in real-time.</p>
                                </div>
                            </li>
                            <li className="border-l-1 border-dotted border-mainGrey relative pl-6 pb-8 md:pb-12">
                                <div className='h-5 w-5 md:h-6 md:w-6 text-center text-sm md:text-base bg-brightGrey rounded-full absolute -left-3'><span className='text-mainGrey'>3</span></div>
                                <div>
                                    <h4 className='absolute text-mainGrey text-base md:text-xl -top-1 left-6'>Purchasing management</h4>
                                    <p className='text-base md:text-lg pt-10 max-w-446 text-mainGrey'>Say goodbye to stacks of receipts. Snap photos of expenses on your phone, categorize them instantly, and watch as our app organizes everything for you.</p>
                                </div>
                            </li>
                            <li className="relative pl-6 pb-8 md:pb-12">
                                <div className='h-5 w-5 md:h-6 md:w-6 text-center text-sm md:text-base bg-brightGrey rounded-full absolute -left-3'><span className='text-mainGrey'>4</span></div>
                                <div>
                                    <h4 className='absolute text-mainGrey text-base md:text-xl -top-1 left-6'>Customer and vendor management</h4>
                                    <p className='text-base md:text-lg pt-10 max-w-446 text-mainGrey'>Say goodbye to stacks of receipts. Snap photos of expenses on your phone, categorize them instantly, and watch as our app organizes everything for you</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='lg:w-1/2 pt-10 lg:pt-36'>
                        <div className=' bg-white shadow-lg w-220 h-210 sm:w-280 sm:h-280 md:w-500 md:h-460 lg:w-529px lg:h-460px mx-auto lg:mx-0 lg:ml-auto rounded-20 md:rounded-30'></div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}


export default OperationSection