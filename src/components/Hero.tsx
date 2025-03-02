/**
 * Node Modules 
 */
import { motion, Variants } from "motion/react";

/**
 * Components
 */
import { Button } from "./ui/button";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
import { AspectRatio } from "./ui/aspect-ratio";
import reactPlayer from "react-player/youtube";

/**
 * Assets 
 */
import { heroBanner } from "../assets";
import { CirclePlay } from "lucide-react";

/**
 * Constants 
 */

import { heroData } from "../constants";
import ReactPlayer from "react-player/youtube";

/**
 * Framer motion Variant
 */

const heroVariant: Variants = {
    start: {},
    end: {
        transition: {
            staggerChildren: 0.4,
        }
    }
};

const heroChildVariant: Variants = {
    start: {
        y: 30,
        opacity: 0,
        filter: "blur(5px)"
    },
    end: {
        y: 0,
        opacity: 1,
        filter: "blur(0)",
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

const Hero = () => {
    return (
        <section className="py-10 md:py-16">
            <motion.div variants={heroVariant} initial="start" animate="end" className="container text-center">
                <div  className="max-w-screen-md mx-auto">
                    <motion.p variants={heroChildVariant} className="text-sm uppercase tracking-wider bg-secondary/50 text-secondary-foreground max-w-max m-auto px-3 py-1 rounded-full border-t border-blue-500/10 backdrop-blur-3xl mb-6 md:md-10">
                        {heroData.sectionSubtitle}
                    </motion.p>

                    <motion.h2 variants={heroChildVariant} className="text-4xl font-semibold !leading-tight mb-4 md:text-5xl md:mb-5 lg:text-6xl">
                        {heroData.sectionTitle}
                        <span className="relative isolate ms-4">
                            {heroData.decoTitle}
                            <span className="absolute -z-10 top-2 -left-6 -right-4 bottom-0.5 bg-foreground/5 rounded-full px-8 ms-3 border-t border-foreground/20 shadow-[inset_0px_0px_30px_0px] shadow-foreground/20 md:top-3 md:bottom-1 lg:top-4 lg:bottom-2">
                            </span>
                        </span>
                    </motion.h2>

                    <motion.p variants={heroChildVariant}  className="text-muted-foreground md:text-xl">
                        {heroData.sectionText}
                    </motion.p>

                    <motion.div variants={heroChildVariant} className="flex justify-center gap-2 mt-6 md:mt-10">
                        <Button>Start Free Trial</Button>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="ghost"><CirclePlay />Watch Demo</Button>
                            </DialogTrigger>

                            <DialogContent className="p-0 overflow-hidden max-w-[640px] xl:max-w-[1000px]">
                                <AspectRatio ratio={16 / 9}>
                                    <ReactPlayer url="https://youtu.be/FGzo2Dm3Rh8?si=St7_zRwLmBBzwo0G" style={{
                                        minWidth: "100%",
                                        maxWidth: "100%",
                                        minHeight: "100%",
                                        maxHeight: "100%",
                                    }} />
                                </AspectRatio>
                            </DialogContent>
                        </Dialog>
                    </motion.div>
                </div>

                <div className="relative mt-12 max-w-screen-xl mx-auto isolate rounded-xl md:mt-16">
                    <motion.figure className="bg-background/60 border border-slate-800 backdrop-blur-3xl rounded-xl shadow-2xl overflow-hidden" initial={{y: 120, opacity: 0, filter: "blur(5px)"}} animate={{y: 0, opacity: 1, filter: "blur(0)"}} transition={{duration: 1.5, delay: 0.5, ease: "backInOut"}}>
                        <img src={heroBanner} width={1468} height={815} alt="" className="DashBoard" />
                    </motion.figure>

                    <motion.div className="absolute bg-primary inset-5 blur-[50px] -z-10" initial={{scale: 0.8, opacity: 0}} animate={{scale: 1, opacity: 1}} transition={{duration: 2, delay: 0.5, ease: "backInOut"}}></motion.div>
                    <motion.div className="absolute inset-0 bg-primary blur-[200px] scale-y-75 scale-x-125 rounded-full -z-10" initial={{scale: 0.4, opacity: 0}} animate={{scale: 1, opacity: 1}} transition={{duration: 2, delay: 1.5, ease: "backOut"}}></motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero