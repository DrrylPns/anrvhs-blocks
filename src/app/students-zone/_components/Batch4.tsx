"use client"
import { Button, Card, CardFooter, CardHeader, Image } from '@nextui-org/react'
import { staggerContainer, fadeIn, planetVariants, slideIn, zoomIn } from "@/lib/motion"
import { motion } from "framer-motion"
import { GalleryDivider } from '@/app/gallery/_components/GalleryDivider'

const students = [
    {
        name: "Acosta, Van Baniel ",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Agbisit, Soren Guzman",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Agnir, Christopher Carizal",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Agustin, Joemher Ramirez",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Albano, Cj Michael Cabagui",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Amayun, Walter James Pacis",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Appegu, Eroid Baniaga",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Bactad, Angel Birth Agbisit",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Barozo, Mark Bayuga",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Bayani, Marlo Sabal",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Bayuga, Charlz Espiritu",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Biz, Francis Alagon",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Culasing, Lhester Tablit",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Domingo, Jerald Lingan",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Espiritu, Jacky Bayani",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Guimmayen, Ivan Bernie Bacalla",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Mariano, Rolly Dela Cruz ",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Montenegro, Chester Pacis",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Oliva, Kevin Loyd Tabigne",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Oloraza, Jade Fronda",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Pablo, Dan Paul Fronda",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Pacis, Christoffer Guillermo",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Padua, Ariel De Ocampo ",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Pascua, Jeremy Pitas",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Pascua, Jomar Ugale",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Pascual, Arjay Pacua",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Ramirez, Alvin Jay Agamata",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Ringor, Bernard Espiritu",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Rivera, Juluis Angelo Manguba",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Rivera, Ryan Manguba",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Tabalbag, Ralph Ryan Jay Torres",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Taco Taco, Jaymhar Viernes",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Talaro Jr., Romel Fronda",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Tañeza, Kurth Glenndell Balasabas",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Torres, Jimboy Maragrag",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Viernes, Brandon Lee Guillermo",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Aquino, Karen Sabal",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Atet-eng, Aira Jane Rodillas",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Bulusan, Princess Ringor",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Carlos, Daniela Reyes",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Carpio, Sarlen Gonao",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "De Ocampo, Jenny Rose Paliwanan",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Grande, Ana Mae Bayuga",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Laforga, Kate Zhusane Tamboa",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Madriaga, Melissa Guillermo",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Villanueva, Ivonne Vistory Nave",
        image: "../../../../gallery/fallbackAvatar.png",
    },
]

const students2 = [
    {
        name: "Agtang, Alvin Bayuga",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Aquisay, Aaron James Del Pilar",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "De Guzman, Keith Vincent Ganno",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Esteban, Matthew Tabio",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Lana, Jhon Mark Pascua",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Mappala, Mark John Borja",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Navarro Jr., Arnel",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Orteza, Jeremy Abla",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Taala, Mark Jim Alonzo",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Umayam, Mark Billy Guillermo",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Vasquez, Louieper Riambon",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Baniaga, Charlyn Gamboa",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Batong, Erma Joyce Byani",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Bayani, Rhieza Mae Medrano",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Bis, Jammica Deza",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Doronio, Jenie Rose Lorenzo",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Ducalang, Nikka Mae Angel D.",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Garrote, April Jane Balicat",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Garrote, Zyrhene Balicat",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Lahip, Kaycee Jhane Mario",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Maneja, Olga Maria Maguddatu",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Mecate, Cheska Faith Agtang",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Medrano, Melody Carizal",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Orig (pacis), Karylle Joy Bayuga",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Pablo, Leighden Guillermo",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Ronquillo, Jhenny Mae Biz",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Villanueva, Daphnie M.",
        image: "../../../../gallery/fallbackAvatar.png",
    },
]

const students3 = [
    {
        name: "Barsatan, Cj Lumabas",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Cardenas, El-jay De Ocampo",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Espiritu, Jordan Grande",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Grande, Julius Medrano",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Guillermo, John Paul Velano",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Patacay, Kyle Ivan Montenegro",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Taja, Dave Mar Morales",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Yacas, Mark Leinard Guiang",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Agdinaway, Claire Mae Guillermo",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Barcena, May Anne Garrote",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Briones, Carla Jaen De Guzman",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Corpuz, Fely Mallabo",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Guillermo, Dianna Rose Norcio",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Norcio, Princess Guillermo",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Torres, Keysie Bayuga",
        image: "../../../../gallery/fallbackAvatar.png",
    },
]

export const Batch4 = () => {
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
                            <Card key={index} className="h-full w-full md:max-w-[267px] z-10 max-md:max-w-[267px]" isFooterBlurred>
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
                            <Card key={index} className="h-full w-full md:max-w-[267px] z-10 max-md:max-w-[267px]" isFooterBlurred>
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


            <GalleryDivider department='GENERAL ACADEMIC STRAND' />

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
                    {students3.map((student, index) => {
                        return (
                            <Card key={index} className="h-full w-full md:max-w-[267px] z-10 max-md:max-w-[267px]" isFooterBlurred>
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
