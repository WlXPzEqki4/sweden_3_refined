// "use client"

import { useState } from "react"
import { Info } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface InvestmentEntry {
  id: string
  logo: string
  logoUrl?: string
  title: string
  description: string
  flags: ("uae" | "sweden")[]
  position: string
  coordinates: {
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
    id: "azello",
    logo: "AZELLO",
    logoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4BDqeAp6GMfQxWaMUKIABIpho6sHEe.png",
    title: "Cleanergy/Azelio",
    description:
      "The UAE and Sweden have pursued joint ventures in industries of mutual interest. In energy and green technology, Abu Dhabi-based renewable energy company Masdar has collaborated with Swedish firms and institutions. For example, Masdar's R&D arm signed agreements with Sweden's Cleanergy/Azelio to develop cutting-edge thermal energy storage solutions",
    flags: ["uae", "sweden"],
    position: "top-[15%] left-[20%]",
    coordinates: {
      uae: { x: 200, y: 90 },
      sweden: { x: 165, y: 350 },
    },
  },
  {
    id: "alfuttaim",
    logo: "Al-Futtaim",
    logoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ww7PN4pkKUSAKYtEYjNDHS76cWTOuB.png",
    title: "Al-Futtaim",
    description:
      "Some UAE businesses maintain a commercial presence in Sweden through franchise partnerships. A prime example is the Al-Futtaim Group (the Dubai-based entity that operates H&M in the UAE) working closely with Sweden's H&M. While IKEA franchises a Swedish retail & technology concept, Al-Futtaim's successful operation of IKEA in the Gulf has led to frequent collaboration and knowledge exchange with the Swedish parent company - a cross-border business relationship spanning decades.",
    flags: ["uae", "sweden"],
    position: "top-[15%] right-[20%]",
    coordinates: {
      uae: { x: 260, y: 60 },
      sweden: { x: 200, y: 330 },
    },
  },
  {
    id: "ports",
    logo: "DP World",
    logoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e3t8PziBvV7xTPhyrYrXmuQbkMLpte.png",
    title: "Strategic Ports",
    description:
      "The UAE's strategic ports indirectly serve Swedish trade – for example, goods shipped between Sweden and Asia often pass through Jebel Ali Port (run by Dubai's DP World) before reaching Scandinavia, illustrating the UAE's importance in global supply chains.",
    flags: ["uae"],
    position: "top-[30%] left-[25%]",
    coordinates: {
      uae: { x: 235, y: 60 },
    },
  },
  {
    id: "adia",
    logo: "ADIA",
    logoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EuMELA4tiO2CK4iO84eMoyIO3EgVY4.png",
    title: "ADIA",
    description:
      "Abu Dhabi Investment Authority (ADIA), one of the UAE and the world's largest sovereign funds, often collaborates with Swedish financial firms on global deals. In 2023, ADIA's subsidiary Luxinva partnered with Stockholm-based private equity group EQT to acquire UK's Dechra Pharmaceuticals, with ADIA taking a 25% stake and EQT 75%. This kind of joint investment – UAE capital teamed with Swedish financial expertise - highlights a synergy in pursuing large international positions. ADIA and other UAE funds also invest in Swedish equities, real estate, and infrastructure indirectly through investment funds and partnerships.",
    flags: ["uae", "sweden"],
    position: "top-[30%] right-[25%]",
    coordinates: {
      uae: { x: 247, y: 75 }
    },
  },
  {
    id: "ega",
    logo: "EGA",
    logoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dJgxoSDfI7RSBOvhCRBpvD5zsBnCPK.png",
    title: "Emirates Global Aluminum",
    description:
      "Swedish manufacturers import aluminum from Emirates Global Aluminum, and specialty petroleum products from UAE producers, contributing to the $76 million worth of UAE exports to Sweden in 2022",
    flags: ["uae"],
    position: "top-[45%] left-[30%]",
    coordinates: {
      uae: { x: 160, y: 130 },
    },
  },
  {
    id: "mubadala",
    logo: "MUBADALA",
    logoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PGY9hm8ORy4SbZ1t9tSSEopMQewtH9.png",
    title: "Mubadala Investment Company",
    description:
      "Mubadala Investment Company (Abu Dhabi) has actively invested in Sweden's tech sector. In 2022, Mubadala led a $100 million funding round in Gothenburg-based fintech startup Juni, which provides financial platforms for e-commerce businesses. This infusion of UAE capital (alongside venture funds from Sweden and Silicon Valley) illustrates the growing interest GCC investors have in Swedish startups. Mubadala's venture arm has focused on the Swedish tech 'unicorns' in sectors like gaming and healthtech, providing growth capital and opening doors to Emirati markets.",
    flags: ["uae", "sweden"],
    position: "middle-[50%] left-[25%]",
    coordinates: {
      uae: { x: 175, y: 115 },
    },
  },
  {
    id: "astrazeneca",
    logo: "AstraZeneca",
    logoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9EUKhnydkjSo8HZBHc3NNsxlBSuUCs.png",
    title: "AstraZeneca",
    description:
      "AstraZeneca - The Swedish-British pharmaceutical company is well-established in the UAE, supplying medicines (and notably during the COVID-19 pandemic) vaccines.",
    flags: ["sweden"],
    position: "bottom-[35%] left-[20%]",
    coordinates: {
      sweden: { x: 175, y: 350 },
      uae: { x: 210, y: 90 }

    },
  },
  {
    id: "ikea",
    logo: "IKEA",
    logoUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-06%20at%209.01.58%E2%80%AFam-1ZyBM6aVfl9aAd8pkbKo5i9ZQp5XeU.png",
    title: "IKEA",
    description:
      "Retail & Consumer Goods conglomerate IKEA has multiple flagship stores in the UAE (operated via local partner Al-Futtaim Group).",
    flags: ["sweden"],
    position: "bottom-[20%] left-[25%]",
    coordinates: {
      sweden: { x: 180, y: 380 },
    },
  },
  {
    id: "saab",
    logo: "SAAB",
    logoUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Saab-Logo-1995-2000-EkVxnYohOUpVWSCjW1knkqx0lyHI5R.png",
    title: "Saab Defense",
    description:
      "Saab and the UAE MoD signed a contract of the value of USD190 Million to provide the UAE with GlobalEye Airborne Early Warning and Control (AEW&C) solution. The UAE was the launch customer for Saab's GlobalEye airborne early-warning aircraft, signing a contract in 2015 - $1.27 billion and receiving five advanced surveillance planes",
    flags: ["sweden"],
    position: "bottom-[35%] right-[25%]",
    coordinates: {
      uae: { x: 205, y: 100 },
      sweden: { x: 190, y: 330 }
    },
  },
  {
    id: "einride",
    logo: "Einride",
    logoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3p2oJYs9MBkwBGiRXMeSPuiXgEvw26.png",
    title: "Einride",
    description:
      "Swedish electric transport startup Einride announced 'Falcon Rise,' a 550 km network of autonomous electric trucks across the UAE – an ambitious project making the UAE home to the world's largest autonomous EV freight corridor.",
    flags: ["sweden"],
    position: "bottom-[25%] right-[30%]",
    coordinates: {
      uae: { x: 250, y: 60 },
      sweden: { x: 195, y: 340 }
    },
  },
  {
    id: "ericsson",
    logo: "Ericsson",
    logoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-umMjepN3tiMvwH5qUGWyRBwkBsYZn3.png",
    title: "Ericsson",
    description:
      "Ericsson (and formerly Sony Ericsson) – The Swedish telecom giant has long provided telecommunications equipment and services in the UAE, partnering with local operators to build out mobile networks. Ericsson's Gulf regional head noted that Gulf states are investing heavily in ICT, with over 90% 5G adoption expected by 2029",
    flags: ["sweden"],
    position: "bottom-[15%] right-[20%]",
    coordinates: {
      sweden: { x: 210, y: 340 }
    },
  },
]

