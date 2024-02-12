import { Image } from '@nextui-org/react'
import React from 'react'

export const Developer = () => {
    return (
        <section className='flex flex-row justify-between mb-[150px] max-lg:flex-col gap-11'>
            <div className="flex flex-col max-w-[500px] gap-[24px] justify-center w-full">
                <Image
                    alt="DepEd"
                    className="z-0 bg-no-repeat w-full h-full object-cover max-w-full max-h-full"
                    src="../../../../about-us/developerBryan.png"
                />
            </div>

            <div>
                <h1 className='text-[72px] font-bold'>Developer</h1>
                <p className='text-[24px]'>Bryan James Sy</p>
                <p className=''>-Every living being is an engine geared to the wheelwork of the universe.</p>
                <div className='w-full flex justify-end'>
                    <p>-Nikola Tesla</p>
                </div>
            </div>
        </section>
    )
}
