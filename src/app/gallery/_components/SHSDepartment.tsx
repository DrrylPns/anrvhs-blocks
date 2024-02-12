"use client"
import { Button, Card, CardFooter, CardHeader, Image } from '@nextui-org/react'
import { staggerContainer, fadeIn, planetVariants, slideIn, zoomIn } from "@/lib/motion"
import { motion } from "framer-motion"

const teachers = [
    {
        position: "Teacher III",
        name: "Marlene P. Agcaoili",
        image: "../../../gallery/shsDepartment/2.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        position: "Teacher III",
        name: "Mark James P. Paat",
        image: "../../../gallery/shsDepartment/3.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        position: "Teacher II",
        name: "Mary Ann B. Montilla",
        image: "../../../gallery/shsDepartment/4.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        position: "Teacher II",
        name: "Ricoh Jae U. Materum",
        image: "../../../gallery/shsDepartment/5.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        position: "Teacher II",
        name: "Mark Angelo S. Binarao",
        image: "../../../gallery/shsDepartment/6.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        position: "Teacher I",
        name: "Katlyn Grace Pacis",
        image: "../../../gallery/shsDepartment/7.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        position: "Teacher I",
        name: "Karen B. Appegu",
        image: "../../../gallery/shsDepartment/8.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        position: "Administrative Assistant II",
        name: "Allyssa Gae D. Naidas",
        image: "../../../gallery/shsDepartment/fallbackAvatar.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
]

export const SHSDepartment = () => {
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
