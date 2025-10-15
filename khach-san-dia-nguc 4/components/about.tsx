export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-abyss-light">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-sm tracking-[0.3em] text-inferno uppercase mb-6">Về Chúng Tôi</div>
            <h2 className="font-serif text-5xl md:text-6xl text-bone mb-8 text-balance">
              Hành trình vào thế giới huyền bí
            </h2>
            <div className="space-y-6 text-ash leading-relaxed">
              <p>
                Khách Sạn Địa Ngục không chỉ là một nơi nghỉ dưỡng, mà là một trải nghiệm độc đáo nơi sự sang trọng đẳng
                cấp 5 sao hòa quyện với không gian ma mị, huyền bí đầy mê hoặc.
              </p>
              <p>
                Với kiến trúc độc đáo, ánh sáng đỏ huyền ảo và dịch vụ hoàn hảo, chúng tôi mang đến cho bạn một kỳ nghỉ
                không thể nào quên - nơi mọi chi tiết đều được chăm chút tỉ mỉ để tạo nên trải nghiệm đẳng cấp nhất.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-serif text-inferno mb-2">50+</div>
                <div className="text-sm text-ash-dark uppercase tracking-wider">Phòng Sang Trọng</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-inferno mb-2">24/7</div>
                <div className="text-sm text-ash-dark uppercase tracking-wider">Dịch Vụ</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-inferno mb-2">5★</div>
                <div className="text-sm text-ash-dark uppercase tracking-wider">Đẳng Cấp</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] relative">
              <img src="/luxury-dark-hotel-interior-with-red-ambient-lighti.jpg" alt="Hotel interior" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
