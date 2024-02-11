'use client'
import { footerVariants } from '@/lib/motion'
import styles from '@/styles'
import { motion } from 'framer-motion'

export const Footer = () => {
    return (
        <motion.footer
            variants={footerVariants}
            initial={{ opacity: 0 }}
            whileInView="show"
            className={`${styles.xPaddings} py-8 relative overflow-hidden`}
        >
            <div className="footer-gradient opacity-80" />
            <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
                <div className="flex items-center justify-between flex-wrap gap-5">
                    <h4 className="font-bold md:text-[64px] text-[44px] dark:text-white text-black">
                        BLOCKS
                    </h4>
                </div>

                <div className="flex flex-col">
                    <div className="mb-[50px] h-[2px] dark:bg-white bg-black opacity-10" />

                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <h4 className="font-extrabold text-[24px] dark:text-white text-black">
                            ANRVHS
                        </h4>
                        <p className="font-normal text-[14px] dark:text-white text-black dark:opacity-50">
                            Copyright © 2023 - 2024 ANRVHS. All rights reserved.
                        </p>

                        <div className="flex gap-4">

                        </div>
                    </div>
                </div>
            </div>
        </motion.footer>
    )
}
