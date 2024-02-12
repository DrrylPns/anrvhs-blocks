"use client"
import { motion } from "framer-motion"
import styles from "@/styles/index"
import { staggerContainer, fadeIn, planetVariants } from "@/lib/motion"
import { Image } from "@nextui-org/react"

export const Vision = () => {
    return (
        <section className="max-lg:mt-11">
            <div className={`${styles.paddings} relative z-10 mb-24`}>
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
                        <div className="flex flex-col max-w-[500px] gap-[24px] justify-center w-full">
                            <Image
                                alt="Vision"
                                className="z-0 bg-no-repeat w-full h-full object-cover max-w-full max-h-full"
                                src="../../../../schoolmap1.png"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeIn('right', "tween", 0.2, 1)}
                        className="flex-[0.75] flex justify-center flex-col"
                    >
                        <h1 className="font-bold mb-2 text-[60px]">DepEd <span className="bg-gradient-to-t from-blue-200 to-blue-500 bg-clip-text text-transparent">Vision.</span></h1>
                        <p className="dark:text-[#b0b1b7] mb-3 text-[20px]">We dream of Filipinos<br />
                            who passionately love their country <br />
                            and whose values and competencies <br />
                            enable them to realize their full potential <br />
                            and contribute meaningfully to building the nation. <br />
                        </p>
                        <p className="dark:text-[#b0b1b7] w-full text-[20px]">
                            <span>As a learner-centered public institution,</span>
                            <span>{" "}the Department of Education {" "}</span>
                            <span>continuously improves itself {" "}</span>
                            <span>to better serve its stakeholders.</span>
                        </p>

                    </motion.div>


                </motion.div>
            </div>
        </section>
    )
}
