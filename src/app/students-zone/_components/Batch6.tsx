"use client"
import { Button, Card, CardFooter, CardHeader, Image } from '@nextui-org/react'
import { staggerContainer, fadeIn, planetVariants, slideIn, zoomIn } from "@/lib/motion"
import { motion } from "framer-motion"
import { GalleryDivider } from '@/app/gallery/_components/GalleryDivider'

const students = [
    {
        name: "Aquisay, Adrian Del Pilar",
        image: "../../../../batch6/1.png",
    },
    {
        name: "Belvis, Arvene Paul Oloraza",
        image: "../../../../batch6/2.png",
    },
    {
        name: "Bonifacio, Axcell Olarte",
        image: "../../../../batch6/3.png",
    },
    {
        name: "Culasing, Mark Jerome Agustin",
        image: "../../../../batch6/4.png",
    },
    {
        name: "De Guzman, Jay-ar Guimpao",
        image: "../../../../batch6/5.png",
    },
    {
        name: "Dela Cruz, Klein Adrian Oloraza",
        image: "../../../../batch6/6.png",
    },
    {
        name: "Ebrada, Joshua Binua",
        image: "../../../../batch6/7.png",
    },
    {
        name: "Guillermo, John Lester Corpuz",
        image: "../../../../batch6/8.png",
    },
    {
        name: "Laforga, Christian Tamboa",
        image: "../../../../batch6/9.png",
    },
    {
        name: "Paliwanan, Jhon Curt Acantilado",
        image: "../../../../batch6/10.png",
    },
    {
        name: "Tabigni, Orlando Jr. Albano",
        image: "../../../../batch6/11.png",
    },
    {
        name: "Appegu, Angela Chano",
        image: "../../../../batch6/12.png",
    },
    {
        name: "Bonifacio, Ethellean Calso",
        image: "../../../../batch6/13.png",
    },
    {
        name: "Borromeo, Lexykate De Ocampo",
        image: "../../../../batch6/14.png",
    },
    {
        name: "De Ocampo, Ella Mae Buendia",
        image: "../../../../batch6/15.png",
    },
    {
        name: "Duldulao, Joanna Marie Laforga",
        image: "../../../../batch6/16.png",
    },
    {
        name: "Hilario, Shaine Pablo",
        image: "../../../../batch6/17.png",
    },
    {
        name: "Ramirez, Aileen Joy Agamata",
        image: "../../../../batch6/18.png",
    },
    {
        name: "Saballa, Fede Rhea Mappala",
        image: "../../../../batch6/19.png",
    },
    {
        name: "Salvador, Xiham Alonzo",
        image: "../../../../batch6/20.png",
    },
]

const students2 = [
    {
        name: "Ducusin, Joel John Pablo",
        image: "../../../../batch6/humms/1.png",
    },
    {
        name: "Fernandez, Jr. Bernard Ugale",
        image: "../../../../batch6/humms/2.png",
    },
    {
        name: "Maguddatu, Clarence Appegu",
        image: "../../../../batch6/humms/3.png",
    },
    {
        name: "Olivas, Jay-ar Donayre",
        image: "../../../../batch6/humms/4.png",
    },
    {
        name: "Oloraza, Kierby Obenia",
        image: "../../../../batch6/humms/5.png",
    },
    {
        name: "Oloraza, Kingbert Dela Torre",
        image: "../../../../batch6/humms/6.png",
    },
    {
        name: "Pablo, Ian Christopher Dela Cruz",
        image: "../../../../batch6/humms/7.png",
    },
    {
        name: "Pablo, Marvin Peralta",
        image: "../../../../batch6/humms/8.png",
    },
    {
        name: "Rivera, Justine Renz Tabbada",
        image: "../../../../batch6/humms/9.png",
    },
    {
        name: "Umblas, Mike Louie Rivera",
        image: "../../../../batch6/humms/10.png",
    },
    {
        name: "Acosta, Rheena Joy Arellano",
        image: "../../../../batch6/humms/11.png",
    },
    {
        name: "Agustin, Kyla Mae Ramirez",
        image: "../../../../batch6/humms/12.png",
    },
    {
        name: "Andrade, Stephanie Nanquilada",
        image: "../../../../batch6/humms/13.png",
    },
    {
        name: "Appegu, Shane Valerie Caranguian",
        image: "../../../../batch6/humms/14.png",
    },
    {
        name: "Avendaño, Divine Grace Corales",
        image: "../../../../batch6/humms/15.png",
    },
    {
        name: "Babas, Ersaine Joys Garon",
        image: "../../../../batch6/humms/16.png",
    },
    {
        name: "Bayuga, Nimpha Lei Espiritu",
        image: "../../../../batch6/humms/17.png",
    },
    {
        name: "Briones, Carol De Guzman",
        image: "../../../../batch6/humms/18.png",
    },
    {
        name: "Dela Cruz, Lira Oloraza",
        image: "../../../../batch6/humms/19.png",
    },
    {
        name: "Fulminar, Micah Sarah Masuli",
        image: "../../../../batch6/humms/20.png",
    },
    {
        name: "Garrote, Zyla Balicat",
        image: "../../../../batch6/humms/21.png",
    },
    {
        name: "Lahip, Kate Ann Mario",
        image: "../../../../batch6/humms/22.png",
    },
    {
        name: "Oloraza, Joylyn Villanueva",
        image: "../../../../batch6/humms/23.png",
    },
    {
        name: "Pablo, Althea Agasita",
        image: "../../../../batch6/humms/24.png",
    },
    {
        name: "Reyes, Jamaikie Maguddatu",
        image: "../../../../batch6/humms/25.png",
    },
]

