"use client"
import { motion } from "framer-motion"
import styles from "@/styles/index"
import { staggerContainer, fadeIn, planetVariants } from "@/lib/motion"
import { Card, CardFooter, Image, Button, CardBody } from "@nextui-org/react";

export const Mission = () => {
    return (
        <div className={`${styles.paddings} relative z-10 md:h-screen w-full`}>
            <motion.div
                variants={staggerContainer as any}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-11`}
            >
                <motion.div
                    variants={fadeIn('left', "tween", 0, 1)}
                    className="flex-[0.75] flex justify-center flex-col"
                >
                    <h1 className="font-bold mb-2 text-[60px]">DepEd {" "}
                        <span className="bg-gradient-to-t from-blue-200 to-blue-500 bg-clip-text text-transparent">
                            Mission.
                        </span>
                    </h1>
                    <p className="dark:text-[#b0b1b7] w-full text-[20px]">To protect and promote the right of every Filipino to quality, equitable, culture-based, and complete basic education where:
                    </p>
                    <br />
                    <p className="dark:text-[#b0b1b7] w-full text-[20px]">Students learn in a child-friendly, gender-sensitive, safe, and motivating environment.</p> <br />
                    <p className="dark:text-[#b0b1b7] w-full text-[20px]">Teachers facilitate learning and constantly nurture every learner.</p> <br />
                    <p className="dark:text-[#b0b1b7] w-full text-[20px]">Administrators and staff, as stewards of the institution, ensure an enabling and supportive environment for effective learning to happen.</p> <br />
                    <p className="dark:text-[#b0b1b7] w-full text-[20px]">Family, community, and other stakeholders are actively engaged and share responsibility for developing life-long learners.</p>

                </motion.div>
                <motion.div
                    variants={planetVariants("right")}
                    className={`flex-1 ${styles.flexCenter} mb-7`}
                >
                    <div className="flex flex-col max-w-[500px] gap-[24px] justify-center w-full">
                        <Image
                            alt="DepEd"
                            className="z-0 bg-no-repeat w-full h-full object-cover max-w-full max-h-full"
                            src="../../../../Dep-Ed.jpg"
                        />
                    </div>
                    <div className="absolute w-[50%] inset-0 -z-10 gradient-04 max-lg:hidden" />
                </motion.div>

            </motion.div>
        </div>
    )
}
