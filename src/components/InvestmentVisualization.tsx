"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

interface InvestmentData {
  id: string
  year: string
  title: string
  description: string
  fullDescription: string
  investments: {
    country: "uae" | "china" | "usa"
    amount: number
  }[]
}

// Updated flag components with CSS-based USA flag
const CountryFlag = ({ country }: { country: "uae" | "china" | "usa" }) => {
  if (country === "uae") {
    return (
      <div className="w-8 h-6 relative overflow-hidden rounded-sm shadow-sm">
        <div className="absolute h-1/3 w-full top-0 bg-[#00732f]"></div>
        <div className="absolute h-1/3 w-full top-1/3 bg-white"></div>
        <div className="absolute h-1/3 w-full top-2/3 bg-black"></div>
        <div className="absolute h-full w-1/4 left-0 bg-red-600"></div>
      </div>
    )
  }

  if (country === "china") {
    return (
      <div className="w-8 h-6 bg-[#DE2910] relative overflow-hidden rounded-sm shadow-sm flex items-center justify-center">
        <div className="text-yellow-300 text-xs">★</div>
      </div>
    )
  }

  // CSS-based USA flag
  return (
    <div className="w-8 h-6 relative overflow-hidden rounded-sm shadow-sm">
      {/* Red and white stripes */}
      <div className="absolute inset-0">
        {Array.from({ length: 13 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-full"
            style={{
              height: `${100 / 13}%`,
              top: `${i * (100 / 13)}%`,
              backgroundColor: i % 2 === 0 ? "#B22234" : "white",
            }}
          />
        ))}
      </div>

      {/* Blue field with stars */}
      <div className="absolute top-0 left-0 w-[40%] h-[53.85%] bg-[#3C3B6E] flex items-center justify-center">
        <div className="text-white text-[8px] font-bold">★★★</div>
      </div>
    </div>
  )
}

const investmentData: InvestmentData[] = [
  {
    id: "2022",
    year: "2022",
    title: "2022 Investments",
    description:
      "In 2022, UAE invested $53 billion globally, with significant allocations to the USA ($7 billion) and China ($3 billion).",
    fullDescription:
      "In 2022, the United Arab Emirates deployed $53 billion in foreign direct investment across global markets, representing a significant portion of their international capital allocation strategy. The United States received $7 billion in UAE investment, focusing primarily on technology, real estate, and financial services sectors. China received a smaller allocation of $3 billion, concentrated in infrastructure and manufacturing partnerships.",
    investments: [
      { country: "uae", amount: 53 },
      { country: "usa", amount: 7 },
      { country: "china", amount: 3 },
    ],
  },
  {
    id: "2023",
    year: "2023",
    title: "2023 Investments",
    description:
      "In 2023, UAE invested $44 billion globally, with increased allocation to China ($26 billion) and steady investment in the USA ($8 billion).",
    fullDescription:
      "In 2023, the United Arab Emirates allocated $44 billion to international investments, showing a strategic shift in their global portfolio. Most notably, investments in China surged dramatically to $26 billion, representing a significant pivot toward Asian markets. Meanwhile, investment in the United States saw a modest increase to $8 billion, maintaining the UAE's strong presence in North American markets.",
    investments: [
      { country: "uae", amount: 44 },
      { country: "china", amount: 26 },
      { country: "usa", amount: 8 },
    ],
  },
]

