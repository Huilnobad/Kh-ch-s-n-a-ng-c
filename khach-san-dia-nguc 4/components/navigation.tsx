"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-abyss/95 backdrop-blur-sm border-b border-inferno/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-serif tracking-tight text-bone">
            KHÁCH SẠN <span className="text-inferno">ĐỊA NGỤC</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-ash hover:text-inferno transition-colors">
              Giới Thiệu
            </a>
            <a href="#rooms" className="text-sm text-ash hover:text-inferno transition-colors">
              Phòng
            </a>
            <a href="#amenities" className="text-sm text-ash hover:text-inferno transition-colors">
              Tiện Nghi
            </a>
            <a href="#contact" className="text-sm text-ash hover:text-inferno transition-colors">
              Liên Hệ
            </a>
            <Button className="bg-inferno hover:bg-inferno-light text-bone">Đặt Phòng</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
