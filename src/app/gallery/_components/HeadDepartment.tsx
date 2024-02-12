"use client"
import { Button, Card, CardFooter, CardHeader, Image } from '@nextui-org/react'
import { staggerContainer, fadeIn, planetVariants, slideIn, zoomIn } from "@/lib/motion"
import { motion } from "framer-motion"

interface HeadDepartmentProps {
    name: string;
    position: string;
    image: string;
    department: string;
}

export const HeadDepartment: React.FC<HeadDepartmentProps> = ({
    name,
    position,
    department,
    image,
}) => {
    return (
        <main>
            <motion.div
                className="w-full flex justify-center items-center z-10 gap-x-6 gap-y-10"
                variants={fadeIn("right", "tween", 0, 1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.25 }}
            >
                <Card key={position} className="h-full w-full md:max-w-[300px] max-md:max-w-[400px]" isFooterBlurred>
                    <Image
                        alt={`teacher ${name} image`}
                        className="z-0 bg-no-repeat w-full h-full object-cover"
                        src={image}
                    />
                    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-default-600 dark:border-default-100">
                        <div className="flex flex-grow gap-2 items-center">
                            <div className="flex flex-col">
                                <p className="text-lg text-white">{name}</p>
                                <p className="text-base text-white/80">{position}</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            </motion.div>
        </main>
    )
}
