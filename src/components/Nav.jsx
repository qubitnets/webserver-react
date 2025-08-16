import { useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import assets from "../assets/assets";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "AboutUs", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Product", path: "/product" },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Store last clicked path
  const [lastClickedPath, setLastClickedPath] = useState(location.pathname);

  // Refs to store hover timers
  const hoverTimer = useRef(null);
  const leaveTimer = useRef(null);

  const handleClick = (path) => {
    setLastClickedPath(path);
    clearTimeout(hoverTimer.current);
    clearTimeout(leaveTimer.current);
  };

  const handleMouseEnter = (path) => {
    clearTimeout(leaveTimer.current);
    hoverTimer.current = setTimeout(() => {
      if (path !== location.pathname) {
        navigate(path, { replace: true });
      }
    }, 300); // 200ms delay for smoothness
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer.current);
    leaveTimer.current = setTimeout(() => {
      if (lastClickedPath !== location.pathname) {
        navigate(lastClickedPath, { replace: true });
      }
    }, 300); // 200ms delay to return smoothly
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-white/60 z-50 backdrop-blur-2xl"
      maxWidth="full"
    >
      {/* Mobile Menu Toggle */}
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Mobile Logo */}
      <NavbarContent className="md:hidden pr-3" justify="center">
        <NavbarBrand>
          <img
            src={assets.logo}
            alt="QubitNets Logo"
            className="h-10 sm:w-auto w-28"
          />
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Logo */}
      <NavbarContent className="hidden md:flex" justify="start">
        <NavbarBrand>
          <img src={assets.logo} alt="QubitNets Logo" className="h-12 w-auto" />
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Nav Links */}
      <NavbarContent className="hidden md:flex gap-12" justify="center">
        {navLinks.map((link) => (
          <NavbarItem
            key={link.path}
            isActive={location.pathname === link.path}
          >
            <Link
              to={link.path}
              onClick={() => handleClick(link.path)}
              onMouseEnter={() => handleMouseEnter(link.path)}
              onMouseLeave={handleMouseLeave}
              className={`text-md transition-opacity ${
                location.pathname === link.path
                  ? "font-semibold text-[#fa9c07]  px-1 border-b-2 border-[#fa9c07]"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* CTA Button */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            to="/contact"
            variant="flat"
            radius="lg"
            className={`
              transition-all duration-300
              border-2 border-[#fbb039]
              bg-white text-black
              text-xs sm:text-sm px-2 py-1
              md:bg-[#fbb039] md:text-white md:px-3 md:py-1 
              md:text-base lg:text-md 
              hover:bg-white hover:text-[#fa9c07]
              active:bg-[#fbb039] active:text-white 
            `}
          >
            Get A Quote
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu Items */}
      <NavbarMenu>
        {navLinks.map((link) => (
          <NavbarMenuItem key={link.path}>
            <Link
              to={link.path}
              className={`w-full text-lg ${
                location.pathname === link.path
                  ? "text-[#fa9c07] font-medium"
                  : "text-base"
              }`}
              onClick={() => {
                setIsMenuOpen(false);
                handleClick(link.path);
              }}
            >
              {link.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
