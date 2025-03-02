/**
 * Components 
 */
import { Button } from "./ui/button";
import { 
    Popover, 
    PopoverContent, 
    PopoverTrigger 
} from "./ui/popover";

import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

/**
 * Aseets 
 */
import { Menu } from "lucide-react";

/**
 * Constants 
 */
import { navMenu } from "../constants";

const Header = () => {
    return (
        <header className="h-16 grid grid-cols-1 items-center md:h-20 lg:h-24">
            <div className="container flex justify-between">
                <Logo variant="icon"/>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" size="icon" className="lg:hidden">
                        <Menu />
                        </Button>
                </PopoverTrigger>

                <PopoverContent align="end" className="bg-background/50 backdrop-blur-3xl border-foreground/5 border-x-0 border-b-0 rounded-lg overflow-hidden">
                    <MobileMenu navMenu={navMenu} />
                </PopoverContent>
                </Popover>
            </div>
        </header>
    );
  };
  
  export default Header;  