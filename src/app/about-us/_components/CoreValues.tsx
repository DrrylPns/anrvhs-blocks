import styles, { features, layout } from "@/styles";
import { Card, CardBody } from "@nextui-org/react";

const FeatureCard = ({ icon, title, content, index }: any) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card w-full`}>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                <Card
                    isBlurred
                    className="border-none bg-background/80 dark:bg-default-100/50 max-w-[610px]"
                    shadow="sm"
                >
                    <CardBody className="text-center">
                        {title}
                    </CardBody>
                </Card>
            </h4>
        </div>
    </div>
);

export const CoreValues = () => {
    return (
        <section id="features" className={`${layout.section} relative`}>
            {/* <div className="absolute w-[30%] inset-0 z-0 gradient-04 max-lg:hidden" /> */}
            <div className={layout.sectionInfo}>
                <h2 className={`${styles.heading2} text-black dark:text-white`}>
                    The {" "}
                    <span className="text-[#064D88]">Dep</span>
                    <span className="text-[#DC1D37]">Ed</span>
                    {" "}Core Values
                </h2>
                <p className={`${styles.paragraph} text-muted-foreground max-w-[470px] mt-5`}>
                    A school institution is guided by core values that shape its culture and define its mission. These values serve as the foundation for fostering a positive and inclusive learning environment. Common core values of school institutions include:
                </p>

            </div>

            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature, index) => (
                    <FeatureCard key={feature.id} {...feature} index={index} />
                ))}
            </div>

        </section>
    )
}
