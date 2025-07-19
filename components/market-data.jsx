import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getTokenData, formatPrice, formatMarketCap, formatVolume } from "@/lib/api"
import { TrendingUp, TrendingDown } from "lucide-react"

export async function MarketData() {
  const tokenData = await getTokenData()

  if (!tokenData) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <Card className="bg-white border-yellow-200 shadow-md">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-gray-600">Price</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-500">Loading...</div>
            <div className="text-sm text-red-500">Fetching chaos</div>
          </CardContent>
        </Card>
        {/* Repeat for other cards */}
      </div>
    )
  }

  const priceChangeColor = tokenData.priceChange.h24 >= 0 ? "text-green-500" : "text-red-500"
  const priceChangeIcon =
    tokenData.priceChange.h24 >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      <Card className="bg-white border-yellow-200 shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm text-gray-600">Price</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-yellow-600">${formatPrice(tokenData.priceUsd)}</div>
          <div className={`text-sm flex items-center gap-1 ${priceChangeColor}`}>
            {priceChangeIcon}
            {tokenData.priceChange.h24.toFixed(2)}% (24h)
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border-yellow-200 shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm text-gray-600">Market Cap</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-blue-600">{formatMarketCap(tokenData.fdv)}</div>
          <div className="text-sm text-gray-600">Fully diluted</div>
        </CardContent>
      </Card>

      <Card className="bg-white border-yellow-200 shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm text-gray-600">24h Volume</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-orange-500">{formatVolume(tokenData.volume.h24)}</div>
          <div className="text-sm text-gray-600">Trading volume</div>
        </CardContent>
      </Card>

      <Card className="bg-white border-yellow-200 shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm text-gray-600">24h Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-green-500">{tokenData.txns.h24.buys + tokenData.txns.h24.sells}</div>
          <div className="text-sm text-gray-600">
            {tokenData.txns.h24.buys} buys / {tokenData.txns.h24.sells} sells
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
