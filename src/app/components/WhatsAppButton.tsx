export default function WhatsAppButton() {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in Divine Astro Sumit services. Please guide me."
    );
    window.open(`https://wa.me/+919115616775?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 animate-pulse-glow z-50 shadow-lg"
      aria-label="Contact us on WhatsApp"
    >
      💬
    </button>
  );
}
