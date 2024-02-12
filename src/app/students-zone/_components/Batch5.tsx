"use client"
import { Button, Card, CardFooter, CardHeader, Image } from '@nextui-org/react'
import { staggerContainer, fadeIn, planetVariants, slideIn, zoomIn } from "@/lib/motion"
import { motion } from "framer-motion"
import { GalleryDivider } from '@/app/gallery/_components/GalleryDivider'

const students = [
    {
        name: "Agustin Jr., Narciso Tabirote",
        image: "../../../../batch5/1.png",
    },
    {
        name: "Albano, Reiner Agbisit",
        image: "../../../../batch5/2.png",
    },
    {
        name: "Amayun, Rexy Calcedona",
        image: "../../../../batch5/3.png",
    },
    {
        name: "Arellano, Justine Carpio",
        image: "../../../../batch5/4.png",
    },
    {
        name: "Arellano, Lander Rivera",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Ariz Jr., Reynaldo Lopez ",
        image: "../../../../batch5/6.png",
    },
    {
        name: "Bautista, Jayrone Sabalburo",
        image: "../../../../batch5/7.png",
    },
    {
        name: "Berbano, Mark Wingel Carizal",
        image: "../../../../batch5/8.png",
    },
    {
        name: "Cabrera, Vince Julious Pasion",
        image: "../../../../batch5/9.png",
    },
    {
        name: "Calipdan, Kzon James Nonato",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Cuaycong, Nathaniel Amayun",
        image: "../../../../batch5/11.png",
    },
    {
        name: "De Ocampo, Rodolfo Guillermo",
        image: "../../../../batch5/12.png",
    },
    {
        name: "Gimenez, Lhord Mark Tañeza",
        image: "../../../../batch5/13.png",
    },
    {
        name: "Lorenzo, Mark Jairuis Gabuay",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Madriaga, Kelvin Guillermo",
        image: "../../../../batch5/15.png",
    },
    {
        name: "Montegrico, Billy James Mendoza",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Pacis, Jefferson Arellano",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Pagulayan Jr., Alvin Bautista",
        image: "../../../../batch5/18.png",
    },
    {
        name: "Patacay, Khelvin Appegu",
        image: "../../../../batch5/19.png",
    },
    {
        name: "Ronquillo, Shane Albano",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Rumpon, Mark Chester Guimmayen",
        image: "../../../../batch5/21.png",
    },
    {
        name: "Saballa, Samuel Mappala",
        image: "../../../../batch5/22.png",
    },
    {
        name: "Tango, Glenn Paul Ringor",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Viernes, Vendamiare Baliling",
        image: "../../../../batch5/24.png",
    },
    {
        name: "Villanueva, Carlrich Bain",
        image: "../../../../batch5/25.png",
    },
    {
        name: "Almarez, Princess Nicole Mendoza",
        image: "../../../../batch5/26.png",
    },
    {
        name: "Andres, Alyssa Ashley Libed",
        image: "../../../../batch5/27.png",
    },
    {
        name: "Aquino, Christine Joy Flores",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Bacarse, Karen Cardenas",
        image: "../../../../batch5/29.png",
    },
    {
        name: "Barroga, Clarienette Angel Pascua",
        image: "../../../../batch5/30.png",
    },
    {
        name: "Biz, Aprille Joy Deza",
        image: "../../../../batch5/31.png",
    },
    {
        name: "Biz, Trexia May Alagon",
        image: "../../../../batch5/32.png",
    },
    {
        name: "Clara, Bianca Lorien Carlos",
        image: "../../../../batch5/33.png",
    },
    {
        name: "Ducusin, Alexandra Joy Pablo",
        image: "../../../../batch5/34.png",
    },
    {
        name: "Fernandez, Bernaliza Ugale",
        image: "../../../../batch5/35.png",
    },
    {
        name: "Gonzales, Jay Ann Lagua",
        image: "../../../../batch5/36.png",
    },
    {
        name: "Llamera, Lovely Joy Lady Pablo",
        image: "../../../../batch5/37.png",
    },
    {
        name: "Logero, Jamaeka Abisto",
        image: "../../../../batch5/38.png",
    },
    {
        name: "Oloraza, Kristine Mae Jacalne",
        image: "../../../../batch5/39.png",
    },
    {
        name: "Oloraza, Princess Diana Campano",
        image: "../../../../batch5/40.png",
    },
    {
        name: "Oloraza, Ronalyn Guillermo",
        image: "../../../../batch5/41.png",
    },
    {
        name: "Padirayon, Gemmalyn Guillermo",
        image: "../../../../batch5/42.png",
    },
    {
        name: "Payba, Mariveth Berbano",
        image: "../../../../batch5/43.png",
    },
    {
        name: "Quitola, Divine May Pablo",
        image: "../../../../batch5/44.png",
    },
    {
        name: "Rivera, Hazel Joy Libed",
        image: "../../../../batch5/45.png",
    },
    {
        name: "Rodillas, Kate Cyrille Medrano",
        image: "../../../../batch5/46.png",
    },
    {
        name: "Sabalburo, Cristin Joy Oloraza",
        image: "../../../../batch5/47.png",
    },
    {
        name: "Tabulao, Aira May Patacay",
        image: "../../../../batch5/48.png",
    },
    {
        name: "Talamayan, Jade Appegu",
        image: "../../../../batch5/49.png",
    },
]

