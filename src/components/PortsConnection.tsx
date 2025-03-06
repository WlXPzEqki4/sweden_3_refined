// "use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

interface InvestmentEntry {
  id: string
  logo: string
  logoUrl?: string
  title: string
  description: string
  fullDescription: string
  flags?: ("uae" | "sweden")[]
  position?: string
  coordinates?: {
    uae?: { x: number; y: number }
    sweden?: { x: number; y: number }
  }
}

const FlagIcon = ({ country }: { country: "uae" | "sweden" }) => {
  if (country === "uae") {
    return (
      <svg width="16" height="12" viewBox="0 0 640 480" className="inline-block" aria-label="UAE flag">
        <path fill="#00732f" d="M0 0h640v160H0z" />
        <path fill="#fff" d="M0 160h640v160H0z" />
        <path d="M0 320h640v160H0z" />
        <path fill="red" d="M0 0h220v480H0z" />
      </svg>
    )
  }
  return (
    <svg width="16" height="12" viewBox="0 0 640 480" className="inline-block" aria-label="Sweden flag">
      <path fill="#006aa7" d="M0 0h640v480H0z" />
      <path fill="#fecc00" d="M0 192h640v96H0z" />
      <path fill="#fecc00" d="M176 0h96v480h-96z" />
    </svg>
  )
}

// Updated coordinates to be directly on the country maps
const investments: InvestmentEntry[] = [
  {
    id: "gothenburg",
    logo: "Gothenburg",
    logoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images.jpg-WQjzPL7qYbwC6iUBuyHAohFDI3sGmR.jpeg",
    title: "Gothenburg",
    description:
      "As Scandinavia's largest port, Gothenburg handles approximately 60% of Sweden's container traffic and serves as the country's primary maritime gateway.",
    fullDescription:
      "As Scandinavia's (region in Northern Europe consisting of Norway, Sweden and Denmark) largest port, Gothenburg handles approximately 60% of Sweden's container traffic and serves as the country's primary maritime gateway. Located on Sweden's western coast, the Port of Gothenburg offers direct access to the North Sea and Atlantic shipping routes. With advanced facilities capable of accommodating the largest container vessels, it functions as a critical hub for Swedish exports, particularly vehicles from nearby Volvo factories. The port's strategic importance is enhanced by excellent rail and road connections to the rest of Sweden and Norway, making it the logistical heartbeat of Swedish international trade.",
    coordinates: {
      sweden: { x: 140, y: 280 },
    },
  },
  {
    id: "malmo",
    logo: "Malmö",
    logoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Malmo-lwHuJNplsCGvOqYDw7dGUzoDfd69bf.png",
    title: "Malmö",
    description:
      "The Port of Malmö occupies a strategic position in southern Sweden, facing Denmark across the narrow Öresund Strait.",
    fullDescription:
      "The Port of Malmö occupies a strategic position in southern Sweden, facing Denmark across the narrow Öresund Strait. This location makes it a vital connection point between Scandinavia and continental Europe, especially since the completion of the Öresund Bridge. Malmö specializes in RoRo (Roll-on/Roll-off) operations and vehicle imports, with dedicated terminals for car manufacturers. The port has undergone significant modernization in recent decades, developing into a comprehensive maritime center with facilities for bulk cargo, containers, and oil products. Its integration with CMP (Copenhagen Malmö Port) has strengthened its position as a key Baltic Sea logistics node.",
    coordinates: {
      sweden: { x: 160, y: 340 },
    },
  },
  {
    id: "stockholm",
    logo: "Stockholm",
    logoUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stockholm.jpg-BcGuEFRo0lABw2EJ0dRH5aRhMzFNQS.jpeg",
    title: "Stockholm",
    description: "The Port of Stockholm serves as the maritime gateway to Sweden's capital and most populous city.",
    fullDescription:
      "The Port of Stockholm serves as the maritime gateway to Sweden's capital and most populous city. Comprising several harbor areas spread throughout Stockholm's archipelago, it primarily handles passenger traffic with regular ferry services to Finland, Estonia, and other Baltic destinations, welcoming over 12 million passengers annually. While smaller in cargo volume than Gothenburg, Stockholm's port specializes in serving the consumption needs of the metropolitan region with facilities for containers, bulk goods, and petroleum products. Its scenic harbor areas are integrated into the urban fabric, balancing commercial maritime activities with Stockholm's identity as a city built on water.",
    coordinates: {
      sweden: { x: 210, y: 265 },
    },
  },
]

