import React from 'react'
import { JHS } from './_components/JHS'
import { SHS } from './_components/SHS'

const page = () => {
    return (
        <section className='overflow-hidden'>
            <JHS />
            <SHS />
        </section>
    )
}

export default page