"use client"
import { motion } from "framer-motion"
import styles from "../styles"
import { staggerContainer, fadeIn, planetVariants } from "../lib/motion"
import { Card, CardFooter, Image, Button, CardBody } from "@nextui-org/react";
import { CarouselSBF } from "./CarouselSBF";

export const SBF = () => {



    return (
        <div className={`${styles.paddings} relative z-10 md:h-screen`}>
            <motion.div
                variants={staggerContainer as any}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
            >
                <motion.div
                    variants={fadeIn('left', "tween", 0.2, 1)}
                    className="flex-[0.75] flex justify-center flex-col"
                >
                    <h1 className="font-bold mb-2 text-[42px]">School <span className="dark:text-blue-300">Buildings</span> and <span className="dark:text-blue-300">Facilities.</span></h1>
                    <p className="dark:text-[#b0b1b7]">Explore our educational landscape, featuring thoughtfully designed school buildings and cutting-edge facilities, fostering a conducive environment for holistic student growth and innovative learning experiences.</p>
                    <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px] justify-center w-full">
                        <Card>
                            <CardBody>
                                <p>Enhanced Learning Environment</p>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <p>Safety and Security</p>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <p>Health and Wellness</p>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <p>Community Engagement</p>
                            </CardBody>
                        </Card>
                    </div>
                </motion.div>
                <motion.div
                    variants={planetVariants("right")}
                    className={`flex-1 ${styles.flexCenter} mb-7`}
                >

                    {/* Carousel Starts Here */}
                    <CarouselSBF />
                    <div className="absolute w-[50%] inset-0 -z-10 gradient-04 max-lg:hidden" />
                </motion.div>

            </motion.div>
        </div>
    )
}
