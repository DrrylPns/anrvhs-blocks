"use client"
import { Button, Card, CardFooter, CardHeader, Image } from '@nextui-org/react'
import { staggerContainer, fadeIn, planetVariants, slideIn, zoomIn } from "@/lib/motion"
import { motion } from "framer-motion"
import { GalleryDivider } from '@/app/gallery/_components/GalleryDivider'

const students = [
    {
        name: "Amdidew, Deverindo Modag",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Bautista, Judie-mark Sabalburo",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Corpuz, Nelson Fulminar",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Dela Cruz, Redento Reyes",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Duldulao, Julius Frank Laforga",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Fulminar, Jaylord Saguitan",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Gocalin, Fredie Quitives",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Grande, Tonton Arzaga",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Guillermo, Francis Raymund Agtang",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Nicolas, Jonathan Laforga",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Oliva, Raffy Sagun",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Pacis, Paul Gin Siriban",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Rimabon, Kevin Galanote",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Rivera, Dhenmark Amayun",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Villanueva, Carlwin Bain",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Albano, Miden Cabagui",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Cacuyong, Kristen Erika Rivera",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Camiguin, Micah Stephanie Orig",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Cardenas, Elizabeth Acebedo",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Carpio, Wendelyn Tesorio",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Cresola, Eloisa Delos Santos ",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "De Guzman, Caren Guillermo",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Delos Santos, Jayrose Tuliao",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Francisco, Christine Joyce Dela Cruz",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Grande, Honeylyn Arzaga",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Guillermo, Shein Marie Oloraza",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Juliano, Angelika Mariano",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Lumabas, Apple Jane Taylo",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Montegrico, Elona Jane Mendoza",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Nejana, Geraldine Andres",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Oloraza, Glechel Gonzales",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Patacay, Micah Appegu",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Purganan, Rosevie Cardenas",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Rodrigo, Rosemarie Arellano",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Tgbay, Joan Quinto",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Tapiru, Maria Cardenas",
        image: "../../../../gallery/fallbackAvatar.png",
    },
]

const students2 = [
    {
        name: "Carpio, Benjie Gonao",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Cuales, Amiel Baniaga",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Espiritu, Jake Ignacio",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Pacis, Mark Christian Pascua",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Padua, Jhay Renz De Ocampo",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Pacua Jr., Isagani Pitas",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Rivera, Brian Jay Aguinaldo",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Ronquillo, Jhon Mark Biz",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Aquino, Trisha Marie Sabal",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Bayani, Jenelyn Largadas",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Carpio, Marjolette Sarapudin",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Ebrada, Kristel Binua",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Guillermo, Cherylle Biz",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Ibe, Rosell Ann Carlos",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Pacis, Trixie Ann Arellano",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Rivera, Gladys Mae Carlos",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Tacata, Nacha Camil Agbisit",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Urgel,Lailanie Amatos",
        image: "../../../../gallery/fallbackAvatar.png",
    },
]

export const Batch2 = () => {
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
