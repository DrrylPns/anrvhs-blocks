"use client"
import { textVariant } from "@/lib/motion"
import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion"

interface GalleryDividerProps {
    department: string;
}

export const GalleryDivider: React.FC<GalleryDividerProps> = ({ department }) => {
    return (
        <main className='w-full z-20'>
            <motion.div
                className='dark:text-white text-black w-full flex justify-center items-center'
                variants={textVariant(0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.25 }}
            >
                <Card className="text-center w-full bg-[#18181B] text-white rounded-none">
                    <CardBody className="flex justify-center items-center text-[48px] p-7">
                        {department}
                    </CardBody>
                </Card>
            </motion.div>
        </main>
    )
}
