const amenities = [
  {
    title: "Nhà Hàng Hỏa Ngục",
    description: "Ẩm thực đẳng cấp thế giới trong không gian độc đáo",
  },
  {
    title: "Spa & Wellness",
    description: "Thư giãn tuyệt đối với liệu pháp chăm sóc cao cấp",
  },
  {
    title: "Hồ Bơi Vô Cực",
    description: "Ngắm nhìn thành phố từ độ cao huyền ảo",
  },
  {
    title: "Bar Bóng Đêm",
    description: "Cocktail độc đáo trong không gian ma mị",
  },
]

export function Amenities() {
  return (
    <section id="amenities" className="py-32 px-6 bg-abyss-light">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <div className="text-sm tracking-[0.3em] text-inferno uppercase mb-6">Tiện Nghi</div>
          <h2 className="font-serif text-5xl md:text-6xl text-bone mb-6 text-balance">Trải nghiệm đẳng cấp</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex gap-6 group cursor-pointer">
              <div className="text-4xl font-serif text-inferno">{index + 1}</div>
              <div>
                <h3 className="text-2xl font-serif text-bone mb-3 group-hover:text-inferno transition-colors">
                  {amenity.title}
                </h3>
                <p className="text-ash leading-relaxed">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 relative aspect-[21/9] overflow-hidden">
          <img src="/luxury-hotel-pool-with-red-lighting-at-night.jpg" alt="Hotel amenities" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-abyss-light via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