const students2 = [
    {
        name: "Acosta, Jonvie Baniel",
        image: "../../../../batch5/tvlict/1.png",
    },
    {
        name: "Alferez, Prince Michael Talaro",
        image: "../../../../batch5/tvlict/2.png",
    },
    {
        name: "Cabanglan, Randel Malapit",
        image: "../../../../gallery/fallbackAvatar.png",
    },
    {
        name: "Dela Cruz, John Mark Tacal",
        image: "../../../../batch5/tvlict/4.png",
    },
    {
        name: "Domingo, Leonard Tabalanza",
        image: "../../../../batch5/tvlict/5.png",
    },
    {
        name: "Lacro Jr., Jimmy Oloraza",
        image: "../../../../batch5/tvlict/6.png",
    },
    {
        name: "Medrano, Oliver De Ocampo",
        image: "../../../../batch5/tvlict/7.png",
    },
    {
        name: "Milado, Mark John Molina",
        image: "../../../../batch5/tvlict/8.png",
    },
    {
        name: "Miramonte, John Ernest Marcos",
        image: "../../../../batch5/tvlict/9.png",
    },
    {
        name: "Pagatpatan, Shane Dave Calem",
        image: "../../../../batch5/tvlict/10.png",
    },
    {
        name: "Pascua, John Lyod Aleste",
        image: "../../../../batch5/tvlict/11.png",
    },
    {
        name: "Rivera, Mark Lawrence Libed",
        image: "../../../../batch5/tvlict/12.png",
    },
    {
        name: "Salvador, Eric Tango",
        image: "../../../../batch5/tvlict/13.png",
    },
    {
        name: "Salvador, John Dave Dolliente",
        image: "../../../../batch5/tvlict/14.png",
    },
    {
        name: "Tuazon, Gaejun Appegu",
        image: "../../../../batch5/tvlict/15.png",
    },
    {
        name: "Umayam, Mon Brix Guillermo",
        image: "../../../../batch5/tvlict/16.png",
    },
    {
        name: "Alesna, Angelyn Gonzales",
        image: "../../../../batch5/tvlict/17.png",
    },
    {
        name: "Arellano, Reina Jane Arellano",
        image: "../../../../batch5/tvlict/18.png",
    },
    {
        name: "Bayani, Eunice Gay Dela Cruz",
        image: "../../../../batch5/tvlict/19.png",
    },
    {
        name: "De Guzman, Kristal Mae Guillermo",
        image: "../../../../batch5/tvlict/20.png",
    },
    {
        name: "Garrote, Zyra Cliare Balicat",
        image: "../../../../batch5/tvlict/21.png",
    },
    {
        name: "Gimenez, Fregielyn Taneza",
        image: "../../../../batch5/tvlict/22.png",
    },
    {
        name: "Lopez, Jennifer Delos Santos",
        image: "../../../../batch5/tvlict/23.png",
    },
    {
        name: "Navarrete, Lea Tobello",
        image: "../../../../batch5/tvlict/24.png",
    },
    {
        name: "Padamada, Myzhen Louella E.",
        image: "../../../../batch5/tvlict/25.png",
    },
    {
        name: "Padiut, Maurene Joyce Lingan",
        image: "../../../../batch5/tvlict/26.png",
    },
]

const students3 = [
    {
        name: "Bacarse, Randy Mark Cardenas",
        image: "../../../../batch5/gas/1.png",
    },
    {
        name: "Bayani, Dionald Vincent Delelis",
        image: "../../../../batch5/gas/2.png",
    },
    {
        name: "Cabias Jr., Renato Andres",
        image: "../../../../batch5/gas/3.png",
    },
    {
        name: "Doronio, Jerwin Lorenzo",
        image: "../../../../batch5/gas/4.png",
    },
    {
        name: "Esteban, Nathaniel Tabio",
        image: "../../../../batch5/gas/5.png",
    },
    {
        name: "Guillermo, Ammiel Ethen",
        image: "../../../../batch5/gas/6.png",
    },
    {
        name: "Llamera, Lenard Pablo",
        image: "../../../../batch5/gas/7.png",
    },
    {
        name: "Paliwanan, John Carl Tumaru",
        image: "../../../../batch5/gas/8.png",
    },
    {
        name: "Agbayani, Diana Tabut",
        image: "../../../../batch5/gas/9.png",
    },
    {
        name: "Andres, Laica Joy Conceja",
        image: "../../../../batch5/gas/10.png",
    },
    {
        name: "Bacani, Careelyn-gay Taguifranca",
        image: "../../../../batch5/gas/11.png",
    },
    {
        name: "Catorna, Czarina Kaye Raymundo",
        image: "../../../../batch5/gas/12.png",
    },
    {
        name: "Espiritu, Khaila Jane Ominga",
        image: "../../../../batch5/gas/13.png",
    },
    {
        name: "Gardoce, Milky Villanueva",
        image: "../../../../batch5/gas/14.png",
    },
    {
        name: "Guillermo, Angel Mae Sisno",
        image: "../../../../batch5/gas/15.png",
    },
    {
        name: "Guillermo, Christel Biz",
        image: "../../../../batch5/gas/16.png",
    },
    {
        name: "Juliano, Shiela Mae Mariano",
        image: "../../../../batch5/gas/17.png",
    },
    {
        name: "Pasion, Lindsey Pascua",
        image: "../../../../batch5/gas/18.png",
    },
    {
        name: "Perpinian, Arlene Yacas",
        image: "../../../../batch5/gas/19.png",
    },
    {
        name: "Umblas, Mauie Rivera",
        image: "../../../../batch5/gas/20.png",
    },
]

export const Batch5 = () => {
    return (
        <div>
            <GalleryDivider department=' TVL AFA - (AGRI CROPS PRODUCTION)' />
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
