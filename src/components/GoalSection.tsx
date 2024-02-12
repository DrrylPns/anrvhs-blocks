"use client"
import { motion } from "framer-motion"
import styles from "../styles"
import { staggerContainer, fadeIn, planetVariants } from "../lib/motion"
import { Card, CardFooter, Button, CardBody } from "@nextui-org/react";

import { CarouselSBF } from "./CarouselSBF";
import Image from "next/image";

export const GoalSection = () => {
    return (
        <section className="max-lg:mt-11">
            <div className={`${styles.paddings} relative z-10 h-screen`}>
                <div className="absolute w-[20%] inset-0 overflow-hidden gradient-03 opacity-50 dark:opacity-80 -z-10" />
                <motion.div
                    variants={staggerContainer as any}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.25 }}
                    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
                >
                    <motion.div
                        variants={planetVariants("left")}
                        className={`flex-1 ${styles.flexCenter} mb-7`}
                    >
                        <div className="flex flex-col max-w-[370px] gap-[24px] justify-center w-full">
                            <Image
                                src="../../globe.svg"
                                alt="globe picture"
                                width={500}
                                height={500}
                                className=""
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeIn('right', "tween", 0, 1)}
                        className="flex-[0.75] flex justify-center flex-col"
                    >
                        <h1 className="font-bold mb-2 text-[42px]">The goal of this event is to bring <span className="dark:text-blue-300">leaders in information technology</span> together from across the globe.</h1>
                        {/* <p className="dark:text-[#b0b1b7]">Explore our educational landscape, featuring thoughtfully designed school buildings and cutting-edge facilities, fostering a conducive environment for holistic student growth and innovative learning experiences.</p> */}

                    </motion.div>


                </motion.div>
            </div>
        </section>
    )
}
