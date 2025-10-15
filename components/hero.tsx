export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/luxury-dark-hotel-lobby-with-red-lighting-and-dram.jpg"
          alt="Khách sạn địa ngục"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-abyss/80 via-abyss/50 to-abyss" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8 text-sm tracking-[0.3em] text-ash uppercase">Luxury 5-Star Experience</div>

        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-6 text-balance">
          <span className="text-bone">Khách Sạn</span>
          <br />
          <span className="text-inferno">Địa Ngục</span>
        </h1>

        <p className="text-lg md:text-xl text-ash max-w-2xl mx-auto mb-12 text-pretty leading-relaxed">
          Nơi sự ma mị gặp gỡ đẳng cấp. Trải nghiệm sang trọng trong không gian huyền bí, nơi mỗi khoảnh khắc đều là một
          hành trình đáng nhớ.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-inferno hover:bg-inferno-light text-bone transition-all duration-300 text-sm tracking-wider uppercase">
            Khám Phá Ngay
          </button>
          <button className="px-8 py-4 border border-inferno text-inferno hover:bg-inferno hover:text-bone transition-all duration-300 text-sm tracking-wider uppercase">
            Xem Phòng
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-inferno rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-inferno rounded-full" />
        </div>
      </div>
    </section>
  )
}
