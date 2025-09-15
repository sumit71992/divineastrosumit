"use client";

import { useState } from "react";

export default function MobileCalculator() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [result, setResult] = useState<{
    number: number;
    energy: string;
    color: string;
    description: string;
  } | null>(null);

  const interpretations: Record<
    number,
    {
      energy: string;
      color: string;
      description: string;
    }
  > = {
    1: {
      energy: "Leadership",
      color: "Red",
      description:
        "You attract leadership opportunities and independence. Great for business owners and entrepreneurs.",
    },
    2: {
      energy: "Cooperation",
      color: "Orange",
      description:
        "Your number enhances partnerships and diplomatic relations. Perfect for team collaboration.",
    },
    3: {
      energy: "Creativity",
      color: "Yellow",
      description:
        "This vibration attracts creative opportunities and social connections. Ideal for artists and communicators.",
    },
    4: {
      energy: "Stability",
      color: "Green",
      description:
        "Your number brings practical success and steady growth. Excellent for long-term planning.",
    },
    5: {
      energy: "Adventure",
      color: "Blue",
      description:
        "This vibration attracts travel, change, and dynamic opportunities. Perfect for flexible careers.",
    },
    6: {
      energy: "Nurturing",
      color: "Indigo",
      description:
        "Your number enhances family harmony and healing abilities. Great for service-oriented professions.",
    },
    7: {
      energy: "Spirituality",
      color: "Violet",
      description:
        "This vibration attracts spiritual growth and analytical thinking. Ideal for researchers and mystics.",
    },
    8: {
      energy: "Material Success",
      color: "Pink",
      description:
        "Your number brings material abundance and executive power. Excellent for business and finance.",
    },
    9: {
      energy: "Universal Love",
      color: "Gold",
      description:
        "This vibration attracts humanitarian opportunities and global connections. Perfect for healers and teachers.",
    },
  };

  const calculateNumerology = () => {
    if (!mobileNumber || mobileNumber.length < 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    const digits = mobileNumber.replace(/\D/g, "").split("").map(Number);
    const sum = digits.reduce((a, b) => a + b, 0);
    const finalNumber =
      sum > 9
        ? sum
            .toString()
            .split("")
            .map(Number)
            .reduce((a, b) => a + b, 0)
        : sum;

    setResult({
      number: finalNumber,
      ...interpretations[finalNumber],
    });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I want a detailed mobile numerology analysis. Please guide me."
    );
    window.open(`https://wa.me/+919115616775?text=${message}`, "_blank");
  };

  return (
    <section className="max-w-4xl mx-auto px-5 py-16">
      <div className="bg-black/30 border-2 border-yellow-400/30 rounded-2xl p-12 text-center">
        <h2 className="text-4xl text-yellow-400 mb-6 font-serif">
          🔮 Mobile Number Energy Calculator
        </h2>

        <p className="text-mystical-100 mb-8 text-lg">
          Get instant insights into your mobile number&apos;s energy signature
        </p>

        <div className="max-w-lg mx-auto mb-8">
          <input
            type="tel"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter your 10-digit mobile number"
            maxLength={10}
            className="w-full px-6 py-4 border-2 border-yellow-400/30 rounded-full bg-white/10 text-white text-lg text-center placeholder-mystical-100 focus:outline-none focus:border-yellow-400 focus:bg-white/15 transition-all duration-300"
          />
        </div>

        <button
          onClick={calculateNumerology}
          className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-mystical-700 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/40 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-mystical-700 mb-8"
        >
          Calculate My Number&apos;s Energy
        </button>

        {result && (
          <div className="bg-yellow-400/10 border-2 border-yellow-400 rounded-2xl p-8 mt-8 animate-fade-in">
            <h3 className="text-2xl text-yellow-400 mb-6 font-serif">
              Your Mobile Number Vibration: {result.number}
            </h3>

            <div className="space-y-4 mb-6 text-left max-w-2xl mx-auto">
              <div>
                <span className="text-yellow-400 font-bold">Energy Type:</span>
                <span className="text-mystical-50 ml-2">{result.energy}</span>
              </div>

              <div>
                <span className="text-yellow-400 font-bold">Lucky Color:</span>
                <span className="text-mystical-50 ml-2">{result.color}</span>
              </div>

              <p className="text-mystical-50 leading-relaxed pt-4">
                {result.description}
              </p>
            </div>

            <button
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-mystical-700 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/40 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Get Detailed Analysis
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
