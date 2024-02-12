"use client"
import { motion } from "framer-motion"
import styles from "@/styles/index"
import { staggerContainer, fadeIn, planetVariants } from "@/lib/motion"
import { Image } from "@nextui-org/react"

export const Location = () => {
  return (
    <section className="max-lg:mt-11">
      <div className={`${styles.paddings} relative z-10 mb-24`}>
        <div className="absolute w-[20%] inset-0 overflow-hidden gradient-03 opacity-50 dark:opacity-80 -z-10" />
        <motion.div
          variants={staggerContainer as any}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
        >
          <motion.div
            variants={planetVariants("left")}
            className={`flex-1 ${styles.flexCenter} mb-7`}
          >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d946.4049925308399!2d121.44655282133787!3d18.4101393021828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388a534baeaaaab%3A0x257fa19e16e4653c!2sAbulug%20National%20Rural%20Vocational%20High%20School!5e0!3m2!1sen!2sph!4v1707730089890!5m2!1sen!2sph" width="600" height="450" loading="lazy" className='rounded-lg'></iframe>
          </motion.div>

          <motion.div
            variants={fadeIn('right', "tween", 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col"
          >
            <h1 className="font-bold mb-2 text-[60px]">School <span className="bg-gradient-to-t from-blue-200 to-blue-500 bg-clip-text text-transparent">Location.</span></h1>
            <p className="dark:text-[#b0b1b7] mb-3 text-[20px]">
              Discover Abulug National Rural and Vocational High School nestled in the serene landscapes of Sitio Langay, Barangay Banguian, Abulug, Cagayan. Our school stands as a beacon of education, providing a secure and healthy environment for learning and honing lifelong skills. The school's address is strategically situated to foster a conducive atmosphere for academic excellence.
            </p>
          </motion.div>


        </motion.div>
      </div>
    </section>
  )
}
