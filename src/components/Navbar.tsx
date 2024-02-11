"use client"
import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { ModeToggle } from './Theme-Toggler';
import { usePathname } from 'next/navigation';


export const MainNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const pathname = usePathname();

    const menuItems = [
        "Home",
        "Gallery",
        "Student's Zone",
        "About Us",
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className='shadow-sm' isBlurred isBordered>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link className="font-bold text-inherit cursor-pointer" href='/'>BLOCKS</Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Gallery
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Student's Zone
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        About Us
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <ModeToggle />
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className={`w-full ${item.toLowerCase() === 'home' ? (pathname === '/' ? '' : 'dark:text-white text-black') : (pathname === `/${item.toLowerCase().replace(/ /g, '-')}` ? '' : 'dark:text-white text-black')}`}
                            href={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase().replace(/ /g, '-')}`}
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}
