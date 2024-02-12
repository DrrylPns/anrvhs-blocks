"use client"
import { Button, Card, CardFooter, CardHeader, Image } from '@nextui-org/react'
import { staggerContainer, fadeIn, planetVariants, slideIn, zoomIn } from "@/lib/motion"
import { motion } from "framer-motion"

const teachers = [
    {
        name: "Filamer S. Cacuyong",
        position: "Master Teacher I",
        image: "../../../gallery/vocDep/1.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        name: "Swerte Joyce S. Cariaga",
        position: "Master Teacher II",
        image: "../../../gallery/vocDep/2.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        name: "Efren Amistad D. De Guzman",
        position: "Master Teacher I",
        image: "../../../gallery/vocDep/3.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        name: "Carolyn G. De Guzman",
        position: "Teacher III",
        image: "../../../gallery/vocDep/4.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        name: "Miriam T. Agpalza",
        position: "Teacher III",
        image: "../../../gallery/vocDep/5.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        name: "Reymundo P. Reyes",
        position: "Teacher III",
        image: "../../../gallery/vocDep/6.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        name: "Gracielle L. Agrida",
        position: "Teacher III",
        image: "../../../gallery/vocDep/7.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        name: "Evavie B. Lagasca",
        position: "Teacher III",
        image: "../../../gallery/vocDep/fallbackAvatar.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        name: "Mary Grace A. Balbag",
        position: "Teacher I",
        image: "../../../gallery/vocDep/9.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
]

export const VocDep = () => {
    return (
        <motion.div
            className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-40 "
            variants={fadeIn("left", "tween", 0, 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
        >
            {teachers.map((teacher, index) => {
                return (
                    <Card key={index} className="h-full w-full md:max-w-[300px] z-10 max-md:max-w-[300px]" isFooterBlurred>
                        <Image
                            alt={`teacher ${index + 1} image`}
                            className="z-0 bg-no-repeat w-full h-full object-cover"
                            src={teacher.image}
                        />
                        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-default-600 dark:border-default-100">
                            <div className="flex flex-grow gap-2 items-center">
                                <div className="flex flex-col">
                                    <p className="text-lg text-white">{teacher.name}</p>
                                    <p className="text-base text-white/80">{teacher.position}</p>
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                )
            }
            )}

        </motion.div>
    )
}
