// src/lib/data.js

// --- PERSONAL METADATA (For SEO & Contact) ---
export const personalMeta = {
  name: "Vikrant Yadav",
  title: "Architect & Creative Developer",
  description: "Avant-garde architecture and digital experiences. Exploring the void between raw materiality and code.",
  email: "vikrant.yadav1401@gmail.com", 
  socials: {
    instagram: "https://instagram.com/yourhandle", 
    linkedin: "https://linkedin.com/in/yourhandle",
    twitter: "https://twitter.com/yourhandle",
  },
};

// --- ARCHITECTURAL PROJECTS ---
export const architecturalProjects = [
  {
    id: "fortress-in-the-sky", // Updated ID
    title: "Fortress in the Sky", // Updated Title from Jury.pdf
    projectType: "Academic / Live Project", // "Live Project" & "ARC528" mentioned in Jury.pdf
    category: "Urban Design & Mixed Use", // Inferred from 89 acres, mall, offices, hotel
    year: "2025", // Aligned with your portfolio timeline
    location: "Thane, Maharashtra", // From Brief.pdf
    area: "89 Acres", // From Brief.pdf
    status: "Concept",
    description: "A vertical skyline hub reimagining Maratha forts within a modern ecological framework.", // Synthesized from Concept
    longDescription: "Located along a cloverleaf intersection in Thane, this 89-acre development envisions a 'Fortress in the Sky.' Drawing inspiration from the resilient geometry of Maratha forts like Raigad and Shanivar Wada, the project integrates a 250m tall watchtower, a 5-star hotel, and vast commercial spaces. The design acts as a timeline, bridging ancient defense strategies with modern bio-integrated architecture, featuring stepped roofs and vertical gardens that preserve the surrounding creek and mangrove ecosystem.", // Synthesized from Brief.pdf and Jury.pdf
    heroImage: "/assets/fortress/hero.jpg", // Placeholder (Update with your new render)
    coverImage: "/assets/fortress/cover.jpg",
    gallery: [
      "/assets/fortress/1.png", 
      "/assets/fortress/2.png",
      "/assets/fortress/3.jpg",
      "/assets/fortress/4.jpg",
      "/assets/fortress/5.jpg", 
      "/assets/fortress/6.jpg",
      "/assets/fortress/7.jpg",
      "/assets/fortress/8.jpg",

    ],
    isFeatured: true, 
  },
  {
    id: "trikuta-centre",
    title: "Trikuta Centre",
    projectType: "Academic / Urban Design",
    category: "Cultural & Hospitality",
    year: "2024", // Session 24251
    location: "Katra, Jammu & Kashmir",
    area: "9.5 Acres", // Sum of component areas (2+1+2+1+0.5+1+4)
    status: "Concept",
    description: "A holistic pilgrimage hub integrating a cultural museum, transit terminal, and wellness hotel.", 
    longDescription: "Located in Katra, the base camp for the 7 million annual pilgrims visiting Vaishno Devi, the Trikuta Experience Centre solves critical infrastructure challenges. The masterplan synthesizes a multi-modal transportation hub (Bus & Taxi) with a dedicated 'Yatra' registration facility. The core of the project features an interactive Cultural Museum depicting the pilgrimage's history, alongside a Wellness Hotel & Centre designed for yoga and meditation, transforming the chaotic transit point into a spiritual gateway.",
    heroImage: "/assets/trikuta/hero.jpg",
    coverImage: "/assets/trikuta/cover.jpg",
    gallery: [
      "/assets/trikuta/1.jpg",
      "/assets/trikuta/2.jpg",
      "/assets/trikuta/3.jpg",
      "/assets/trikuta/4.jpg",
      "/assets/trikuta/5.jpg",
      "/assets/trikuta/6.jpg",
      "/assets/trikuta/7.jpg",
      "/assets/trikuta/8.jpg"
    ],
    isFeatured: true,
  },
  {
    id: "community-housing",
    title: "Community Housing ",
    projectType: "Academic / Housing",
    category: "Residential",
    year: "2024",
    location: "Jalandhar, Punjab", //
    area: "19.8 Acres", //
    status: "Concept",
    description: "A high-density housing project evolved from case studies of iconic Indian residential architecture.",
    longDescription: "This 19.8 acre housing project in Jalandhar is a culmination of analyzing successful community living models like Tara Apartments and Kanchenjunga. The masterplan balances high-density living with open spaces, using strategic building orientation to maximize natural light and ventilation. The design features a hierarchy of community spaces, from cluster-level courtyards to central green spines, fostering social interaction while addressing the complex service requirements of a large-scale residential development.", // Synthesized from case studies and site analysis
    heroImage: "/assets/housing/hero.jpg",
    coverImage: "/assets/housing/cover.jpg",
    gallery: [
      "/assets/housing/1.jpg",
      "/assets/housing/2.jpg",
      "/assets/housing/3.jpg",
      "/assets/housing/4.jpg",
      "/assets/housing/5.jpg",
      "/assets/housing/6.jpg",
      "/assets/housing/7.jpg",
      "/assets/housing/8.jpg"
    ],
    isFeatured: true,
  },
  {
    id: "commercial-hub",
    title: "Commercial Hub",
    projectType: "Academic / Mixed Use",
    category: "Commercial & Institutional",
    year: "2023",
    location: "Science City Road, Ahmedabad", //
    area: "13.17 Acres", //
    status: "Concept",
    description: "A climate-responsive mall and library complex designed around the concept of fluid movement.",
    longDescription: "Situated opposite City Centre 2 on the bustling Science City Road, this 13.17-acre development juxtaposes high-velocity commercial activity with the quiet solitude of a library. The Shopping Complex utilizes a 'Flow' concept to optimize customer navigation, featuring a structural space frame and a double-skin facade with ventilated cavities to combat Ahmedabad's dry heat. The Library stands as a counterpoint, designed through a subtractive geometric evolution of square forms.", // Synthesized from cxoncept.pdf and Site Analysis.pdf
    heroImage: "/assets/mall/hero.jpg", 
    coverImage: "/assets/mall/cover.jpg", 
    gallery: [
      "/assets/mall/1.jpg", 
      "/assets/mall/2.jpg", 
      "/assets/mall/3.jpg", 
      "/assets/mall/4.jpg", 
      "/assets/mall/5.jpg", 
      "/assets/mall/6.jpg", 
      "/assets/mall/7.jpg", 
      "/assets/mall/8.jpg"
    ],
    isFeatured: true,
  },
  {
    id: "amrit-dhara-pune",
    title: "Amrit Dhara",
    projectType: "Competition / Sustainability",
    category: "Sustainable Design",
    year: "2024", 
    location: "Pune, Maharashtra",
    area: "0.88 Acre", // Update this if you have the specific area
    status: "Competition Entry",
    description: "A net-zero energy design proposal integrating vernacular strategies with modern sustainability benchmarks.",
    longDescription: "Designed for the composite climate of Pune, this competition entry for the NASA GRIHA Trophy explores the intersection of passive design and green technology. The project focuses on minimizing the carbon footprint through earth-sheltering, stack ventilation, and renewable energy integration, aiming for a 5-star GRIHA rating.",
    heroImage: "/assets/amrit/hero.jpg",
    coverImage: "/assets/amrit/cover.jpg",
    gallery: [
      "/assets/amrit/1.jpg",
      "/assets/amrit/2.jpg",
      "/assets/amrit/3.jpg",
      "/assets/amrit/4.jpg",
      "/assets/amrit/5.jpg",
      "/assets/amrit/6.jpg",
      "/assets/amrit/7.jpg",
      "/assets/amrit/8.jpg"
    ],
    isFeatured: true,
  },
  {
    id: "aroha-siddhi-mathura",
    title: "Aroha Siddhi",
    projectType: "Competition / Landscape",
    category: "Urban Design & Sustainability",
    year: "2024",
    location: "Mathura, Uttar Pradesh", //
    area: "Riverfront Development",
    status: "Competition Entry",
    description: "A mythological and ecological revitalization of the Yamuna riverfront featuring a Sudarshan Chakra bridge.",
    longDescription: "Submitted for the NASA GSEN Trophy (Entry 67GSEN-27), 'Aroha Siddhi' reimagines the Yamuna riverbanks in Mathura. The design concept mirrors the mythological journey of Vasudeva carrying Krishna, featuring a 'Sudarshan Setu' bridge and a peacock-feather-shaped island. Beyond symbolism, the project proposes critical ecological solutions like bubble barriers, floating trash skimmers, and STPs to treat river pollution, while providing barrier-free access to new Ghats, a Dharamshala, and an underwater restaurant.",
    heroImage: "/assets/aroha/hero.jpg", // Suggest using the "Isometric view of site"
    coverImage: "/assets/aroha/cover.jpg", // Suggest using the "Sudarshan Setu" render
    gallery: [
      "/assets/aroha/1.jpg",
      "/assets/aroha/2.jpg",
      "/assets/aroha/3.jpg",
      "/assets/aroha/4.jpg",
      "/assets/aroha/5.jpg",
      "/assets/aroha/6.jpg",
      "/assets/aroha/7.jpg",
      "/assets/aroha/8.jpg"
    ],
    isFeatured: true,
  },
];
