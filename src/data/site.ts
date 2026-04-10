export interface Service {
  title: string;
  image: string;
  href: string;
  slug: string;
}

export interface ServiceCategory {
  label: string;
  services: Service[];
}

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  megaMenu?: boolean;
}

export interface LocationSection {
  heading: string;
  paragraphs: string[];
}

export interface Location {
  slug: string;
  name: string;
  state: string;
  phoneDisplay: string;
  phoneTel: string;
  address?: string;
  seoSections?: LocationSection[];
}

export const PHONE_DISPLAY = "(954) 932-0764";
export const PHONE_TEL = "+19549320764";
export const COMPANY = "Top Notch Doors & Windows";
export const TAGLINE = "Fast, Reliable, Affordable";

export const LOCATIONS: Location[] = [
  {
    slug: "miami",
    name: "Miami",
    state: "FL",
    phoneDisplay: "(954) 932-0764",
    phoneTel: "+19549320764",
    seoSections: [
      {
        heading: "Sliding Door & Window Experts Serving Greater Miami",
        paragraphs: [
          "Miami's tropical climate, salt air, and hurricane season take a serious toll on sliding doors and windows. Tracks corrode, rollers seize, weatherstripping breaks down, and impact glass loses its seal. If your sliding glass door is grinding, your patio door won't lock, or your condo windows are fogging up between the panes, you're dealing with issues that only get worse the longer you wait.",
          "Top Notch Doors & Windows serves homeowners, condo associations, property managers, and businesses across Miami-Dade County, from Brickell and Downtown Miami to Coral Gables, Kendall, Doral, and Miami Beach. We handle <a href='/service/sliding-door-repair/' class='text-[#004AAD] font-semibold hover:underline'>sliding door repair</a>, <a href='/service/pocket-door-repair/' class='text-[#004AAD] font-semibold hover:underline'>pocket door repair</a>, <a href='/service/barn-door-installation/' class='text-[#004AAD] font-semibold hover:underline'>barn door installation</a>, <a href='/service/screen-door-repair/' class='text-[#004AAD] font-semibold hover:underline'>screen door repair</a>, <a href='/service/impact-window-installation/' class='text-[#004AAD] font-semibold hover:underline'>impact window installation</a>, and <a href='/service/commercial-door-services/' class='text-[#004AAD] font-semibold hover:underline'>commercial door services</a>.",
        ],
      },
      {
        heading: "Why Miami Homeowners Choose Top Notch",
        paragraphs: [
          "Florida building codes require impact-rated windows and doors in Miami-Dade's High Velocity Hurricane Zone (HVHZ). Whether you're upgrading older single-pane windows to meet code or replacing impact glass that's cracked, our team installs systems that meet the strict Miami-Dade NOA (Notice of Acceptance) requirements. We handle the product selection, proper installation, and final inspection coordination so you don't have to.",
          "For sliding door repair in Miami, we carry common roller sizes and track hardware on every truck so most repairs are completed the same visit. No waiting weeks for parts, no return trips, no surprise charges. We quote before we start and stand behind every job with a written workmanship guarantee.",
        ],
      },
      {
        heading: "Neighborhoods We Serve in Miami",
        paragraphs: [
          "Our Miami service area covers Brickell, Wynwood, Little Havana, Coconut Grove, Coral Gables, Key Biscayne, Doral, Kendall, Homestead, Miami Beach, North Miami, Aventura, and surrounding communities. Same-day and next-day appointments are available for most door and window repairs.",
        ],
      },
    ],
  },
  {
    slug: "palm-beach",
    name: "Palm Beach",
    state: "FL",
    phoneDisplay: "(954) 932-0764",
    phoneTel: "+19549320764",
    seoSections: [
      {
        heading: "Door & Window Repair Across Palm Beach County",
        paragraphs: [
          "Palm Beach County homes face a unique combination of challenges: intense sun that warps vinyl and fades finishes, humid air that rusts metal tracks, and hurricane-force winds that test every seal and fastener. Sliding doors on waterfront properties corrode faster, screen doors rip from sudden summer storms, and older impact windows lose their insulating gas over time.",
          "Top Notch Doors & Windows provides full-service door and window repair, replacement, and installation across Palm Beach County. From <a href='/service/sliding-door-replacement/' class='text-[#004AAD] font-semibold hover:underline'>sliding door replacement</a> in oceanfront condos to <a href='/service/screen-door-installation/' class='text-[#004AAD] font-semibold hover:underline'>screen door installation</a> in Wellington family homes, our technicians bring the right parts, tools, and experience to handle the job on the first visit.",
        ],
      },
      {
        heading: "Impact Windows & Hurricane Prep for Palm Beach Properties",
        paragraphs: [
          "Palm Beach County sits squarely in Florida's hurricane zone, and up-to-code impact windows aren't optional. If you're still relying on accordion shutters or plywood, upgrading to impact-rated windows adds 24/7 storm protection, cuts outside noise, improves energy efficiency, and can lower your insurance premiums. We install impact windows from top manufacturers and handle the full process, including permit coordination and final inspection.",
          "For <a href='/service/sliding-door-replacement/' class='text-[#004AAD] font-semibold hover:underline'>sliding door replacement</a> in Palm Beach, we offer aluminum, vinyl, and fiberglass frame options with impact-rated glass. Every installation includes proper flashing, weatherproofing, and hardware setup to handle South Florida's weather year-round.",
        ],
      },
      {
        heading: "Communities We Serve in Palm Beach County",
        paragraphs: [
          "We serve West Palm Beach, Palm Beach Gardens, Jupiter, Boca Raton, Delray Beach, Boynton Beach, Lake Worth, Wellington, Royal Palm Beach, Greenacres, Riviera Beach, Singer Island, and all surrounding Palm Beach County communities. Call us for a free estimate.",
        ],
      },
    ],
  },
  {
    slug: "weston",
    name: "Weston",
    state: "FL",
    phoneDisplay: "(954) 932-0764",
    phoneTel: "+19549320764",
    seoSections: [
      {
        heading: "Trusted Door & Window Service in Weston and Broward County",
        paragraphs: [
          "Weston is known for its well-maintained communities, family neighborhoods, and HOA-managed properties. When a sliding door starts grinding on the track or a pocket door jams in the bathroom, homeowners need a reliable, licensed team that shows up on time, does clean work, and doesn't leave a mess. That's exactly what Top Notch Doors & Windows delivers.",
          "We provide <a href='/service/sliding-door-repair/' class='text-[#004AAD] font-semibold hover:underline'>sliding door repair</a>, <a href='/service/pocket-door-repair/' class='text-[#004AAD] font-semibold hover:underline'>pocket door repair</a>, <a href='/service/barn-door-installation/' class='text-[#004AAD] font-semibold hover:underline'>barn door installation</a>, <a href='/service/screen-door-repair/' class='text-[#004AAD] font-semibold hover:underline'>screen door replacement</a>, <a href='/service/impact-window-installation/' class='text-[#004AAD] font-semibold hover:underline'>impact window installation</a>, and <a href='/service/commercial-door-services/' class='text-[#004AAD] font-semibold hover:underline'>commercial door services</a> throughout Weston and greater Broward County. Our technicians live and work in this area, which means faster response times and familiarity with the door and window systems common in Weston's planned communities.",
        ],
      },
      {
        heading: "Hurricane Protection & Energy Savings for Weston Homes",
        paragraphs: [
          "Many Weston homes were built in the late 1990s and early 2000s, and the original sliding doors and windows are starting to show their age. Drafty seals, difficult operation, and outdated single-pane glass are common. Upgrading to modern impact-rated windows and sliding doors not only meets current Florida building codes but also cuts your cooling costs and keeps your home quieter.",
          "We install impact windows that meet Florida's strict product approval requirements and handle every step, from measuring and ordering to installation and final inspection. If your HOA requires specific styles, colors, or manufacturers, we'll work within those guidelines.",
        ],
      },
      {
        heading: "Serving Weston and Surrounding Broward County Areas",
        paragraphs: [
          "Our Broward County service area includes Weston, Pembroke Pines, Miramar, Davie, Cooper City, Plantation, Sunrise, Fort Lauderdale, Hollywood, Coral Springs, and Parkland. Most appointments are available within 24 to 48 hours.",
        ],
      },
    ],
  },
  {
    slug: "new-york",
    name: "New York",
    state: "NY",
    phoneDisplay: "(646) 914-9984",
    phoneTel: "+16469149984",
    address: "130 7th Ave unit 3, New York, NY 10014",
    seoSections: [
      {
        heading: "Door Repair & Window Services in New York City",
        paragraphs: [
          "New York City apartments, brownstones, and commercial spaces have door and window problems that are unique to dense urban living. Pocket doors in pre-war apartments get stuck because the plaster walls shift over time. Sliding doors in high-rise condos stop locking because the frames rack from building settlement. Storefront glass cracks from delivery impacts and street-level wear. And getting someone reliable to actually show up and fix it? That's the hardest part.",
          "Top Notch Doors & Windows brings the same professional service we're known for in South Florida to the New York metro area. We handle <a href='/service/pocket-door-repair/' class='text-[#004AAD] font-semibold hover:underline'>pocket door repair</a>, <a href='/service/sliding-door-repair/' class='text-[#004AAD] font-semibold hover:underline'>sliding door repair</a>, <a href='/service/barn-door-installation/' class='text-[#004AAD] font-semibold hover:underline'>barn door installation</a>, <a href='/service/screen-door-installation/' class='text-[#004AAD] font-semibold hover:underline'>screen door installation</a>, and <a href='/service/glass-repair-and-cutting/' class='text-[#004AAD] font-semibold hover:underline'>glass repair</a> across Manhattan, Brooklyn, Queens, and the surrounding boroughs. Our New York office is at 130 7th Ave, Unit 3, New York, NY 10014.",
        ],
      },
      {
        heading: "Apartment & Condo Door Specialists in NYC",
        paragraphs: [
          "We understand the logistics of working in New York City buildings. Freight elevator reservations, building management approvals, co-op board requirements, noise restrictions. We coordinate with your super or property manager ahead of time so the job runs smoothly and stays on schedule.",
          "For pocket door repair in NYC, we carry the most common track sizes, rollers, and guides so most jobs are completed in a single visit. For barn door installations, we bring all hardware pre-measured and pre-cut to minimize on-site noise and installation time. We also handle storefront and commercial glass door repair for shops, restaurants, and offices throughout the city.",
        ],
      },
      {
        heading: "NYC Neighborhoods We Serve",
        paragraphs: [
          "We serve Manhattan (Chelsea, West Village, Midtown, Upper East Side, Upper West Side, Harlem, Financial District), Brooklyn (Williamsburg, Park Slope, DUMBO, Brooklyn Heights, Bushwick), Queens (Astoria, Long Island City, Forest Hills), and the broader New York City metro area. Call our NYC line at (646) 914-9984 for same-week scheduling.",
        ],
      },
    ],
  },
];

