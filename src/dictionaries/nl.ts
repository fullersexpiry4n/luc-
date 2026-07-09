import type { Dictionary } from "./types";

export const nl: Dictionary = {
  meta: {
    home: {
      title: "Slotenmaker Luc — Schoenen, sleutels, graveren & stempels in Leuven",
      description:
        "Schoenreparaties, sleutels dupliceren, graveerwerk en bedrijfsstempels in hartje Leuven. Vakwerk zonder afspraak, meestal klaar in een kwartier.",
    },
  },
  nav: {
    services: "Diensten",
    prices: "Prijzen",
    faq: "FAQ",
    contact: "Contact",
    cta: "Maak een afspraak",
    openMenu: "Menu openen",
    closeMenu: "Menu sluiten",
    menuTitle: "Menu",
    languageLabel: "Taal",
  },
  hero: {
    badge: "Klaar terwijl u wacht",
    title: "Buitengesloten?",
    titleAccent: "Luc is onderweg.",
    subtitle:
      "Schoenreparaties, sleutels, graveerwerk en stempels. Echt vakmanschap op de Diestsestraat in Leuven — meestal klaar in een kwartier.",
    ctaPrimary: "Bel nu",
    ctaSecondary: "Bekijk diensten",
    note: "Geen afspraak nodig · Ma–Za open · Klaar in ±15 min",
    imageAlt:
      "Slotenmaker Luc vervangt glimlachend een cilinderslot van een moderne zwarte voordeur",
    floating: ["Hakken & zolen", "Sleutels", "Graveren", "Stempels"],
  },
  services: {
    tag: "Onze diensten",
    title: "Vier ambachten, één adres",
    subtitle:
      "Van een losse hak tot een gepersonaliseerde bedrijfsstempel — u wordt vakkundig en snel geholpen.",
    learnMore: "Meer info",
    items: {
      schoenreparaties: {
        title: "Schoenreparaties",
        short:
          "Vervangen van versleten hakken, zolen en algemeen herstel van lederwaren.",
      },
      sleutelservice: {
        title: "Sleutelservice",
        short:
          "Dupliceren van huissleutels, fietssleutels en elektronische autosleutels of afstandsbedieningen.",
      },
      graveerwerk: {
        title: "Graveerwerk",
        short:
          "Graveren van naamplaatjes, huisnummers, hondenpenningen en geschenken.",
      },
      stempels: {
        title: "Stempels",
        short: "Gepersonaliseerde bedrijfsstempels en adresstempels.",
      },
    },
  },
  stats: {
    tag: "In cijfers",
    title: "Snelheid en vakmanschap, elke dag opnieuw",
    subtitle: "Al meer dan 25 jaar het vertrouwde adres in Leuven.",
    items: [
      { value: 15, prefix: "±", suffix: " min", label: "gemiddelde servicetijd" },
      { value: 25, suffix: "+", label: "jaar vakmanschap" },
      { value: 10000, suffix: "+", label: "sleutels per jaar" },
      { value: 4.9, decimals: 1, suffix: "/5", label: "klantbeoordeling" },
    ],
  },
  pricing: {
    tag: "Prijslijst",
    title: "Eerlijke prijzen, geen verrassingen",
    subtitle:
      "Kies een dienst voor een overzicht van de meest gevraagde tarieven.",
    fromLabel: "vanaf",
    disclaimer:
      "Alle prijzen zijn indicatief en inclusief btw. De definitieve prijs hangt af van het materiaal en de staat van het stuk, en wordt altijd vooraf met u besproken.",
    services: [
      {
        slug: "schoenreparaties",
        label: "Schoenreparaties",
        rows: [
          { name: "Dameshakken (toppen) vervangen", price: "12" },
          { name: "Herenhakken vervangen", price: "18" },
          { name: "Halve zolen (leer of rubber)", price: "35" },
          { name: "Volledige zolen vervangen", price: "55" },
          { name: "Rits van laars of tas vervangen", price: "25" },
          { name: "Herstel van riem of handtas", price: "15" },
        ],
      },
      {
        slug: "sleutelservice",
        label: "Sleutelservice",
        rows: [
          { name: "Standaard huissleutel dupliceren", price: "6" },
          { name: "Gepatenteerde veiligheidssleutel", price: "25" },
          { name: "Fietssleutel bijmaken", price: "7" },
          { name: "Autosleutel met transponder", price: "59" },
          { name: "Keyless afstandsbediening kopiëren", price: "89" },
          { name: "Cilinderslot bijmaken op sleutel", price: "35" },
        ],
      },
      {
        slug: "graveerwerk",
        label: "Graveerwerk",
        rows: [
          { name: "Naamplaatje voor deur of bel", price: "18" },
          { name: "Huisnummer voor de gevel", price: "22" },
          { name: "Hondenpenning graveren", price: "9" },
          { name: "Gegraveerd geschenk (pen, medaille)", price: "14" },
          { name: "Trofee of plaquette", price: "29" },
        ],
      },
      {
        slug: "stempels",
        label: "Stempels",
        rows: [
          { name: "Adresstempel (tot 4 regels)", price: "19" },
          { name: "Zelfinktende stempel (Trodat)", price: "24" },
          { name: "Datumstempel", price: "29" },
          { name: "Bedrijfsstempel met logo", price: "39" },
          { name: "Vervangkussen / navulinkt", price: "6" },
        ],
      },
    ],
  },
  faq: {
    tag: "Veelgestelde vragen",
    title: "Alles wat u wil weten",
    subtitle: "Staat uw vraag er niet bij? Bel of mail ons gerust.",
    items: [
      {
        q: "Moet ik vooraf een afspraak maken?",
        a: "Voor de meeste klussen niet: u kunt gewoon binnenlopen en wacht terwijl wij werken. Voor grotere opdrachten of graveerwerk op maat plant u best een afspraak via het formulier hieronder.",
      },
      {
        q: "Hoe lang moet ik wachten?",
        a: "Sleutels en eenvoudige hakken zijn meestal klaar in ongeveer 15 minuten. Voor volledige zolen, ritsen of graveerwerk laten we u vooraf een realistische tijd weten.",
      },
      {
        q: "Kopiëren jullie ook autosleutels met chip?",
        a: "Ja. We dupliceren transpondersleutels en programmeren heel wat keyless afstandsbedieningen. Breng uw kentekenbewijs en een werkende sleutel mee.",
      },
      {
        q: "Zijn de vermelde prijzen definitief?",
        a: "De prijslijst is indicatief. Na een korte inspectie van uw schoen, slot of stuk bevestigen we de exacte prijs, altijd vóór we beginnen.",
      },
      {
        q: "Hoe kan ik betalen?",
        a: "U betaalt met cash, Bancontact, Payconiq of de meeste bankkaarten. Voor bedrijven maken we op aanvraag een factuur op.",
      },
      {
        q: "Herstellen jullie ook andere lederwaren dan schoenen?",
        a: "Zeker. Denk aan handtassen, riemen, ritsen en kleine lederreparaties. Toon ons het stuk en we bekijken samen wat mogelijk is.",
      },
      {
        q: "Geven jullie garantie op reparaties?",
        a: "Op schoen- en lederherstel geven we drie maanden garantie op materiaal en uitvoering. Op sleutels garanderen we een correcte werking bij afhaling.",
      },
    ],
  },
  location: {
    tag: "Kom langs",
    title: "U vindt ons in hartje Leuven",
    subtitle:
      "Vlak bij de Bondgenotenlaan, op wandelafstand van het station en de parkeergarages.",
    addressTitle: "Adres",
    hoursTitle: "Openingsuren",
    contactTitle: "Contact",
    phoneLabel: "Telefoon",
    emailLabel: "E-mail",
    directions: "Routebeschrijving openen",
    mapTitle: "Kaart met de locatie van Slotenmaker Luc in Leuven",
    days: [
      "Maandag",
      "Dinsdag",
      "Woensdag",
      "Donderdag",
      "Vrijdag",
      "Zaterdag",
      "Zondag",
    ],
    hours: [
      "09:00 – 18:00",
      "09:00 – 18:00",
      "09:00 – 18:00",
      "09:00 – 18:00",
      "09:00 – 18:00",
      "10:00 – 16:00",
      "Gesloten",
    ],
    closedLabel: "Gesloten",
  },
  form: {
    tag: "Afspraak & offerte",
    title: "Vraag uw afspraak of offerte aan",
    subtitle:
      "Vul het formulier in en we bevestigen doorgaans binnen één werkdag. Voor dringende vragen belt u ons het best rechtstreeks.",
    name: "Naam",
    namePlaceholder: "Uw voor- en achternaam",
    email: "E-mail",
    emailPlaceholder: "u@voorbeeld.be",
    phone: "Telefoon",
    phonePlaceholder: "+32 …",
    service: "Dienst",
    servicePlaceholder: "Kies een dienst",
    serviceOptions: [
      { value: "schoenreparaties", label: "Schoenreparaties" },
      { value: "sleutelservice", label: "Sleutelservice" },
      { value: "graveerwerk", label: "Graveerwerk" },
      { value: "stempels", label: "Stempels" },
      { value: "anders", label: "Iets anders / algemene vraag" },
    ],
    message: "Bericht",
    messagePlaceholder: "Vertel ons kort waarmee we u kunnen helpen…",
    submit: "Verstuur aanvraag",
    submitting: "Versturen…",
    privacy:
      "Uw gegevens gebruiken we enkel om uw aanvraag te beantwoorden. Nooit voor reclame.",
    success: {
      title: "Bedankt, we hebben uw aanvraag ontvangen!",
      message:
        "We nemen doorgaans binnen één werkdag contact met u op. Voor dringende zaken belt u ons gerust rechtstreeks.",
      again: "Nog een aanvraag versturen",
    },
    errorToast: "Er ging iets mis. Probeer het opnieuw of bel ons.",
    errors: {
      name: "Vul uw naam in (minstens 2 tekens).",
      email: "Vul een geldig e-mailadres in.",
      phone: "Vul een geldig telefoonnummer in (minstens 6 cijfers).",
      service: "Kies een dienst.",
      message: "Uw bericht is te kort (minstens 10 tekens).",
    },
  },
  footer: {
    tagline:
      "Uw vertrouwde vakman voor schoenen, sleutels, graveerwerk en stempels in Leuven.",
    servicesTitle: "Diensten",
    contactTitle: "Contact",
    hoursTitle: "Openingsuren",
    languageTitle: "Taal",
    rights: "Alle rechten voorbehouden.",
    disclaimer:
      "Fictieve demonstratiewebsite. Adres, telefoonnummer en prijzen zijn voorbeelden.",
    backToTop: "Terug naar boven",
  },
  serviceDetail: {
    breadcrumbHome: "Home",
    breadcrumbServices: "Diensten",
    includedDefaultTitle: "Wat is inbegrepen",
    stepsDefaultTitle: "Hoe werkt het",
    items: {
      schoenreparaties: {
        meta: {
          title: "Schoenreparaties in Leuven — hakken, zolen & lederherstel",
          description:
            "Versleten hakken, nieuwe zolen, ritsen en lederherstel. Vakkundige schoenreparatie in Leuven, meestal klaar terwijl u wacht.",
        },
        hero: {
          tag: "Schoenreparaties",
          title: "Uw favoriete schoenen weer als nieuw",
          subtitle:
            "Vervangen van versleten hakken, zolen en algemeen herstel van lederwaren — met de juiste materialen en een afwerking die u niet ziet.",
        },
        intro: [
          "Een goede schoen gooit u niet weg. Bij Slotenmaker Luc geven we leren en rubberen schoenen een tweede leven: van een afgesleten damestop tot volledig nieuwe zolen onder uw favoriete bottines.",
          "We werken met kwaliteitsmaterialen van vaste leveranciers en kleuren de afwerking bij zodat de reparatie onzichtbaar blijft. Ook handtassen, riemen en ritsen kunt u bij ons laten herstellen.",
        ],
        included: {
          title: "Wat we voor u doen",
          items: [
            "Toppen en hakken vervangen (dames en heren)",
            "Halve en volledige zolen in leer of rubber",
            "Ritsen van laarzen en tassen vervangen",
            "Stikwerk en losse naden herstellen",
            "Lederwaren voeden, kleuren en opfrissen",
            "Antislipprofiel en beschermtips plaatsen",
          ],
        },
        details: {
          title: "Goed om te weten",
          turnaroundLabel: "Doorlooptijd",
          turnaround: "Hakken meestal ±15 min, zolen en ritsen 2–4 dagen.",
          materialsLabel: "Materialen",
          materials: "Leer, rubber en TR-zolen van Europese leveranciers.",
          guaranteeLabel: "Garantie",
          guarantee: "Drie maanden op materiaal en uitvoering.",
        },
        steps: {
          title: "Hoe werkt het",
          items: [
            {
              step: "01",
              title: "Breng uw schoenen binnen",
              desc: "We bekijken samen de slijtage en bespreken meteen een eerlijke prijs.",
            },
            {
              step: "02",
              title: "Wij herstellen vakkundig",
              desc: "Kleine klussen doen we terwijl u wacht, grotere plannen we snel in.",
            },
            {
              step: "03",
              title: "Klaar om te dragen",
              desc: "U haalt uw schoenen op, gepoetst en afgewerkt zoals het hoort.",
            },
          ],
        },
        pricingTitle: "Tarieven schoenreparaties",
        pricingSubtitle: "Indicatieve prijzen inclusief btw.",
        faq: {
          title: "Veelgestelde vragen",
          items: [
            {
              q: "Kan ik wachten op mijn hakken?",
              a: "Ja, het vervangen van toppen en hakken duurt meestal zo'n 15 minuten.",
            },
            {
              q: "Herstellen jullie ook designerschoenen?",
              a: "Zeker. We werken met de gepaste materialen en overleggen bij twijfel altijd eerst met u.",
            },
            {
              q: "Kan ik ook een handtas laten herstellen?",
              a: "Ja, ritsen, stiksels en riemen van tassen herstellen we net zo goed als schoenen.",
            },
          ],
        },
        cta: {
          title: "Klaar om uw schoenen te redden?",
          subtitle: "Loop binnen of vraag vrijblijvend een offerte aan.",
          button: "Vraag een offerte aan",
        },
      },
      sleutelservice: {
        meta: {
          title: "Sleutelservice in Leuven — huis-, fiets- & autosleutels",
          description:
            "Sleutels dupliceren in Leuven: huissleutels, fietssleutels, veiligheidssleutels en autosleutels met chip of keyless afstandsbediening.",
        },
        hero: {
          tag: "Sleutelservice",
          title: "Een reservesleutel? Zo geregeld",
          subtitle:
            "Dupliceren van huissleutels, fietssleutels en elektronische autosleutels of afstandsbedieningen — nauwkeurig bijgemaakt en meteen getest.",
        },
        intro: [
          "Van een simpele huissleutel tot een autosleutel met transponder: we maken snel en nauwkeurig een kopie die het altijd doet. Elke sleutel testen we ter plaatse voor u de deur uit stapt.",
          "Ook gepatenteerde veiligheidssleutels en keyless afstandsbedieningen kunt u bij ons laten bijmaken. Zo hebt u altijd een reserve achter de hand.",
        ],
        included: {
          title: "Wat we voor u doen",
          items: [
            "Standaard huissleutels dupliceren",
            "Gepatenteerde veiligheidssleutels bijmaken",
            "Fiets- en hangslotsleutels kopiëren",
            "Autosleutels met transponder programmeren",
            "Keyless afstandsbedieningen dupliceren",
            "Nieuwe sleutels op een bestaande cilinder maken",
          ],
        },
        details: {
          title: "Goed om te weten",
          turnaroundLabel: "Doorlooptijd",
          turnaround: "Standaardsleutels ±5 min, autosleutels 15–30 min.",
          materialsLabel: "Merken",
          materials: "Onder meer Trodat, Silca en gangbare autofabrikanten.",
          guaranteeLabel: "Garantie",
          guarantee: "Werkt de kopie niet? U krijgt gratis een nieuwe.",
        },
        steps: {
          title: "Hoe werkt het",
          items: [
            {
              step: "01",
              title: "Breng uw sleutel mee",
              desc: "Voor autosleutels neemt u ook uw kentekenbewijs en identiteitskaart mee.",
            },
            {
              step: "02",
              title: "Wij maken de kopie",
              desc: "We frezen of programmeren de sleutel en testen die meteen uit.",
            },
            {
              step: "03",
              title: "Getest en klaar",
              desc: "U vertrekt met een sleutel waarvan u zeker weet dat hij werkt.",
            },
          ],
        },
        pricingTitle: "Tarieven sleutelservice",
        pricingSubtitle: "Indicatieve prijzen inclusief btw.",
        faq: {
          title: "Veelgestelde vragen",
          items: [
            {
              q: "Wat moet ik meenemen voor een autosleutel?",
              a: "Een werkende sleutel, uw kentekenbewijs en identiteitskaart. Zo weten we zeker dat de wagen van u is.",
            },
            {
              q: "Kunnen jullie elke veiligheidssleutel bijmaken?",
              a: "De meeste wel. Sommige gepatenteerde systemen vragen een kaart of code — breng die zeker mee.",
            },
            {
              q: "Wat als de kopie niet werkt?",
              a: "Dan maken we kosteloos een nieuwe. We testen elke sleutel al voor u de winkel verlaat.",
            },
          ],
        },
        cta: {
          title: "Nooit meer buitengesloten",
          subtitle: "Laat vandaag nog een reservesleutel bijmaken.",
          button: "Vraag een offerte aan",
        },
      },
      graveerwerk: {
        meta: {
          title: "Graveerwerk in Leuven — naamplaatjes, penningen & geschenken",
          description:
            "Graveren van naamplaatjes, huisnummers, hondenpenningen en gepersonaliseerde geschenken. Verzorgd graveerwerk op maat in Leuven.",
        },
        hero: {
          tag: "Graveerwerk",
          title: "Uw tekst, strak en blijvend gegraveerd",
          subtitle:
            "Graveren van naamplaatjes, huisnummers, hondenpenningen en geschenken — scherp, duurzaam en helemaal naar uw wens.",
        },
        intro: [
          "Een naamplaatje voor de voordeur, een penning voor de hond of een gepersonaliseerd cadeau: we graveren strak en nauwkeurig in metaal, kunststof en meer.",
          "U kiest het lettertype en de opmaak, wij zorgen voor een resultaat dat jaren mooi blijft. Voor bedrijven graveren we ook naamborden en plaquettes op maat.",
        ],
        included: {
          title: "Wat we voor u doen",
          items: [
            "Naamplaatjes voor deur, bel of brievenbus",
            "Huisnummers voor gevel of tuinpoort",
            "Hondenpenningen met naam en telefoonnummer",
            "Gepersonaliseerde geschenken en medailles",
            "Trofeeën en plaquettes voor clubs of bedrijven",
            "Keuze uit lettertypes en afwerkingen",
          ],
        },
        details: {
          title: "Goed om te weten",
          turnaroundLabel: "Doorlooptijd",
          turnaround: "Penningen terwijl u wacht, borden 2–5 werkdagen.",
          materialsLabel: "Materialen",
          materials: "Messing, rvs, aluminium en gegraveerd kunststof.",
          guaranteeLabel: "Controle",
          guarantee: "U keurt de opmaak goed voor we graveren.",
        },
        steps: {
          title: "Hoe werkt het",
          items: [
            {
              step: "01",
              title: "Bezorg ons uw tekst",
              desc: "Doorgeven aan de toonbank of vooraf via het formulier, met eventueel een logo.",
            },
            {
              step: "02",
              title: "U keurt de opmaak goed",
              desc: "We tonen u lettertype en plaatsing zodat alles klopt voor we starten.",
            },
            {
              step: "03",
              title: "Wij graveren netjes af",
              desc: "Kleine stukken zijn vaak meteen klaar, borden plannen we snel in.",
            },
          ],
        },
        pricingTitle: "Tarieven graveerwerk",
        pricingSubtitle: "Indicatieve prijzen inclusief btw.",
        faq: {
          title: "Veelgestelde vragen",
          items: [
            {
              q: "Kan ik mijn eigen voorwerp laten graveren?",
              a: "Vaak wel. Toon ons het stuk, dan bekijken we samen of het materiaal geschikt is om te graveren.",
            },
            {
              q: "Kunnen jullie een logo graveren?",
              a: "Ja, lever uw logo aan als vectorbestand (bijvoorbeeld .svg of .pdf) voor het scherpste resultaat.",
            },
            {
              q: "Hoe snel is een hondenpenning klaar?",
              a: "Een penning graveren we meestal meteen terwijl u wacht.",
            },
          ],
        },
        cta: {
          title: "Iets moois om te graveren?",
          subtitle: "Bezorg ons uw tekst en we maken het in orde.",
          button: "Vraag een offerte aan",
        },
      },
      stempels: {
        meta: {
          title: "Stempels op maat in Leuven — bedrijfs- & adresstempels",
          description:
            "Gepersonaliseerde bedrijfsstempels en adresstempels. Zelfinktende stempels, datumstempels en logostempels op maat gemaakt in Leuven.",
        },
        hero: {
          tag: "Stempels",
          title: "Uw eigen stempel, professioneel gemaakt",
          subtitle:
            "Gepersonaliseerde bedrijfsstempels en adresstempels — scherp, duurzaam en helemaal volgens uw huisstijl.",
        },
        intro: [
          "Een net adresstempel voor uw post of een bedrijfsstempel met logo en btw-nummer: we maken zelfinktende stempels die duizenden afdrukken lang scherp blijven.",
          "U levert de tekst en eventueel uw logo, wij verzorgen de opmaak. Ook datumstempels en navulinkt hebt u bij ons snel in huis.",
        ],
        included: {
          title: "Wat we voor u doen",
          items: [
            "Adresstempels tot vier of meer regels",
            "Bedrijfsstempels met logo en btw-nummer",
            "Zelfinktende stempels (Trodat)",
            "Datum- en nummerstempels",
            "Vervangkussens en navulinkt",
            "Keuze uit formaten en inktkleuren",
          ],
        },
        details: {
          title: "Goed om te weten",
          turnaroundLabel: "Doorlooptijd",
          turnaround: "Tekststempels vaak dezelfde dag, logostempels 1–3 dagen.",
          materialsLabel: "Merken",
          materials: "Zelfinktende Trodat-stempels in diverse formaten.",
          guaranteeLabel: "Controle",
          guarantee: "U ontvangt een proefopmaak voor productie.",
        },
        steps: {
          title: "Hoe werkt het",
          items: [
            {
              step: "01",
              title: "Bezorg ons de tekst",
              desc: "Geef uw gegevens door, met eventueel een logo en de gewenste inktkleur.",
            },
            {
              step: "02",
              title: "U keurt de proef goed",
              desc: "We sturen of tonen u een proefafdruk zodat elke regel klopt.",
            },
            {
              step: "03",
              title: "Wij maken uw stempel",
              desc: "Klaar om duizenden keren een strakke afdruk te zetten.",
            },
          ],
        },
        pricingTitle: "Tarieven stempels",
        pricingSubtitle: "Indicatieve prijzen inclusief btw.",
        faq: {
          title: "Veelgestelde vragen",
          items: [
            {
              q: "Kunnen jullie mijn logo in de stempel verwerken?",
              a: "Ja. Lever uw logo als scherp bestand aan (bij voorkeur vector) en we zetten het mee in de opmaak.",
            },
            {
              q: "Hoelang gaat een zelfinktende stempel mee?",
              a: "Duizenden afdrukken. Is het kussen op, dan vervangt u het eenvoudig met navulinkt of een nieuw kussen.",
            },
            {
              q: "Kan ik verschillende inktkleuren kiezen?",
              a: "Zeker, de gangbare kleuren zoals zwart, blauw en rood hebben we standaard op voorraad.",
            },
          ],
        },
        cta: {
          title: "Klaar voor uw eigen stempel?",
          subtitle: "Bezorg ons uw tekst en logo, wij doen de rest.",
          button: "Vraag een offerte aan",
        },
      },
    },
  },
};
