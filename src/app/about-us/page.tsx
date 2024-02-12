import styles from '@/styles'
import React from 'react'
import { CoreValues } from './_components/CoreValues'
import { Vision } from './_components/Vision'
import { Mission } from './_components/Mission'
import { Timeline } from './_components/Timeline'
import { Location } from './_components/Location'
import { SchoolLayout } from './_components/SchoolLayout'
import { Developer } from './_components/Developer'

const page = () => {
    return (
        <div className={`${styles.paddingX} ${styles.flexCenter} flex-col overflow-hidden`}>
            <div
                className="grid justify-center items-center h-[500px] bg-[url(https://utfs.io/f/676489cf-d207-4c79-839b-ee02aa6f367e-n7jjqp.png)] bg-cover w-full dark:opacity-60 z-10 "
            >
                <div className="text-white items-center flex flex-col justify-center text-center z-40">
                    <h1 className="font-bold md:text-[79px] text-[60px] text-white z-50 inline-block text-transparent bg-clip-text border-2 border-white p-7 mb-3">About Us</h1>
                </div>
            </div>

            <div>
                <Mission />
            </div>

            <div>
                <Vision />
            </div>

            <div className={`${styles.boxWidth} mb-11`}>
                <CoreValues />
            </div>

            <div className='mb-11'>
                <Timeline />
            </div>

            <div className='mt-11 w-full'>
                <Location />
            </div>

            <div className='mb-11'>
                <SchoolLayout />
            </div>

            <div className='mt-11'>
                <Developer />
            </div>
        </div>
    )
}

export default page