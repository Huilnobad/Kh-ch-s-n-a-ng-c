"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-32 px-6 bg-abyss">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="text-sm tracking-[0.3em] text-inferno uppercase mb-6">Liên Hệ</div>
            <h2 className="font-serif text-5xl md:text-6xl text-bone mb-8 text-balance">Bắt đầu hành trình của bạn</h2>
            <p className="text-ash leading-relaxed mb-12">
              Đội ngũ của chúng tôi luôn sẵn sàng phục vụ bạn 24/7. Hãy liên hệ để trải nghiệm dịch vụ đẳng cấp 5 sao.
            </p>

            <div className="space-y-6">
              <div>
                <div className="text-sm text-ash-dark uppercase tracking-wider mb-2">Địa chỉ</div>
                <div className="text-bone">123 Đường Hỏa Diệm, Quận 1, TP.HCM</div>
              </div>
              <div>
                <div className="text-sm text-ash-dark uppercase tracking-wider mb-2">Điện thoại</div>
                <div className="text-bone">+84 123 456 789</div>
              </div>
              <div>
                <div className="text-sm text-ash-dark uppercase tracking-wider mb-2">Email</div>
                <div className="text-bone">info@khachsandianguc.vn</div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Họ và tên"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-abyss-light border-b border-ash-dark/30 px-4 py-4 text-bone placeholder:text-ash-dark focus:border-inferno focus:outline-none transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-abyss-light border-b border-ash-dark/30 px-4 py-4 text-bone placeholder:text-ash-dark focus:border-inferno focus:outline-none transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Số điện thoại"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-abyss-light border-b border-ash-dark/30 px-4 py-4 text-bone placeholder:text-ash-dark focus:border-inferno focus:outline-none transition-colors"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Lời nhắn"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full bg-abyss-light border-b border-ash-dark/30 px-4 py-4 text-bone placeholder:text-ash-dark focus:border-inferno focus:outline-none transition-colors resize-none"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-inferno hover:bg-inferno-light text-bone py-6 text-sm tracking-wider uppercase"
            >
              Gửi Tin Nhắn
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
