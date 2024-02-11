"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "./ui/card"

export const CarouselSBF = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-md"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                <CarouselItem>
                    <div className="md:p-1">
                        <img
                            src="../../schoolmap1.png"
                            alt="Image 1"
                            className="w-full h-full object-cover flex aspect-square items-center justify-center rounded-md"
                        />
                    </div>
                </CarouselItem>

                <CarouselItem>
                    <div className="md:p-1">
                        <img
                            src="../../schoolmap2.png"
                            alt="Image 1"
                            className="w-full h-full object-cover flex aspect-square items-center justify-center rounded-md"
                        />
                    </div>
                </CarouselItem>

                <CarouselItem>
                    <div className="md:p-1">
                        <img
                            src="../../schoolmap3.png"
                            alt="Image 1"
                            className="w-full h-full object-cover flex aspect-square items-center justify-center rounded-md"
                        />
                    </div>
                </CarouselItem>

                <CarouselItem>
                    <div className="md:p-1">
                        <img
                            src="../../schoolmap4.png"
                            alt="Image 1"
                            className="w-full h-full object-cover flex aspect-square items-center justify-center rounded-md"
                        />
                    </div>
                </CarouselItem>

                <CarouselItem>
                    <div className="md:p-1">
                        <img
                            src="../../schoolmap5.png"
                            alt="Image 1"
                            className="w-full h-full object-cover flex aspect-square items-center justify-center rounded-md"
                        />
                    </div>
                </CarouselItem>

                <CarouselItem>
                    <div className="md:p-1">
                        <img
                            src="../../schoolmap6.png"
                            alt="Image 1"
                            className="w-full h-full object-cover flex aspect-square items-center justify-center rounded-md"
                        />
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
