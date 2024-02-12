"use client"
import { Button, Card, CardFooter, CardHeader, Image } from '@nextui-org/react'
import { staggerContainer, fadeIn, planetVariants, slideIn, zoomIn } from "@/lib/motion"
import { motion } from "framer-motion"
import { GalleryDivider } from '@/app/gallery/_components/GalleryDivider'

const students = [
    {
        name: "Bayani, Jayson Biz",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Gimenez, Frank Mark Tañeza",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Lumabas, Jordan Urian",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Yacas, Arnold Mario",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Barroga, Anna Marie Dominggo",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Delos Santos, Dhelia Macugay",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Gavina, Joane Reynon",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Grande, Angelica Medrano",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Grande, Angielet Medrano",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Grande, Judy Ann Medrano",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Mario, Maebel Queja",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Montenegro , Ruby-An Berbano",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Osorio, Jevelyn Grande",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Purganan, Jemma Lyn Cardenas",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Ringor, Donna Salvador",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Veran, Angelica Joy Briones",
        image: "../../../../gallery/fallbackAvatar.png",
    },
]

const students2 = [
    {
        name: "Agustin, Jayson Urian",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Bayani, Ronhel Cariño",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Medrano, Renz Niño Bayani",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Pedroso, Ramon Gimene",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Pelotin Jr., Alejandro Bayani",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Rivera, John WILLIAM Suarez",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Yapit, Jayron Barroga",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Abano, Rem Cris Agbisit",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Appegu, Aira Mae Baniaga",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Duldulao, Sherlyn Garrote",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Duyao, Rosemarie Bis",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Garrote, Rhea Angelica Balicat",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Pablo, Christalyn Macanaya",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Rivera, Rheena Jane Dela Cruz",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Sabalburo, Crishelle Oloraza",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Villacarlos, Yna Jane Cariaga",
        image: "../../../../gallery/fallbackAvatar.png",
    },
]

export const Batch1 = () => {
    return (
        <div>
            <GalleryDivider department=' TVL AFA (AGRI CROPS PRODUCTION)' />
            <div
                className={`mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 overflow-hidden h-full w-full z-10`}
            >
                <motion.div
                    className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-40 "
                    variants={fadeIn("right", "tween", 0, 1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true }}
                >
                    {students.map((student, index) => {
                        return (
                            <Card key={index} className="h-full w-full md:max-w-[300px] z-10 max-md:max-w-[300px]" isFooterBlurred>
                                <Image
                                    alt={`teacher ${index + 1} image`}
                                    className="z-0 bg-no-repeat w-full h-full object-cover"
                                    src={student.image}
                                />
                                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-default-600 dark:border-default-100">
                                    <div className="flex flex-grow gap-2 items-center">
                                        <div className="flex flex-col">
                                            <p className="text-lg text-white">{student.name}</p>
                                        </div>
                                    </div>
                                </CardFooter>
                            </Card>
                        )
                    }
                    )}

                </motion.div>
            </div>

            <GalleryDivider department='TVL ICT (INFORMATION COMMUNICATION TECHNOLOGY)' />

            <div
                className={`mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 overflow-hidden h-full w-full z-10`}
            >
                <motion.div
                    className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-40 "
                    variants={fadeIn("right", "tween", 0, 1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true }}
                >
                    {students2.map((student, index) => {
                        return (
                            <Card key={index} className="h-full w-full md:max-w-[300px] z-10 max-md:max-w-[300px]" isFooterBlurred>
                                <Image
                                    alt={`teacher ${index + 1} image`}
                                    className="z-0 bg-no-repeat w-full h-full object-cover"
                                    src={student.image}
                                />
                                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-default-600 dark:border-default-100">
                                    <div className="flex flex-grow gap-2 items-center">
                                        <div className="flex flex-col">
                                            <p className="text-lg text-white">{student.name}</p>
                                        </div>
                                    </div>
                                </CardFooter>
                            </Card>
                        )
                    }
                    )}

                </motion.div>
            </div>
        </div>


    )
}
