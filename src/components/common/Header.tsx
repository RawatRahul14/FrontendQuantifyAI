/**
 * Components 
 */
import { Button } from "../ui/button";
import { 
    Popover, 
    PopoverContent, 
    PopoverTrigger 
} from "../ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Logo from "../common/Logo";
import MobileMenu from "./MobileMenu";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "../ui/navigation-menu";
import { auth } from "../auth/firebaseConfig";
import { useNavigate, Link } from "react-router-dom";

/**
 * Assets 
 */
import { Menu, ChevronDown, User, Settings, LogOut } from "lucide-react";

/**
 * Constants 
 */
import { navMenu } from "../../constants";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      // Clear any cached data and replace history entry
      navigate('/', { replace: true });
      window.location.reload(); // Force clear client-side cache
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <header className="h-16 grid grid-cols-1 items-center md:h-20 lg:h-24">
      <div className="container flex items-center justify-between lg:grid lg:grid-cols-[1fr,3fr,1fr]">
        {/* Logo */}
        <Logo variant="icon" />

        {/* Desktop Navigation (hidden on mobile) */}
        <NavigationMenu className="hidden lg:block mx-auto">
          <NavigationMenuList>
            {navMenu.map(({ href, label, submenu }, index) => (
              <NavigationMenuItem key={index}>
                {submenu ? (
                  <>
                    <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid grid-cols-2 gap-2 p-2 w-[640px]">
                        {submenu.map(({ href, icon, label, desc }, idx) => (
                          <li key={idx}>
                            <NavigationMenuLink asChild>
                              <a
                                href={href}
                                className="flex gap-3 select-none p-2 rounded-sm transition-colors hover:bg-foreground/5"
                              >
                                <div className="w-10 h-10 bg-foreground/10 rounded-sm shadow-sm border-t border-foreground/5 flex-shrink-0 grid place-items-center">
                                  {icon}
                                </div>
                                <div className="text-[13px] leading-normal mb-1">
                                  <div className="text-[13px] leading-normal text-muted-foreground">
                                    {label}
                                  </div>
                                  <p>{desc}</p>
                                </div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    href={href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {label}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right-side controls (always visible) */}
        <div className="flex items-center gap-2">
          {/* Profile Dropdown (visible on all screens) */}
          <Popover>
            <PopoverTrigger className="flex items-center gap-2 hover:bg-foreground/5 px-3 py-1.5 rounded-full transition-colors">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/user-avatar.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="font-medium max-lg:hidden">John Doe</span>
              <ChevronDown className="w-4 h-4 max-lg:hidden" />
            </PopoverTrigger>
            <PopoverContent align="end" className="w-48 p-2 rounded-xl">
              <div className="flex flex-col gap-1">
              <Button variant="ghost" className="justify-start gap-2" asChild>
                  <Link to="/profile">
                    <User className="w-4 h-4" />
                    My Profile
                  </Link>
                </Button>
                <Button variant="ghost" className="justify-start gap-2">
                  <Settings className="w-4 h-4" />
                  Settings
                </Button>
                <Button 
                  variant="ghost" 
                  className="justify-start gap-2 text-destructive hover:text-destructive"
                  onClick={handleLogout}
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          {/* Mobile Menu (hidden on desktop) */}
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
      </div>
    </header>
  );
};

export default Header;