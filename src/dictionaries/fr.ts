import type { Dictionary } from "./types";

export const fr: Dictionary = {
  meta: {
    home: {
      title: "Slotenmaker Luc — Cordonnerie, clés, gravure & tampons à Louvain",
      description:
        "Réparation de chaussures, reproduction de clés, gravure et tampons d'entreprise au cœur de Louvain. Du vrai savoir-faire sans rendez-vous, souvent prêt en un quart d'heure.",
    },
  },
  nav: {
    services: "Services",
    prices: "Tarifs",
    faq: "FAQ",
    contact: "Contact",
    cta: "Prendre rendez-vous",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    menuTitle: "Menu",
    languageLabel: "Langue",
  },
  hero: {
    badge: "Prêt pendant que vous attendez",
    title: "Porte claquée ?",
    titleAccent: "Luc est en route.",
    subtitle:
      "Réparation de chaussures, clés, gravure et tampons. Un véritable savoir-faire sur la Diestsestraat à Louvain — le plus souvent prêt en un quart d'heure.",
    ctaPrimary: "Appelez-nous",
    ctaSecondary: "Voir les services",
    note: "Sans rendez-vous · Ouvert lun.–sam. · Prêt en ±15 min",
    imageAlt:
      "Serrurier Luc remplaçant en souriant un cylindre de serrure sur une porte d'entrée noire moderne",  },
  services: {
    tag: "Nos services",
    title: "Quatre métiers, une seule adresse",
    subtitle:
      "D'un talon décollé à un tampon d'entreprise personnalisé — vous êtes servi avec soin et rapidité.",
    learnMore: "En savoir plus",
    items: {
      schoenreparaties: {
        title: "Réparation de chaussures",
        short:
          "Remplacement de talons et semelles usés et réparation générale des articles en cuir.",
      },
      sleutelservice: {
        title: "Service de clés",
        short:
          "Reproduction de clés de maison, de vélo et de clés de voiture électroniques ou de télécommandes.",
      },
      graveerwerk: {
        title: "Gravure",
        short:
          "Gravure de plaques nominatives, numéros de maison, médailles pour chiens et cadeaux.",
      },
      stempels: {
        title: "Tampons",
        short: "Tampons d'entreprise et tampons d'adresse personnalisés.",
      },
    },
  },
  stats: {
    tag: "En chiffres",
    title: "Rapidité et savoir-faire, jour après jour",
    subtitle: "L'adresse de confiance à Louvain depuis plus de 25 ans.",
    items: [
      { value: 15, prefix: "±", suffix: " min", label: "temps de service moyen" },
      { value: 25, suffix: "+", label: "ans de savoir-faire" },
      { value: 10000, suffix: "+", label: "clés par an" },
      { value: 4.9, decimals: 1, suffix: "/5", label: "note des clients" },
    ],
  },
  pricing: {
    tag: "Tarifs",
    title: "Des prix honnêtes, sans surprise",
    subtitle:
      "Choisissez un service pour un aperçu des tarifs les plus demandés.",
    fromLabel: "à partir de",
    disclaimer:
      "Tous les prix sont indicatifs et TVA comprise. Le prix final dépend du matériau et de l'état de la pièce, et est toujours discuté avec vous au préalable.",
    services: [
      {
        slug: "schoenreparaties",
        label: "Réparation de chaussures",
        rows: [
          { name: "Remplacement de talons dames (bonbouts)", price: "12" },
          { name: "Remplacement de talons hommes", price: "18" },
          { name: "Demi-semelles (cuir ou caoutchouc)", price: "35" },
          { name: "Remplacement de semelles complètes", price: "55" },
          { name: "Fermeture éclair de botte ou de sac", price: "25" },
          { name: "Réparation de ceinture ou de sac", price: "15" },
        ],
      },
      {
        slug: "sleutelservice",
        label: "Service de clés",
        rows: [
          { name: "Clé de maison standard", price: "6" },
          { name: "Clé de sécurité brevetée", price: "25" },
          { name: "Clé de vélo", price: "7" },
          { name: "Clé de voiture avec transpondeur", price: "59" },
          { name: "Copie de télécommande keyless", price: "89" },
          { name: "Clé supplémentaire sur cylindre", price: "35" },
        ],
      },
      {
        slug: "graveerwerk",
        label: "Gravure",
        rows: [
          { name: "Plaque nominative pour porte ou sonnette", price: "18" },
          { name: "Numéro de maison pour la façade", price: "22" },
          { name: "Gravure de médaille pour chien", price: "9" },
          { name: "Cadeau gravé (stylo, médaille)", price: "14" },
          { name: "Trophée ou plaque", price: "29" },
        ],
      },
      {
        slug: "stempels",
        label: "Tampons",
        rows: [
          { name: "Tampon d'adresse (jusqu'à 4 lignes)", price: "19" },
          { name: "Tampon auto-encreur (Trodat)", price: "24" },
          { name: "Tampon dateur", price: "29" },
          { name: "Tampon d'entreprise avec logo", price: "39" },
          { name: "Recharge / cassette d'encre", price: "6" },
        ],
      },
    ],
  },
  faq: {
    tag: "Questions fréquentes",
    title: "Tout ce que vous voulez savoir",
    subtitle: "Votre question n'y figure pas ? Appelez-nous ou écrivez-nous.",
    items: [
      {
        q: "Dois-je prendre rendez-vous à l'avance ?",
        a: "Pour la plupart des travaux, non : vous pouvez simplement entrer et attendre pendant que nous travaillons. Pour les commandes plus importantes ou la gravure sur mesure, mieux vaut planifier un rendez-vous via le formulaire ci-dessous.",
      },
      {
        q: "Combien de temps dois-je attendre ?",
        a: "Les clés et les talons simples sont généralement prêts en une quinzaine de minutes. Pour les semelles complètes, les fermetures éclair ou la gravure, nous vous annonçons un délai réaliste à l'avance.",
      },
      {
        q: "Copiez-vous aussi les clés de voiture à puce ?",
        a: "Oui. Nous reproduisons les clés à transpondeur et programmons de nombreuses télécommandes keyless. Apportez votre certificat d'immatriculation et une clé qui fonctionne.",
      },
      {
        q: "Les prix indiqués sont-ils définitifs ?",
        a: "La liste des prix est indicative. Après une brève inspection de votre chaussure, serrure ou pièce, nous confirmons le prix exact, toujours avant de commencer.",
      },
      {
        q: "Comment puis-je payer ?",
        a: "Vous payez en espèces, par Bancontact, Payconiq ou la plupart des cartes bancaires. Pour les entreprises, nous établissons une facture sur demande.",
      },
      {
        q: "Réparez-vous d'autres articles en cuir que les chaussures ?",
        a: "Bien sûr. Sacs à main, ceintures, fermetures éclair et petites réparations en cuir. Montrez-nous la pièce et nous voyons ensemble ce qui est possible.",
      },
      {
        q: "Offrez-vous une garantie sur les réparations ?",
        a: "Sur la réparation de chaussures et de cuir, nous offrons trois mois de garantie sur le matériau et l'exécution. Pour les clés, nous garantissons un fonctionnement correct au retrait.",
      },
    ],
  },
  location: {
    tag: "Passez nous voir",
    title: "Vous nous trouvez au cœur de Louvain",
    subtitle:
      "À deux pas de la Bondgenotenlaan, à distance de marche de la gare et des parkings.",
    addressTitle: "Adresse",
    hoursTitle: "Heures d'ouverture",
    contactTitle: "Contact",
    phoneLabel: "Téléphone",
    emailLabel: "E-mail",
    directions: "Ouvrir l'itinéraire",
    mapTitle: "Carte de l'emplacement de Slotenmaker Luc à Louvain",
    days: [
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
      "Dimanche",
    ],
    hours: [
      "09:00 – 18:00",
      "09:00 – 18:00",
      "09:00 – 18:00",
      "09:00 – 18:00",
      "09:00 – 18:00",
      "10:00 – 16:00",
      "Fermé",
    ],
    closedLabel: "Fermé",
  },
  form: {
    tag: "Rendez-vous & devis",
    title: "Demandez votre rendez-vous ou votre devis",
    subtitle:
      "Remplissez le formulaire et nous confirmons généralement dans un jour ouvrable. Pour les questions urgentes, appelez-nous directement.",
    name: "Nom",
    namePlaceholder: "Vos prénom et nom",
    email: "E-mail",
    emailPlaceholder: "vous@exemple.be",
    phone: "Téléphone",
    phonePlaceholder: "+32 …",
    service: "Service",
    servicePlaceholder: "Choisissez un service",
    serviceOptions: [
      { value: "schoenreparaties", label: "Réparation de chaussures" },
      { value: "sleutelservice", label: "Service de clés" },
      { value: "graveerwerk", label: "Gravure" },
      { value: "stempels", label: "Tampons" },
      { value: "anders", label: "Autre chose / question générale" },
    ],
    message: "Message",
    messagePlaceholder: "Dites-nous brièvement comment nous pouvons vous aider…",
    submit: "Envoyer la demande",
    submitting: "Envoi…",
    privacy:
      "Nous utilisons vos données uniquement pour répondre à votre demande. Jamais à des fins publicitaires.",
    success: {
      title: "Merci, nous avons bien reçu votre demande !",
      message:
        "Nous vous recontactons généralement dans un jour ouvrable. Pour les urgences, n'hésitez pas à nous appeler directement.",
      again: "Envoyer une autre demande",
    },
    errorToast: "Une erreur s'est produite. Réessayez ou appelez-nous.",
    errors: {
      name: "Indiquez votre nom (au moins 2 caractères).",
      email: "Indiquez une adresse e-mail valide.",
      phone: "Indiquez un numéro de téléphone valide (au moins 6 chiffres).",
      service: "Choisissez un service.",
      message: "Votre message est trop court (au moins 10 caractères).",
    },
  },
  footer: {
    tagline:
      "Votre artisan de confiance pour chaussures, clés, gravure et tampons à Louvain.",
    servicesTitle: "Services",
    contactTitle: "Contact",
    hoursTitle: "Heures d'ouverture",
    languageTitle: "Langue",
    rights: "Tous droits réservés.",
    disclaimer:
      "Site de démonstration fictif. L'adresse, le numéro de téléphone et les prix sont des exemples.",
    backToTop: "Retour en haut",
  },
  serviceDetail: {
    breadcrumbHome: "Accueil",
    breadcrumbServices: "Services",
    includedDefaultTitle: "Ce qui est inclus",
    stepsDefaultTitle: "Comment ça marche",
    items: {
      schoenreparaties: {
        meta: {
          title: "Réparation de chaussures à Louvain — talons, semelles & cuir",
          description:
            "Talons usés, semelles neuves, fermetures éclair et réparation de cuir. Cordonnerie de qualité à Louvain, le plus souvent prête pendant que vous attendez.",
        },
        hero: {
          tag: "Réparation de chaussures",
          title: "Vos chaussures préférées comme neuves",
          subtitle:
            "Remplacement de talons et semelles usés et réparation générale des articles en cuir — avec les bons matériaux et une finition invisible.",
        },
        intro: [
          "Une bonne chaussure ne se jette pas. Chez Slotenmaker Luc, nous offrons une seconde vie au cuir et au caoutchouc : d'un bonbout usé à des semelles entièrement neuves sous vos bottines préférées.",
          "Nous travaillons avec des matériaux de qualité issus de fournisseurs fixes et retouchons la teinte pour que la réparation reste invisible. Vous pouvez aussi nous confier sacs, ceintures et fermetures éclair.",
        ],
        included: {
          title: "Ce que nous faisons pour vous",
          items: [
            "Remplacement de bonbouts et talons (dames et hommes)",
            "Demi-semelles et semelles complètes en cuir ou caoutchouc",
            "Remplacement de fermetures éclair de bottes et de sacs",
            "Réparation de coutures et de bords décollés",
            "Nourrir, teinter et rafraîchir le cuir",
            "Pose de patins antidérapants et de protections",
          ],
        },
        details: {
          title: "Bon à savoir",
          turnaroundLabel: "Délai",
          turnaround: "Talons souvent ±15 min, semelles et fermetures 2 à 4 jours.",
          materialsLabel: "Matériaux",
          materials: "Cuir, caoutchouc et semelles TR de fournisseurs européens.",
          guaranteeLabel: "Garantie",
          guarantee: "Trois mois sur le matériau et l'exécution.",
        },
        steps: {
          title: "Comment ça marche",
          items: [
            {
              step: "01",
              title: "Apportez vos chaussures",
              desc: "Nous examinons l'usure ensemble et convenons d'un prix honnête sur place.",
            },
            {
              step: "02",
              title: "Nous réparons avec soin",
              desc: "Les petits travaux se font pendant que vous attendez, les plus grands sont vite planifiés.",
            },
            {
              step: "03",
              title: "Prêtes à porter",
              desc: "Vous récupérez vos chaussures, cirées et finies dans les règles.",
            },
          ],
        },
        pricingTitle: "Tarifs réparation de chaussures",
        pricingSubtitle: "Prix indicatifs, TVA comprise.",
        faq: {
          title: "Questions fréquentes",
          items: [
            {
              q: "Puis-je attendre mes talons ?",
              a: "Oui, le remplacement des bonbouts et talons prend généralement une quinzaine de minutes.",
            },
            {
              q: "Réparez-vous aussi les chaussures de créateur ?",
              a: "Bien sûr. Nous utilisons les matériaux adaptés et vous consultons toujours en cas de doute.",
            },
            {
              q: "Puis-je aussi faire réparer un sac à main ?",
              a: "Oui, fermetures éclair, coutures et bandoulières de sacs sont réparées aussi bien que les chaussures.",
            },
          ],
        },
        cta: {
          title: "Prêt à sauver vos chaussures ?",
          subtitle: "Passez nous voir ou demandez un devis sans engagement.",
          button: "Demander un devis",
        },
      },
      sleutelservice: {
        meta: {
          title: "Service de clés à Louvain — clés de maison, vélo & voiture",
          description:
            "Reproduction de clés à Louvain : clés de maison, de vélo, clés de sécurité et clés de voiture à puce ou télécommandes keyless.",
        },
        hero: {
          tag: "Service de clés",
          title: "Un double de clé ? C'est réglé",
          subtitle:
            "Reproduction de clés de maison, de vélo et de clés de voiture électroniques ou de télécommandes — taillées avec précision et testées immédiatement.",
        },
        intro: [
          "D'une simple clé de maison à une clé de voiture à transpondeur : nous réalisons rapidement une copie précise qui fonctionne à tous les coups. Chaque clé est testée sur place avant votre départ.",
          "Nous reproduisons également les clés de sécurité brevetées et les télécommandes keyless. Vous gardez ainsi toujours un double sous la main.",
        ],
        included: {
          title: "Ce que nous faisons pour vous",
          items: [
            "Reproduction de clés de maison standard",
            "Clés de sécurité brevetées",
            "Copie de clés de vélo et de cadenas",
            "Programmation de clés de voiture à transpondeur",
            "Reproduction de télécommandes keyless",
            "Nouvelles clés sur un cylindre existant",
          ],
        },
        details: {
          title: "Bon à savoir",
          turnaroundLabel: "Délai",
          turnaround: "Clés standard ±5 min, clés de voiture 15 à 30 min.",
          materialsLabel: "Marques",
          materials: "Notamment Trodat, Silca et les constructeurs auto courants.",
          guaranteeLabel: "Garantie",
          guarantee: "La copie ne fonctionne pas ? Vous en recevez une gratuitement.",
        },
        steps: {
          title: "Comment ça marche",
          items: [
            {
              step: "01",
              title: "Apportez votre clé",
              desc: "Pour les clés de voiture, prenez aussi votre certificat d'immatriculation et votre carte d'identité.",
            },
            {
              step: "02",
              title: "Nous réalisons la copie",
              desc: "Nous taillons ou programmons la clé et la testons immédiatement.",
            },
            {
              step: "03",
              title: "Testée et prête",
              desc: "Vous repartez avec une clé dont vous êtes sûr qu'elle fonctionne.",
            },
          ],
        },
        pricingTitle: "Tarifs service de clés",
        pricingSubtitle: "Prix indicatifs, TVA comprise.",
        faq: {
          title: "Questions fréquentes",
          items: [
            {
              q: "Que dois-je apporter pour une clé de voiture ?",
              a: "Une clé qui fonctionne, votre certificat d'immatriculation et votre carte d'identité. Ainsi, nous sommes certains que le véhicule est le vôtre.",
            },
            {
              q: "Pouvez-vous reproduire toutes les clés de sécurité ?",
              a: "La plupart, oui. Certains systèmes brevetés exigent une carte ou un code — pensez à l'apporter.",
            },
            {
              q: "Et si la copie ne fonctionne pas ?",
              a: "Nous en réalisons une nouvelle gratuitement. Nous testons chaque clé avant votre départ.",
            },
          ],
        },
        cta: {
          title: "Ne restez plus jamais à la porte",
          subtitle: "Faites réaliser un double dès aujourd'hui.",
          button: "Demander un devis",
        },
      },
      graveerwerk: {
        meta: {
          title: "Gravure à Louvain — plaques, médailles & cadeaux",
          description:
            "Gravure de plaques nominatives, numéros de maison, médailles pour chiens et cadeaux personnalisés. Gravure soignée sur mesure à Louvain.",
        },
        hero: {
          tag: "Gravure",
          title: "Votre texte, gravé net et durable",
          subtitle:
            "Gravure de plaques nominatives, numéros de maison, médailles pour chiens et cadeaux — net, durable et entièrement selon vos souhaits.",
        },
        intro: [
          "Une plaque pour la porte d'entrée, une médaille pour le chien ou un cadeau personnalisé : nous gravons avec netteté et précision dans le métal, le plastique et plus encore.",
          "Vous choisissez la police et la mise en page, nous garantissons un résultat qui reste beau des années. Pour les entreprises, nous gravons aussi enseignes et plaques sur mesure.",
        ],
        included: {
          title: "Ce que nous faisons pour vous",
          items: [
            "Plaques nominatives pour porte, sonnette ou boîte aux lettres",
            "Numéros de maison pour façade ou portail",
            "Médailles pour chiens avec nom et numéro de téléphone",
            "Cadeaux personnalisés et médailles",
            "Trophées et plaques pour clubs ou entreprises",
            "Choix de polices et de finitions",
          ],
        },
        details: {
          title: "Bon à savoir",
          turnaroundLabel: "Délai",
          turnaround: "Médailles pendant que vous attendez, plaques 2 à 5 jours ouvrables.",
          materialsLabel: "Matériaux",
          materials: "Laiton, inox, aluminium et plastique à graver.",
          guaranteeLabel: "Contrôle",
          guarantee: "Vous validez la mise en page avant la gravure.",
        },
        steps: {
          title: "Comment ça marche",
          items: [
            {
              step: "01",
              title: "Transmettez-nous votre texte",
              desc: "Au comptoir ou à l'avance via le formulaire, avec éventuellement un logo.",
            },
            {
              step: "02",
              title: "Vous validez la mise en page",
              desc: "Nous vous montrons la police et le placement pour que tout soit correct avant de commencer.",
            },
            {
              step: "03",
              title: "Nous gravons proprement",
              desc: "Les petites pièces sont souvent prêtes de suite, les plaques sont vite planifiées.",
            },
          ],
        },
        pricingTitle: "Tarifs gravure",
        pricingSubtitle: "Prix indicatifs, TVA comprise.",
        faq: {
          title: "Questions fréquentes",
          items: [
            {
              q: "Puis-je faire graver mon propre objet ?",
              a: "Souvent oui. Montrez-nous la pièce et nous voyons ensemble si le matériau se prête à la gravure.",
            },
            {
              q: "Pouvez-vous graver un logo ?",
              a: "Oui, fournissez votre logo en fichier vectoriel (par exemple .svg ou .pdf) pour le résultat le plus net.",
            },
            {
              q: "En combien de temps une médaille pour chien est-elle prête ?",
              a: "Une médaille se grave généralement de suite pendant que vous attendez.",
            },
          ],
        },
        cta: {
          title: "Quelque chose de beau à graver ?",
          subtitle: "Transmettez-nous votre texte et nous nous en occupons.",
          button: "Demander un devis",
        },
      },
      stempels: {
        meta: {
          title: "Tampons sur mesure à Louvain — tampons d'entreprise & d'adresse",
          description:
            "Tampons d'entreprise et tampons d'adresse personnalisés. Tampons auto-encreurs, dateurs et logos réalisés sur mesure à Louvain.",
        },
        hero: {
          tag: "Tampons",
          title: "Votre tampon, réalisé de façon professionnelle",
          subtitle:
            "Tampons d'entreprise et tampons d'adresse personnalisés — nets, durables et entièrement conformes à votre identité visuelle.",
        },
        intro: [
          "Un tampon d'adresse soigné pour votre courrier ou un tampon d'entreprise avec logo et numéro de TVA : nous réalisons des tampons auto-encreurs qui restent nets sur des milliers d'impressions.",
          "Vous fournissez le texte et éventuellement votre logo, nous nous occupons de la mise en page. Vous trouvez aussi chez nous dateurs et recharges d'encre.",
        ],
        included: {
          title: "Ce que nous faisons pour vous",
          items: [
            "Tampons d'adresse jusqu'à quatre lignes ou plus",
            "Tampons d'entreprise avec logo et numéro de TVA",
            "Tampons auto-encreurs (Trodat)",
            "Tampons dateurs et numéroteurs",
            "Cassettes de rechange et recharges d'encre",
            "Choix de formats et de couleurs d'encre",
          ],
        },
        details: {
          title: "Bon à savoir",
          turnaroundLabel: "Délai",
          turnaround: "Tampons texte souvent le jour même, tampons logo 1 à 3 jours.",
          materialsLabel: "Marques",
          materials: "Tampons auto-encreurs Trodat en divers formats.",
          guaranteeLabel: "Contrôle",
          guarantee: "Vous recevez un bon à tirer avant production.",
        },
        steps: {
          title: "Comment ça marche",
          items: [
            {
              step: "01",
              title: "Transmettez-nous le texte",
              desc: "Communiquez vos coordonnées, avec éventuellement un logo et la couleur d'encre souhaitée.",
            },
            {
              step: "02",
              title: "Vous validez le bon à tirer",
              desc: "Nous vous montrons une épreuve pour que chaque ligne soit correcte.",
            },
            {
              step: "03",
              title: "Nous réalisons votre tampon",
              desc: "Prêt à imprimer des milliers de fois une empreinte nette.",
            },
          ],
        },
        pricingTitle: "Tarifs tampons",
        pricingSubtitle: "Prix indicatifs, TVA comprise.",
        faq: {
          title: "Questions fréquentes",
          items: [
            {
              q: "Pouvez-vous intégrer mon logo au tampon ?",
              a: "Oui. Fournissez votre logo en fichier net (de préférence vectoriel) et nous l'intégrons à la mise en page.",
            },
            {
              q: "Combien de temps dure un tampon auto-encreur ?",
              a: "Des milliers d'impressions. Une fois la cassette épuisée, remplacez-la simplement par une recharge ou une nouvelle cassette.",
            },
            {
              q: "Puis-je choisir différentes couleurs d'encre ?",
              a: "Bien sûr, les couleurs courantes comme le noir, le bleu et le rouge sont en stock.",
            },
          ],
        },
        cta: {
          title: "Prêt pour votre propre tampon ?",
          subtitle: "Transmettez-nous votre texte et votre logo, nous faisons le reste.",
          button: "Demander un devis",
        },
      },
    },
  },
};