const InvestmentVisualization = () => {
  const [selectedEntry, setSelectedEntry] = useState<InvestmentData | null>(null)
  const [hoveredEntry, setHoveredEntry] = useState<InvestmentData | null>(null)

  const maxAmount = Math.max(...investmentData.flatMap((data) => data.investments.map((inv) => inv.amount)))

  const getBarHeight = (amount: number) => {
    return (amount / maxAmount) * 200 // 200px max height
  }

  // Updated to use solid colors as specified
  const getBarColor = (country: "uae" | "china" | "usa") => {
    switch (country) {
      case "uae":
        return "bg-[#00732F]" // Green
      case "china":
        return "bg-[#DE2910]" // Red
      case "usa":
        return "bg-[#3C3B6E]" // Blue
    }
  }

  return (
    <div className="max-w-[1200px] mx-auto p-4 md:p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">UAE Global Investment Portfolio</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          UAE invested $97 billion in 2022 and 2023 across global markets
        </p>
      </div>

      <div className="bg-card rounded-xl shadow-sm border p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Visualization */}
          <div className="order-1 lg:order-none">
            <Card className="h-[500px] overflow-hidden">
              <CardContent className="p-6 h-full">
                <div className="relative h-full">
                  <div className="absolute inset-0 flex justify-around">
                    {/* 2022 Section */}
                    <div className="flex flex-col items-center">
                      <div className="flex gap-4 h-[300px] items-end mb-8">
                        {investmentData[0].investments.map((inv) => (
                          <div
                            key={inv.country}
                            className="flex flex-col items-center gap-2"
                            onMouseEnter={() => setHoveredEntry(investmentData[0])}
                            onMouseLeave={() => setHoveredEntry(null)}
                          >
                            <span className="text-sm font-medium mb-1">${inv.amount}B</span>
                            <div
                              className={`w-16 ${getBarColor(inv.country)} transition-all duration-300 rounded-t`}
                              style={{ height: `${getBarHeight(inv.amount)}px` }}
                            />
                            <CountryFlag country={inv.country} />
                          </div>
                        ))}
                      </div>
                      <span className="text-lg font-semibold text-black mt-2">2022</span>
                    </div>

                    {/* 2023 Section */}
                    <div className="flex flex-col items-center">
                      <div className="flex gap-4 h-[300px] items-end mb-8">
                        {investmentData[1].investments.map((inv) => (
                          <div
                            key={inv.country}
                            className="flex flex-col items-center gap-2"
                            onMouseEnter={() => setHoveredEntry(investmentData[1])}
                            onMouseLeave={() => setHoveredEntry(null)}
                          >
                            <span className="text-sm font-medium mb-1">${inv.amount}B</span>
                            <div
                              className={`w-16 ${getBarColor(inv.country)} transition-all duration-300 rounded-t`}
                              style={{ height: `${getBarHeight(inv.amount)}px` }}
                            />
                            <CountryFlag country={inv.country} />
                          </div>
                        ))}
                      </div>
                      <span className="text-lg font-semibold text-black mt-2">2023</span>
                    </div>
                  </div>

                  {/* Source and Note - Moved further down */}
                  <div className="absolute bottom-2 left-0 right-0 text-center text-xs text-gray-500 pt-8 border-t">
                    <p className="italic mb-1">Note: Greenfield refers to projects on previously undeveloped land</p>
                    <p>Source: fDi Markets</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Details Panel remains the same */}
          <div className="order-2 lg:order-none">
            <div className="space-y-4">
              {investmentData.map((entry) => {
                const isSelected = selectedEntry?.id === entry.id
                const isHovered = hoveredEntry?.id === entry.id

                return (
                  <Card
                    key={entry.id}
                    className={`transition-all duration-300 ${
                      isSelected || isHovered
                        ? "border-primary bg-primary/5 shadow-md"
                        : "border-border hover:bg-accent/50"
                    }`}
                  >
                    <CardContent className="p-4">
                      <div
                        className="cursor-pointer"
                        onClick={() => setSelectedEntry(entry === selectedEntry ? null : entry)}
                        onMouseEnter={() => setHoveredEntry(entry)}
                        onMouseLeave={() => setHoveredEntry(null)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold">{entry.title}</h3>
                          <div className="flex items-center">
                            {isSelected ? (
                              <ChevronUp className="h-5 w-5 text-primary transition-transform" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform" />
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {isSelected ? entry.fullDescription : entry.description}
                        </p>

                        {isSelected && (
                          <div className="mt-4 pt-4 border-t">
                            <h4 className="font-semibold mb-2">Investment Breakdown</h4>
                            <div className="space-y-3">
                              {entry.investments.map((inv) => (
                                <div key={inv.country} className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <CountryFlag country={inv.country} />
                                    <span className="capitalize">
                                      {inv.country === "usa" ? "USA" : inv.country === "uae" ? "UAE" : "China"}
                                    </span>
                                  </div>
                                  <span className="font-semibold">${inv.amount} billion</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvestmentVisualization

