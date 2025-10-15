const rooms = [
  {
    name: "Phòng Hỏa Diệm",
    description: "Không gian ấm áp với ánh sáng đỏ huyền ảo",
    price: "5.000.000",
    image: "/luxury-hotel-room-with-red-lighting-and-modern-des.jpg",
  },
  {
    name: "Suite Bóng Đêm",
    description: "Sang trọng tuyệt đối trong bóng tối huyền bí",
    price: "8.000.000",
    image: "/luxury-dark-hotel-suite-with-dramatic-lighting.jpg",
  },
  {
    name: "Penthouse Địa Ngục",
    description: "Đỉnh cao của sự xa hoa và bí ẩn",
    price: "15.000.000",
    image: "/luxury-penthouse-with-red-and-black-interior-desig.jpg",
  },
]

export function Rooms() {
  return (
    <section id="rooms" className="py-32 px-6 bg-abyss">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <div className="text-sm tracking-[0.3em] text-inferno uppercase mb-6">Phòng Nghỉ</div>
          <h2 className="font-serif text-5xl md:text-6xl text-bone mb-6 text-balance">Không gian của bạn</h2>
          <p className="text-ash max-w-2xl mx-auto text-pretty leading-relaxed">
            Mỗi phòng là một thế giới riêng, được thiết kế để mang lại trải nghiệm độc đáo và đáng nhớ nhất.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden">
                <img
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              </div>

              <h3 className="font-serif text-2xl text-bone mb-3 group-hover:text-inferno transition-colors">
                {room.name}
              </h3>
              <p className="text-ash-dark mb-4 leading-relaxed">{room.description}</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-serif text-inferno">{room.price}</span>
                  <span className="text-sm text-ash-dark ml-2">VNĐ/đêm</span>
                </div>
                <button className="text-sm text-inferno hover:text-inferno-light transition-colors uppercase tracking-wider">
                  Đặt Ngay →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
