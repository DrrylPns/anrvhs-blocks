"use client"
import { motion } from "framer-motion"

import { Card, CardBody } from "@nextui-org/react";
import { fadeIn, planetVariants, staggerContainer } from "@/lib/motion";
import styles from "@/styles";
import { buttonVariants } from "@/components/ui/button";
import { Beef, Car, Dog, Hammer, Shirt, Trees } from "lucide-react";


export const JHS = () => {
    return (
        <div className={`${styles.paddings} relative z-10 md:h-screen overflow-hidden`}>
            <motion.div
                variants={staggerContainer as any}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
            >
                <motion.div
                    variants={fadeIn('left', "tween", 0, 1)}
                    className="flex-[0.75] flex justify-center flex-col"
                >
                    <h1 className="font-bold mb-2 text-[42px] max-md:text-center">Abulug National Rural and Vocational Highschool <span className="dark:text-blue-300">provides </span> these <span className="dark:text-blue-300">specializations</span>{" "}for JHS.</h1>

                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScO_M3pOS9ZdFEOy74OuMAL-1J2OSVAZQkA7lgbR1cOZkK4Kg/viewform" target="_blank" className={buttonVariants({
                        className: "text-white"
                    })}
                    >
                        Register now!
                    </a>

                </motion.div>
                <motion.div
                    variants={planetVariants("right")}
                    className={`flex-1 ${styles.flexCenter} mb-7`}
                >
                    <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px] justify-center w-full">
                        <Card>
                            <CardBody>
                                <div className="flex">
                                    <Trees className="mr-2" />
                                    <p>Agriculture</p>
                                </div>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <div className="flex">
                                    <Car className="mr-2" />
                                    <p>Automotive</p>
                                </div>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <div className="flex">
                                    <Hammer className="mr-2" />
                                    <p>Carpentry</p>
                                </div>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <div className="flex">
                                    <Dog className="mr-2" />
                                    <p>Animal Production</p>
                                </div>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <div className="flex">
                                    <Shirt className="mr-2" />
                                    <p>Dress Making</p>
                                </div>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <div className="flex">
                                    <Beef className="mr-2" />
                                    <p>Food Processing</p>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="absolute w-[50%] inset-0 -z-10 gradient-04 max-lg:hidden" />
                </motion.div>

            </motion.div>
        </div>
    )
}
