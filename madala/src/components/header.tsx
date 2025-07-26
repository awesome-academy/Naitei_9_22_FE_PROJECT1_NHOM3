"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { Search, ShoppingCart, User, Menu, ChevronDown, Heart } from "lucide-react";
import Image from "next/image";

// User dropdown menu items
const userMenuItems = [
  {
    href: "/login",
    text: "Đăng nhập"
  },
  {
    href: "/register", 
    text: "Đăng ký"
  }
];

const navigationItems = [
  {
    href: "/",
    text: "TRANG CHỦ",
    hasDropdown: false
  },
  {
    href: "/about",
    text: "GIỚI THIỆU", 
    hasDropdown: false
  },
  {
    href: "/products",
    text: "SẢN PHẨM",
    hasDropdown: true
  },
  {
    href: "/news",
    text: "TIN TỨC",
    hasDropdown: false
  },
  {
    href: "/map", 
    text: "BẢN ĐỒ",
    hasDropdown: false
  },
  {
    href: "/contact",
    text: "LIÊN HỆ",
    hasDropdown: false
  }
];

export default function Header() {
  const [search, setSearch] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setSearch("");
  }, [pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/search?query=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b">

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link className="flex items-center space-x-3" href="/">
            <div className="flex items-center">
              <span className="flex items-center justify-center w-12 h-12 rounded-full" style={{background: 'hsl(88 50% 53%)'}}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="6" y="24" fontFamily="cursive" fontSize="26" fontWeight="bold" fontStyle="italic" fill="white">M</text>
                </svg>
              </span>
              <span className="ml-2 text-3xl text-black font-[cursive] italic font-bold tracking-tight">andala</span>
            </div>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-8">
            <div className="relative flex">
              <Input
                type="text"
                placeholder="Tìm kiếm sản phẩm, thương hiệu..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="rounded-r-none border-r-0 focus:border-primary pr-4"
              />
              <Button 
                type="submit" 
                className="rounded-l-none px-6 bg-primary hover:bg-primary-hover"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>

          {/* Action Icons */}
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex flex-col items-center text-gray-700 hover:text-primary focus:outline-none transition-colors">
                  <User className="h-7 w-7" />
                  <span className="text-sm mt-1 font-medium">Tài khoản</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44 rounded-xl shadow-lg border border-gray-100 p-2 bg-white">
                {userMenuItems.map((item, index) => (
                  <DropdownMenuItem key={index} asChild className="rounded-lg px-4 py-2 text-base text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors font-medium">
                    <Link href={item.href} className="w-full block">{item.text}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link href="/wishlist" className="flex flex-col items-center text-gray-600 hover:text-primary relative">
              <Heart className="h-6 w-6" />
              <span className="text-xs mt-1">Yêu thích</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                0
              </span>
            </Link>

            <Link href="/cart" className="flex flex-col items-center text-gray-600 hover:text-primary relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="text-xs mt-1">Giỏ hàng</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                2
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-hover lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8 py-3">
              {navigationItems.map((item, index) => {
                const isActive = pathname === item.href;
                const activeClass = isActive ? "text-[#8BC34A]" : "hover:text-accent";
                
                return item.hasDropdown ? (
                  <div key={index} className="relative group">
                    <Link href={item.href} className={`font-medium transition-colors flex items-center gap-1 ${activeClass}`}>
                      {item.text}
                      <ChevronDown className="h-4 w-4" />
                    </Link>
                    {/* Dropdown menu có thể thêm sau */}
                  </div>
                ) : (
                  <Link key={index} href={item.href} className={`font-medium transition-colors ${activeClass}`}>
                    {item.text}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