export const NAV: NavItem[] = [
  {
    label: "Services",
    href: "/#services",
    megaMenu: true,
  },
  {
    label: "Locations",
    href: "#",
    children: LOCATIONS.map((l) => ({ label: l.name, href: `/location/${l.slug}/` })),
  },
  { label: "About Us", href: "/about-us/" },
  { label: "Contact Us", href: "/contact-us/" },
  { label: "Blog", href: "/blog/" },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    label: "Sliding Doors",
    services: [
      { slug: "sliding-door-repair", title: "Sliding Door Repair", image: "/images/services/sliding-door-repair.jpg", href: "/service/sliding-door-repair/" },
      { slug: "sliding-door-replacement", title: "Sliding Door Replacement", image: "/images/services/sliding-door-replacement.jpg", href: "/service/sliding-door-replacement/" },
      { slug: "sliding-door-installation", title: "Sliding Door Installation", image: "/images/services/sliding-door-installation.jpg", href: "/service/sliding-door-installation/" },
    ],
  },
  {
    label: "Pocket Doors",
    services: [
      { slug: "pocket-door-repair", title: "Pocket Door Repair", image: "/images/services/pocket-door-repair.jpg", href: "/service/pocket-door-repair/" },
      { slug: "pocket-door-installation", title: "Pocket Door Installation", image: "/images/services/pocket-door-installation.jpg", href: "/service/pocket-door-installation/" },
    ],
  },
  {
    label: "Barn Doors",
    services: [
      { slug: "barn-door-installation", title: "Barn Door Installation", image: "/images/services/barn-door-installation.jpg", href: "/service/barn-door-installation/" },
      { slug: "barn-door-repair", title: "Barn Door Repair", image: "/images/services/barn-door-repair.jpg", href: "/service/barn-door-repair/" },
    ],
  },
  {
    label: "Screen Doors",
    services: [
      { slug: "screen-door-installation", title: "Screen Door Installation", image: "/images/services/screen-door-installation.jpg", href: "/service/screen-door-installation/" },
      { slug: "screen-door-repair", title: "Screen Door Repair", image: "/images/services/screen-door-repair.jpg", href: "/service/screen-door-repair/" },
    ],
  },
  {
    label: "Glass & Window Services",
    services: [
      { slug: "glass-repair-and-cutting", title: "Glass Repair and Cutting", image: "/images/services/glass-repair-and-cutting.jpg", href: "/service/glass-repair-and-cutting/" },
      { slug: "impact-window-installation", title: "Impact Window Installation", image: "/images/services/impact-window-installation.jpg", href: "/service/impact-window-installation/" },
      { slug: "impact-window-replacement", title: "Impact Window Replacement", image: "/images/services/impact-window-replacement.jpg", href: "/service/impact-window-replacement/" },
      { slug: "impact-window-repair", title: "Impact Window Repair", image: "/images/services/impact-window-repair.jpg", href: "/service/impact-window-repair/" },
    ],
  },
  {
    label: "Commercial Services",
    services: [
      { slug: "commercial-door-services", title: "Commercial Door Services", image: "/images/services/commercial-door-services.jpg", href: "/service/commercial-door-services/" },
    ],
  },
];

