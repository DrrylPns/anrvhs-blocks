"use client"
import { Button, Card, CardFooter, CardHeader, Image } from '@nextui-org/react'
import { staggerContainer, fadeIn, planetVariants, slideIn, zoomIn } from "@/lib/motion"
import { motion } from "framer-motion"
import { GalleryDivider } from '@/app/gallery/_components/GalleryDivider'

const tvlicts = [
    {
        image: "../../../../studentszone/ict1.png"
    },
    {
        image: "../../../../studentszone/ict2.png"
    },
    {
        image: "../../../../studentszone/ict3.png"
    },
    {
        image: "../../../../studentszone/ict4.png"
    },
    {
        image: "../../../../studentszone/ict5.png"
    },
    {
        image: "../../../../studentszone/ict6.png"
    },
    {
        image: "../../../../studentszone/ict7.png"
    },
    {
        image: "../../../../studentszone/ict8.png"
    },
    {
        image: "../../../../studentszone/ict9.png"
    },
    {
        image: "../../../../studentszone/ict10.png"
    },
    {
        image: "../../../../studentszone/ict11.png"
    },
    {
        image: "../../../../studentszone/ict12.png"
    },
    {
        image: "../../../../studentszone/ict13.png"
    },
    {
        image: "../../../../studentszone/ict14.png"
    },
    {
        image: "../../../../studentszone/ict15.png"
    },
    {
        image: "../../../../studentszone/ict16.png"
    },
    {
        image: "../../../../studentszone/ict17.png"
    },
    {
        image: "../../../../studentszone/ict18.png"
    },
]

const humms = [
    {
        image: "../../../../studentszone/h1.png"
    },
    {
        image: "../../../../studentszone/h2.png"
    },
    {
        image: "../../../../studentszone/h3.png"
    },
    {
        image: "../../../../studentszone/h4.png"
    },
    {
        image: "../../../../studentszone/h5.png"
    },
    {
        image: "../../../../studentszone/h6.png"
    },
    {
        image: "../../../../studentszone/h7.png"
    },
    {
        image: "../../../../studentszone/h8.png"
    },
    {
        image: "../../../../studentszone/h9.png"
    },
    {
        image: "../../../../studentszone/h10.png"
    },
    {
        image: "../../../../studentszone/h11.png"
    },
    {
        image: "../../../../studentszone/h12.png"
    },
]

const tvlacps = [
    {
        image: "../../../../studentszone/a1.png"
    },
    {
        image: "../../../../studentszone/a2.png"
    },
    {
        image: "../../../../studentszone/a3.png"
    },
    {
        image: "../../../../studentszone/a4.png"
    },
    {
        image: "../../../../studentszone/a5.png"
    },
    {
        image: "../../../../studentszone/a6.png"
    },
    {
        image: "../../../../studentszone/a7.png"
    },
    {
        image: "../../../../studentszone/a8.png"
    },
    {
        image: "../../../../studentszone/a9.png"
    },
    {
        image: "../../../../studentszone/a10.png"
    },
    {
        image: "../../../../studentszone/a11.png"
    },
    {
        image: "../../../../studentszone/a12.png"
    },
    {
        image: "../../../../studentszone/a13.png"
    },
    {
        image: "../../../../studentszone/a14.png"
    },
    {
        image: "../../../../studentszone/a15.png"
    },
    {
        image: "../../../../studentszone/a16.png"
    },
    {
        image: "../../../../studentszone/a17.png"
    },
    {
        image: "../../../../studentszone/a18.png"
    },
]

const groupPics = [
    {
        image: "../../../../studentszone/g1.png"
    },
    {
        image: "../../../../studentszone/g2.png"
    },
    {
        image: "../../../../studentszone/g3.png"
    },
    {
        image: "../../../../studentszone/g4.png"
    },
    {
        image: "../../../../studentszone/g5.png"
    },
    {
        image: "../../../../studentszone/g6.png"
    },
    {
        image: "../../../../studentszone/g7.png"
    },
    {
        image: "../../../../studentszone/g8.png"
    },
    {
        image: "../../../../studentszone/g9.png"
    },
    {
        image: "../../../../studentszone/g10.png"
    },
    {
        image: "../../../../studentszone/g11.png"
    },
    {
        image: "../../../../studentszone/g12.png"
    },
]

export const PictureZone = () => {
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
                    {tvlicts.map((tvlict, index) => {
                        return (
                            <Card key={index} className="h-full w-full md:max-w-[300px] z-10 max-md:max-w-[300px]" isFooterBlurred>
                                <Image
                                    alt={`teacher ${index + 1} image`}
                                    className="z-0 bg-no-repeat w-full h-full object-cover"
                                    src={tvlict.image}
                                />
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
                    {humms.map((humm, index) => {
                        return (
                            <Card key={index} className="h-full w-full md:max-w-[300px] z-10 max-md:max-w-[300px]" isFooterBlurred>
                                <Image
                                    alt={`teacher ${index + 1} image`}
                                    className="z-0 bg-no-repeat w-full h-full object-cover"
                                    src={humm.image}
                                />
                            </Card>
                        )
                    }
                    )}

                </motion.div>
            </div>

            <GalleryDivider department='TVL AGRI-CROPS PRODUCTION' />

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
                    {tvlacps.map((tvlacp, index) => {
                        return (
                            <Card key={index} className="h-full w-full md:max-w-[300px] z-10 max-md:max-w-[300px]" isFooterBlurred>
                                <Image
                                    alt={`teacher ${index + 1} image`}
                                    className="z-0 bg-no-repeat w-full h-full object-cover"
                                    src={tvlacp.image}
                                />
                            </Card>
                        )
                    }
                    )}

                </motion.div>
            </div>

            <GalleryDivider department='GROUP PICTURES' />

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
                    {groupPics.map((groupPic, index) => {
                        return (
                            <Card key={index} className="h-full w-full md:max-w-[300px] z-10 max-md:max-w-[300px]" isFooterBlurred>
                                <Image
                                    alt={`teacher ${index + 1} image`}
                                    className="z-0 bg-no-repeat w-full h-full object-cover"
                                    src={groupPic.image}
                                />
                            </Card>
                        )
                    }
                    )}

                </motion.div>
            </div>
        </div>
    )
}
