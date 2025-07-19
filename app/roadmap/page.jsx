import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Zap, Target, Flame, Sparkles } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import Image from "next/image";

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-yellow-50 to-yellow-100 text-gray-900">
      {/* Navigation */}
      <Navigation currentPage="roadmap" />

      {/* Header */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-6 bg-yellow-100 text-yellow-700 border-yellow-200 text-lg px-4 py-2">
          🗺️ Navigation to Nowhere
        </Badge>

        <div className="flex justify-center mb-6">
          <Image
            src="/sleepless-logo.png"
            alt="Sleepless Coin Logo"
            width={100}
            height={100}
            className="rounded-full shadow-lg"
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-yellow-600 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
          Roadmap to
          <br />
          Insomnia
        </h1>

        <p className="text-2xl md:text-3xl mb-8 text-yellow-700">
          Our carefully planned journey to achieve absolutely nothing. Each
          milestone represents a new level of sleeplessness.
        </p>
      </section>

      {/* Current Progress */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-green-100 border-green-200 shadow-md">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-green-600 flex items-center justify-center gap-3">
              <Target className="h-8 w-8" />
              🎯 Current Progress: Still Sleepless
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <Progress value={5} className="mb-4 h-4" />
            <p className="text-xl text-gray-700 mb-4">
              We're proud to announce we're still completely sleepless! 6 hours
              in and zero rest achieved.
            </p>
            <Badge className="bg-green-100 text-green-600 border-green-200 text-lg px-4 py-2">
              5% Complete • ∞% Insomniac
            </Badge>
          </CardContent>
        </Card>
      </section>

      {/* Roadmap Stages */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Stage 1 */}
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <CardTitle className="text-3xl font-bold text-blue-600 flex items-center gap-3">
                  <Sparkles className="h-8 w-8" />
                  🌀 Stage 1: Enter the Void
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Launch with zero expectations ✅</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Tweet vague inspirational quotes at 2AM</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Miss every deadline</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Launch first bug by accident</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stage 2 */}
          <Card className="bg-gradient-to-r from-red-50 to-red-100 border-red-200 shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <CardTitle className="text-3xl font-bold text-red-600 flex items-center gap-3">
                  <Flame className="h-8 w-8" />
                  🔥 Stage 2: Burnout Protocol
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Host an AMA and forget to show up</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Create a DAO with no decisions</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Launch meditation token (and forget about it)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Let community run wild (literally)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stage 3 */}
          <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200 shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <CardTitle className="text-3xl font-bold text-yellow-600 flex items-center gap-3">
                  <Zap className="h-8 w-8" />
                  💥 Stage 3: Anti-Plan Plan
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Tear up roadmap during livestream</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Replace dev team with chatbots</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Announce movie trailer with no movie</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Start a TikTok dance challenge no one joins</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stage 4 */}
          <Card className="bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200 shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <CardTitle className="text-3xl font-bold text-orange-600 flex items-center gap-3">
                  <Target className="h-8 w-8" />
                  🌌 Stage 4: Legacy of the Sleepless
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Drop merch that says "Still Awake"</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Announce v2. Never launch it</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Sleep through bull market</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Disappear. Reappear randomly.</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Achievement */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-50 to-orange-100 border-yellow-200 text-center shadow-md">
          <CardContent className="pt-8">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-3xl font-bold text-yellow-600 mb-4">
              Achievement Unlocked
            </h3>
            <p className="text-xl text-gray-700">
              Most Sleep-Deprived Roadmap in Crypto History
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Ready to join the chaos?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://www.dextools.io/app/en/solana/pair-explorer/HtmCNaEGiZiafkaPM1AV639V1cgHZQPeTHb9o69WQSGc?t=1752940960176"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white text-xl px-12 py-6"
              >
                Buy Tokens
              </Button>
            </Link>
            <Link href="/whitepaper">
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white text-xl px-12 py-6 bg-transparent"
              >
                View Whitepaper
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
