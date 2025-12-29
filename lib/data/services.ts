export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  colorGradient: string;
  category?: string;
};

export const services: Service[] = [
  {
    slug: "air-ticketing",
    title: "Air Ticketing",
    shortDescription:
      "Reliable airline ticketing services with tie-ups to renowned domestic and international airlines at cost-effective rates.",
    fullDescription:
      "We offer Air ticket reservations all around the world and our airline ticketing services are highly reliable. Our organisation has tie-ups with renowned domestic as well as international airlines, enabling us to arrange tickets within the postulated time period and at cost effective rates.",
    icon: "✈️",
    colorGradient: "from-blue-400 to-indigo-500",
    category: "Booking",
  },
  {
    slug: "visa-assistance",
    title: "Visa Assistance",
    shortDescription:
      "Complete guidance and assistance for all visa processes including Business, Leisure, Family Visit, Dependent, Study, and Work visas.",
    fullDescription:
      "Payaana has a team of friendly and experienced Individuals who are trained to understand your requirements and provide you with complete knowledge and assistance regarding your visa processes. The team is well equipped to guide you through the entire procedure from documentation, policies to stamping of all kind of visas like Business, Leisure, Family Visit, Dependent, Study or Work. Name your Requirement, and our experts will do the needful.",
    icon: "📋",
    colorGradient: "from-green-400 to-teal-500",
    category: "Documentation",
  },
  {
    slug: "passport-assistance",
    title: "Passport Assistance",
    shortDescription:
      "Complete assistance for fresh passport issuance, renewal procedures, PCC, Diplomatic Passports, and Background Verification certificates.",
    fullDescription:
      "Payaana will assist its clients in getting their Passports issued. We provide Services in Getting your Fresh Passports and also the Renewal Procedures. other PAssport office Services Like Issuance of PCC, Issuance of Diplomatic Passports and Issuance of Background Verification certificates For GEP also is Undertaken and Assisted by Payaana Team.",
    icon: "📄",
    colorGradient: "from-orange-400 to-red-500",
    category: "Documentation",
  },
  {
    slug: "travel-insurance",
    title: "Travel Insurance",
    shortDescription:
      "Essential travel insurance guidance with tie-ups to major insurance companies, covering all types of travel with claim assistance.",
    fullDescription:
      "Travel Insurance is a very Important and recomended document for every traveller to carry on their journey. Payaana has tie ups with major insurance companies and provides guidance with all the required informations about the Insurance, assistance in getting the right Insurance for the type of travel and through its coverage and claim procedures. Payaana helps with registration of claims and encashment in cases where its required.",
    icon: "🛡️",
    colorGradient: "from-blue-500 to-cyan-500",
    category: "Protection",
  },
  {
    slug: "holiday-planning-tour-packages",
    title: "Holiday Planning & Tour Packages",
    shortDescription:
      "Expert tour package planning with customized solutions for Leisure, Family Tours, Youth Tours, Honeymoon, Adventure, Pilgrimage, and more.",
    fullDescription:
      "Payaana is expert in providing the right tour package based on customer requirements. We first understand the needs of each traveler's query and provide them with best suited customised packages. We have wide range of of bookings like, Leisure, Family Tour, Youth Tour, Honeymoon, Adventure, Pilgrimage and many more.",
    icon: "🏝️",
    colorGradient: "from-teal-400 to-green-500",
    category: "Planning",
  },
  {
    slug: "currency-exchange",
    title: "Currency Exchange",
    shortDescription:
      "Foreign currency exchange at competitive rates with guidance on type, quantity, and mode of currency for your travels.",
    fullDescription:
      "Payaana helps its clients get their foriegn currency exchange done at a very good rate based on the availability. we also guide you with type ,quantity and mode of currency you should and can carry while you go on a tour.",
    icon: "💱",
    colorGradient: "from-yellow-400 to-orange-500",
    category: "Financial",
  },
  {
    slug: "international-sim",
    title: "International SIM",
    shortDescription:
      "Matrix International SIM Card recommendations for all international travels with local call rates to stay connected abroad.",
    fullDescription:
      "Payaana recommends to carry a Matrix International SIM Card for all international travels. Enjoy local call rates for the country you are travelling to and stay connected with everyone when traveling abroad for business or leisure.",
    icon: "📱",
    colorGradient: "from-purple-400 to-pink-500",
    category: "Connectivity",
  },
  {
    slug: "cruise-booking",
    title: "Cruise Booking",
    shortDescription:
      "Expert cruise booking services with tie-ups to major cruise companies and DMCs at competitive prices with early bird offers.",
    fullDescription:
      "Payaana's team has experts to help you get your cruise booking done. Payaana is tied up with major cruise companies and its DMCs and can provide bookings done at a very competative price. We also assist with its advance booking policies and early bird offers which can be booked and saved.",
    icon: "🚢",
    colorGradient: "from-cyan-400 to-blue-500",
    category: "Booking",
  },
  {
    slug: "accommodation",
    title: "Accommodation",
    shortDescription:
      "Best accommodations worldwide with tie-ups to premium properties including Hotels, Resorts, and Service Apartments in all star categories.",
    fullDescription:
      "Payaana takes you through the best of accommodations worldwide. We have tie ups with best properties across the globe for reservations in Hotels, Resorts, Service Apartments in all star categories. Get the right accomodation that meets your needs based on your travel interests like Business, Leisure, Honeymoon and more through Payaana.",
    icon: "🏨",
    colorGradient: "from-rose-400 to-pink-500",
    category: "Booking",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(
  currentSlug: string,
  limit: number = 3
): Service[] {
  return services
    .filter((service) => service.slug !== currentSlug)
    .slice(0, limit);
}

