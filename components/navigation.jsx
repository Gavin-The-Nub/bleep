"use client";

import { Button } from "@/components/ui/button";
import { Coffee, BarChart3, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Navigation({ currentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="border-b border-yellow-200 backdrop-blur-sm bg-white/95 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            onClick={closeMenu}
          >
            <Image
              src="/sleepless-logo.png"
              alt="Sleepless Coin Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
              $SLEEPLESS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-6">
              <Link
                href="/"
                className={`hover:text-yellow-600 transition-colors text-gray-700 ${
                  currentPage === "home" ? "text-yellow-600 font-semibold" : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/roadmap"
                className={`hover:text-yellow-600 transition-colors text-gray-700 ${
                  currentPage === "roadmap"
                    ? "text-yellow-600 font-semibold"
                    : ""
                }`}
              >
                Roadmap
              </Link>
              <Link
                href="/whitepaper"
                className={`hover:text-yellow-600 transition-colors text-gray-700 ${
                  currentPage === "whitepaper"
                    ? "text-yellow-600 font-semibold"
                    : ""
                }`}
              >
                Whitepaper
              </Link>
            </div>

            <div className="flex items-center space-x-2">
              <Link href="/chart">
                <Button
                  variant="outline"
                  className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white bg-transparent"
                >
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Chart
                </Button>
              </Link>
              <Link
                href="https://www.dextools.io/app/en/solana/pair-explorer/HtmCNaEGiZiafkaPM1AV639V1cgHZQPeTHb9o69WQSGc?t=1752940960176"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                  <Coffee className="h-4 w-4 mr-2" />
                  Buy Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-gray-700 hover:text-yellow-600 hover:bg-yellow-50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <>
            {/* Overlay (clickable, behind menu) */}
            <div
              className="fixed inset-0 bg-black/20 z-40 md:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />
            {/* Mobile Navigation Menu (panel above overlay) */}
            <div className="fixed top-0 left-0 right-0 mt-16 pb-4 border-t border-yellow-200 bg-white z-50 md:hidden shadow-lg">
              <div className="flex flex-col space-y-4 pt-4 px-4">
                {/* Navigation Links */}
                <div className="flex flex-col space-y-3">
                  <Link
                    href="/"
                    className={`text-lg hover:text-yellow-600 transition-colors text-gray-700 ${
                      currentPage === "home"
                        ? "text-yellow-600 font-semibold"
                        : ""
                    }`}
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                  <Link
                    href="/roadmap"
                    className={`text-lg hover:text-yellow-600 transition-colors text-gray-700 ${
                      currentPage === "roadmap"
                        ? "text-yellow-600 font-semibold"
                        : ""
                    }`}
                    onClick={closeMenu}
                  >
                    Roadmap
                  </Link>
                  <Link
                    href="/whitepaper"
                    className={`text-lg hover:text-yellow-600 transition-colors text-gray-700 ${
                      currentPage === "whitepaper"
                        ? "text-yellow-600 font-semibold"
                        : ""
                    }`}
                    onClick={closeMenu}
                  >
                    Whitepaper
                  </Link>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-3 pt-4 border-t border-yellow-100">
                  <Link href="/chart" onClick={closeMenu}>
                    <Button
                      variant="outline"
                      className="w-full border-green-500 text-green-600 hover:bg-green-500 hover:text-white bg-transparent"
                    >
                      <BarChart3 className="h-4 w-4 mr-2" />
                      View Chart
                    </Button>
                  </Link>
                  <Link
                    href="https://www.dextools.io/app/en/solana/pair-explorer/HtmCNaEGiZiafkaPM1AV639V1cgHZQPeTHb9o69WQSGc?t=1752940960176"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                  >
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                      <Coffee className="h-4 w-4 mr-2" />
                      Buy Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
