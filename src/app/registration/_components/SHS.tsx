"use client"
import { motion } from "framer-motion"

import { Card, CardFooter, Image, Button, CardBody } from "@nextui-org/react";
import { fadeIn, planetVariants, staggerContainer } from "@/lib/motion";
import styles from "@/styles";
import { buttonVariants } from "@/components/ui/button";
import { Book, Fish, Router } from "lucide-react";
import { CardDescription } from "@/components/ui/card";

export const SHS = () => {
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
                    variants={planetVariants("right")}
                    className={`flex-1 ${styles.flexCenter} mb-7`}
                >
                    <div className="mt-[31px] flex-row max-w-[370px] gap-[24px] justify-center w-full hidden lg:block">
                        <div className="flex flex-col gap-3 mb-3">
                            <h1 className="font-bold text-2xl">In tvl track we have: </h1>
                            <Card>
                                <CardBody>
                                    <div className="flex">
                                        <Router className="mr-2" />
                                        <p>ICT - Information Communication Technology</p>
                                    </div>
                                </CardBody>
                                <CardDescription className="ml-5">
                                    specialized in CSS (Computer Systems Servicing)
                                </CardDescription>
                            </Card>

                            <Card>
                                <CardBody>
                                    <div className="flex">
                                        <Fish className="mr-2" />
                                        <p>AFA Agricultural-Fishery Arts</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>

                        <div className="mt-[86px] flex flex-col gap-3">
                            <h1 className="font-bold text-2xl">In academics we have: </h1>
                            <Card>
                                <CardBody>
                                    <div className="flex">
                                        <Book className="mr-2" />
                                        <p>HUMSS Humanities and Social Science</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>

                    </div>
                    <div className="absolute w-[50%] inset-0 -z-10 gradient-02 max-lg:hidden" />
                </motion.div>

                <motion.div
                    variants={fadeIn('left', "tween", 0, 1)}
                    className="flex-[0.75] flex justify-center flex-col"
                >
                    <h1 className="font-bold mb-2 text-[42px] max-md:text-center ">Abulug National Rural and Vocational Highschool <span className="dark:text-blue-300">provides </span> these <span className="dark:text-blue-300">strands</span>{" "}</h1>

                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdUApvQIQXBm1rst1qGF9oG89cc6f_rMrkOAKBcsVcs1gV9ZA/viewform" target="_blank" className={buttonVariants({
                        className: "text-white"
                    })}
                    >
                        Register now!
                    </a>

                    <div className="mt-[72px] flex-row max-w-[370px] gap-[24px] justify-center items-center w-full lg:hidden block mx-auto">
                        <div className="flex flex-col gap-3 mb-3">
                            <h1 className="font-bold text-2xl">In tvl track we have: </h1>
                            <Card>
                                <CardBody>
                                    <div className="flex">
                                        <Router className="mr-2" />
                                        <p>ICT - Information Communication Technology</p>
                                    </div>
                                </CardBody>
                                <CardDescription className="ml-5">
                                    specialized in CSS (Computer Systems Servicing)
                                </CardDescription>
                            </Card>

                            <Card>
                                <CardBody>
                                    <div className="flex">
                                        <Fish className="mr-2" />
                                        <p>AFA Agricultural-Fishery Arts</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>

                        <div className="mt-[86px] flex flex-col gap-3">
                            <h1 className="font-bold text-2xl">In academics we have: </h1>
                            <Card>
                                <CardBody>
                                    <div className="flex">
                                        <Book className="mr-2" />
                                        <p>HUMSS Humanities and Social Science</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>

                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}
