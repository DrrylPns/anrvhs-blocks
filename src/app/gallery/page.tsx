import { Button, Card, CardFooter, CardHeader, Image } from '@nextui-org/react'
import React from 'react'
import { Galleria } from './_components/Galleria'
import { HeadDepartment } from './_components/HeadDepartment'
import { GalleryDivider } from './_components/GalleryDivider'
import { SHSDepartment } from './_components/SHSDepartment'
import { RelatedSubject } from './_components/RelatedSubject'
import { VocDep } from './_components/VocDep'


const page = () => {
    return (
        <main className='overflow-hidden'>
            <div
                className="grid justify-center items-center h-[500px] bg-[url(https://littlevisuals.co/images/sunset.jpg)] bg-no-repeat w-full overflow-hidden"
            >
                <div className="text-white items-center flex flex-col justify-center text-center">
                    <h1 className="font-bold md:text-[79px] text-[60px] text-white inline-block text-transparent bg-clip-text border-2 border-white p-7 mb-3">GALLERY</h1>
                </div>
            </div>

            <GalleryDivider department="School Principal" />

            <div className='mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 overflow-hidden h-full w-full z-10'>
                <div className="absolute w-[30%] inset-y-0 mt-[700px] -z-0 gradient-03 overflow-hidden max-md:hidden" />
                {/* Head Principal */}
                <div className='mb-32 w-full'>
                    <HeadDepartment name="Arthur M. Cariaga" position="Principal II" image="../../../gallery/arthur-cariaga.png" department="Principal" />
                </div>
            </div>

            <GalleryDivider department="Administrative Department" />

            <div
                className={`mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 overflow-hidden h-full w-full z-10`}
            >
                <HeadDepartment name="Rafael C. Rivera" position="Administrative Officer IV" image="../../../gallery/rafael-rivera.png" department="Administrative Office IV" />
                <div className='h-full flex justify-center items-center mt-11'>
                    <Galleria />
                </div>
                <div className="absolute w-[30%] z-0 mt-[800px] gradient-02 max-md:hidden" />
            </div>

            <GalleryDivider department="SHS Department" />

            <div className='mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 overflow-hidden h-full w-full z-10'>
                <HeadDepartment name="Francis N. Agrida" position="Master Teacher II / SHS Coordinator" image="../../../gallery/shsDepartment/1.png" department="SHS Department" />
                <div className='h-full flex justify-center items-center mt-11'>
                    <SHSDepartment />
                </div>
            </div>

            <GalleryDivider department="Related Subject Department" />
            <div className='mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 overflow-hidden h-full w-full z-10'>
                <HeadDepartment name="Irene M. Fernandez" position="Head Teacher III" image="../../../gallery/relatedSubject/0.png" department="Related Subject Department" />
                <div className='h-full flex justify-center items-center mt-11'>
                    <RelatedSubject />
                </div>
            </div>

            <GalleryDivider department="Vocational Department" />
            <div className='mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 overflow-hidden h-full w-full z-10'>
                <HeadDepartment name="Samuel G. Esteban" position="Head Teacher II" image="../../../gallery/vocDep/0.png" department="Vocational Department" />
                <div className='h-full flex justify-center items-center mt-11'>
                    <VocDep />
                </div>
            </div>
        </main>
    )
}

export default page