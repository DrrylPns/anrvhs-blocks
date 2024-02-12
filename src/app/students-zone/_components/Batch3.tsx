"use client"
import { Button, Card, CardFooter, CardHeader, Image } from '@nextui-org/react'
import { staggerContainer, fadeIn, planetVariants, slideIn, zoomIn } from "@/lib/motion"
import { motion } from "framer-motion"
import { GalleryDivider } from '@/app/gallery/_components/GalleryDivider'

const students = [
    {
        name: "Agustin, Jonathan Urian",
        image: "../../../../batch3/tvlict/1.png",
    },
    {
        name: "Appegu, Carlo Chano",
        image: "../../../../batch3/2.png",
    },
    {
        name: "Appegu, CJ Garrote",
        image: "../../../../batch3/3.png",
    },
    {
        name: "Aquino, Raymark Flores",
        image: "../../../../batch3/4.png",
    },
    {
        name: "Beran, Ar-Jay Briones",
        image: "../../../../batch3/5.png",
    },
    {
        name: "Domingo, Jerald Dabbay",
        image: "../../../../batch3/6.png",
    },
    {
        name: "Duldulao, Jhan Dave Laforga",
        image: "../../../../batch3/7.png",
    },
    {
        name: "Garrote Jr., Richard Salik",
        image: "../../../../batch3/8.png",
    },
    {
        name: "Guillermo, Sherwin Oloraza",
        image: "../../../../batch3/9.png",
    },
    {
        name: "Lumabas Jr., Dante Urian",
        image: "../../../../batch3/10.png",
    },
    {
        name: "Medrano, Jay Mark Acebedo",
        image: "../../../../batch3/11.png",
    },
    {
        name: "Montenegro, Jhon Rey Berbano",
        image: "../../../../batch3/12.png",
    },
    {
        name: "Orteza, Jacob Abla",
        image: "../../../../batch3/13.png",
    },
    {
        name: "Pablo, Eric Nonato",
        image: "../../../../batch3/14.png",
    },
    {
        name: "Tañeza, Jay-Ar Babila",
        image: "../../../../batch3/15.png",
    },
    {
        name: "Agustin, Jenny Ceria",
        image: "../../../../batch3/16.png",
    },
    {
        name: "Berbano, Melody Oliva",
        image: "../../../../batch3/17.png",
    },
    {
        name: "Corpuz, Maria Kristine Bueno",
        image: "../../../../batch3/18.png",
    },
    {
        name: "Delos Santos, Kaye Amorganda",
        image: "../../../../batch3/19.png",
    },
    {
        name: "Doronio, Michelle Echanique",
        image: "../../../../batch3/20.png",
    },
    {
        name: "Grande, Daphnie Shane Bayuga",
        image: "../../../../batch3/21.png",
    },
    {
        name: "Lopez, Jenyvie Delos Sano",
        image: "../../../../batch3/22.png",
    },
    {
        name: "Montegrico, Kaye Angeli Mendoza",
        image: "../../../../batch3/23.png",
    },
    {
        name: "Pablo, Marivic Bueno",
        image: "../../../../batch3/24.png",
    },
    {
        name: "Pascua, Cherry Mae Pablo",
        image: "../../../../batch3/25.png",
    },
    {
        name: "Pasilabban, Rica Pitas",
        image: "../../../../batch3/26.png",
    },
    {
        name: "Taguifranca, Nora Tulio",
        image: "../../../../batch3/27.png",
    },
]

const students2 = [
    {
        name: "Arhelge, Maximilian Tacipit",
        image: "../../../../batch3/tvlict/1.png",
    },
    {
        name: "Bayani, Frank Jonel Dela cruz",
        image: "../../../../batch3/tvlict/2.png",
    },
    {
        name: "Cabanglan, Randel Malapit",
        image: "../../../../batch3/tvlict/3.png",
    },
    {
        name: "Dela Cruz, Mark Justine Libed",
        image: "../../../../batch3/tvlict/4.png",
    },
    {
        name: "Domingo, Briezon Pablo",
        image: "../../../../batch3/tvlict/5.png",
    },
    {
        name: "Esteban, Ernest Jhon Tabio",
        image: "../../../../batch3/tvlict/6.png",
    },
    {
        name: "Gonzales, John Paul Espil",
        image: "../../../../batch3/tvlict/7.png",
    },
    {
        name: "Guillermo, Gabriel Paul Valdez",
        image: "../../../../batch3/tvlict/8.png",
    },
    {
        name: "Lacro, Jimuel Oloraza",
        image: "../../../../batch3/tvlict/9.png",
    },
    {
        name: "Oloraza, Jr., Robert Dela Torre",
        image: "../../../../batch3/tvlict/10.png",
    },
    {
        name: "Pascua, Jayson Romio",
        image: "../../../../batch3/tvlict/11.png",
    },
    {
        name: "Torres, Keins Jhon Bayuga",
        image: "../../../../batch3/tvlict/12.png",
    },
    {
        name: "Yacas, Jhon Pol Bonifacio",
        image: "../../../../batch3/tvlict/13.png",
    },
    {
        name: "Barrozo, Princes Dianne Bayuga",
        image: "../../../../batch3/tvlict/14.png",
    },
    {
        name: "Bonifacio, Ma. Edeliza Carizal",
        image: "../../../../batch3/tvlict/15.png",
    },
    {
        name: "Bonifacio, Sharmain Mappala",
        image: "../../../../batch3/tvlict/16.png",
    },
    {
        name: "Guillermo, Babylyn Atanacio",
        image: "../../../../batch3/tvlict/17.png",
    },
    {
        name: "Guillermo, Claris Jane Bonifacio",
        image: "../../../../batch3/tvlict/18.png",
    },
    {
        name: "Pascua, Rhea Mae Ugale",
        image: "../../../../batch3/tvlict/19.png",
    },
]

const students3 = [
    {
        name: "Bayani, Ron-ron Alejandro",
        image: "../../../../batch3/gas/1.png",
    },
    {
        name: "Esperitu, Kurt Ominga",
        image: "../../../../batch3/gas/2.png",
    },
    {
        name: "Ramos, Jan Mikhail Curammeng",
        image: "../../../../batch3/gas/3.png",
    },
    {
        name: "Arzaga, Jelwhiz Pascuas",
        image: "../../../../batch3/gas/4.png",
    },
    {
        name: "De Ocampo, Cloie Kaye Guillermo",
        image: "../../../../batch3/gas/5.png",
    },
    {
        name: "Grande, Lyngel Joie Biz",
        image: "../../../../batch3/gas/6.png",
    },
    {
        name: "Millado, Ria Mae Molina",
        image: "../../../../batch3/gas/7.png",
    },
    {
        name: "Pacis, Narisa Salvador",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Polancos, Suzaine Sagun ",
        image: "../../../../batch3/gas/9.png",
    },
    {
        name: "Rafal, Zaira Sabalburo",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Salvador, Nhelia De Ocampo",
        image: "../../../../batch3/gas/11.png",
    },
    {
        name: "Viernes, Ivy Christine Guillermo",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Villanueva, Jomarie Tabalanza",
        image: "../../../../batch3/gas/12.png",
    },
]

export const Batch3 = () => {
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
