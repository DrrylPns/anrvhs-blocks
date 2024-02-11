"use client"
import { motion } from "framer-motion"
import styles from "../styles"
import { staggerContainer, fadeIn } from "../lib/motion"
import { TitleText, TypingText } from "./CustomTexts"

export const MottoSection = () => {
    return (
        <section className={`${styles.paddings} relative z-10 max-md:mt-[177px]`}>
            <motion.div
                variants={staggerContainer as any}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >

                <TypingText title="| School's Motto" textStyles="text-center text-[22px]" />
                <TitleText
                    title={(
                        <div className="text-black dark:text-white">
                            "TOGETHER We Can Make it Happen, TOGETHER We Can Make a Difference."
                        </div>
                    )}
                    textStyles="text-center"
                />

                <motion.div
                    variants={fadeIn('up', 'tween', 0.3, 1)}
                    className="relative mt-[68px] flex w-full h-[550px]"
                >
                    <img src="/map.png" alt="map" className="w-full h-full object-cover" />

                    <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
                        <img src="../../help1.svg" alt="people" className="w-full h-full" />
                    </div>

                    <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
                        <img src="../../help2.svg" alt="people" className="w-full h-full" />
                    </div>

                    <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
                        <img src="../../help3.svg" alt="people" className="w-full h-full" />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}
