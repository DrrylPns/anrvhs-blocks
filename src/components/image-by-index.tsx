import { StaticImageData } from 'next/image'
import image1 from '../../schoolmap1.png'
import image2 from '../../schoolmap2.png'
import image3 from '../../schoolmap3.png'
import image4 from '../../schoolmap4.png'
import image5 from '../../schoolmap5.png'
import image6 from '../../schoolmap6.png'


export const images: StaticImageData[] = [image1, image2, image3, image4, image5, image6]

export const imageByIndex = (index: number): StaticImageData => images[index % images.length]

// export default imageByIndex
