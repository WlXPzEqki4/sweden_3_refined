import { NetworkNode, NetworkLink, TimelineEvent, RelationshipDimension, TabData, KeyContact } from "../types";

// Main data structure for the UAE-Sweden Relations content
export interface SectionData {
  id: string;
  title: string;
  content: ContentBlock[];
  graphData?: {
    nodes: NetworkNode[];
    links: NetworkLink[];
  };
  timeline?: TimelineEvent[];
  relationshipDimensions?: RelationshipDimension[];
  tabs?: TabData[];  
}



export type ContentBlock = {
  type: "paragraph" | "heading" | "subheading" | "list" | "image" | "quote";
  content: string;
  items?: string[]; // For list type
  imageUrl?: string; // For image type
  imageCaption?: string; // For image type
  author?: string; // For quote type
};

// Main sections data
export const relationsSections: SectionData[] = [
  {
    id: "intro",
    title: "UAE–Sweden Relations (2019–2024)",
    content: [
      {
        type: "paragraph",
        content: "This interactive analysis explores the multifaceted relationship between the United Arab Emirates and Sweden from 2019 to 2024, examining diplomatic ties, economic cooperation, points of alignment and tension, and key stakeholders in both nations."
      },
      {
        type: "paragraph",
        content: "Navigate through the sections below to explore different aspects of this bilateral relationship."
      }
    ]
  },
  {
    id: "political-diplomatic",
    title: "Political and Diplomatic Ties",
    content: [
      {
        type: "paragraph",
        content: "Over the past five years, the United Arab Emirates and Sweden have maintained generally positive diplomatic relations, marked by high-level exchanges and growing dialogue. Both countries have engaged in parliamentary diplomacy and official visits to strengthen understanding."
      },
      {
        type: "paragraph",
        content: "For example, in late 2024 a UAE Federal National Council delegation met Sweden's State Secretary for Foreign Affairs to enhance cooperation in areas like economic development, artificial intelligence, green economy investments, and renewable energy. Regional issues and peace efforts are also frequent topics; Sweden's tradition of international mediation (for example, hosting Yemen peace talks in 2018) complements the UAE's emphasis on regional stability."
      },
      {
        type: "paragraph",
        content: "In 2023, however, bilateral ties faced a diplomatic strain when Sweden allowed public desecrations of the Quran, an act that the UAE (along with other Gulf states) formally protested. The UAE summoned Sweden's ambassador to complain, and the Swedish government condemned the 'Islamophobic' provocation and moved to tighten laws on such protests. This episode highlighted cultural sensitivities but was met with Sweden's assurances of respect for religious tolerance."
      },
      {
        type: "paragraph",
        content: "Overall, regular political dialogue – including Sweden's Foreign Minister Tobias Billström meeting Gulf counterparts – has helped manage such tensions and reinforce a baseline of mutual respect."
      }
    ],
    timeline: [
      {
        year: "2018",
        title: "Yemen Peace Talks",
        description: "Sweden hosts peace talks focused on the Yemen conflict, demonstrating its tradition of international mediation.",
        type: "positive"
      },
      {
        year: "2023",
        title: "Quran Desecration Incident",
        description: "Diplomatic tensions arise when Sweden allows public desecrations of the Quran, leading to formal protests from the UAE.",
        type: "negative"
      },
      {
        year: "2023",
        title: "Swedish Response to Tensions",
        description: "Swedish government condemns Islamophobic provocations and moves to tighten laws on such protests.",
        type: "positive"
      },
      {
        year: "2024",
        title: "High-Level Delegation",
        description: "UAE Federal National Council delegation meets Sweden's State Secretary for Foreign Affairs.",
        type: "positive"
      }
    ],
    relationshipDimensions: [
      {
        name: "Diplomatic Relations",
        value: 75,
        description: "Overall strong with occasional tensions over specific issues"
      },
      {
        name: "Parliamentary Cooperation",
        value: 85,
        description: "Active exchange between legislative bodies"
      },
      {
        name: "Cultural Understanding",
        value: 65,
        description: "Generally positive with some sensitivity areas"
      },
      {
        name: "Conflict Mediation",
        value: 70,
        description: "Complementary approaches to regional stability"
      }
    ],
    graphData: {
      nodes: [
        { id: "uae_mofa", label: "UAE Ministry of Foreign Affairs", group: "uae", size: 25 },
        { id: "sweden_mofa", label: "Swedish Ministry for Foreign Affairs", group: "sweden", size: 25 },
        { id: "uae_embassy", label: "UAE Embassy in Stockholm", group: "uae", size: 20 },
        { id: "sweden_embassy", label: "Swedish Embassy in Abu Dhabi", group: "sweden", size: 20 },
        { id: "un_forum", label: "United Nations", group: "neutral", size: 22 },
        { id: "eu_council", label: "European Council", group: "sweden", size: 18 },
        { id: "gcc", label: "Gulf Cooperation Council", group: "uae", size: 18 }
      ],
      links: [
        { source: "uae_mofa", target: "sweden_mofa", value: 5 },
        { source: "uae_mofa", target: "uae_embassy", value: 4 },
        { source: "sweden_mofa", target: "sweden_embassy", value: 4 },
        { source: "uae_embassy", target: "sweden_mofa", value: 3 },
        { source: "sweden_embassy", target: "uae_mofa", value: 3 },
        { source: "uae_mofa", target: "un_forum", value: 2 },
        { source: "sweden_mofa", target: "un_forum", value: 2 },
        { source: "sweden_mofa", target: "eu_council", value: 3 },
        { source: "uae_mofa", target: "gcc", value: 3 },
        { source: "un_forum", target: "eu_council", value: 1 },
        { source: "un_forum", target: "gcc", value: 1 }
      ]
    }
  },
  {
    id: "economic-trade",
    title: "Economic and Trade Relations",
    content: [
      {
        type: "paragraph",
        content: "Economically, the UAE has become one of Sweden's most important trading partners in the Middle East. The UAE is Sweden's second or third largest trade partner in the MENA region and serves as a regional hub for Swedish businesses."
      },
      {
        type: "paragraph",
        content: "Over 200 Swedish companies are active in the UAE, ranging from industrial giants to tech firms. Major Swedish exports to the UAE include iron and steel, automotive products, telecommunications equipment, and machinery."
      },
      {
        type: "paragraph",
        content: "This robust engagement is reflected in a sharp rise in bilateral trade – public data indicates trade has grown by over 40% in recent years. High-profile Swedish companies like IKEA, Ericsson, Volvo, Atlas Copco, Saab, and Axis Communications have a significant presence in the Emirates, often contributing to landmark projects."
      },
      {
        type: "paragraph",
        content: "In turn, the UAE's attractive investment climate and free zones draw Swedish investors and regional headquarters. Notably, Sweden became the first foreign country to host a national pavilion at the UAE's Tawdheef job fair in 2024, underlining its commitment to support Emirati initiatives like talent development and Emiratisation."
      }
    ],
    relationshipDimensions: [
      {
        name: "Trade Volume",
        value: 90,
        description: "Sharp rise of over 40% in recent years"
      },
      {
        name: "Swedish Business Presence",
        value: 85,
        description: "Over 200 Swedish companies active in the UAE"
      },
      {
        name: "UAE Investment in Sweden",
        value: 65,
        description: "Growing investment in Swedish technology and innovation"
      },
      {
        name: "Joint Projects",
        value: 80,
        description: "Collaboration in infrastructure, technology, and sustainability"
      }
    ],
    graphData: {
      nodes: [
        { id: "uae_economy", label: "UAE Ministry of Economy", group: "uae", size: 25 },
        { id: "sweden_trade", label: "Swedish Ministry of Trade", group: "sweden", size: 25 },
        { id: "business_sweden", label: "Business Sweden", group: "sweden", size: 22 },
        { id: "uae_chamber", label: "UAE Chambers of Commerce", group: "uae", size: 22 },
        { id: "tech_sector", label: "Technology Sector", group: "neutral", size: 20 },
        { id: "energy_sector", label: "Energy Sector", group: "neutral", size: 20 },
        { id: "defense_sector", label: "Defense Sector", group: "neutral", size: 18 },
        { id: "innovation_hub", label: "Innovation Hubs", group: "neutral", size: 15 }
      ],
      links: [
        { source: "uae_economy", target: "sweden_trade", value: 5 },
        { source: "business_sweden", target: "uae_chamber", value: 4 },
        { source: "uae_economy", target: "tech_sector", value: 4 },
        { source: "sweden_trade", target: "tech_sector", value: 4 },
        { source: "uae_economy", target: "energy_sector", value: 3 },
        { source: "sweden_trade", target: "energy_sector", value: 3 },
        { source: "uae_economy", target: "defense_sector", value: 3 },
        { source: "sweden_trade", target: "defense_sector", value: 3 },
        { source: "business_sweden", target: "innovation_hub", value: 2 },
        { source: "uae_chamber", target: "innovation_hub", value: 2 },
        { source: "tech_sector", target: "innovation_hub", value: 2 },
        { source: "energy_sector", target: "innovation_hub", value: 1 }
      ]
    }
  },
  {
    id: "cooperation",
    title: "Areas of Cooperation",
    content: [
      {
        type: "paragraph",
        content: "Innovation, sustainability, and law enforcement have emerged as key areas of UAE–Sweden cooperation. Both countries place a high priority on technology and the green economy."
      },
      {
        type: "paragraph",
        content: "Joint discussions have highlighted opportunities in artificial intelligence, renewable energy, and climate initiatives. For example, Sweden's expertise in clean technology aligns with the UAE's investments in renewables and sustainability, especially as the UAE hosted COP28 in 2023."
      },
      {
        type: "paragraph",
        content: "There is also growing collaboration on education and culture, with exchanges that promote tolerance and knowledge-sharing."
      },
      {
        type: "paragraph",
        content: "In the legal sphere, a milestone was reached in November 2024 when Sweden and the UAE signed new agreements on mutual legal assistance and extradition to combat organized crime."
      }
    ],
    tabs: [
      {
        id: "innovation",
        label: "Innovation & Technology",
        content: [
          {
            type: "paragraph",
            content: "Both countries place a high priority on technology development with collaboration in artificial intelligence, digital transformation, and smart cities."
          },
          {
            type: "list",
            content: "Key innovation partnerships:",
            items: [
              "Joint research in artificial intelligence applications",
              "Smart city technology exchanges",
              "Innovation hubs and startup collaborations",
              "Digital government transformation best practices"
            ]
          }
        ]
      },
      {
        id: "sustainability",
        label: "Sustainability",
        content: [
          {
            type: "paragraph",
            content: "Sweden's expertise in clean technology aligns with the UAE's investments in renewables and sustainability, especially as the UAE hosted COP28 in 2023."
          },
          {
            type: "list",
            content: "Sustainability initiatives:",
            items: [
              "Renewable energy technology transfer",
              "Climate change mitigation strategies",
              "Water conservation and management",
              "Sustainable urban planning"
            ]
          }
        ]
      },
      {
        id: "legal",
        label: "Legal & Security",
        content: [
          {
            type: "paragraph",
            content: "In the legal sphere, a milestone was reached in November 2024 when Sweden and the UAE signed new agreements on mutual legal assistance and extradition to combat organized crime."
          },
          {
            type: "quote",
            content: "These agreements equip our countries to locate, arrest and prosecute more criminals while enhancing judicial cooperation.",
            author: "Gunnar Strömmer, Sweden's Justice Minister"
          },
          {
            type: "paragraph",
            content: "The UAE's Minister of Justice emphasized joint efforts against money laundering, terrorism financing, and transnational crime as a contribution to global security."
          }
        ]
      },
      {
        id: "education",
        label: "Education & Culture",
        content: [
          {
            type: "paragraph",
            content: "There is growing collaboration on education and culture, with exchanges that promote tolerance and knowledge-sharing."
          },
          {
            type: "list",
            content: "Educational and cultural initiatives:",
            items: [
              "Academic partnerships between universities",
              "Cultural exchange programs and exhibitions",
              "Language learning initiatives",
              "Professional training and knowledge transfer"
            ]
          }
        ]
      }
    ],
    timeline: [
      {
        year: "2023",
        title: "UAE Hosts COP28",
        description: "The UAE hosted the UN Climate Change Conference, highlighting its commitment to sustainability, an area where Sweden has extensive expertise.",
        type: "positive"
      },
      {
        year: "2024",
        title: "Legal Cooperation Agreements",
        description: "Sweden and the UAE sign new agreements on mutual legal assistance and extradition to combat organized crime.",
        type: "positive"
      },
      {
        year: "2024",
        title: "Tawdheef Job Fair",
        description: "Sweden became the first foreign country to host a national pavilion at the UAE's Tawdheef job fair.",
        type: "positive"
      }
    ]
  },
  {
    id: "tensions",
    title: "Points of Tension or Policy Differences",
    content: [
      {
        type: "paragraph",
        content: "Despite the generally strong relationship, there have been periodic tensions driven by policy differences and external issues. One sensitive area is the Yemen conflict. Sweden has a humanitarian and peacebuilding focus on Yemen, while the UAE was militarily involved there as part of the Saudi-led coalition."
      },
      {
        type: "paragraph",
        content: "Swedish civil society and some politicians have been sharply critical of arms exports to countries in the Yemen war. In fact, Sweden's parliament debated halting arms sales to the UAE, and peace organizations lambasted as a 'fatal failure' the continued export of Swedish weapons to the UAE given its role in Yemen."
      },
      {
        type: "paragraph",
        content: "They noted that by 2018 the UAE had become the largest recipient of Swedish arms among non-democracies, contradicting Sweden's policy of restricting military exports to repressive regimes. This arms trade controversy strained perceptions; under public pressure, Sweden tightened export controls, effectively curbing new defense deals with the Emirates."
      }
    ],
    relationshipDimensions: [
      {
        name: "Yemen Conflict Positions",
        value: 30,
        description: "Significant differences in approach and involvement"
      },
      {
        name: "Arms Export Policy",
        value: 25,
        description: "Swedish restrictions on defense sales to UAE"
      },
      {
        name: "Human Rights Dialogue",
        value: 40,
        description: "Ongoing differences in perspective and priorities"
      },
      {
        name: "Political Islam Approach",
        value: 20,
        description: "Fundamental differences in policy toward Islamist groups"
      }
    ],
    tabs: [
      {
        id: "yemen",
        label: "Yemen Conflict",
        content: [
          {
            type: "paragraph",
            content: "Sweden has a humanitarian and peacebuilding focus on Yemen, while the UAE was militarily involved there as part of the Saudi-led coalition."
          },
          {
            type: "paragraph",
            content: "Swedish civil society and some politicians have been sharply critical of arms exports to countries in the Yemen war. In fact, Sweden's parliament debated halting arms sales to the UAE, and peace organizations lambasted as a 'fatal failure' the continued export of Swedish weapons to the UAE given its role in Yemen."
          }
        ]
      },
      {
        id: "human-rights",
        label: "Human Rights",
        content: [
          {
            type: "paragraph",
            content: "Another friction point is human rights and political freedoms. Sweden's government and media frequently highlight global human rights concerns, and the UAE's record (for example, on freedom of expression and treatment of dissidents) has drawn criticism."
          },
          {
            type: "paragraph",
            content: "Swedish human-rights organizations and lawmakers have at times condemned the UAE's detention of activists and its surveillance practices, which contrasts with the UAE's expectation of non-interference."
          }
        ]
      },
      {
        id: "political-islam",
        label: "Political Islam",
        content: [
          {
            type: "paragraph",
            content: "The two countries differ sharply over the issue of political Islam – the UAE views Islamist groups like the Muslim Brotherhood as a top national security threat, whereas Sweden allows such movements to operate legally."
          },
          {
            type: "paragraph",
            content: "These differences create an underlying policy gap. However, both sides have managed these issues through diplomatic channels."
          }
        ]
      }
    ]
  },
  {
    id: "sweden-mb",
    title: "Sweden's Stance on the Muslim Brotherhood",
    content: [
      {
        type: "paragraph",
        content: "Sweden's position regarding the Muslim Brotherhood and related organizations reflects the nation's approach to balancing freedom of association with security concerns and international relations considerations."
      }
    ],
    tabs: [
      {
        id: "government",
        label: "Government Position",
        content: [
          {
            type: "subheading",
            content: "Official Government Position"
          },
          {
            type: "paragraph",
            content: "The Swedish government's stance on the Muslim Brotherhood (MB) is nuanced and generally more permissive than that of the UAE. Sweden has not banned the Muslim Brotherhood or designated it as a terrorist organization. The Brotherhood is not an overt political party in Sweden, but various Islamic organizations influenced by MB ideology operate openly."
          },
          {
            type: "paragraph",
            content: "The government's approach tends to focus on countering violent extremism rather than outlawing non-violent Islamist groups. Thus, Brotherhood-linked associations are legal as long as they do not engage in criminal activity."
          },
          {
            type: "paragraph",
            content: "For example, the Islamic Association in Sweden (Islamiska Förbundet i Sverige, IFIS) – widely identified as the main MB-affiliated body in the country – functions as a representative Muslim organization. Swedish authorities have engaged with such groups on integration and community issues in the past."
          }
        ]
      },
      {
        id: "thinktanks",
        label: "Think Tanks & Academia",
        content: [
          {
            type: "subheading",
            content: "Views from Think Tanks and Academia"
          },
          {
            type: "paragraph",
            content: "Within Sweden, think tanks and researchers are divided on how to perceive the Muslim Brotherhood. In 2017, a noteworthy report commissioned by the Swedish Civil Contingencies Agency (MSB) sparked intense debate. This report alleged that the Muslim Brotherhood was active in Sweden and working 'secretly' to build a parallel society by infiltrating civil organizations and political parties."
          },
          {
            type: "paragraph",
            content: "However, this MSB report was met with a backlash from academic experts. A group of 22 scholars of religion and Islam in Sweden criticized the report as 'almost conspiracy-theory like,' lacking solid evidence and ignoring extensive previous research."
          },
          {
            type: "paragraph",
            content: "In sum, Swedish think tank and academic opinions on the MB range from alarmist to skeptical. Some institutes and analysts (often those tied to security and defense circles) warn of MB's long-term socio-political aims, while university-based researchers often emphasize distinguishing mainstream Islamism from violent extremism."
          }
        ]
      },
      {
        id: "individuals",
        label: "Influential Perspectives",
        content: [
          {
            type: "subheading",
            content: "Influential Individuals and Perspectives"
          },
          {
            type: "paragraph",
            content: "Several influential voices in Sweden have shaped the discourse on the Muslim Brotherhood. On one side, commentators like Sameh Egyptson (an Egyptian-Swedish academic) and Magnus Norell have been vocal about what they perceive as MB's stealth influence."
          },
          {
            type: "paragraph",
            content: "On the other side of the debate, mainstream Muslim leaders and human rights advocates in Sweden dispute these characterizations. They argue that claims of MB subversion are overblown and feed into Islamophobic narratives."
          },
          {
            type: "paragraph",
            content: "Meanwhile, Sweden's security establishment (for example, Säpo) maintains a cautious public tone. They regularly report that the primary terrorist threat in Sweden stems from violent Islamist extremism, noting a growth in the number of such extremists from a few hundred to a couple thousand over the last decade."
          }
        ]
      }
    ],
    graphData: {
      nodes: [
        { id: "swedish_govt", label: "Swedish Government", group: "sweden", size: 30 },
        { id: "sapo", label: "Swedish Security Service (SÄPO)", group: "sweden", size: 25 },
        { id: "foi", label: "Swedish Defense Research Agency", group: "sweden", size: 22 },
        { id: "ui", label: "Swedish Institute of International Affairs", group: "sweden", size: 20 },
        { id: "academia", label: "Swedish Universities", group: "sweden", size: 20 },
        { id: "mb_related", label: "MB-Related Organizations in Sweden", group: "neutral", size: 18 },
        { id: "civil_society", label: "Civil Society Organizations", group: "neutral", size: 15 },
        { id: "media", label: "Swedish Media", group: "sweden", size: 15 }
      ],
      links: [
        { source: "swedish_govt", target: "sapo", value: 5 },
        { source: "sapo", target: "mb_related", value: 4, dashed: true },
        { source: "foi", target: "swedish_govt", value: 3 },
        { source: "ui", target: "swedish_govt", value: 3 },
        { source: "academia", target: "mb_related", value: 2, dashed: true },
        { source: "media", target: "mb_related", value: 3, dashed: true },
        { source: "civil_society", target: "mb_related", value: 2 },
        { source: "academia", target: "foi", value: 2 },
        { source: "academia", target: "ui", value: 2 },
        { source: "swedish_govt", target: "mb_related", value: 3, dashed: true },
        { source: "civil_society", target: "swedish_govt", value: 2 }
      ]
    }
  },
  {
    id: "key-contacts",
    title: "Individuals of Interest Across Media and Thematic Files",
    content: [
      {
        type: "paragraph",
        content: "For UAE delegations seeking to strengthen bilateral relations with Sweden, engaging with the following key stakeholders would be beneficial for advancing diplomatic, economic, and cultural ties."
      }
    ],


    tabs: [
















      {
        id: "government",
        label: "Government Officials",
        content: [
          {
            type: "subheading",
            content: "Government Officials"
          },
          {
            type: "paragraph",
            content: "These key government figures would be essential contacts for any high-level UAE delegation visiting Sweden."
          }
        ]
      },
    


















      {
        id: "thinktanks",
        label: "Think Tanks",
        content: [
          {
            type: "subheading",
            content: "Major Think Tanks and Institutions"
          },
          {
            type: "list",
            content: "Important policy and research organizations:",
            items: [
              "Swedish Institute of International Affairs (UI)",
              "Stockholm International Peace Research Institute (SIPRI)",
              "Swedish Defense Research Agency (FOI)",
              "Institute for Security & Development Policy (ISDP)",
              "Swedish Institute"
            ]
          },
          {
            type: "paragraph",
            content: "Engaging with these institutions would provide valuable insights into Swedish foreign policy perspectives and opportunities for dialogue on regional issues."
          }
        ]

      },


















      {
        id: "individuals",
        label: "Influential Individuals",


        content: [


          // {
          //   type: "subheading",
          //   content: "Influential Individuals to Meet"
          // },
          // {
          //   type: "paragraph",
          //   content: "Beyond institutional contacts, certain influential individuals in various fields can provide valuable perspectives and networking opportunities for UAE delegations."
          // },
          // {
          //   type: "subheading",
          //   content: "Shared Humanity & Culture"
          // },
          // {
          //   type: "paragraph",
          //   content: "Leaders in cultural exchange, arts, and humanitarian initiatives who bridge gaps between nations and promote mutual understanding."
          // },
          // {
          //   type: "subheading",
          //   content: "Education & Special Projects"
          // },
          // {
          //   type: "paragraph",
          //   content: "Innovators in education, training, and knowledge transfer with experience in international collaboration and institutional development."
          // },
          // {
          //   type: "subheading",
          //   content: "Science and Advanced Technologies"
          // },
          // {
          //   type: "paragraph",
          //   content: "Pioneers in technological innovation, research, and digital transformation who are shaping Sweden's tech ecosystem."
          // },
          // {
          //   type: "subheading",
          //   content: "Medical Affairs & Life Sciences"
          // },
          // {
          //   type: "paragraph",
          //   content: "Experts in healthcare, pharmaceuticals, and biotechnology with insights into Sweden's renowned medical research and healthcare systems."
          // },
          // {
          //   type: "subheading",
          //   content: "Energy & Sustainability"
          // },
          // {
          //   type: "paragraph",
          //   content: "Leaders in renewable energy, climate solutions, and sustainable development with experience in policy and implementation."
          // },
          // {
          //   type: "subheading",
          //   content: "Strategic Philanthropy"
          // },
          // {
          //   type: "paragraph",
          //   content: "Visionaries in charitable giving, impact investment, and social enterprise who are driving positive change through innovative funding models."
          // },
          // {
          //   type: "subheading",
          //   content: "Businesses"
          // },
          // {
          //   type: "paragraph",
          //   content: "Key executives and entrepreneurs from Swedish companies with international operations and interest in Middle East partnerships."
          // }



        ],

        
        keyContacts: [

        {
          name: "Danica Kragić Jensfelt",
          title: "Professor of Robotics at KTH Royal Institute of Technology",
          description: "One of the world's leading experts in robotics and computer vision. She has been named among Sweden's most powerful women in industry and \"Swede of the Year\" for her scientific contributions, while serving as a member of the Royal Swedish Academy of Sciences.",
          influence: "high",
          imageUrl: "/lovable-uploads/22d8e4ad-99a2-4b4d-923d-db52a3fd7d2b.png"
        },
        {
          name: "Antonia Ax:son Johnson",
          title: "Former Chairman of Axel Johnson AB",
          description: "Fourth-generation leader of Axel Johnson AB, a family company founded in 1873, where she served as chairman from 1982 until stepping down as CEO in 2015 while maintaining ownership and board presence. With a net worth of $10.2 billion as of April 2024, she remains one of Sweden's richest and most influential businesswomen, occasionally engaging with Gulf region investors over recent decades.",
          influence: "high",
          imageUrl: "/lovable-uploads/f768b986-b09f-4177-9aea-5d7d503d961e.png"
        },
        



        {
          name: "Anders Kiessling",
          title: "Professor of Aquaculture at the Swedish University of Agricultural Sciences",
          description: "Pioneered \"aqua-agro\" techniques to recycle nutrients between land agriculture and aquaculture. He led an SLU delegation to the UAE to explore research partnerships, exemplifying Sweden's academic approach to addressing global food security challenges through international collaboration.",
          influence: "high",
          imageUrl: "/lovable-uploads/c3b63bf0-b4ac-4e46-92c5-7b251407ddfc.png"
        },
        {
          name: "Peter Värbrand",
          title: "Deputy Vice-Chancellor for External Relations and Innovation at Linköping University",
          description: "Has significantly advanced international academic partnerships. He played a key role in establishing a Memorandum of Understanding between Linköping University and the University of Sharjah in the UAE, focusing on joint research and technology exchange in fields including drone aviation systems and aerospace.",
          influence: "high",
          imageUrl: "/lovable-uploads/39c33f25-e22d-43d3-9cf9-63506736328a.png"
        },
        



        {
          name: "Fredrik Heintz",
          title: "Professor at Linköping University & Chair of Swedish National AI Council",
          description: "Leading AI researcher who shapes Sweden's AI strategy, particularly in AI ethics and autonomous systems. His focus on AI for social good aligns with UAE initiatives, though his work remains primarily centered on Sweden's AI landscape and education.",
          influence: "high",
          imageUrl: "/lovable-uploads/e88f8927-5a5e-4b32-aa0b-b04fa6705dad.png"
        },
        {
          name: "Max Tegmark",
          title: "Swedish-American Physicist & MIT Professor",
          description: "Influential AI safety expert who co-founded the Future of Life Institute and authored the seminal book \"Life 3.0\" on artificial intelligence's future. While based primarily in the US, his Swedish roots enhance Sweden's credibility in AI ethics globally, with his principles on AI governance resonating with UAE efforts to develop AI ethical frameworks.",
          influence: "high",
          imageUrl: "/lovable-uploads/f8a3266d-76bb-484e-8675-b4c0c584f53b.png"
        },
        {
          name: "Sara Mazur",
          title: "Chair of the Wallenberg AI, Autonomous Systems and Software Program (WASP)",
          description: "Former Ericsson R&D head who leads Sweden's largest research program on AI and autonomous systems. She coordinates hundreds of researchers keeping Sweden at the AI forefront, engaging internationally including emerging dialogues with UAE's AI Ministry on smart cities and healthcare applications.",
          influence: "high",
          imageUrl: "/lovable-uploads/80a6c79a-30a4-41e2-a757-3c8e946e40ce.png"
        },
        





        {
          name: "Laurent Leksell",
          title: "Co-founder and Chairman of Elekta AB",
          description: "Built on his father's Gamma Knife invention to create a leading medical technology enterprise for cancer and neurosurgery treatment. Under his leadership, Elekta has become a key partner for UAE healthcare providers in oncology, showcasing advanced radiotherapy solutions at Dubai's Arab Health conference and supporting the Emirates' healthcare advancement goals.",
          influence: "high",
          imageUrl: "/lovable-uploads/7e973896-4f8c-4594-8325-dca6fca727f1.png"
        },
        {
          name: "Björn Zoëga",
          title: "Distinguished orthopedic surgeon and former CEO of Karolinska University Hospital",
          description: "Has played a significant role in exporting Swedish medical expertise to the Gulf region. Since 2016, he has worked with Sweden's GHP Healthcare to oversee specialized spine surgery departments in both Sweden and the UAE, exemplifying effective cross-border medical knowledge transfer.",
          influence: "high",
          imageUrl: "/lovable-uploads/d0860c34-58dc-4811-964b-e983de165b9c.png"
        },





  
        {
          name: "Anna Borg",
          title: "President and CEO of Vattenfall",
          description: "First woman to serve as President and CEO of Vattenfall, Sweden's largest state-owned energy company, where she leads major investments in renewable energy and the transition to fossil-free power. She has engaged with UAE entities like Masdar on renewable energy knowledge exchange and participated in the World Future Energy Summit in Abu Dhabi, offering expertise in offshore wind and grid integration relevant to Gulf energy planning.",
          influence: "high",
          imageUrl: "/lovable-uploads/11d49371-2ac2-4f4e-be90-026808e43a71.png"
        },
        {
          name: "Anders Forslund",
          title: "Co-founder and CEO of Heart Aerospace",
          description: "Pioneering green aviation technology by developing a 30-seat hybrid-electric regional airliner scheduled for launch by 2028. He has presented at the Dubai Airshow's tech showcases and interacted with Masdar's mobility innovation teams, positioning his company for potential future partnerships with UAE airlines seeking to reduce their carbon footprint.",
          influence: "high",
          imageUrl: "/lovable-uploads/5cf19aab-7d37-4981-8e95-4e83b553c3aa.png"
        },
        {
          name: "Lena Sundquist",
          title: "CEO of Climeon",
          description: "CEO of Climeon, a Swedish clean-tech company that converts waste heat into electricity, representing Sweden's innovative green industrialists. Climeon has piloted systems in UAE desalination plants to improve efficiency, while Sundquist and peers regularly participate in UAE sustainability events to share green technology solutions and expertise.",
          influence: "medium",
          imageUrl: "/lovable-uploads/c65c16e7-15b2-4bee-b538-7daa47914bd2.png"
        },
        {
          name: "Greta Thunberg",
          title: "Environmental Activist",
          description: "Swedish environmental activist who sparked the global youth climate movement beginning with her school strikes at age 15, becoming Time's Person of the Year in 2019. While she has criticized oil-producing nations and become involved in pro-Palestinian activism, her global influence was acknowledged when the UAE extended an invitation to her for COP28 in 2023.",
          influence: "high",
          imageUrl: "/lovable-uploads/69aa02d8-2856-40de-8b8f-7c2257c8e37e.png"
        },
        






        {
          name: "Carin Jämtin",
          title: "Director General of the Swedish International Development Cooperation Agency (Sida)",
          description: "Former government minister who leads Sweden's official aid agency in strategic philanthropy and development funding worldwide. She collaborates with UAE-based philanthropic organizations like Dubai Cares through international forums such as the Global Partnership for Education, leveraging Sweden's resources through partnerships to maximize impact in areas including education for children in crisis zones.",
          influence: "high",
          imageUrl: "/lovable-uploads/cf96487f-726a-4489-9660-3f23b5b5befa.png"
        },
        {
          name: "Niklas Zennström",
          title: "Co-founder of Skype and Tech Entrepreneur",
          description: "Prominent Swedish tech entrepreneur who established Zennström Philanthropies with his wife to fund initiatives in climate change, environmental protection, and social entrepreneurship. His strategic global giving aligns with UAE philanthropic programs in sustainability, and he participates in international networks like the UN and World Economic Forum that include UAE stakeholders, exemplifying tech-driven philanthropy focused on cross-border solutions.",
          influence: "high",
          imageUrl: "/lovable-uploads/9c110fb3-7b9b-4eae-97af-e36589d45ca4.png"
        },







        
        {
          name: "Jacob Wallenberg",
          title: "Vice Chairman of Investor AB (the Wallenberg investment holding)",
          description: "Vice chairman of Investor AB and patriarch of Sweden's famed Wallenberg family who presides over a vast portfolio of Sweden's largest companies including ABB, Ericsson, and AstraZeneca. He has led business delegations to the Gulf and overseen Wallenberg-chaired companies like Saab AB which sells defense systems to the UAE, actively supporting stronger Sweden-UAE economic relationships.",
          influence: "high",
          imageUrl: "/lovable-uploads/Picture_1.png"
  
        },
        {
          name: "Daniel Ek",
          title: "Co-Founder and CEO of Spotify",
          description: "Co-founder and CEO of Spotify who transformed the global music industry, growing his Stockholm startup into a NYSE-listed giant with users in over 180 markets. He has participated in the UAE's World Government Summit and overseen Spotify's 2018 launch in the Middle East, where the service has gained popularity and developed regional partnerships.",
          influence: "medium",
          imageUrl: "/lovable-uploads/Picture_2.png"
        },
        {
          name: "Sebastian Siemiatkowski",
          title: "CEO and Co-Founder of Klarna",
          description: "CEO and co-founder of Klarna, the Stockholm-based fintech unicorn valued at billions of dollars that pioneered 'buy-now-pay-later' payment solutions. While Klarna has no direct UAE operations, Siemiatkowski's success has attracted interest from Middle Eastern investors and banks, and he has appeared at fintech events with Gulf participants.",
          influence: "medium",
          imageUrl: "/lovable-uploads/Picture_3.png"
        },
        {
          name: "Stefan Persson",
          title: "Long-time Chairman and Chairman Emeritus of H&M Group ",
          description: "Long-time chairman (now chairman emeritus) of H&M Group who expanded the family business into a worldwide fast-fashion empire. Under his leadership, H&M established dozens of stores across the UAE through regional franchise partners and developed partnerships with Emirati mall operators.",
          influence: "low",
          imageUrl: "/lovable-uploads/Picture_4.png"
        },
        
        {
          name: "Magnus Olsson",
          title: "Co-Founder of Careem",
          description: "Swedish co-founder of Careem, the UAE-based ride-hailing company acquired by Uber for $3.1 billion in 2019. He continues to be based partly in Dubai, mentoring startups at Abu Dhabi's Hub71 tech hub and serving as a prime example of Swedish entrepreneurial success in the Gulf region.",
          influence: "high",
          imageUrl: "/lovable-uploads/Picture_5.png"
        },
        {
          name: "Marcus Wallenberg",
          title: "Chairman of Saab, frequent interlocutor with UAE senior leaders ",
          description: "Chairman of Saab and brother of Jacob Wallenberg who serves on the boards of several Wallenberg companies while frequently engaging with UAE leadership on defense and economic cooperation. His influence extends through major Swedish corporations with significant interests in the Middle East.",
          influence: "high",
          imageUrl: "/lovable-uploads/Picture_6.png"
        },
        {
          name: "Börje Ekholm",
          title: "CEO of Ericsson",
          description: "CEO of Ericsson and member of Sweden's AI Commission who leads one of the country's most globally significant technology companies. He has developed important relationships with UAE telecom partners as Ericsson expands its presence in the Middle East telecommunications market.",
          influence: "medium",
          imageUrl: "/lovable-uploads/Picture_7.png"
        },      
      ]

      },



      {
        id: "media",
        label: "Media",
        content: [
          {
            type: "subheading",
            content: "Media"
          },
          {
            type: "paragraph",
            content: "Sweden's media landscape is shaped by influential figures who lead major news organisations, set journalistic standards, and connect Swedish audiences to both domestic and global affairs. These leaders drive innovation in public service broadcasting and print journalism while maintaining Sweden's proud tradition of independent, trustworthy media."
          }
        ],
        keyContacts: [
          {
            name: "Hanna Stjärne",
            title: "CEO of Sveriges Television (SVT)",
            description: "As the leader of Sweden's public service television broadcaster, Stjärne oversees one of the country's most influential media organizations. She has been instrumental in SVT's digital transformation while maintaining its commitment to impartial news coverage.",
            influence: "high",
            imageUrl: "/lovable-uploads/20fd9b55-7a72-4b20-9222-d786abe8b385.png"
          },
          {
            name: "Peter Wolodarski",
            title: "Editor-in-Chief of Dagens Nyheter (DN)",
            description: "Wolodarski leads Sweden's largest morning newspaper and is considered one of the country's most influential media voices. His editorial decisions and columns often shape public discourse on both domestic and international issues.",
            influence: "high",
            imageUrl: "/lovable-uploads/0969f621-44c4-4991-a5f3-01dd1bf5488a.png"
          },
          {
            name: "Jan Helin",
            title: "Program Director at SVT",
            description: "A veteran media figure, Helin has held several top positions in Swedish media, including as editor-in-chief at Aftonbladet before joining SVT. He has significant influence over programming decisions at Sweden's public broadcaster.",
            influence: "medium",
            imageUrl: "/lovable-uploads/f497a46e-61f2-4a52-ba6d-fafbe35bbd48.png"
          },
          {
            name: "Cecilia Uddén",
            title: "Swedish Radio foreign correspondent",
            description: "Uddén is one of Sweden's most respected foreign correspondents, with extensive experience reporting from the Middle East. Her analysis and reporting have shaped Swedish public understanding of the region for decades.",
            influence: "medium",
            imageUrl: "/lovable-uploads/c57e75a6-af2a-4f60-bb3a-ea45a44f17e2.png"
          },
        ]
      }












    ],
















    // keyContacts: [


    //   {
    //     name: "Danica Kragić Jensfelt",
    //     title: "Professor of Robotics at KTH Royal Institute of Technology",
    //     description: "One of the world's leading experts in robotics and computer vision. She has been named among Sweden's most powerful women in industry and \"Swede of the Year\" for her scientific contributions, while serving as a member of the Royal Swedish Academy of Sciences.",
    //     influence: "high",
    //     imageUrl: "/lovable-uploads/22d8e4ad-99a2-4b4d-923d-db52a3fd7d2b.png"
    //   },
    //   {
    //     name: "Antonia Ax:son Johnson",
    //     title: "Former Chairman of Axel Johnson AB",
    //     description: "Fourth-generation leader of Axel Johnson AB, a family company founded in 1873, where she served as chairman from 1982 until stepping down as CEO in 2015 while maintaining ownership and board presence. With a net worth of $10.2 billion as of April 2024, she remains one of Sweden's richest and most influential businesswomen, occasionally engaging with Gulf region investors over recent decades.",
    //     influence: "high",
    //     imageUrl: "/lovable-uploads/f768b986-b09f-4177-9aea-5d7d503d961e.png"
    //   },
      
    //   {
    //     name: "Anders Kiessling",
    //     title: "Professor of Aquaculture at the Swedish University of Agricultural Sciences",
    //     description: "Pioneered \"aqua-agro\" techniques to recycle nutrients between land agriculture and aquaculture. He led an SLU delegation to the UAE to explore research partnerships, exemplifying Sweden's academic approach to addressing global food security challenges through international collaboration.",
    //     influence: "high",
    //     imageUrl: "/lovable-uploads/c3b63bf0-b4ac-4e46-92c5-7b251407ddfc.png"
    //   },
    //   {
    //     name: "Peter Värbrand",
    //     title: "Deputy Vice-Chancellor for External Relations and Innovation at Linköping University",
    //     description: "Has significantly advanced international academic partnerships. He played a key role in establishing a Memorandum of Understanding between Linköping University and the University of Sharjah in the UAE, focusing on joint research and technology exchange in fields including drone aviation systems and aerospace.",
    //     influence: "high",
    //     imageUrl: "/lovable-uploads/39c33f25-e22d-43d3-9cf9-63506736328a.png"
    //   },
      
    //   {
    //     name: "Fredrik Heintz",
    //     title: "Professor at Linköping University & Chair of Swedish National AI Council",
    //     description: "Leading AI researcher who shapes Sweden's AI strategy, particularly in AI ethics and autonomous systems. His focus on AI for social good aligns with UAE initiatives, though his work remains primarily centered on Sweden's AI landscape and education.",
    //     influence: "high",
    //     imageUrl: "/lovable-uploads/e88f8927-5a5e-4b32-aa0b-b04fa6705dad.png"
    //   },
    //   {
    //     name: "Max Tegmark",
    //     title: "Swedish-American Physicist & MIT Professor",
    //     description: "Influential AI safety expert who co-founded the Future of Life Institute and authored the seminal book \"Life 3.0\" on artificial intelligence's future. While based primarily in the US, his Swedish roots enhance Sweden's credibility in AI ethics globally, with his principles on AI governance resonating with UAE efforts to develop AI ethical frameworks.",
    //     influence: "high",
    //     imageUrl: "/lovable-uploads/f8a3266d-76bb-484e-8675-b4c0c584f53b.png"
    //   },
    //   {
    //     name: "Sara Mazur",
    //     title: "Chair of the Wallenberg AI, Autonomous Systems and Software Program (WASP)",
    //     description: "Former Ericsson R&D head who leads Sweden's largest research program on AI and autonomous systems. She coordinates hundreds of researchers keeping Sweden at the AI forefront, engaging internationally including emerging dialogues with UAE's AI Ministry on smart cities and healthcare applications.",
    //     influence: "high",
    //     imageUrl: "/lovable-uploads/80a6c79a-30a4-41e2-a757-3c8e946e40ce.png"
    //   },
      
    //   {
    //     name: "Laurent Leksell",
    //     title: "Co-founder and Chairman of Elekta AB",
    //     description: "Built on his father's Gamma Knife invention to create a leading medical technology enterprise for cancer and neurosurgery treatment. Under his leadership, Elekta has become a key partner for UAE healthcare providers in oncology, showcasing advanced radiotherapy solutions at Dubai's Arab Health conference and supporting the Emirates' healthcare advancement goals.",
    //     influence: "high",
    //     imageUrl: "/lovable-uploads/7e973896-4f8c-4594-8325-dca6fca727f1.png"
    //   },
    //   {
    //     name: "Björn Zoëga",
    //     title: "Distinguished orthopedic surgeon and former CEO of Karolinska University Hospital",
    //     description: "Has played a significant role in exporting Swedish medical expertise to the Gulf region. Since 2016, he has worked with Sweden's GHP Healthcare to oversee specialized spine surgery departments in both Sweden and the UAE, exemplifying effective cross-border medical knowledge transfer.",
    //     influence: "high",
    //     imageUrl: "/lovable-uploads/d0860c34-58dc-4811-964b-e983de165b9c.png"
    //   },
      
    //   {
    //     name: "Jacob Wallenberg",
    //     title: "Vice Chairman of Investor AB (the Wallenberg investment holding)",
    //     description: "Vice chairman of Investor AB and patriarch of Sweden's famed Wallenberg family who presides over a vast portfolio of Sweden's largest companies including ABB, Ericsson, and AstraZeneca. He has led business delegations to the Gulf and overseen Wallenberg-chaired companies like Saab AB which sells defense systems to the UAE, actively supporting stronger Sweden-UAE economic relationships.",
    //     influence: "high",
    //     imageUrl: "/lovable-uploads/Picture_1.png"

    //   },
    //   {
    //     name: "Daniel Ek",
    //     title: "Co-Founder and CEO of Spotify",
    //     description: "Co-founder and CEO of Spotify who transformed the global music industry, growing his Stockholm startup into a NYSE-listed giant with users in over 180 markets. He has participated in the UAE's World Government Summit and overseen Spotify's 2018 launch in the Middle East, where the service has gained popularity and developed regional partnerships.",
    //     influence: "medium",
    //     imageUrl: "/lovable-uploads/Picture_2.png"
    //   },
    //   {
    //     name: "Sebastian Siemiatkowski",
    //     title: "CEO and Co-Founder of Klarna",
    //     description: "CEO and co-founder of Klarna, the Stockholm-based fintech unicorn valued at billions of dollars that pioneered 'buy-now-pay-later' payment solutions. While Klarna has no direct UAE operations, Siemiatkowski's success has attracted interest from Middle Eastern investors and banks, and he has appeared at fintech events with Gulf participants.",
    //     influence: "medium",
    //     imageUrl: "/lovable-uploads/Picture_3.png"
    //   },
    //   {
    //     name: "Stefan Persson",
    //     title: "Long-time Chairman and Chairman Emeritus of H&M Group ",
    //     description: "Long-time chairman (now chairman emeritus) of H&M Group who expanded the family business into a worldwide fast-fashion empire. Under his leadership, H&M established dozens of stores across the UAE through regional franchise partners and developed partnerships with Emirati mall operators.",
    //     influence: "low",
    //     imageUrl: "/lovable-uploads/Picture_4.png"
    //   },
      
    //   {
    //     name: "Magnus Olsson",
    //     title: "Co-Founder of Careem",
    //     description: "Swedish co-founder of Careem, the UAE-based ride-hailing company acquired by Uber for $3.1 billion in 2019. He continues to be based partly in Dubai, mentoring startups at Abu Dhabi's Hub71 tech hub and serving as a prime example of Swedish entrepreneurial success in the Gulf region.",
    //     influence: "high",
    //     imageUrl: "/lovable-uploads/Picture_5.png"
    //   },
    //   {
    //     name: "Marcus Wallenberg",
    //     title: "Chairman of Saab, frequent interlocutor with UAE senior leaders ",
    //     description: "Chairman of Saab and brother of Jacob Wallenberg who serves on the boards of several Wallenberg companies while frequently engaging with UAE leadership on defense and economic cooperation. His influence extends through major Swedish corporations with significant interests in the Middle East.",
    //     influence: "high",
    //     imageUrl: "/lovable-uploads/Picture_6.png"
    //   },
    //   {
    //     name: "Börje Ekholm",
    //     title: "CEO of Ericsson",
    //     description: "CEO of Ericsson and member of Sweden's AI Commission who leads one of the country's most globally significant technology companies. He has developed important relationships with UAE telecom partners as Ericsson expands its presence in the Middle East telecommunications market.",
    //     influence: "medium",
    //     imageUrl: "/lovable-uploads/Picture_7.png"
    //   },      



    //   {
    //     name: "Hanna Stjärne",
    //     title: "CEO of Sveriges Television (SVT)",
    //     description: "As the leader of Sweden's public service television broadcaster, Stjärne oversees one of the country's most influential media organizations. She has been instrumental in SVT's digital transformation while maintaining its commitment to impartial news coverage.",
    //     influence: "high",
    //     imageUrl: "/lovable-uploads/20fd9b55-7a72-4b20-9222-d786abe8b385.png"
    //   },
    //   {
    //     name: "Peter Wolodarski",
    //     title: "Editor-in-Chief of Dagens Nyheter (DN)",
    //     description: "Wolodarski leads Sweden's largest morning newspaper and is considered one of the country's most influential media voices. His editorial decisions and columns often shape public discourse on both domestic and international issues.",
    //     influence: "high",
    //     imageUrl: "/lovable-uploads/0969f621-44c4-4991-a5f3-01dd1bf5488a.png"
    //   },
    //   {
    //     name: "Jan Helin",
    //     title: "Program Director at SVT",
    //     description: "A veteran media figure, Helin has held several top positions in Swedish media, including as editor-in-chief at Aftonbladet before joining SVT. He has significant influence over programming decisions at Sweden's public broadcaster.",
    //     influence: "medium",
    //     imageUrl: "/lovable-uploads/f497a46e-61f2-4a52-ba6d-fafbe35bbd48.png"
    //   },
    //   {
    //     name: "Cecilia Uddén",
    //     title: "Swedish Radio foreign correspondent",
    //     description: "Uddén is one of Sweden's most respected foreign correspondents, with extensive experience reporting from the Middle East. Her analysis and reporting have shaped Swedish public understanding of the region for decades.",
    //     influence: "medium",
    //     imageUrl: "/lovable-uploads/c57e75a6-af2a-4f60-bb3a-ea45a44f17e2.png"
    //   },



    //   {
    //     name: "Anna Borg",
    //     title: "President and CEO of Vattenfall",
    //     description: "First woman to serve as President and CEO of Vattenfall, Sweden's largest state-owned energy company, where she leads major investments in renewable energy and the transition to fossil-free power. She has engaged with UAE entities like Masdar on renewable energy knowledge exchange and participated in the World Future Energy Summit in Abu Dhabi, offering expertise in offshore wind and grid integration relevant to Gulf energy planning.",
    //     influence: "high",
    //     imageUrl: "/lovable-uploads/11d49371-2ac2-4f4e-be90-026808e43a71.png"
    //   },
    //   {
    //     name: "Anders Forslund",
    //     title: "Co-founder and CEO of Heart Aerospace",
    //     description: "Pioneering green aviation technology by developing a 30-seat hybrid-electric regional airliner scheduled for launch by 2028. He has presented at the Dubai Airshow's tech showcases and interacted with Masdar's mobility innovation teams, positioning his company for potential future partnerships with UAE airlines seeking to reduce their carbon footprint.",
    //     influence: "high",
    //     imageUrl: "/lovable-uploads/5cf19aab-7d37-4981-8e95-4e83b553c3aa.png"
    //   },
    //   {
    //     name: "Lena Sundquist",
    //     title: "CEO of Climeon",
    //     description: "CEO of Climeon, a Swedish clean-tech company that converts waste heat into electricity, representing Sweden's innovative green industrialists. Climeon has piloted systems in UAE desalination plants to improve efficiency, while Sundquist and peers regularly participate in UAE sustainability events to share green technology solutions and expertise.",
    //     influence: "medium",
    //     imageUrl: "/lovable-uploads/c65c16e7-15b2-4bee-b538-7daa47914bd2.png"
    //   },
    //   {
    //     name: "Greta Thunberg",
    //     title: "Environmental Activist",
    //     description: "Swedish environmental activist who sparked the global youth climate movement beginning with her school strikes at age 15, becoming Time's Person of the Year in 2019. While she has criticized oil-producing nations and become involved in pro-Palestinian activism, her global influence was acknowledged when the UAE extended an invitation to her for COP28 in 2023.",
    //     influence: "high",
    //     imageUrl: "/lovable-uploads/69aa02d8-2856-40de-8b8f-7c2257c8e37e.png"
    //   },
      
    //   {
    //     name: "Carin Jämtin",
    //     title: "Director General of the Swedish International Development Cooperation Agency (Sida)",
    //     description: "Former government minister who leads Sweden's official aid agency in strategic philanthropy and development funding worldwide. She collaborates with UAE-based philanthropic organizations like Dubai Cares through international forums such as the Global Partnership for Education, leveraging Sweden's resources through partnerships to maximize impact in areas including education for children in crisis zones.",
    //     influence: "high",
    //     imageUrl: "/lovable-uploads/cf96487f-726a-4489-9660-3f23b5b5befa.png"
    //   },
    //   {
    //     name: "Niklas Zennström",
    //     title: "Co-founder of Skype and Tech Entrepreneur",
    //     description: "Prominent Swedish tech entrepreneur who established Zennström Philanthropies with his wife to fund initiatives in climate change, environmental protection, and social entrepreneurship. His strategic global giving aligns with UAE philanthropic programs in sustainability, and he participates in international networks like the UN and World Economic Forum that include UAE stakeholders, exemplifying tech-driven philanthropy focused on cross-border solutions.",
    //     influence: "high",
    //     imageUrl: "/lovable-uploads/9c110fb3-7b9b-4eae-97af-e36589d45ca4.png"
    //   }


    // ]







  },
  {
    id: "unfriendly-entities",
    title: "Notable Swedish Entities Unfriendly Toward the UAE",
    content: [
      {
        type: "paragraph",
        content: "While overall relations between Sweden and the UAE are positive, certain organizations and individuals maintain critical stances toward UAE policies. Understanding these perspectives can be valuable for diplomatic engagement."
      }
    ],
    tabs: [
      {
        id: "critics",
        label: "Political & Civil Society Critics",
        content: [
          {
            type: "subheading",
            content: "Critics in Politics and Civil Society"
          },
          {
            type: "paragraph",
            content: "Several political figures and civil society organizations in Sweden have raised concerns about specific aspects of UAE governance, human rights, or regional policies."
          },
          {
            type: "list",
            content: "Notable critical organizations:",
            items: [
              "Swedish Peace and Arbitration Society",
              "Amnesty International's Swedish chapter",
              "Civil Rights Defenders",
              "Left Party (Vänsterpartiet) representatives",
              "Green Party (Miljöpartiet) members"
            ]
          }
        ]
      },
      {
        id: "islamist",
        label: "Islamist-Leaning Organizations",
        content: [
          {
            type: "subheading",
            content: "Islamist-Leaning Organizations and Individuals"
          },
          {
            type: "paragraph",
            content: "From the UAE's perspective, perhaps the most 'unfriendly' entities in Sweden are those linked to the Muslim Brotherhood, given the UAE government's staunch anti-MB policy."
          },
          {
            type: "paragraph",
            content: "The Islamic Association in Sweden (IFIS) stands out – it has been identified by researchers as the Brotherhood's primary organizational platform in Sweden. IFIS and related bodies (such as youth groups, charitable foundations, and the Swedish Muslim Council) promote Islamic causes and often have ideological sympathies with the MB's global outlook."
          }
        ]
      },
      {
        id: "others",
        label: "Other Detractors",
        content: [
          {
            type: "subheading",
            content: "Other Notable Detractors"
          },
          {
            type: "paragraph",
            content: "Media outlets, academics, and advocacy groups focusing on specific policy areas may occasionally adopt critical stances toward certain UAE positions or actions."
          },
          {
            type: "list",
            content: "Additional critical entities:",
            items: [
              "Pro-Palestinian activist groups critical of UAE-Israel normalization",
              "Trade unions focusing on migrant worker rights",
              "Investigative journalists covering Gulf state policies",
              "International Trade Union Confederation's Swedish chapter"
            ]
          }
        ]
      }
    ],
    graphData: {
      nodes: [
        { id: "uae_govt", label: "UAE Government", group: "uae", size: 30 },
        { id: "critics_political", label: "Political Critics", group: "sweden", size: 20 },
        { id: "critics_ngo", label: "Critical NGOs", group: "sweden", size: 20 },
        { id: "critics_media", label: "Media Critics", group: "sweden", size: 18 },
        { id: "critics_academic", label: "Academic Critics", group: "sweden", size: 15 },
        { id: "islamist_orgs", label: "Islamist-Leaning Organizations", group: "neutral", size: 20 },
        { id: "human_rights", label: "Human Rights Organizations", group: "neutral", size: 18 }
      ],
      links: [
        { source: "critics_political", target: "uae_govt", value: 3, dashed: true },
        { source: "critics_ngo", target: "uae_govt", value: 3, dashed: true },
        { source: "critics_media", target: "uae_govt", value: 2, dashed: true },
        { source: "critics_academic", target: "uae_govt", value: 2, dashed: true },
        { source: "islamist_orgs", target: "uae_govt", value: 4, dashed: true },
        { source: "human_rights", target: "uae_govt", value: 3, dashed: true },
        { source: "critics_political", target: "critics_ngo", value: 2 },
        { source: "critics_media", target: "critics_ngo", value: 2 },
        { source: "critics_academic", target: "critics_ngo", value: 1 },
        { source: "islamist_orgs", target: "critics_political", value: 2 },
        { source: "human_rights", target: "critics_ngo", value: 3 }
      ]
    }
  },
  {
    id: "conclusion",
    title: "Conclusion",
    content: [
      {
        type: "paragraph",
        content: "The UAE-Sweden relationship from 2019 to 2024 demonstrates the potential for productive cooperation between nations with different political systems and regional contexts. While areas of tension exist, the bilateral relationship continues to develop positively across diplomatic, economic, and cultural dimensions."
      },
      {
        type: "paragraph",
        content: "Key opportunities for future relationship development include expanded cooperation in technology innovation, sustainable development, and strategic dialogue on regional security challenges."
      },
      {
        type: "quote",
        content: "Strong bilateral relations between diverse nations like the UAE and Sweden exemplify how shared interests can transcend differences in governance approaches and regional perspectives.",
        author: "Diplomatic Analysis"
      }
    ],
    relationshipDimensions: [
      {
        name: "Overall Bilateral Strength",
        value: 75,
        description: "Positive trajectory with specific areas for improvement"
      },
      {
        name: "Economic Partnership",
        value: 85,
        description: "Strong trade relationship with growth potential"
      },
      {
        name: "Political Alignment",
        value: 60,
        description: "General cooperation with some policy differences"
      },
      {
        name: "Future Cooperation Potential",
        value: 90,
        description: "Significant opportunities for expanded partnership"
      }
    ]
  }
];
