"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Coffee, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { useState } from "react";

export default function WhitepaperPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleDownloadClick = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      {/* Navigation */}
      <Navigation currentPage="whitepaper" />

      {/* Header */}
      <section className="container mx-auto px-2 sm:px-4 py-12 sm:py-20 text-center">
        <Badge className="mb-6 bg-red-600/20 text-red-400 border-red-600/30 text-base sm:text-lg px-3 sm:px-4 py-2">
          📄 Definitely Not Financial Advice
        </Badge>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent break-words">
          The Sleepless
          <br />
          Whitepaper
        </h1>

        <p className="text-lg sm:text-2xl md:text-3xl mb-8 text-purple-300 max-w-2xl sm:max-w-4xl mx-auto">
          A 44-page document written under heavy caffeine influence explaining
          why we didn't need a whitepaper.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-yellow-400 mb-8">
          <Coffee className="h-6 w-6" />
          <span className="text-base sm:text-lg">
            Powered by 47 cups of coffee and pure delusion
          </span>
        </div>
      </section>

      {/* Warning */}
      <section className="container mx-auto px-2 sm:px-4 py-6 sm:py-8">
        <Card className="max-w-full sm:max-w-4xl mx-auto bg-gradient-to-r from-red-900/20 to-orange-800/20 border-red-600/30">
          <CardContent className="pt-4 sm:pt-6">
            <div className="flex flex-col sm:flex-row items-center gap-3 mb-4 text-center sm:text-left">
              <AlertTriangle className="h-8 w-8 text-red-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-red-400">
                Disclaimer
              </h3>
            </div>
            <p className="text-gray-300 text-base sm:text-lg">
              This whitepaper contains 73% memes, 15% caffeine-induced rambling,
              10% actual crypto terms we googled, and 2% genuine confusion about
              what we're doing. Read at your own risk of losing brain cells.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Table of Contents */}
      <section className="container mx-auto px-2 sm:px-4 py-10 sm:py-16">
        <div className="max-w-full sm:max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center flex items-center justify-center gap-3">
            <FileText className="h-8 w-8 sm:h-10 sm:w-10 text-purple-400" />
            Table of Contents
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm hover:bg-black/60 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="text-xl text-purple-400">
                  1. Intro to Sleeplessnomics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  The revolutionary economic model based on sleep deprivation
                  and poor life choices.
                </p>
                <Badge className="mt-3 bg-purple-600/20 text-purple-400 border-purple-600/30">
                  Pages 1-8
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm hover:bg-black/60 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="text-xl text-red-400">
                  2. Tech Specs (What specs?)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Technical documentation that's mostly just ASCII art of coffee
                  cups.
                </p>
                <Badge className="mt-3 bg-red-600/20 text-red-400 border-red-600/30">
                  Pages 9-15
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm hover:bg-black/60 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="text-xl text-green-400">
                  3. Tokenomics (Just vibes)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Complex mathematical formulas that somehow always equal "moon
                  soon."
                </p>
                <Badge className="mt-3 bg-green-600/20 text-green-400 border-green-600/30">
                  Pages 16-23
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm hover:bg-black/60 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="text-xl text-yellow-400">
                  4. Use Cases (lol)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Practical applications including "digital insomnia" and
                  "blockchain anxiety."
                </p>
                <Badge className="mt-3 bg-yellow-600/20 text-yellow-400 border-yellow-600/30">
                  Pages 24-30
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm hover:bg-black/60 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="text-xl text-blue-400">
                  5. Team (Probably hallucinating)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Meet our team of sleep-deprived developers and their imaginary
                  friends.
                </p>
                <Badge className="mt-3 bg-blue-600/20 text-blue-400 border-blue-600/30">
                  Pages 31-37
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm hover:bg-black/60 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="text-xl text-orange-400">
                  6. Legal Section (Read at your own risk)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Legal disclaimers written by our lawyer (ChatGPT) at 4AM.
                </p>
                <Badge className="mt-3 bg-orange-600/20 text-orange-400 border-orange-600/30">
                  Pages 38-42
                </Badge>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 sm:mt-8 bg-gradient-to-r from-purple-900/20 to-pink-800/20 border-purple-600/30">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-center text-purple-400">
                7. Conclusion (It's not that deep)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 text-base sm:text-lg mb-4">
                A profound 2-page summary that basically says "YOLO" in academic
                language.
              </p>
              <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/30 text-base sm:text-lg px-3 sm:px-4 py-2">
                Pages 43-44
              </Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Download Section */}
      <section className="container mx-auto px-2 sm:px-4 py-10 sm:py-16">
        <div className="max-w-full sm:max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">
            Download the Chaos
          </h2>
          <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">
            Get your copy of the most unproductive whitepaper in crypto history.
          </p>

          <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm p-4 sm:p-8 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 sm:mb-6">
              <FileText className="h-12 w-12 sm:h-16 sm:w-16 text-purple-400" />
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-2xl font-bold text-purple-400">
                  sleepless-whitepaper.pdf
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  44 pages • 2.3MB • 100% Nonsense
                </p>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
              <p>
                Contains: Lorem ipsum, memes, coffee stains, and existential
                dread
              </p>
              <p>Actual useful information: 0%</p>
              <p> Entertainment value: Questionable</p>
            </div>

            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-base sm:text-xl px-6 sm:px-12 py-4 sm:py-6"
              onClick={handleDownloadClick}
            >
              <Download className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
              Download Whitepaper
            </Button>
          </Card>

          <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8">
            By downloading this whitepaper, you acknowledge that you're about to
            waste 44 pages worth of time and possibly question your life
            choices.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-2 sm:px-4 py-12 sm:py-20">
        <div className="max-w-full sm:max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">
            Still want to join this mess?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/roadmap">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black text-base sm:text-xl px-6 sm:px-12 py-4 sm:py-6 bg-transparent"
              >
                View Roadmap
              </Button>
            </Link>
            <Link
              href="https://www.dextools.io/app/en/solana/pair-explorer/HtmCNaEGiZiafkaPM1AV639V1cgHZQPeTHb9o69WQSGc?t=1752940960176"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black text-base sm:text-xl px-6 sm:px-12 py-4 sm:py-6 font-bold shadow-md border-0"
              >
                Buy Tokens
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Modal for download error */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs w-full text-center">
            <h3 className="text-xl font-bold text-red-600 mb-2">
              ERROR: Sleep not found.
            </h3>
            <p className="text-gray-700 mb-4">
              Try again after 72 more hours of grinding.
            </p>
            <button
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded font-semibold focus:outline-none"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
