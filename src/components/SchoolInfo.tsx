"use client"
import { motion } from "framer-motion"
import styles from "../styles"
import { staggerContainer, fadeIn } from "../lib/motion"
import { TitleText, TypingText } from "./CustomTexts"
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react"

export const SchoolInfo = () => {
    return (
        <section className={`${styles.paddings} relative z-10 max-md:mt-[177px]`}>
            <motion.div
                variants={staggerContainer as any}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
                <TypingText title="| What the school offer" textStyles="text-center text-[22px]" />
                <TitleText
                    title={(
                        <div className="text-black dark:text-white">
                            Nurturing Talents, Fostering Success: ANRVHS - Where Skills Shape Futures.
                        </div>
                    )}
                    textStyles="text-center"
                />
                <div className="mt-[50px] flex flex-col gap-[30px] w-full items-center justify-center">
                    <Card className="md:max-w-[600px]">
                        <CardHeader className="font-bold">
                            Environment
                        </CardHeader>

                        <Divider />

                        <CardBody>
                            ANRVHS provides a secure and healthy learning environment, focusing on the development of talents and lifelong skills, especially in the technical-vocational domain.
                        </CardBody>
                    </Card>

                    <Card className="md:max-w-[600px]">
                        <CardHeader className="font-bold">
                            Commitment
                        </CardHeader>

                        <Divider />

                        <CardBody>
                            ANRVHS is committed to utilizing all available resources to guide students on a journey of self-discovery. This includes fostering competence in the teaching of wisdom, knowledge, and skills essential for future success.
                        </CardBody>
                    </Card>

                    <Card className="md:max-w-[600px]">
                        <CardHeader className="font-bold">
                            Holistic Development
                        </CardHeader>

                        <Divider />

                        <CardBody>
                            The school aims to nurture holistic development on all levels, encompassing physical, emotional, mental, social, and spiritual well-being. This is achieved through a diverse range of experiences and activities.
                        </CardBody>
                    </Card>
                </div>
            </motion.div>
        </section>
    )
}
