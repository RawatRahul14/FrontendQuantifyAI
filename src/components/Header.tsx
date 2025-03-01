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

/**
 * Aseets 
 */
import { Menu } from "lucide-react";

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

                <PopoverContent>
                    Menu
                </PopoverContent>
                </Popover>
            </div>
        </header>
    );
  };
  
  export default Header;  