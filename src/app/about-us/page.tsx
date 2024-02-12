import styles from '@/styles'
import React from 'react'
import { CoreValues } from './_components/CoreValues'
import { Vision } from './_components/Vision'
import { Mission } from './_components/Mission'
import { Timeline } from './_components/Timeline'

const page = () => {
    return (
        <div className={`${styles.paddingX} ${styles.flexCenter} flex-col overflow-hidden`}>
            <div>
                <Mission />
            </div>

            <div>
                <Vision />
            </div>

            <div className={`${styles.boxWidth}`}>
                <CoreValues />
            </div>

            <div>
                <Timeline />
            </div>
        </div>
    )
}

export default page