const countryImages = {
  sweden: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SE-DM6vGWxobocAEyJ4YxiYRet775n6Yv.png",
}

const MapConnection = () => {
  const [selectedEntry, setSelectedEntry] = useState<InvestmentEntry | null>(null)
  const [hoveredEntry, setHoveredEntry] = useState<InvestmentEntry | null>(null)

  const renderConnections = (entry: InvestmentEntry) => {
    if (!entry.coordinates) return null

    const isHighlighted = hoveredEntry?.id === entry.id || selectedEntry?.id === entry.id
    const interactionProps = {
      onMouseEnter: () => setHoveredEntry(entry),
      onMouseLeave: () => setHoveredEntry(null),
      onClick: () => setSelectedEntry(entry === selectedEntry ? null : entry),
      style: { cursor: "pointer" },
    }

    return (
      <g key={`connection-${entry.id}`}>
        {entry.coordinates.sweden && (
          <g {...interactionProps}>
            <circle
              key={`sweden-point-${entry.id}`}
              cx={entry.coordinates.sweden.x}
              cy={entry.coordinates.sweden.y}
              r={isHighlighted ? "8" : "5"}
              fill={isHighlighted ? "#f97316" : "#94a3b8"}
              className="transition-all duration-300"
            />
            {isHighlighted && (
              <text
                x={entry.coordinates.sweden.x + 12}
                y={entry.coordinates.sweden.y}
                fontSize="10"
                fill="#f97316"
                fontWeight="bold"
              >
                {entry.title}
              </text>
            )}
          </g>
        )}
      </g>
    )
  }

  return (
    <div className="max-w-[1200px] mx-auto p-4 md:p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Mapping UAE's Port Presence in Sweden</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Exploring strategic maritime connections and port infrastructure between the UAE and Sweden
        </p>
      </div>

      <div className="bg-card rounded-xl shadow-sm border p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Visualization - Full width on mobile, left column on desktop */}
          <div className="order-1 lg:order-none">
            <Card className="h-[500px] overflow-hidden">
              <CardContent className="p-0 h-full">
                <div className="relative h-full bg-accent/30 rounded-lg overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 400 400" aria-label="Swedish ports map">
                    {/* Background for better contrast */}
                    <rect x="0" y="0" width="400" height="400" fill="#f8fafc" />

                    {/* Centered Sweden Map */}
                    <g className="sweden-region">
                      <image
                        href={countryImages.sweden}
                        x="30"
                        y="50"
                        width="340"
                        height="300"
                        preserveAspectRatio="xMidYMid meet"
                        style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
                      />
                    </g>

                    {/* Render all connections */}
                    {investments.map((entry) => renderConnections(entry))}
                  </svg>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Investment Entries - Right column on desktop, scrollable list */}
          <div className="order-2 lg:order-none">
            <div className="space-y-4">
              {investments.map((entry) => {
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
                          <div className="flex items-center gap-2">
                            {entry.logoUrl ? (
                              <div className="w-16 h-12 mr-3 flex-shrink-0">
                                <img
                                  src={entry.logoUrl || "/placeholder.svg"}
                                  alt={`${entry.title}`}
                                  className="w-full h-full object-contain object-center"
                                />
                              </div>
                            ) : (
                              <span className="font-bold">{entry.logo}</span>
                            )}
                            <h3 className="font-bold">{entry.title}</h3>
                          </div>
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

export default MapConnection