export const ALL_SERVICES = SERVICE_CATEGORIES.flatMap((c) => c.services);

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Our sliding door was basically unusable. You had to lift and shove it just to get it open. These guys came out, replaced the rollers and realigned the track, and now it slides with one finger. Honestly wish I'd called sooner instead of fighting with it for two years.",
    name: "Sarah M.",
    location: "Fort Lauderdale, FL",
  },
  {
    quote:
      "Got impact windows put in right before hurricane season last year. My neighbor's old windows cracked during a storm and ours held up perfectly. The guys who installed them were super chill, cleaned everything up, and even helped move our couch back lol.",
    name: "Jason R.",
    location: "Hollywood, FL",
  },
  {
    quote:
      "My pocket door in the hallway bathroom has been jammed since we moved in 3 years ago. Finally called Top Notch. The guy figured out the issue in like 10 minutes and had it working again before lunch. $150 well spent, no idea why I waited so long.",
    name: "Linda T.",
    location: "Boca Raton, FL",
  },
];

export const LOCATION_TESTIMONIALS: Record<string, Testimonial[]> = {
  miami: [
    {
      quote: "The sliding door in our living room wouldn't lock anymore. My wife was freaking out about security. Called Top Notch on a Tuesday, they came Wednesday morning, swapped out the lock mechanism and adjusted the frame. Done in like 45 minutes. We sleep better now lol.",
      name: "Carlos G.",
      location: "Miami, FL",
    },
    {
      quote: "We put off getting impact windows for years because of the cost. Finally pulled the trigger and honestly? Electric bill dropped enough that it's paying for itself. Plus the street noise is basically gone. Our condo feels like a different place. The install crew was really respectful of our stuff too.",
      name: "Angela D.",
      location: "Miami Beach, FL",
    },
    {
      quote: "Pocket door in our Brickell unit was stuck halfway open for months. We just hung a curtain and ignored it. Top Notch guy showed up, popped it off the track, replaced a little plastic roller thing, and boom. Works perfectly. Took maybe 40 min. Felt dumb for not calling earlier honestly.",
      name: "David P.",
      location: "Brickell, FL",
    },
  ],
  "palm-beach": [
    {
      quote: "Had all three sliders replaced in our lanai room. The old ones were from the 90s and leaked air like crazy. New ones look amazing and I actually noticed a difference on our FPL bill the first month. The crew showed up at 8am sharp two days in a row and left the place spotless.",
      name: "Robert K.",
      location: "Palm Beach, FL",
    },
    {
      quote: "Screen door at the office got destroyed by a delivery guy with a hand truck. Called these guys, they measured and had a new one hung within the week. Not the cheapest quote I got but the door is solid and the frame is way better than what was there. You get what you pay for.",
      name: "Denise F.",
      location: "Boca Raton, FL",
    },
    {
      quote: "We wanted barn doors for the private dining area in our restaurant. My contractor recommended Top Notch and they did not disappoint. The doors look incredible and slide really smooth. Multiple customers have asked where we got them. Would absolutely hire again.",
      name: "Michelle S.",
      location: "West Palm Beach, FL",
    },
  ],
  weston: [
    {
      quote: "Our sliding glass door kept jumping off the track. Super annoying, especially with the kids running in and out all day. The repair guy found that the bottom rail was bent. He straightened it, put in new rollers, and adjusted everything. Been three months and zero issues. Finally.",
      name: "Sarah M.",
      location: "Weston, FL",
    },
    {
      quote: "Just got impact windows done on the whole house. We're in Weston so hurricanes are always in the back of your mind. The noise difference alone was worth it. I can't hear my neighbor's leaf blower anymore which is a miracle. Install took two days, guys were great.",
      name: "Jason R.",
      location: "Weston, FL",
    },
    {
      quote: "The pocket door in our master bath got stuck shut with my daughter's toys inside (don't ask). Top Notch came out same day, got it open without damaging the wall, and replaced the track. He even showed me how to pop it back on if it ever happens again. Really appreciated that.",
      name: "Patricia W.",
      location: "Weston, FL",
    },
  ],
  "new-york": [
    {
      quote: "Finding someone to do door work in a Manhattan apartment is a nightmare. Most places either ghost you or quote insane prices. Top Notch actually showed up when they said they would, fixed our pocket door in under an hour, and charged exactly what they quoted. That alone makes them worth recommending.",
      name: "Michael T.",
      location: "Manhattan, NY",
    },
    {
      quote: "We put barn doors on the bedroom of our Brooklyn brownstone and they look SO good. The hardware is heavy duty, not that flimsy stuff from Amazon. Installer was super careful with our floors too which I was worried about. Only issue was scheduling took about a week but totally worth the wait.",
      name: "Samantha L.",
      location: "Brooklyn, NY",
    },
    {
      quote: "Someone tried to break into our shop on a Saturday night and cracked the front glass door. Called Top Notch Sunday, they had a guy out Monday morning with new glass, and we were open for business by lunchtime. Could've been way worse. Really grateful for how fast they moved.",
      name: "James C.",
      location: "Chelsea, NY",
    },
  ],
};