const students3 = [
    {
        name: "Agustin, Raysan Bartolome",
        image: "../../../../batch6/tvlafa/1.png",
    },
    {
        name: "Arzaga, Jeralden Pascua",
        image: "../../../../batch6/tvlafa/2.png",
    },
    {
        name: "Binua, Jr. Elmar Ziganay",
        image: "../../../../batch6/tvlafa/3.png",
    },
    {
        name: "De Guzman, Arjay Bacani",
        image: "../../../../batch6/tvlafa/4.png",
    },
    {
        name: "De Guzman, John Aldrich Guillermo",
        image: "../../../../batch6/tvlafa/5.png",
    },
    {
        name: "De Guzman, Sherlito Guimpao",
        image: "../../../../batch6/tvlafa/6.png",
    },
    {
        name: "De Ocampo, Rodel Molina",
        image: "../../../../batch6/tvlafa/7.png",
    },
    {
        name: "Doronio, Jake Echanique",
        image: "../../../../batch6/tvlafa/8.png",
    },
    {
        name: "Grande, March Joshua Agsao",
        image: "../../../../batch6/tvlafa/9.png",
    },
    {
        name: "Lumabas, Daniel Urian",
        image: "../../../../batch6/tvlafa/10.png",
    },
    {
        name: "Nejana, James Jay Andres",
        image: "../../../../batch6/tvlafa/11.png",
    },
    {
        name: "Oloraza, Alden Guillermo",
        image: "../../../../batch6/tvlafa/12.png",
    },
    {
        name: "Pablo, Gian Jasper Fronda",
        image: "../../../../batch6/tvlafa/13.png",
    },
    {
        name: "Padua, Ace De Ocampo",
        image: "../../../../batch6/tvlafa/14.png",
    },
    {
        name: "Paduit, Genesis Pablo",
        image: "../../../../batch6/tvlafa/15.png",
    },
    {
        name: "Pascua, Wendel Pablo",
        image: "../../../../batch6/tvlafa/16.png",
    },
    {
        name: "Pasilabban, Nichole Pitas",
        image: "../../../../batch6/tvlafa/17.png",
    },
    {
        name: "Pedroso, Rian Dreu Appegu",
        image: "../../../../batch6/tvlafa/18.png",
    },
    {
        name: "Rafal, Mark Kevin Sabalburo",
        image: "../../../../batch6/tvlafa/19.png",
    },
    {
        name: "Salvador, Bryan Jay De Ocampo",
        image: "../../../../batch6/tvlafa/20.png",
    },
    {
        name: "Taja, Jethro Morales",
        image: "../../../../batch6/tvlafa/21.png",
    },
    {
        name: "Torres, Jay-mar Villanueva",
        image: "../../../../batch6/tvlafa/22.png",
    },
    {
        name: "Torres, Kevin Bayuga",
        image: "../../../../batch6/tvlafa/23.png",
    },
    {
        name: "Torres Jr., Ronald  Maragrag",
        image: "../../../../batch6/tvlafa/24.png",
    },
    {
        name: "Agnir, Lea Teresa Carizal",
        image: "../../../../batch6/tvlafa/25.png",
    },
    {
        name: "Agustin, Lorelei Ceria",
        image: "../../../../batch6/tvlafa/26.png",
    },
    {
        name: "Arellano, Joe Maricar Quitoriano",
        image: "../../../../batch6/tvlafa/27.png",
    },
    {
        name: "Deza, Altea Tasani",
        image: "../../../../batch6/tvlafa/28.png",
    },
    {
        name: "Duyao, Rhealyn Bis",
        image: "../../../../batch6/tvlafa/29.png",
    },
    {
        name: "Nicolas, Lingel Laforga",
        image: "../../../../batch6/tvlafa/30.png",
    },
    {
        name: "Orteza, Liwliwah Abla",
        image: "../../../../batch6/tvlafa/31.png",
    },
    {
        name: "Pacis, Katrina Bayuga",
        image: "../../../../batch6/tvlafa/32.png",
    },
    {
        name: "Pascua, Jennie Mae Agdinaway",
        image: "../../../../batch6/tvlafa/33.png",
    },
    {
        name: "Rodillas, Rica Marie Acosta",
        image: "../../../../batch6/tvlafa/34.png",
    },
    {
        name: "Taloza, Sunshine Dela Rosa",
        image: "../../../../batch6/tvlafa/35.png",
    },
    {
        name: "Villanueva, Louize Mae Nabe",
        image: "../../../../batch6/tvlafa/36.png",
    },
]

export const Batch6 = () => {
    return (
        <div>
            <GalleryDivider department='TVL-ICT( INFORMATION COMMUNICATION TECHNOLOGY)' />
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

            <GalleryDivider department='ACAD-HUMSS (HUMMANITIES AND SOCIAL SCIENCES)' />
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


            <GalleryDivider department='TVL AFA - (AGRI CROPS PRODUCTION)' />

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
