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
            className={`${styles.xPaddings} py-8 relative`}
        >
            <div className="footer-gradient" />
            <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
                <div className="flex items-center justify-between flex-wrap gap-5">
                    <h4 className="font-bold md:text-[64px] text-[44px] text-white">
                        BLOCKS
                    </h4>
                </div>

                <div className="flex flex-col">
                    <div className="mb-[50px] h-[2px] bg-white opacity-10" />

                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <h4 className="font-extrabold text-[24px] text-white">
                            ANRVHS
                        </h4>
                        <p className="font-normal text-[14px] text-white opacity-50">
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
