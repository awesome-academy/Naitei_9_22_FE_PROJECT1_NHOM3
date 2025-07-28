"use client";

import Link from "next/link";
import Image from "next/image";
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
import { userMenuItems, navigationItems, HEADER_ROUTES } from "@/constants/headerLinks";

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
              <span className="flex items-center justify-center w-12 h-12 rounded-full" style={{ background: 'hsl(88 50% 53%)' }}>
                <span className="text-3xl text-white font-[cursive] italic font-bold">M</span>
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
                className="rounded-r-none border-r-0 focus:border-[#8BC34A] pr-4"
              />
              <Button
                type="submit"
                className="rounded-l-none px-6 bg-[#8BC34A] hover:bg-[#7AB23C]"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>

          {/* Action Icons */}
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex flex-col items-center text-gray-700 hover:text-gray-900 hover:bg-gray-50 h-auto p-2"
                >
                  <User className="h-7 w-7" />
                  <span className="text-sm mt-1 font-medium">Tài khoản</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44 rounded-xl shadow-lg border border-gray-100 p-2 bg-white">
                {userMenuItems.map((item, index) => (
                  <DropdownMenuItem key={index} asChild className="rounded-lg px-4 py-2 text-base text-gray-700 hover:bg-[#8BC34A]/10 transition-colors font-medium">
                    <Link href={item.href} className="w-full block">{item.text}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href={HEADER_ROUTES.ACCOUNT.WISHLIST} className="flex flex-col items-center text-gray-600 relative">
              <Heart className="h-6 w-6" />
              <span className="text-xs mt-1">Yêu thích</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                0
              </span>
            </Link>

            <Link href={HEADER_ROUTES.ACCOUNT.CART} className="flex flex-col items-center text-gray-600 relative">
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
      <nav className="bg-[#8BC34A] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <Button variant="ghost" className="text-white hover:bg-[#7AB23C] lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>

            <div className="hidden lg:flex items-center py-3 gap-2">
              {navigationItems.map((item, index) => {
                const isActive = pathname === item.href;

                return item.hasDropdown ? (
                  <div key={index} className="relative group">
                    <Link
                      href={item.href}
                      className={`font-medium flex items-center gap-1 px-4 py-2 rounded-md transition-all duration-200 ${isActive
                          ? "text-white bg-[#7AB23C]"
                          : "text-white hover:bg-[#7AB23C]/20 hover:text-white"
                        }`}
                    >
                      {item.text}
                      <ChevronDown className="h-4 w-4" />
                    </Link>
                    {/* Dropdown menu có thể thêm sau */}
                  </div>
                ) : (
                  <Link
                    key={index}
                    href={item.href}
                    className={`font-medium px-4 py-2 rounded-md transition-all duration-200 ${isActive
                        ? "text-white bg-[#7AB23C]"
                        : "text-white hover:bg-[#7AB23C]/20 hover:text-white"
                      }`}
                  >
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
