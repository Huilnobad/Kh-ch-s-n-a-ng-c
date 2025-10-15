import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Rooms } from "@/components/rooms"
import { Amenities } from "@/components/amenities"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { ChatbotWidget } from "@/components/chatbot-widget"

export default function Home() {
  return (
    <main className="min-h-screen bg-abyss">
      <Navigation />
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Contact />
      <ChatbotWidget />
    </main>
  )
}
