"use client"
import React from 'react'
import { Button, buttonVariants } from '@/components/ui/button'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import Link from 'next/link'
import { Image } from '@nextui-org/react'


export const LearningSection = () => {
    return (
        <section className='flex flex-col items-center justify-center w-full h-full px-1 mb-11 md:flex-row'>
            <div className='flex items-center justify-center flex-col gap-5 md:items-start md:ml-5'>
                <h1 className='text-[32px] text-center'>Online <br className='block sm:hidden' />Learning Section</h1>
                <p className='text-muted-foreground text-center md:text-start'>
                    Experience cutting-edge education at our Senior High Online Learning platform. Transforming education for the digital age.
                </p>
                <Drawer>
                    <DrawerTrigger className='rounded-full bg-primary p-3 text-white'>
                        Get Started
                    </DrawerTrigger>
                    <DrawerContent className='w-full sm:items-center sm:justify-center'>
                        <DrawerHeader>
                            <DrawerTitle>Choose a learning material you want to learn!</DrawerTitle>
                            <DrawerDescription>This is a free material so feel free to use it!</DrawerDescription>
                        </DrawerHeader>
                        <div className='flex flex-col gap-2 px-4 text-white sm:w-[300px]'>

                            <a href={"https://drive.google.com/drive/folders/1128RwxWk7sWGSUb4UgJhyfmvWOXetb1e?usp=drive_link"}
                                target='_blank'
                                className={buttonVariants({
                                    className: "text-white"
                                })}
                            >
                                G11 Modules in 1st Semester
                            </a>

                            <a href={"https://drive.google.com/drive/folders/11BOBDnVr_DnFttBS0Jw-UROXmwHPcndp?usp=drive_link"}
                                target='_blank'
                                className={buttonVariants({
                                    className: "text-white"
                                })}
                            >
                                G11 Modules in 2nd Semester
                            </a>

                            <a href={"https://drive.google.com/drive/folders/11HWkf7ZzX7XN1k0I4b7oj992ohjaPeef?usp=drive_link"}
                                target='_blank'
                                className={buttonVariants({
                                    className: "text-white"
                                })}
                            >
                                G12 Modules in 1st Semester
                            </a>

                            <a href={"https://drive.google.com/drive/folders/11PfK5kMfLC5bSTx7epyXejUYckXiQB8D?usp=drive_link"}
                                target='_blank'
                                className={buttonVariants({
                                    className: "text-white"
                                })}
                            >
                                G12 Modules in 2nd Semester
                            </a>

                            <a href={"https://drive.google.com/drive/folders/1owDnpP0bGPb2BD90ZYhRwTGTQmbKZWqq?usp=drive_link"}
                                target='_blank'
                                className={buttonVariants({
                                    className: "text-white"
                                })}
                            >
                                TVL-ICT Reviewer
                            </a>
                        </div>

                        <DrawerFooter>
                            <DrawerClose>
                                <Button variant="outline">Close</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>

            </div>

            <div className='md:mr-5'>
                <Image
                    src='../../../../learning-section-bg.svg'
                    alt='learning-section-background'
                    className='w-[400px] h-[400px]'
                />
            </div>
        </section>
    )
}
