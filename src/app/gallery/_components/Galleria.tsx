"use client"
import { Button, Card, CardFooter, CardHeader, Image } from '@nextui-org/react'
import { staggerContainer, fadeIn, planetVariants, slideIn, zoomIn } from "@/lib/motion"
import { motion } from "framer-motion"

const teachers = [
    {
        position: "Nurse II",
        name: "Alan Eugenio G. Pacis",
        image: "../../../gallery/alan-pacis.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        position: "Librarian III",
        name: "Celina P. Belvis",
        image: "../../../gallery/celina-belvis.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        position: "Accountant I",
        name: "Grace A. Mappala",
        image: "../../../gallery/grace-mappala.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        position: "Administrative Officer I",
        name: "Michael U. Vela ",
        image: "../../../gallery/michael-vela.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        position: "Accountant I",
        name: "Billy Randolf A. Cariaga",
        image: "../../../gallery/billy-cariaga.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        position: "Accountant I",
        name: "Rio Grace R. Seguro",
        image: "../../../gallery/rio-seguro.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        position: "Administrative Aide IV",
        name: "Queenzel B. Morales",
        image: "../../../gallery/queenzel-morales.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        position: "Administrative Officer I",
        name: "Ferdinand A. Tacipit",
        image: "../../../gallery/ferdinand-tacipit.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        position: "Administrative Aide I",
        name: "Marina B. Medrano",
        image: "../../../gallery/marina-medrano.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        position: "Light Equipment Operator I",
        name: "Jilbert U. Biz",
        image: "../../../gallery/jilbert-biz.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        position: "Security Guard I",
        name: "David O. Belvis",
        image: "../../../gallery/david-belvis.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        position: "Security Guard I",
        name: "Nolimar G. Aquisay",
        image: "../../../gallery/nolimar-aquisay.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        position: "Security Guard I",
        name: "Gilbert T. Dela Cruz",
        image: "../../../gallery/fallbackAvatar.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        position: "Security Guard I",
        name: "Hector D. Tacipit",
        image: "../../../gallery/fallbackAvatar.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
    {
        position: "Security Guard I",
        name: "Charlito B. Espiritu",
        image: "../../../gallery/charlito-espiritu.png",
        department: "Administrative Department",
        employeeType: "text-black"
    },
];

export const Galleria = () => {
    return (
        <motion.div
            className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-40 "
            variants={fadeIn("right", "tween", 0, 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true}}
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
