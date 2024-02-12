"use client"
import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { ModeToggle } from './Theme-Toggler';
import { usePathname } from 'next/navigation';
import {
    SearchSelect,
    SearchSelectItem,
} from '@tremor/react';



export const MainNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const pathname = usePathname();

    const formatUrl = (text: any) => {
        const withoutSpecialChars = text
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, ''); // Remove special characters, excluding spaces
        const replacedApostrophe = withoutSpecialChars.replace(/\s+/g, '-'); // Replace spaces with hyphens
        return replacedApostrophe;
    };

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
                <NavbarItem >
                    <Link href="/" className={`${pathname === "/" ? 'text-blue-500' : "dark:text-white text-black"}`}>
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/gallery" className={`${pathname === "/gallery" ? 'text-blue-500' : "dark:text-white text-black"}`}>
                        Gallery
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/students-zone" className={`${pathname === "/students-zone" ? 'text-blue-500' : "dark:text-white text-black"}`}>
                        Student's Zone
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/about-us" className={`${pathname === "/about-us" ? 'text-blue-500' : "dark:text-white text-black"}`}>
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
                            className={`w-full ${item.toLowerCase() === 'home' ? (pathname === '/' ? '' : 'dark:text-white text-black') : (pathname === `/${formatUrl(item)}` ? '' : 'dark:text-white text-black')}`}
                            href={item.toLowerCase() === 'home' ? '/' : `/${formatUrl(item)}`}
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