const countryImages = {
  uae: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AE-5TuD3IsqSNBAgpIaSTRzgmp0706AfL.png",
  sweden: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SE-DM6vGWxobocAEyJ4YxiYRet775n6Yv.png",
}

const MapConnection = () => {
  const [selectedEntry, setSelectedEntry] = useState<InvestmentEntry | null>(null)
  const [hoveredEntry, setHoveredEntry] = useState<InvestmentEntry | null>(null)
  const [activeTab, setActiveTab] = useState<"all" | "uae" | "sweden">("all")

  const filteredInvestments = investments.filter((entry) => {
    if (activeTab === "all") return true
    return entry.flags.includes(activeTab)
  })

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
        {entry.coordinates.uae && entry.coordinates.sweden && (




          // <path
          //   key={`path-${entry.id}`}
          //   d={`M ${entry.coordinates.uae.x} ${entry.coordinates.uae.y} 
          //       C ${entry.coordinates.uae.x} ${(entry.coordinates.uae.y + entry.coordinates.sweden.y) / 2},
          //         ${entry.coordinates.sweden.x} ${(entry.coordinates.uae.y + entry.coordinates.sweden.y) / 2},
          //         ${entry.coordinates.sweden.x} ${entry.coordinates.sweden.y}`}
          //   // stroke={isHighlighted ? "#2563eb" : "#94a3b8"}
          //   stroke={isHighlighted ? "#f97316" : "#94a3b8"}

          //   strokeWidth={isHighlighted ? "3" : "1.5"}
          //   fill="none"
          //   className="transition-all duration-300"
          //   {...interactionProps}
          // />





          <path
            key={`path-${entry.id}`}
            d={`M ${entry.coordinates.uae.x} ${entry.coordinates.uae.y} 
                C ${entry.coordinates.uae.x} ${(entry.coordinates.uae.y + entry.coordinates.sweden.y) / 2},
                  ${entry.coordinates.sweden.x} ${(entry.coordinates.uae.y + entry.coordinates.sweden.y) / 2},
                  ${entry.coordinates.sweden.x} ${entry.coordinates.sweden.y}`}
            stroke={isHighlighted ? "#f97316" : "#4169E1"} 
            strokeDasharray={isHighlighted ? "0" : "3 3"}
            strokeWidth={isHighlighted ? "3" : "1.5"}
            fill="none"
            className="transition-all duration-300"
            {...interactionProps}
          />










        )}
        {entry.coordinates.uae && (
          <g {...interactionProps}>
            <circle
              key={`uae-point-${entry.id}`}
              cx={entry.coordinates.uae.x}
              cy={entry.coordinates.uae.y}
              r={isHighlighted ? "8" : "5"}
              // fill={isHighlighted ? "#2563eb" : "#94a3b8"}
              fill={isHighlighted ? "#f97316" : "#94a3b8"}


              className="transition-all duration-300"
            />
            {isHighlighted && (
              <text
                x={entry.coordinates.uae.x + 12}
                y={entry.coordinates.uae.y}
                fontSize="10"
                // fill="#2563eb"
                fill="#f97316"

                fontWeight="bold"
              >
                {entry.title}
              </text>
            )}
          </g>
        )}
        {entry.coordinates.sweden && (
          <g {...interactionProps}>
            <circle
              key={`sweden-point-${entry.id}`}
              cx={entry.coordinates.sweden.x}
              cy={entry.coordinates.sweden.y}
              r={isHighlighted ? "8" : "5"}
              // fill={isHighlighted ? "#2563eb" : "#94a3b8"}
              fill={isHighlighted ? "#f97316" : "#94a3b8"}


              className="transition-all duration-300"
            />
            {isHighlighted && (
              <text
                x={entry.coordinates.sweden.x + 12}
                y={entry.coordinates.sweden.y}
                fontSize="10"
                // fill="#2563eb"
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

  const getCardClassName = (entry: InvestmentEntry) => {
    const isActive = hoveredEntry?.id === entry.id || selectedEntry?.id === entry.id
    return isActive ? "border-primary bg-primary/5 shadow-md" : "border-border hover:bg-accent/50"
  }

  return (
    // <div className="max-w-[1200px] mx-auto p-4 md:p-8">
    <div className="max-w-[1200px] mx-auto p-4">


      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">UAE-Sweden Investment Connections</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Visualizing cross-border investments and business relationships between the UAE and Sweden
        </p>
      </div>

      <div className="flex justify-center mb-6 space-x-2">
        <Badge
          variant={activeTab === "all" ? "default" : "outline"}
          className="cursor-pointer text-sm px-4 py-1"
          onClick={() => setActiveTab("all")}
        >
          All Connections
        </Badge>
        <Badge
          variant={activeTab === "uae" ? "default" : "outline"}
          className="cursor-pointer text-sm px-4 py-1"
          onClick={() => setActiveTab("uae")}
        >
          <FlagIcon country="uae" /> UAE Investments
        </Badge>
        <Badge
          variant={activeTab === "sweden" ? "default" : "outline"}
          className="cursor-pointer text-sm px-4 py-1"
          onClick={() => setActiveTab("sweden")}
        >
          <FlagIcon country="sweden" /> Swedish Investments
        </Badge>
      </div>

      <div className="bg-card rounded-xl shadow-sm border p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Visualization - Full width on mobile, left column on desktop */}
          <div className="order-1 lg:order-none">
            <Card className="h-[500px] overflow-hidden">
              <CardContent className="p-0 h-full">
                <div className="relative h-full bg-accent/30 rounded-lg overflow-hidden">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 400 400"
                    aria-label="Investment connection map between UAE and Sweden"
                  >
                    {/* Background for better contrast */}
                    <rect x="0" y="0" width="400" height="400" fill="#f8fafc" />

                    {/* UAE Map Region - Scaled up more */}
                    <g className="uae-region">
                      <image
                        href={countryImages.uae}
                        x="30"
                        y="10"
                        width="340"
                        height="150"
                        preserveAspectRatio="xMidYMid meet"
                        style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
                      />
                    </g>

                    {/* Sweden Map Region - Scaled up more and moved up */}
                    <g className="sweden-region">
                      <image
                        href={countryImages.sweden}
                        x="30"
                        y="200"
                        width="340"
                        height="190"
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

            {/* Selected Entry Detail */}
            {selectedEntry && (
              <Card className="mt-4 bg-primary/5 border-primary animate-fadeIn">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {selectedEntry.logoUrl ? (
                        <div className="w-16 h-12 mr-3 flex-shrink-0">
                          <img
                            src={selectedEntry.logoUrl || "/placeholder.svg"}
                            alt={`${selectedEntry.title} logo`}
                            className="w-full h-full object-contain object-center"
                          />
                        </div>
                      ) : (
                        <span className="font-bold">{selectedEntry.logo}</span>
                      )}
                      <h3 className="font-bold">{selectedEntry.title}</h3>
                      {selectedEntry.flags.map((flag) => (
                        <FlagIcon key={`selected-${selectedEntry.id}-${flag}`} country={flag} />
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedEntry(null)}
                      className="text-muted-foreground hover:text-foreground"
                      aria-label="Close details"
                    >
                      ✕
                    </button>
                  </div>
                  <p className="text-sm">{selectedEntry.description}</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Investment Entries - Right column on desktop, scrollable list */}
          <div className="order-2 lg:order-none">
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredInvestments.map((entry) => (
                <Card key={entry.id} className={`transition-all duration-300 ${getCardClassName(entry)}`}>
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
                                alt={`${entry.title} logo`}
                                className="w-full h-full object-contain object-center"
                              />
                            </div>
                          ) : (
                            <span className="font-bold">{entry.logo}</span>
                          )}
                          <h3 className="font-bold">{entry.title}</h3>
                          {entry.flags.map((flag) => (
                            <FlagIcon key={`${entry.id}-${flag}`} country={flag} />
                          ))}
                        </div>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info size={16} className="text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">Click to view details</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <p className="text-sm line-clamp-2 text-muted-foreground">
                        {entry.description.length > 120
                          ? `${entry.description.substring(0, 120)}...`
                          : entry.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Summary at the bottom */}
        <div className="mt-8 p-4 bg-accent/30 rounded-lg">
          <h3 className="font-semibold mb-2">Summary</h3>
          <p className="text-sm text-muted-foreground">
            UAE businesses in Sweden may not be as numerically prominent as the other way around, but significant
            financial links and partnerships bind the two. The UAE's capital and global reach complement Sweden's
            technology and industrial know-how. This two-way flow is evidenced by joint investments (e.g. Mubadala with
            Swedish startups), franchise relationships, and the UAE acting as a gateway for Swedish trade. With Gulf
            investment in European tech rising fivefold since 2018, Sweden is increasingly on the radar of UAE investors
            – a trend poised to deepen the economic interdependence between the countries.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MapConnection



