"use client"
import { Button, Card, CardFooter, CardHeader, Image } from '@nextui-org/react'
import { staggerContainer, fadeIn, planetVariants, slideIn, zoomIn } from "@/lib/motion"
import { motion } from "framer-motion"

const teachers = [
    {
        name: "Emily T. Paliwanan",
        position: "Master Teacher II",
        image: "../../../gallery/relatedSubject/1.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        name: "Eleanor T. Tapiru",
        position: "Master Teacher I",
        image: "../../../gallery/relatedSubject/2.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        name: "Ricky R. Ronquilo",
        position: "Master Teacher I",
        image: "../../../gallery/relatedSubject/3.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        name: "Jally Mae P. Tacipit",
        position: "Master Teacher I",
        image: "../../../gallery/relatedSubject/4.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        name: "Richard P. Morales",
        position: "Head Teacher I",
        image: "../../../gallery/relatedSubject/5.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        name: "Ailene P. Sabornido",
        position: "Head Teacher I",
        image: "../../../gallery/relatedSubject/6.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        name: "Ethel D. Borja",
        position: "Teacher III",
        image: "../../../gallery/relatedSubject/7.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        name: "Loulette F. Tapiru",
        position: "Teacher III",
        image: "../../../gallery/relatedSubject/8.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        name: "Ivy P. Navarro",
        position: "Teacher III",
        image: "../../../gallery/relatedSubject/9.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        name: "Janette M. Pinote",
        position: "Teacher  III",
        image: "../../../gallery/relatedSubject/10.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        name: "Mildred M. Javier",
        position: "Teacher II",
        image: "../../../gallery/relatedSubject/11.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        name: "Recie V. Cristobal",
        position: "Teacher I",
        image: "../../../gallery/relatedSubject/12.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        name: "Lingelle D. Utanes",
        position: "Teacher I",
        image: "../../../gallery/relatedSubject/13.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
]

export const RelatedSubject = () => {
    return (
        <motion.div
            className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-40 "
            variants={fadeIn("right", "tween", 0, 1)}
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
