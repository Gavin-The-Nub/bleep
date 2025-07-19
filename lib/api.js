export async function getTokenData() {
    try {
      const res = await fetch(
        "https://api.dexscreener.com/latest/dex/pairs/solana/HtmCNaEGiZiafkaPM1AV639V1cgHZQPeTHb9o69WQSGc",
        {
          next: { revalidate: 30 }, // Cache for 30 seconds
        },
      )
  
      if (!res.ok) {
        throw new Error("Failed to fetch token data")
      }
  
      const data = await res.json()
      return data.pair
    } catch (error) {
      console.error("Error fetching token data:", error)
      return null
    }
  }
  
  export function formatPrice(price) {
    const num = Number.parseFloat(price)
    if (num < 0.000001) {
      return num.toExponential(2)
    }
    return num.toFixed(8)
  }
  
  export function formatMarketCap(marketCap) {
    if (marketCap >= 1000000) {
      return `$${(marketCap / 1000000).toFixed(2)}M`
    } else if (marketCap >= 1000) {
      return `$${(marketCap / 1000).toFixed(2)}K`
    }
    return `$${marketCap.toFixed(2)}`
  }
  
  export function formatVolume(volume) {
    if (volume >= 1000000) {
      return `$${(volume / 1000000).toFixed(2)}M`
    } else if (volume >= 1000) {
      return `$${(volume / 1000).toFixed(2)}K`
    }
    return `$${volume.toFixed(2)}`
  }
  