"use client";

import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { SpaceBackground } from "@/components/space-background";
import { BentoGrid } from "@/components/bento-grid";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

// Sample meme data - replace with your actual memes
const memeItems = [
  { image: "/g1.jpg" },
  { image: "/g2.jpg" },
  { image: "/g3.jpg" },
  { image: "/g4.jpg" },
  { image: "/g5.jpg" },
  { image: "/g6.jpg" },
  { image: "/g7.jpg" },
  { image: "/g8.jpg" },
  { image: "/g9.jpg" },
  { image: "/g10.jpg" },
  { image: "/g11.jpg" },
  { image: "/g12.jpg" },
  { image: "/g13.jpg" },
  { image: "/g14.jpg" },
  { image: "/g15.jpg" },
  { image: "/g16.jpg" },
  { image: "/g17.jpg" },
  { image: "/g18.jpg" },
  { image: "/g19.jpg" },
  { image: "/g20.jpg" },
  { image: "/g21.jpg" },
  { image: "/g22.jpg" },
  { image: "/g23.jpg" },
  { image: "/g24.jpg" },
  { image: "/g25.jpg" },
  { image: "/g26.jpg" },
  { image: "/g27.jpg" },
  { image: "/g28.jpg" },
  { image: "/g29.jpg" },
  { image: "/g30.jpg" },
  { image: "/g31.jpg" },
  { image: "/g32.jpg" },
  { image: "/g33.jpg" },
  { image: "/g34.jpg" },
  { image: "/g35.jpg" },
  { image: "/g36.jpg" },
  { image: "/g18.jpg" },
  { image: "/g21.jpg" },
  { image: "/g37.jpg" },
  { image: "/g38.jpg" },
  { image: "/g39.jpg" },
  { image: "/g25.jpg" },
];

export default function Home() {
  const bentoSectionRef = useRef(null);

  const scrollToBento = () => {
    bentoSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      {/* Hero section with space background */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Space background contained within this section */}
        <div className="absolute inset-0">
          <SpaceBackground />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="absolute top-5 text-5xl md:text-lg font-bold mb-6">
            Bleep
          </h1>

          {/* Main center image */}
          <div className="relative w-64 h-64 mb-12">
            {/* Glowing effect under the image */}

            <Image
              src="/logo3.png"
              alt="Main character"
              width={250}
              height={250}
              className="relative z-10"
            />
          </div>

          {/* 3 small image links */}
          <div className="flex space-x-8 mb-16 pt-14">
            <Link
              href="https://x.com/BleepCto"
              className="transform hover:scale-110 transition-transform"
            >
              <div className="relative w-5 h-5 overflow-hidden ">
                <Image
                  src="/X.svg"
                  alt="Link 1"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <Link
              href="https://t.me/Bleepcoin"
              target="_blank"
              className="transform hover:scale-110 transition-transform"
            >
              <div className="relative w-5 h-5  overflow-hidden ">
                <Image
                  src="/Telegram.svg"
                  target="_blank"
                  alt="Link 2"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <Link
              href="https://dexscreener.com/solana/8cxzvf9taanxf72a2bth5vjtyr5pkrgqosx1xj1gvvpv"
              target="_blank"
              className="transform hover:scale-110 transition-transform"
            >
              <div className="relative w-5 h-5  overflow-hidden ">
                <Image
                  src="/Dexscreener.svg"
                  alt="Link 3"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          </div>

          {/* Scroll down indicator */}
          <button
            onClick={scrollToBento}
            className="animate-bounce bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
            aria-label="Scroll to meme gallery"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </section>

      <section className="relative bg-green-800 py-24 overflow-hidden">
        {/* Overlapping Marquees as background */}
        <div className="absolute inset-0 z-0">
          <div className="marquee-container">
            {/* First row - positioned at different angles and positions */}
            <div
              className="marquee-row"
              style={{ top: "0%", transform: "rotate(-5deg)" }}
            >
              <Marquee speed={80} gradient={false}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <img
                    key={`row1-${item}`}
                    src="/beep2.png"
                    alt="Beep"
                    className="h-48 mx-8 opacity-15"
                  />
                ))}
              </Marquee>
            </div>

            {/* Second row */}
            <div
              className="marquee-row"
              style={{ top: "20%", transform: "rotate(2deg)" }}
            >
              <Marquee direction="right" speed={60} gradient={false}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <img
                    key={`row2-${item}`}
                    src="/beep2.png"
                    alt="Beep"
                    className="h-64 mx-8 opacity-15"
                  />
                ))}
              </Marquee>
            </div>

            {/* Third row */}
            <div
              className="marquee-row"
              style={{ top: "45%", transform: "rotate(-3deg)" }}
            >
              <Marquee speed={70} gradient={false}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <img
                    key={`row3-${item}`}
                    src="/beep2.png"
                    alt="Beep"
                    className="h-56 mx-8 opacity-15"
                  />
                ))}
              </Marquee>
            </div>

            {/* Fourth row */}
            <div
              className="marquee-row"
              style={{ top: "70%", transform: "rotate(4deg)" }}
            >
              <Marquee direction="right" speed={65} gradient={false}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <img
                    key={`row4-${item}`}
                    src="/beep2.png"
                    alt="Beep"
                    className="h-60 mx-8 opacity-15"
                  />
                ))}
              </Marquee>
            </div>
          </div>
        </div>

        {/* Content overlay */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Welcome to Bleep
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
            Join our community and explore the world of Bleep
          </p>
          <a
            href="https://dexscreener.com/solana/8cxzvf9taanxf72a2bth5vjtyr5pkrgqosx1xj1gvvpv"
            target="_blank"
          >
            <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full transition-all">
              Learn More
            </button>
          </a>
        </div>
      </section>

      {/* Bento grid section */}
      <section ref={bentoSectionRef} className="min-h-screen bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <BentoGrid items={memeItems} />
        </div>
      </section>
    </main>
  );
}
