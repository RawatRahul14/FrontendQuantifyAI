/**
 * Components
 */
import { Button } from "./ui/button";

/**
 * Assets 
 */
import { heroBanner } from "../assets";

/**
 * Constants 
 */

import { heroData } from "../constants";

const Hero = () => {
    return (
        <section className="py-10 md:py-16">
            <div className="container text-center">
                <div className="max-w-screen-md mx-auto">
                    <p className="text-sm uppercase tracking-wider bg-secondary/50 text-secondary-foreground max-w-max m-auto px-3 py-1 rounded-full border-t border-blue-500/10 backdrop-blur-3xl mb-6 md:md-10">
                        {heroData.sectionSubtitle}
                    </p>

                    <h2 className="text-4xl font-semibold !leading-tight mb-4 md:text-5xl md:mb-5 lg:text-6xl">
                        {heroData.sectionTitle}
                        <span className="relative isolate ms-4">
                            {heroData.decoTitle}
                            <span className="absolute -z-10 top-2 -left-6 -right-4 bottom-0.5 bg-foreground/5 rounded-full px-8 ms-3 border-t border-foreground/20 shadow-[inset_0px_0px_30px_0px] shadow-foreground/20 md:top-3 md:bottom-1 lg:top-4 lg:bottom-2">
                            </span>
                        </span>
                    </h2>

                    <p className="text-muted-foreground md:text-xl">
                        {heroData.sectionText}
                    </p>

                    <div className="flex justify-center gap-2 mt-6 md:mt-10">
                        <Button>Start Free Trial</Button>

                        <Button variant="ghost">Watch Demo</Button>
                    </div>
                </div>

                <div className="relative mt-12 max-w-screen-xl mx-auto isolate rounded-xl md:mt-16">
                    <figure className="bg-background/60 border border-slate-800 backdrop-blur-3xl rounded-xl shadow-2xl overflow-hidden">
                        <img src={heroBanner} width={1468} height={815} alt="" className="DashBoard" />
                    </figure>

                    <div className="absolute bg-primary inset-5 blur-[50px] -z-10"></div>
                    <div className="absolute inset-0 bg-primary blur-[200px] scale-y-75 scale-x-125 rounded-full -z-10"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero