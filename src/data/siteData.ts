// ─── Site-wide data for ZYPER VENTURES ───

export const siteConfig = {
  name: "ZYPER",
  tagline: "VENTURES",
  description: "Real Estate · Construction · Beverages",
  email: "zyperyard@gmail.com",
  phone: "+91 90727 27544",
  address: "Bengaluru, Karnataka, India",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Construction", href: "/construction" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Liquor", href: "/liquor" },
  { label: "Contact", href: "/#contact" },
];

// ─── Hero slides ───
export const heroSlides = [
  {
    id: 1,
    category: "Real Estate",
    title: ["YOUR VISION", "OF ELEVATED", "LIVING"],
    subtitle: "Premium residential & commercial spaces crafted with purpose.",
    location: "Bengaluru, Karnataka, India",
    videoUrl: "https://videos.pexels.com/video-files/7578545/7578545-uhd_2560_1440_25fps.mp4",
    posterUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    cta: { label: "Explore Properties", href: "/real-estate" },
  },
  {
    id: 2,
    category: "Construction",
    title: ["BUILT WITH", "PRECISION.", "BUILT TO", "LAST."],
    subtitle: "Engineering excellence from foundation to finish.",
    location: "South India",
    videoUrl: "https://videos.pexels.com/video-files/3843440/3843440-uhd_2560_1440_24fps.mp4",
    posterUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
    cta: { label: "Our Work", href: "/construction" },
  },
  {
    id: 3,
    category: "Beverages",
    title: ["CRAFTED FOR", "DISCERNING", "TASTE"],
    subtitle: "Curated spirits and beverages for the finest moments.",
    location: "Licensed Distribution, Bengaluru & Karnataka",
    videoUrl: "https://videos.pexels.com/video-files/2171201/2171201-uhd_2560_1440_30fps.mp4",
    posterUrl: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=1920&q=80",
    cta: { label: "Our Collection", href: "/liquor" },
  },
];

// ─── Divisions ───
export const divisions = [
  {
    id: "real-estate",
    number: "01",
    label: "Real Estate",
    headline: "Spaces crafted for the way you live",
    description:
      "From luxurious residences to smart commercial spaces, we develop properties that stand the test of time — combining thoughtful design, strategic locations, and customer-first values.",
    image1: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    href: "/real-estate",
  },
  {
    id: "construction",
    number: "02",
    label: "Construction",
    headline: "Engineering excellence, structure by structure",
    description:
      "ZYPER Construction combines solid engineering with modern techniques to deliver residential and commercial projects on time, within budget, and beyond expectations.",
    image1: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    href: "/construction",
  },
  {
    id: "beverages",
    number: "03",
    label: "Beverages",
    headline: "Premium spirits, ethically distributed",
    description:
      "Our beverages division operates with the highest standards of quality, regulatory compliance, and responsible distribution across Bengaluru district, Karnataka, and beyond.",
    image1: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=800&q=80",
    image2: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&q=80",
    href: "/liquor",
  },
];

// ─── Services (home page) ───
export const services = [
  {
    id: 1,
    title: "Land Identification & Due Diligence",
    description:
      "Every acquisition starts with a clear picture, verified titles, zoning checks, and site suitability assessed upfront, not discovered after the deal is done.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
  },
  {
    id: 2,
    title: "Acquisition & Negotiation",
    description:
      "Our in-house team handles negotiations directly with landowners and stakeholders, so pricing and terms stay fair, clear, and in your interest from the start.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
  },
  {
    id: 3,
    title: "Legal Transfer & Documentation",
    description:
      "We manage the entire legal process, from title transfer to regulatory approvals, with our own team overseeing every step, no delays passed on to you.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80",
  },
  {
    id: 4,
    title: "End-to-End Land Solutions",
    description:
      "From the first site visit to final possession, we handle the complete process under one roof, with clear updates at every stage.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
  },
];

// ─── Stats ───
export const stats = [
  { value: "14+", label: "Years in Bengaluru" },
  { value: "16+", label: "Projects Delivered" },
  { value: "3", label: "Business Divisions" },
  { value: "16+", label: "Happy Clients" },
];

// ─── Gallery images ───
export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    alt: "Modern residential architecture",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80",
    alt: "Interior design excellence",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&q=80",
    alt: "Construction precision",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80",
    alt: "Luxury pool area",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1556909172-bf51e8e60196?w=600&q=80",
    alt: "Premium kitchen interiors",
    span: "col-span-1 row-span-1",
  },
];

// ─── Footer links ───
export const footerExplore = [
  { label: "Home", href: "/" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Construction", href: "/construction" },
  { label: "Beverages", href: "/liquor" },
  { label: "About Us", href: "/#about" },
];
export const footerResources = [
  { label: "Project Gallery", href: "/#gallery" },
  { label: "Our Philosophy", href: "/#about" },
  { label: "Client Stories", href: "/#services" },
  { label: "Capabilities", href: "/#stats" },
  { label: "Contact", href: "/#contact" },
];
