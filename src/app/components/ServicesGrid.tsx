import { Star, Calculator, Smartphone, PenTool, Book, Home } from 'lucide-react'

const services = [
  {
    icon: Star,
    title: "KP Astrology",
    description: "Experience the most accurate predictive system in Vedic astrology. Get precise timing and crystal-clear answers to your specific life questions.",
    action: "Get KP Reading"
  },
  {
    icon: Calculator,
    title: "Numerology",
    description: "Discover how numbers shape your personality, relationships, and success. Unlock the hidden patterns that govern your destiny.",
    action: "Get Numerology Report"
  },
  {
    icon: Smartphone,
    title: "Mobile Numerology",
    description: "Your mobile number influences your daily energy. Find out if your number attracts success or creates obstacles.",
    action: "Check My Number"
  },
  {
    icon: PenTool,
    title: "Name Numerology",
    description: "Your name is your personal mantra. Discover if your name's vibration supports your goals or holds you back.",
    action: "Analyze My Name"
  },
  {
    icon: Book,
    title: "Lal Kitab",
    description: "Get practical, cost-effective remedies that deliver real results. Simple solutions you can perform at home.",
    action: "Get Remedies"
  },
  {
    icon: Home,
    title: "Vastu Shastra",
    description: "Harmonize your space to transform your life. Optimize energy flow for health, wealth, and happiness.",
    action: "Vastu Consultation"
  }
]

export default function ServicesGrid() {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in Divine Astro Sumit services. Please guide me.")
    window.open(`https://wa.me/+919115616775?text=${message}`, '_blank')
  }

  return (
    <section className="max-w-7xl mx-auto px-5 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-yellow-400/10 to-yellow-400/5 border-2 border-yellow-400/30 rounded-2xl p-10 text-center transition-all duration-300 hover:transform hover:-translate-y-3 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/20 group"
          >
            <div className="text-yellow-400 mb-6 flex justify-center">
              <service.icon size={48} />
            </div>
            
            <h3 className="text-2xl text-yellow-400 mb-4 font-serif">
              {service.title}
            </h3>
            
            <p className="text-mystical-100 leading-relaxed mb-8 text-sm">
              {service.description}
            </p>
            
            <button
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-mystical-700 px-8 py-3 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/40 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-mystical-700"
            >
              {service.action}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}