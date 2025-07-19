import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Moon,
  TrendingUp,
  DollarSign,
  BarChart3,
  Target,
  Activity,
  Brain,
  MessageCircle,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { getTokenData, formatPrice, formatVolume } from "@/lib/api";
import Link from "next/link";

export default async function ChartPage() {
  const tokenData = await getTokenData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      {/* Navigation */}
      <Navigation currentPage="chart" />

      {/* Header */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <Badge className="mb-6 bg-green-600/20 text-green-400 border-green-600/30 text-lg px-4 py-2">
            📈 LIVE TRADING - Never Sleeps
          </Badge>

          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            $SLEEPLESS
            <br />
            Live Chart
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Watch the most insomniac token in crypto history. It never rests,
            and neither will your portfolio anxiety.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          <Card className="bg-gradient-to-r from-green-900/20 to-emerald-800/20 border-green-600/30 text-center">
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-green-400">
                {tokenData
                  ? `$${formatPrice(tokenData.priceUsd)}`
                  : "Loading..."}
              </div>
              <div className="text-sm text-gray-400">Current Price</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-red-900/20 to-red-800/20 border-red-600/30 text-center">
            <CardContent className="pt-4">
              <div
                className={`text-2xl font-bold ${
                  tokenData?.priceChange.h24 >= 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {tokenData
                  ? `${
                      tokenData.priceChange.h24 >= 0 ? "+" : ""
                    }${tokenData.priceChange.h24.toFixed(2)}%`
                  : "Loading..."}
              </div>
              <div className="text-sm text-gray-400">24h Change</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 border-blue-600/30 text-center">
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-blue-400">
                {tokenData ? formatVolume(tokenData.volume.h24) : "Loading..."}
              </div>
              <div className="text-sm text-gray-400">24h Volume</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 border-purple-600/30 text-center">
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-purple-400">
                {tokenData
                  ? tokenData.txns.h24.buys + tokenData.txns.h24.sells
                  : "Loading..."}
              </div>
              <div className="text-sm text-gray-400">24h Transactions</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Chart Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="dextools" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-black/40 border border-purple-800/30">
              <TabsTrigger
                value="dextools"
                className="data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-400"
              >
                DEXTools Chart
              </TabsTrigger>
              <TabsTrigger
                value="dexscreener"
                className="data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-400"
              >
                DEXScreener
              </TabsTrigger>
              <TabsTrigger
                value="analysis"
                className="data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-400"
              >
                Analysis
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dextools" className="mt-6">
              <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-center text-purple-400 flex items-center justify-center gap-2">
                    <TrendingUp className="h-6 w-6" />
                    DEXTools Professional Chart
                  </CardTitle>
                  <p className="text-center text-gray-400">
                    Real-time price action that'll keep you awake at night
                    (literally)
                  </p>
                </CardHeader>
                <CardContent className="p-2">
                  <div className="w-full overflow-hidden rounded-lg">
                    <iframe
                      id="dextools-widget"
                      title="DEXTools Trading Chart"
                      width="100%"
                      height="600"
                      src="https://www.dextools.io/widget-chart/en/solana/pe-light/HtmCNaEGiZiafkaPM1AV639V1cgHZQPeTHb9o69WQSGc?theme=dark&chartType=2&chartResolution=30&drawingToolbars=true"
                      className="border-0 rounded-lg"
                      style={{ minWidth: "300px" }}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="dexscreener" className="mt-6">
              <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-center text-blue-400 flex items-center justify-center gap-2">
                    <BarChart3 className="h-6 w-6" />
                    DexScreener Alternative View
                  </CardTitle>
                  <p className="text-center text-gray-400">
                    Another perspective on our chaotic price movements
                  </p>
                </CardHeader>
                <CardContent className="p-2">
                  <div className="w-full overflow-hidden rounded-lg bg-gray-800/50 flex items-center justify-center h-[600px]">
                    <div className="text-center">
                      <BarChart3 className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-blue-400 mb-2">
                        DexScreener Chart
                      </h3>
                      <p className="text-gray-400 mb-4">
                        View our token on DexScreener
                      </p>
                      <Link
                        href="https://dexscreener.com/solana/htmcnaegiziafkapm1av639v1cghzqpethb9o69wqsgc"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black bg-transparent"
                        >
                          View on DexScreener
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analysis" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-purple-400 flex items-center gap-2">
                      <Activity className="h-6 w-6" />
                      Technical Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">RSI (14)</span>
                      <Badge className="bg-red-600/20 text-red-400 border-red-600/30">
                        Oversold (23)
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">MACD</span>
                      <Badge className="bg-red-600/20 text-red-400 border-red-600/30">
                        Bearish
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Moving Average (50)</span>
                      <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30">
                        Neutral
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Volume Trend</span>
                      <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
                        Increasing
                      </Badge>
                    </div>
                    <div className="mt-6 p-4 bg-purple-900/20 rounded-lg border border-purple-600/30">
                      <h4 className="text-purple-400 font-semibold mb-2">
                        AI Analysis
                      </h4>
                      <p className="text-gray-300 text-sm">
                        "This token exhibits classic signs of sleep deprivation
                        - erratic movements, unpredictable behavior, and a
                        tendency to crash at random times. Technical indicators
                        suggest it needs a nap."
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-green-400 flex items-center gap-2">
                      <Target className="h-6 w-6" />
                      Price Targets
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Resistance 1</span>
                        <span className="text-red-400 font-mono">
                          $0.00000069
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Resistance 2</span>
                        <span className="text-red-400 font-mono">
                          $0.00000420
                        </span>
                      </div>
                      <div className="flex justify-between items-center font-bold">
                        <span className="text-purple-400">Current Price</span>
                        <span className="text-purple-400 font-mono">
                          $0.00000042
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Support 1</span>
                        <span className="text-green-400 font-mono">
                          $0.00000013
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Support 2</span>
                        <span className="text-green-400 font-mono">
                          $0.00000001
                        </span>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-yellow-900/20 rounded-lg border border-yellow-600/30">
                      <h4 className="text-yellow-400 font-semibold mb-2">
                        ⚠️ Disclaimer
                      </h4>
                      <p className="text-gray-300 text-sm">
                        These price targets were calculated by a sleep-deprived
                        developer at 3AM. Accuracy not guaranteed. DYOR or
                        don't, we're too tired to care.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Trading Analysis */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-6xl mx-auto bg-gradient-to-r from-purple-900/20 to-pink-800/20 border-purple-600/30">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-400 flex items-center gap-3">
              <Brain className="h-8 w-8" />
              📉 Trading Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <blockquote className="text-xl text-gray-300 italic mb-4 border-l-4 border-purple-400 pl-6">
              "This token is like me at 4AM — awake, confused, and making
              terrible decisions."
            </blockquote>
            <p className="text-gray-400">
              – A real trader who probably should sleep
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link
                href="https://www.dextools.io/app/en/solana/pair-explorer/HtmCNaEGiZiafkaPM1AV639V1cgHZQPeTHb9o69WQSGc?t=1752940960176"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black bg-transparent"
                >
                  🔗 View on DEXTools
                </Button>
              </Link>
              <Link
                href="https://dexscreener.com/solana/htmcnaegiziafkapm1av639v1cghzqpethb9o69wqsgc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black bg-transparent"
                >
                  🔗 View on DexScreener
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Ready to Join CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">
            {" "}
            Ready to join the insomnia?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-green-900/20 to-emerald-800/20 border-green-600/30 text-center">
              <CardContent className="pt-6">
                <h4 className="text-2xl font-bold text-green-400 mb-2">
                  Buy $SLEEPLESS
                </h4>
                <p className="text-gray-300 mb-4">
                  The more you buy, the less you'll sleep.
                </p>
                <Link
                  href="https://www.dextools.io/app/en/solana/pair-explorer/HtmCNaEGiZiafkaPM1AV639V1cgHZQPeTHb9o69WQSGc?t=1752940960176"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-green-600 hover:bg-green-700 w-full">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Buy Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-900/20 to-cyan-800/20 border-blue-600/30 text-center">
              <CardContent className="pt-6">
                <h4 className="text-2xl font-bold text-blue-400 mb-2">
                  Join X Community
                </h4>
                <p className="text-gray-300 mb-4">
                  Follow our X community for 2AM chaos and sleep-deprived
                  updates.
                </p>
                <Link
                  href="https://x.com/i/communities/1946496675012297115"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Join X Community
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-800/30 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Moon className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                $SLEEPLESS
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Chart data updates in real-time. Your sleep schedule doesn't.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
