/**
 * Node Modules 
 */
import { motion } from "motion/react";

/**
 * Components 
 */
import FeatureCard from "./FeatureCard";
import { Button } from "./ui/button";

/**
 * Assets
 */
import { ArrowRight } from "lucide-react";

/**
 * Constants 
 */
import { featureData } from "../constants";

const Feature = () => {
    return (
        <div className="container">
            <div className="section-head">
                <motion.p className="section-subtitle">
                    {featureData.sectionSubtitle}
                </motion.p>

                <motion.h2 className="section-title">
                    {featureData.sectionTitle}
                </motion.h2>

                <motion.p className="section-text">
                    {featureData.sectionText}
                </motion.p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-6">
                {featureData.features.map(({icon, iconBoxColor, title, desc, imgSrc}, index) => (
                    <FeatureCard key={index} classes={index < 2 ? "md:col-span-2 lg:col-span-1 xl:col-span-3" : "xl:col-span-2"}>
                        <>
                            <div className="p-8">
                                <motion.div className={`w-16 h-16 grid place-items-center rounded-full flex-shrink-0 ${iconBoxColor}`}>
                                    {icon}
                                </motion.div>

                                <motion.h3 className="text-foreground text-xl font-medium mt-4 mb-3">
                                    {title}
                                </motion.h3>

                                <motion.p className="text-muted-foreground line-clamp-2">
                                    {desc}
                                </motion.p>

                                <motion.div>
                                    <Button variant="link" className="p-0 h-auto mt-3">Learn More <ArrowRight /></Button>
                                </motion.div>
                            </div>

                            {imgSrc && (
                                <motion.figure className="p-6 pt-0">
                                    <img src={imgSrc} alt={title} />
                                </motion.figure>
                            )}
                        </>
                    </FeatureCard>
                ))}
            </div>
        </div>
    )
}

export default Feature