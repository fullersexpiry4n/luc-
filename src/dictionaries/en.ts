import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    home: {
      title: "Slotenmaker Luc — Shoe repair, keys, engraving & stamps in Leuven",
      description:
        "Shoe repairs, key cutting, engraving and business stamps in the heart of Leuven. Real craftsmanship without an appointment, usually ready within fifteen minutes.",
    },
  },
  nav: {
    services: "Services",
    prices: "Pricing",
    faq: "FAQ",
    contact: "Contact",
    cta: "Book an appointment",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menuTitle: "Menu",
    languageLabel: "Language",
  },
  hero: {
    badge: "Ready while you wait",
    title: "Locked out?",
    titleAccent: "Luc is on his way.",
    subtitle:
      "Shoe repairs, keys, engraving and stamps. Genuine craftsmanship on Diestsestraat in Leuven — most jobs done within fifteen minutes.",
    ctaPrimary: "Call now",
    ctaSecondary: "Explore services",
    note: "No appointment needed · Open Mon–Sat · Ready in ±15 min",
    imageAlt:
      "Locksmith Luc smiling while replacing a lock cylinder on a modern black front door",
    floating: ["Heels & soles", "Keys", "Engraving", "Stamps"],
  },
  services: {
    tag: "Our services",
    title: "Four crafts, one address",
    subtitle:
      "From a loose heel to a personalised business stamp — you're helped with skill and speed.",
    learnMore: "Learn more",
    items: {
      schoenreparaties: {
        title: "Shoe repairs",
        short:
          "Replacing worn heels and soles, plus general repair of leather goods.",
      },
      sleutelservice: {
        title: "Key service",
        short:
          "Duplicating house keys, bicycle keys and electronic car keys or remotes.",
      },
      graveerwerk: {
        title: "Engraving",
        short:
          "Engraving name plates, house numbers, dog tags and gifts.",
      },
      stempels: {
        title: "Stamps",
        short: "Personalised business stamps and address stamps.",
      },
    },
  },
  stats: {
    tag: "By the numbers",
    title: "Speed and craftsmanship, day after day",
    subtitle: "The trusted address in Leuven for over 25 years.",
    items: [
      { value: 15, prefix: "±", suffix: " min", label: "average service time" },
      { value: 25, suffix: "+", label: "years of craftsmanship" },
      { value: 10000, suffix: "+", label: "keys cut per year" },
      { value: 4.9, decimals: 1, suffix: "/5", label: "customer rating" },
    ],
  },
  pricing: {
    tag: "Pricing",
    title: "Fair prices, no surprises",
    subtitle: "Pick a service for an overview of the most requested rates.",
    fromLabel: "from",
    disclaimer:
      "All prices are indicative and include VAT. The final price depends on the material and condition of the item, and is always discussed with you beforehand.",
    services: [
      {
        slug: "schoenreparaties",
        label: "Shoe repairs",
        rows: [
          { name: "Replace women's heel tips", price: "12" },
          { name: "Replace men's heels", price: "18" },
          { name: "Half soles (leather or rubber)", price: "35" },
          { name: "Full sole replacement", price: "55" },
          { name: "Replace boot or bag zip", price: "25" },
          { name: "Belt or handbag repair", price: "15" },
        ],
      },
      {
        slug: "sleutelservice",
        label: "Key service",
        rows: [
          { name: "Standard house key copy", price: "6" },
          { name: "Patented security key", price: "25" },
          { name: "Bicycle key copy", price: "7" },
          { name: "Car key with transponder", price: "59" },
          { name: "Keyless remote copy", price: "89" },
          { name: "Extra key for existing cylinder", price: "35" },
        ],
      },
      {
        slug: "graveerwerk",
        label: "Engraving",
        rows: [
          { name: "Name plate for door or bell", price: "18" },
          { name: "House number for the façade", price: "22" },
          { name: "Dog tag engraving", price: "9" },
          { name: "Engraved gift (pen, medal)", price: "14" },
          { name: "Trophy or plaque", price: "29" },
        ],
      },
      {
        slug: "stempels",
        label: "Stamps",
        rows: [
          { name: "Address stamp (up to 4 lines)", price: "19" },
          { name: "Self-inking stamp (Trodat)", price: "24" },
          { name: "Date stamp", price: "29" },
          { name: "Business stamp with logo", price: "39" },
          { name: "Replacement ink pad / refill", price: "6" },
        ],
      },
    ],
  },
  faq: {
    tag: "Frequently asked questions",
    title: "Everything you want to know",
    subtitle: "Can't find your question? Just call or email us.",
    items: [
      {
        q: "Do I need to book in advance?",
        a: "For most jobs, no: you can simply walk in and wait while we work. For larger orders or custom engraving, it's best to schedule an appointment via the form below.",
      },
      {
        q: "How long will I have to wait?",
        a: "Keys and simple heels are usually ready in about fifteen minutes. For full soles, zips or engraving, we'll give you a realistic time upfront.",
      },
      {
        q: "Do you also copy car keys with a chip?",
        a: "Yes. We duplicate transponder keys and program many keyless remotes. Please bring your vehicle registration and a working key.",
      },
      {
        q: "Are the listed prices final?",
        a: "The price list is indicative. After a quick inspection of your shoe, lock or item, we confirm the exact price — always before we start.",
      },
      {
        q: "How can I pay?",
        a: "You can pay by cash, Bancontact, Payconiq or most bank cards. For companies, we issue an invoice on request.",
      },
      {
        q: "Do you repair leather goods other than shoes?",
        a: "Absolutely. Think handbags, belts, zips and small leather repairs. Show us the item and we'll look at what's possible together.",
      },
      {
        q: "Do you offer a warranty on repairs?",
        a: "On shoe and leather repairs we offer a three-month warranty on material and workmanship. For keys, we guarantee correct operation at pickup.",
      },
    ],
  },
  location: {
    tag: "Drop by",
    title: "You'll find us in the heart of Leuven",
    subtitle:
      "Right by the Bondgenotenlaan, within walking distance of the station and car parks.",
    addressTitle: "Address",
    hoursTitle: "Opening hours",
    contactTitle: "Contact",
    phoneLabel: "Phone",
    emailLabel: "Email",
    directions: "Open directions",
    mapTitle: "Map showing the location of Slotenmaker Luc in Leuven",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    hours: [
      "09:00 – 18:00",
      "09:00 – 18:00",
      "09:00 – 18:00",
      "09:00 – 18:00",
      "09:00 – 18:00",
      "10:00 – 16:00",
      "Closed",
    ],
    closedLabel: "Closed",
  },
  form: {
    tag: "Appointment & quote",
    title: "Request your appointment or quote",
    subtitle:
      "Fill in the form and we usually confirm within one working day. For urgent questions, it's best to call us directly.",
    name: "Name",
    namePlaceholder: "Your first and last name",
    email: "Email",
    emailPlaceholder: "you@example.be",
    phone: "Phone",
    phonePlaceholder: "+32 …",
    service: "Service",
    servicePlaceholder: "Choose a service",
    serviceOptions: [
      { value: "schoenreparaties", label: "Shoe repairs" },
      { value: "sleutelservice", label: "Key service" },
      { value: "graveerwerk", label: "Engraving" },
      { value: "stempels", label: "Stamps" },
      { value: "anders", label: "Something else / general question" },
    ],
    message: "Message",
    messagePlaceholder: "Tell us briefly how we can help…",
    submit: "Send request",
    submitting: "Sending…",
    privacy:
      "We use your details only to answer your request. Never for advertising.",
    success: {
      title: "Thanks, we've received your request!",
      message:
        "We usually get back to you within one working day. For urgent matters, feel free to call us directly.",
      again: "Send another request",
    },
    errorToast: "Something went wrong. Please try again or call us.",
    errors: {
      name: "Please enter your name (at least 2 characters).",
      email: "Please enter a valid email address.",
      phone: "Please enter a valid phone number (at least 6 digits).",
      service: "Please choose a service.",
      message: "Your message is too short (at least 10 characters).",
    },
  },
  footer: {
    tagline:
      "Your trusted craftsman for shoes, keys, engraving and stamps in Leuven.",
    servicesTitle: "Services",
    contactTitle: "Contact",
    hoursTitle: "Opening hours",
    languageTitle: "Language",
    rights: "All rights reserved.",
    disclaimer:
      "Fictional demo website. The address, phone number and prices are examples.",
    backToTop: "Back to top",
  },
  serviceDetail: {
    breadcrumbHome: "Home",
    breadcrumbServices: "Services",
    includedDefaultTitle: "What's included",
    stepsDefaultTitle: "How it works",
    items: {
      schoenreparaties: {
        meta: {
          title: "Shoe repair in Leuven — heels, soles & leather repair",
          description:
            "Worn heels, new soles, zips and leather repair. Quality shoe repair in Leuven, most jobs ready while you wait.",
        },
        hero: {
          tag: "Shoe repairs",
          title: "Your favourite shoes, good as new",
          subtitle:
            "Replacing worn heels and soles, plus general repair of leather goods — with the right materials and a finish you won't notice.",
        },
        intro: [
          "A good shoe isn't something you throw away. At Slotenmaker Luc, we give leather and rubber shoes a second life: from a worn-down heel tip to entirely new soles under your favourite boots.",
          "We work with quality materials from regular suppliers and retouch the finish so the repair stays invisible. You can also bring us handbags, belts and zips.",
        ],
        included: {
          title: "What we do for you",
          items: [
            "Replace heel tips and heels (women's and men's)",
            "Half and full soles in leather or rubber",
            "Replace zips on boots and bags",
            "Repair stitching and loose seams",
            "Feed, colour and refresh leather goods",
            "Fit anti-slip profiles and protective tips",
          ],
        },
        details: {
          title: "Good to know",
          turnaroundLabel: "Turnaround",
          turnaround: "Heels usually ±15 min, soles and zips 2–4 days.",
          materialsLabel: "Materials",
          materials: "Leather, rubber and TR soles from European suppliers.",
          guaranteeLabel: "Warranty",
          guarantee: "Three months on material and workmanship.",
        },
        steps: {
          title: "How it works",
          items: [
            {
              step: "01",
              title: "Bring in your shoes",
              desc: "We look at the wear together and agree a fair price on the spot.",
            },
            {
              step: "02",
              title: "We repair with care",
              desc: "Small jobs are done while you wait, bigger ones scheduled quickly.",
            },
            {
              step: "03",
              title: "Ready to wear",
              desc: "You collect your shoes, polished and finished as they should be.",
            },
          ],
        },
        pricingTitle: "Shoe repair rates",
        pricingSubtitle: "Indicative prices, VAT included.",
        faq: {
          title: "Frequently asked questions",
          items: [
            {
              q: "Can I wait for my heels?",
              a: "Yes, replacing heel tips and heels usually takes about fifteen minutes.",
            },
            {
              q: "Do you also repair designer shoes?",
              a: "Absolutely. We use the appropriate materials and always check with you if in doubt.",
            },
            {
              q: "Can I have a handbag repaired too?",
              a: "Yes, we repair zips, stitching and straps on bags just as well as shoes.",
            },
          ],
        },
        cta: {
          title: "Ready to save your shoes?",
          subtitle: "Drop by or request a no-obligation quote.",
          button: "Request a quote",
        },
      },
      sleutelservice: {
        meta: {
          title: "Key service in Leuven — house, bicycle & car keys",
          description:
            "Key cutting in Leuven: house keys, bicycle keys, security keys and car keys with a chip or keyless remotes.",
        },
        hero: {
          tag: "Key service",
          title: "A spare key? Sorted",
          subtitle:
            "Duplicating house keys, bicycle keys and electronic car keys or remotes — cut precisely and tested right away.",
        },
        intro: [
          "From a simple house key to a car key with a transponder: we quickly make an accurate copy that always works. Every key is tested on the spot before you leave.",
          "We can also duplicate patented security keys and keyless remotes. That way you always have a spare within reach.",
        ],
        included: {
          title: "What we do for you",
          items: [
            "Duplicate standard house keys",
            "Copy patented security keys",
            "Copy bicycle and padlock keys",
            "Program car keys with a transponder",
            "Duplicate keyless remotes",
            "Cut new keys for an existing cylinder",
          ],
        },
        details: {
          title: "Good to know",
          turnaroundLabel: "Turnaround",
          turnaround: "Standard keys ±5 min, car keys 15–30 min.",
          materialsLabel: "Brands",
          materials: "Including Trodat, Silca and common car manufacturers.",
          guaranteeLabel: "Warranty",
          guarantee: "Copy doesn't work? You get a new one free of charge.",
        },
        steps: {
          title: "How it works",
          items: [
            {
              step: "01",
              title: "Bring your key",
              desc: "For car keys, also bring your vehicle registration and ID card.",
            },
            {
              step: "02",
              title: "We make the copy",
              desc: "We cut or program the key and test it straight away.",
            },
            {
              step: "03",
              title: "Tested and ready",
              desc: "You leave with a key you know for sure will work.",
            },
          ],
        },
        pricingTitle: "Key service rates",
        pricingSubtitle: "Indicative prices, VAT included.",
        faq: {
          title: "Frequently asked questions",
          items: [
            {
              q: "What should I bring for a car key?",
              a: "A working key, your vehicle registration and ID card. That way we can be sure the car is yours.",
            },
            {
              q: "Can you copy every security key?",
              a: "Most of them. Some patented systems require a card or code — be sure to bring it.",
            },
            {
              q: "What if the copy doesn't work?",
              a: "We'll make a new one free of charge. We test every key before you leave the shop.",
            },
          ],
        },
        cta: {
          title: "Never locked out again",
          subtitle: "Have a spare key cut today.",
          button: "Request a quote",
        },
      },
      graveerwerk: {
        meta: {
          title: "Engraving in Leuven — name plates, tags & gifts",
          description:
            "Engraving of name plates, house numbers, dog tags and personalised gifts. Careful custom engraving in Leuven.",
        },
        hero: {
          tag: "Engraving",
          title: "Your text, engraved crisp and lasting",
          subtitle:
            "Engraving name plates, house numbers, dog tags and gifts — crisp, durable and entirely to your wishes.",
        },
        intro: [
          "A name plate for the front door, a tag for the dog or a personalised gift: we engrave crisply and precisely in metal, plastic and more.",
          "You choose the font and layout, we deliver a result that stays sharp for years. For businesses, we also engrave signs and plaques to order.",
        ],
        included: {
          title: "What we do for you",
          items: [
            "Name plates for door, bell or letterbox",
            "House numbers for façade or gate",
            "Dog tags with name and phone number",
            "Personalised gifts and medals",
            "Trophies and plaques for clubs or companies",
            "Choice of fonts and finishes",
          ],
        },
        details: {
          title: "Good to know",
          turnaroundLabel: "Turnaround",
          turnaround: "Tags while you wait, signs 2–5 working days.",
          materialsLabel: "Materials",
          materials: "Brass, stainless steel, aluminium and engraving plastic.",
          guaranteeLabel: "Check",
          guarantee: "You approve the layout before we engrave.",
        },
        steps: {
          title: "How it works",
          items: [
            {
              step: "01",
              title: "Send us your text",
              desc: "At the counter or ahead of time via the form, with a logo if you like.",
            },
            {
              step: "02",
              title: "You approve the layout",
              desc: "We show you the font and placement so everything is right before we start.",
            },
            {
              step: "03",
              title: "We engrave it neatly",
              desc: "Small pieces are often ready right away, signs scheduled quickly.",
            },
          ],
        },
        pricingTitle: "Engraving rates",
        pricingSubtitle: "Indicative prices, VAT included.",
        faq: {
          title: "Frequently asked questions",
          items: [
            {
              q: "Can I have my own item engraved?",
              a: "Often yes. Show us the item and we'll check together whether the material is suitable for engraving.",
            },
            {
              q: "Can you engrave a logo?",
              a: "Yes, supply your logo as a vector file (for example .svg or .pdf) for the crispest result.",
            },
            {
              q: "How quickly is a dog tag ready?",
              a: "A tag is usually engraved right away while you wait.",
            },
          ],
        },
        cta: {
          title: "Something nice to engrave?",
          subtitle: "Send us your text and we'll sort it out.",
          button: "Request a quote",
        },
      },
      stempels: {
        meta: {
          title: "Custom stamps in Leuven — business & address stamps",
          description:
            "Personalised business stamps and address stamps. Self-inking stamps, date stamps and logo stamps made to order in Leuven.",
        },
        hero: {
          tag: "Stamps",
          title: "Your own stamp, made professionally",
          subtitle:
            "Personalised business stamps and address stamps — crisp, durable and fully matched to your brand.",
        },
        intro: [
          "A neat address stamp for your post or a business stamp with logo and VAT number: we make self-inking stamps that stay crisp for thousands of impressions.",
          "You provide the text and optionally your logo, we handle the layout. Date stamps and refill ink are also quickly available with us.",
        ],
        included: {
          title: "What we do for you",
          items: [
            "Address stamps of four or more lines",
            "Business stamps with logo and VAT number",
            "Self-inking stamps (Trodat)",
            "Date and numbering stamps",
            "Replacement pads and refill ink",
            "Choice of sizes and ink colours",
          ],
        },
        details: {
          title: "Good to know",
          turnaroundLabel: "Turnaround",
          turnaround: "Text stamps often same day, logo stamps 1–3 days.",
          materialsLabel: "Brands",
          materials: "Self-inking Trodat stamps in various sizes.",
          guaranteeLabel: "Check",
          guarantee: "You receive a proof before production.",
        },
        steps: {
          title: "How it works",
          items: [
            {
              step: "01",
              title: "Send us the text",
              desc: "Share your details, with an optional logo and your preferred ink colour.",
            },
            {
              step: "02",
              title: "You approve the proof",
              desc: "We send or show you a proof so every line is correct.",
            },
            {
              step: "03",
              title: "We make your stamp",
              desc: "Ready to leave a crisp impression thousands of times.",
            },
          ],
        },
        pricingTitle: "Stamp rates",
        pricingSubtitle: "Indicative prices, VAT included.",
        faq: {
          title: "Frequently asked questions",
          items: [
            {
              q: "Can you include my logo in the stamp?",
              a: "Yes. Supply your logo as a crisp file (preferably vector) and we'll add it to the layout.",
            },
            {
              q: "How long does a self-inking stamp last?",
              a: "Thousands of impressions. Once the pad runs dry, simply replace it with refill ink or a new pad.",
            },
            {
              q: "Can I choose different ink colours?",
              a: "Sure, common colours such as black, blue and red are kept in stock.",
            },
          ],
        },
        cta: {
          title: "Ready for your own stamp?",
          subtitle: "Send us your text and logo, we'll do the rest.",
          button: "Request a quote",
        },
      },
    },
  },
};