export const FAQS: FaqItem[] = [
  {
    question: "Do you offer free estimates?",
    answer:
      'Yes! We provide free, no-obligation estimates for all of our services. Just give us a call at <a href="tel:+19549320764" class="text-[#004AAD] font-semibold hover:underline">(954) 932-0764</a> or <a href="/contact-us/" class="text-[#004AAD] font-semibold hover:underline">contact us through our website</a> to schedule yours.',
  },
  {
    question: "Are your services covered by a warranty?",
    answer:
      "Absolutely. We stand behind our work and offer warranties on both parts and labor, depending on the service provided. Ask us for details when booking!",
  },
  {
    question: "How quickly can you complete a repair or installation?",
    answer:
      'We aim to provide fast, efficient service. Many repairs like <a href="/service/sliding-door-repair/" class="text-[#004AAD] font-semibold hover:underline">sliding door repair</a> and <a href="/service/pocket-door-repair/" class="text-[#004AAD] font-semibold hover:underline">pocket door repair</a> can be completed the same day, while installations are typically scheduled within a few days based on availability and project size.',
  },
  {
    question: "Do you work on commercial properties?",
    answer:
      'Yes! We offer <a href="/service/commercial-door-services/" class="text-[#004AAD] font-semibold hover:underline">commercial door services</a> tailored to the needs of businesses, offices, and storefronts.',
  },
  {
    question: "Can you repair or replace older sliding or pocket doors?",
    answer:
      'Yes, we specialize in both modern and older-style doors. Whether it\'s a <a href="/service/sliding-door-repair/" class="text-[#004AAD] font-semibold hover:underline">sliding door repair</a>, <a href="/service/pocket-door-installation/" class="text-[#004AAD] font-semibold hover:underline">pocket door installation</a>, or a full <a href="/service/sliding-door-replacement/" class="text-[#004AAD] font-semibold hover:underline">sliding door replacement</a>, we\'ll find a solution that fits your space and budget.',
  },
  {
    question: "What types of windows do you install?",
    answer:
      'We install standard and <a href="/service/impact-window-installation/" class="text-[#004AAD] font-semibold hover:underline">impact-resistant windows</a> for both homes and businesses, helping improve safety, energy efficiency, and hurricane protection. We also handle <a href="/service/impact-window-repair/" class="text-[#004AAD] font-semibold hover:underline">impact window repair</a> and <a href="/service/impact-window-replacement/" class="text-[#004AAD] font-semibold hover:underline">replacement</a>.',
  },
  {
    question: "Do you offer emergency services?",
    answer:
      'In many cases, yes. If you have a broken door or window that needs immediate attention, give us a call at <a href="tel:+19549320764" class="text-[#004AAD] font-semibold hover:underline">(954) 932-0764</a> and we\'ll do our best to assist you as quickly as possible.',
  },
];
