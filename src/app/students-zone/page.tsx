import React from 'react'
import { Alumni } from './_components/Alumni'
import { GalleryDivider } from '../gallery/_components/GalleryDivider'
import { LearningSection } from './_components/LearningSection'
import { PictureZone } from './_components/PictureZone'

const page = () => {
  return (
    <main className='overflow-hidden space-y-11 mb-36'>
      <Alumni />

      <GalleryDivider department='Senior Highschool Online Learning Section' />

      <LearningSection />

      <PictureZone />
    </main>
  )
}

export default page