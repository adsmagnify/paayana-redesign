"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { number: "10K+", label: "Happy Travelers", icon: "😊" },
  { number: "50+", label: "Destinations", icon: "🌍" },
  { number: "12+", label: "Years Experience", icon: "⭐" },
  { number: "98%", label: "Satisfaction Rate", icon: "💖" },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-payaana-pink rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <AnimatedCounter value={stat.number} duration={2000} startValue={0} />
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

