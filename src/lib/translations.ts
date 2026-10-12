import { Language } from '../types';

export interface Dictionary {
  dir: 'ltr' | 'rtl';
  nav: {
    brand: string;
    services: string;
    fleet: string;
    cities: string;
    process: string;
    flightTracker: string;
    requestQuote: string;
    contactConcierge: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    citiesServed: string;
    discretionPledge: string;
  };
  pillars: {
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    p3Title: string;
    p3Desc: string;
    p4Title: string;
    p4Desc: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    subheading: string;
    s1Tag: string;
    s1Title: string;
    s1Desc: string;
    s2Tag: string;
    s2Title: string;
    s2Desc: string;
    s3Tag: string;
    s3Title: string;
    s3Desc: string;
    s4Tag: string;
    s4Title: string;
    s4Desc: string;
  };
  fleet: {
    eyebrow: string;
    heading: string;
    quoteCar: string;
    inspectSpecs: string;
    businessTitle: string;
    businessDesc: string;
    firstTitle: string;
    firstDesc: string;
    vanTitle: string;
    vanDesc: string;
    passengers: string;
    luggage: string;
  };
  cities: {
    eyebrow: string;
    heading: string;
    subheading: string;
  };
  process: {
    eyebrow: string;
    heading: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  booking: {
    eyebrow: string;
    heading: string;
    subheading: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    selectCity: string;
    selectService: string;
    pickup: string;
    destination: string;
    date: string;
    time: string;
    hours: string;
    flightNo: string;
    flightPlaceholder: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    notes: string;
    calculateEstimate: string;
    fixedPriceNote: string;
    submitQuote: string;
    successTitle: string;
    successMessage: string;
    refNumber: string;
    sendWhatsapp: string;
    newBooking: string;
  };
  testimonial: {
    quote: string;
    author: string;
  };
  footer: {
    brandTagline: string;
    requestQuote: string;
    contactTitle: string;
    citiesTitle: string;
    installApp: string;
    allRightsReserved: string;
    motto: string;
  };
}

export const translations: Record<Language, Dictionary> = {
  en: {
    dir: 'ltr',
    nav: {
      brand: 'Driveo Exclusive',
      services: 'Services',
      fleet: 'Fleet',
      cities: 'Cities',
      process: 'Process',
      flightTracker: 'Flight Tracker',
      requestQuote: 'Request quote',
      contactConcierge: 'VIP Concierge',
    },
    hero: {
      badge: 'Private chauffeur · London founded',
      titleLine1: 'Private chauffeur service.',
      titleLine2: 'Arrive in absolute silence.',
      subtitle:
        'Fixed-price travel with vetted, suited drivers, live flight tracking and immaculate black cars. Discretion is the standard, not the exception.',
      ctaPrimary: 'Get a fixed quote',
      ctaSecondary: 'Explore our fleet',
      citiesServed: 'London · Paris · Bulgaria · Dubai',
      discretionPledge: 'Discretion · Precision · Silence',
    },
    pillars: {
      p1Title: 'Vetted chauffeurs',
      p1Desc: 'Licensed, background-checked, in suit and tie.',
      p2Title: 'Flight tracked',
      p2Desc: 'We watch your flight and adjust the pickup for you.',
      p3Title: 'Fixed pricing',
      p3Desc: 'Quoted in writing. No surge, no meter, no surprises.',
      p4Title: 'Total discretion',
      p4Desc: 'Your journeys, guests and addresses stay private.',
    },
    services: {
      eyebrow: 'What we do',
      heading: 'Four ways to travel with us',
      subheading:
        'Every service is quoted personally. Tell us the journey and we come back with one price, in writing.',
      s1Tag: '01 · Transfer',
      s1Title: 'Airport transfer',
      s1Desc:
        'Flight tracked from wheels-up. Meet and greet inside the terminal, with 60 minutes of complimentary waiting.',
      s2Tag: '02 · Journey',
      s2Title: 'Point-to-point',
      s2Desc:
        'One fixed price agreed before you travel — from boardroom to residence, restaurant to hotel, or city to coast.',
      s3Tag: '03 · Retainer',
      s3Title: 'Hourly hire',
      s3Desc:
        'Your chauffeur stays with you for meetings, viewings, events and every stop in between.',
      s4Tag: '04 · Occasion',
      s4Title: 'Private events',
      s4Desc:
        'Weddings, premieres and long-haul road journeys, planned personally and quoted in writing.',
    },
    fleet: {
      eyebrow: 'The fleet',
      heading: 'Three classes, one standard of finish',
      quoteCar: 'Quote this car',
      inspectSpecs: 'Vehicle specifications',
      businessTitle: 'Business Class',
      businessDesc:
        'The executive saloon in black. A quiet cabin with onboard Wi-Fi, chargers, still water and a chauffeur who knows the route.',
      firstTitle: 'First Class',
      firstDesc:
        'Long-wheelbase luxury in black with reclining rear seats, privacy glass, climate zones and uncompromising calm.',
      vanTitle: 'Business Van',
      vanDesc:
        'Space for teams, families and luggage, with conference seating, Wi-Fi and USB-C throughout.',
      passengers: 'passengers',
      luggage: 'luggage bags',
    },
    cities: {
      eyebrow: 'Where we operate',
      heading: 'Four locations. One house standard.',
      subheading:
        'The same vetted chauffeurs, pristine cars and fixed-price discipline wherever you land.',
    },
    process: {
      eyebrow: 'How it works',
      heading: 'Three moves, no friction',
      step1Title: 'Send the journey',
      step1Desc:
        'City, service, date and stops — sixty seconds on the quote form.',
      step2Title: 'We write back',
      step2Desc:
        'A real person prices it and replies with a fixed, all-inclusive figure.',
      step3Title: 'Step in',
      step3Desc:
        'Your chauffeur arrives early, waits quietly, and takes it from there.',
    },
    booking: {
      eyebrow: 'Private enquiry',
      heading: 'Tell us where the road begins.',
      subheading:
        'Share the essentials. Your request is secured immediately and reviewed by a Driveo concierge.',
      step1: 'Journey',
      step2: 'Vehicle',
      step3: 'Passenger',
      step4: 'Confirmation',
      selectCity: 'Select City',
      selectService: 'Select Service',
      pickup: 'Pickup location',
      destination: 'Destination / Drop-off',
      date: 'Date of travel',
      time: 'Pickup time',
      hours: 'Duration (hours)',
      flightNo: 'Flight number (optional)',
      flightPlaceholder: 'e.g. BA 458, EK 001',
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email address',
      phone: 'Phone number (with country code)',
      notes: 'Special requirements (luggage, child seat, silent ride...)',
      calculateEstimate: 'Estimate fare & vehicle options',
      fixedPriceNote:
        'All prices include complimentary waiting, bottled water, VAT and airport parking.',
      submitQuote: 'Request fixed quote',
      successTitle: 'Quote Request Confirmed',
      successMessage:
        'Your request has been received by our private concierge desk. We will confirm your chauffeur assignment in writing.',
      refNumber: 'Reference Number',
      sendWhatsapp: 'Chat directly with Concierge',
      newBooking: 'Submit another journey',
    },
    testimonial: {
      quote:
        '“Three cities, eleven transfers, not one late arrival. Driveo is the only service I hand my itinerary to without checking it twice.”',
      author: 'Private client · International itinerary',
    },
    footer: {
      brandTagline: 'Arrive in absolute silence.',
      requestQuote: 'Request a quote',
      contactTitle: 'Direct Concierge',
      citiesTitle: 'Operating Hubs',
      installApp: 'Install Driveo as an app on your device',
      allRightsReserved: '© 2026 Driveo Exclusive Limited',
      motto: 'Discretion · Precision · Silence',
    },
  },
  fr: {
    dir: 'ltr',
    nav: {
      brand: 'Driveo Exclusive',
      services: 'Services',
      fleet: 'Flotte',
      cities: 'Villes',
      process: 'Méthode',
      flightTracker: 'Suivi de vol',
      requestQuote: 'Demander un devis',
      contactConcierge: 'Concierge VIP',
    },
    hero: {
      badge: 'Chauffeur privé · Fondé à Londres',
      titleLine1: 'Service de chauffeur privé.',
      titleLine2: 'Arrivez dans le silence absolu.',
      subtitle:
        'Voyages à prix fixe avec chauffeurs rigoureusement sélectionnés en costume, suivi des vols en temps réel et berlines noires impeccables.',
      ctaPrimary: 'Obtenir un tarif fixe',
      ctaSecondary: 'Découvrir la flotte',
      citiesServed: 'Londres · Paris · Bulgarie · Dubaï',
      discretionPledge: 'Discrétion · Précision · Silence',
    },
    pillars: {
      p1Title: 'Chauffeurs accrédités',
      p1Desc: 'Agréés, vérifiés, en costume et cravate impeccable.',
      p2Title: 'Suivi de vol en direct',
      p2Desc: 'Nous surveillons votre vol et ajustons la prise en charge sans frais.',
      p3Title: 'Tarification fixe',
      p3Desc: 'Confirmée par écrit. Ni majoration, ni compteur, aucune surprise.',
      p4Title: 'Discrétion totale',
      p4Desc: 'Vos trajets, vos invités et vos adresses demeurent strictement confidentiels.',
    },
    services: {
      eyebrow: 'Nos prestations',
      heading: 'Quatre façons de voyager avec nous',
      subheading:
        'Chaque demande fait l’objet d’une étude personnalisée. Un prix unique et transparent par écrit.',
      s1Tag: '01 · Transfert',
      s1Title: 'Transfert aéroport',
      s1Desc:
        'Vol suivi dès le décollage. Accueil personnalisé en terminal avec 60 minutes d’attente offerte.',
      s2Tag: '02 · Trajet',
      s2Title: 'Point à point',
      s2Desc:
        'Prix fixe convenu avant le départ — du conseil d’administration à votre hôtel ou villa.',
      s3Tag: '03 · Mise à disposition',
      s3Title: 'Location horaire',
      s3Desc:
        'Votre chauffeur privé reste à vos côtés pour vos rendez-vous, visites et soirées.',
      s4Tag: '04 · Événement',
      s4Title: 'Événements privés',
      s4Desc:
        'Mariages, avant-premières et longs trajets routiers, coordonnés avec soin et sans imprévu.',
    },
    fleet: {
      eyebrow: 'La flotte',
      heading: 'Trois gammes, une exigence absolue',
      quoteCar: 'Devis pour ce véhicule',
      inspectSpecs: 'Fiche technique',
      businessTitle: 'Classe Affaires',
      businessDesc:
        'La berline exécutive en noir. Habitacle feutré, Wi-Fi à bord, rafraîchissements et chauffeur expert.',
      firstTitle: 'Première Classe',
      firstDesc:
        'Châssis long de prestige, sièges inclinables, vitrage acoustique et sérénité incomparable.',
      vanTitle: 'Van Affaires',
      vanDesc:
        'Confort haut de gamme pour délégations, familles et bagages, avec configuration salon.',
      passengers: 'passagers',
      luggage: 'valises',
    },
    cities: {
      eyebrow: 'Nos destinations',
      heading: 'Quatre métropoles. Une même excellence.',
      subheading:
        'La même rigueur, des berlines impeccables et un tarif garanti dès votre arrivée.',
    },
    process: {
      eyebrow: 'Fonctionnement',
      heading: 'Trois étapes fluides',
      step1Title: 'Transmettez votre itinéraire',
      step1Desc: 'Ville, service, date et étapes — soixante secondes chrono.',
      step2Title: 'Nous vous répondons',
      step2Desc: 'Un concierge dédié calcule votre tarif tout inclus par écrit.',
      step3Title: 'Montez à bord',
      step3Desc: 'Votre chauffeur vous attend à l’avance et assure votre tranquillité.',
    },
    booking: {
      eyebrow: 'Réservation privée',
      heading: 'Indiquez le point de départ de votre voyage.',
      subheading:
        'Vos coordonnées sont traitées avec la plus stricte confidentialité par notre concierge Driveo.',
      step1: 'Itinéraire',
      step2: 'Véhicule',
      step3: 'Passager',
      step4: 'Confirmation',
      selectCity: 'Sélectionner la ville',
      selectService: 'Sélectionner le service',
      pickup: 'Lieu de prise en charge',
      destination: 'Destination d’arrivée',
      date: 'Date de prise en charge',
      time: 'Heure de prise en charge',
      hours: 'Durée (heures)',
      flightNo: 'Numéro de vol (optionnel)',
      flightPlaceholder: 'ex. AF 1680, BA 458',
      firstName: 'Prénom',
      lastName: 'Nom',
      email: 'Adresse e-mail',
      phone: 'Téléphone portable',
      notes: 'Demandes particulières (siège enfant, voyage silencieux...)',
      calculateEstimate: 'Calculer l’estimation tarifaire',
      fixedPriceNote:
        'Tous les tarifs incluent l’attente offerte, bouteilles d’eau minérale, TVA et parking aéroport.',
      submitQuote: 'Confirmer la demande de devis',
      successTitle: 'Demande transmise avec succès',
      successMessage:
        'Votre requête a été reçue par notre bureau privé. Un concierge vous transmettra votre confirmation écrite.',
      refNumber: 'Numéro de dossier',
      sendWhatsapp: 'Échanger sur WhatsApp',
      newBooking: 'Nouvelle demande',
    },
    testimonial: {
      quote:
        '« Trois villes, onze transferts, pas une seule minute de retard. Driveo est le seul service auquel je confie mon planning les yeux fermés. »',
      author: 'Client privé · Itinéraire international',
    },
    footer: {
      brandTagline: 'Arrivez dans le silence absolu.',
      requestQuote: 'Demander un devis',
      contactTitle: 'Concierge direct',
      citiesTitle: 'Bureaux opérationnels',
      installApp: 'Installer l’application Driveo sur votre appareil',
      allRightsReserved: '© 2026 Driveo Exclusive Limited',
      motto: 'Discrétion · Précision · Silence',
    },
  },
  bg: {
    dir: 'ltr',
    nav: {
      brand: 'Driveo Exclusive',
      services: 'Услуги',
      fleet: 'Автопарк',
      cities: 'Градове',
      process: 'Процес',
      flightTracker: 'Полети',
      requestQuote: 'Запитване',
      contactConcierge: 'Консиерж',
    },
    hero: {
      badge: 'Личен шофьор · Основано в Лондон',
      titleLine1: 'Услуга с личен шофьор.',
      titleLine2: 'Пристигнете в абсолютна тишина.',
      subtitle:
        'Пътуване на фиксирана цена с проверени шофьори в костюм, проследяване на полети на живо и безупречни черни автомобили Mercedes-Benz.',
      ctaPrimary: 'Фиксирана оферта',
      ctaSecondary: 'Разгледайте автомобилите',
      citiesServed: 'Лондон · Париж · България · Дубай',
      discretionPledge: 'Дискретност · Прецизност · Тишина',
    },
    pillars: {
      p1Title: 'Проверени шофьори',
      p1Desc: 'Лицензирани, проверени, винаги в костюм и вратовръзка.',
      p2Title: 'Следене на полета',
      p2Desc: 'Следим полета Ви и коригираме посрещането без такса за изчакване.',
      p3Title: 'Фиксирани цени',
      p3Desc: 'Писмена оферта без таксиметрови изненади и завишени тарифи.',
      p4Title: 'Пълна дискретност',
      p4Desc: 'Маршрутите, спътниците и адресите Ви остават поверителни.',
    },
    services: {
      eyebrow: 'Какво предлагаме',
      heading: 'Четири начина за пътуване с нас',
      subheading:
        'Всяка поръчка се остойностява индивидуално с една ясна, крайна цена.',
      s1Tag: '01 · Трансфер',
      s1Title: 'Летищен трансфер',
      s1Desc:
        'Проследяване от излитането. Посрещане в терминала с 60 минути безплатно изчакване.',
      s2Tag: '02 · Маршрут',
      s2Title: 'От точка до точка',
      s2Desc:
        'Фиксирана цена от заседателната зала до резиденцията, хотела или курорта.',
      s3Tag: '03 · Наемане',
      s3Title: 'Почасово наемане',
      s3Desc:
        'Вашият личен шофьор е на разположение за всички срещи, събития и спирки.',
      s4Tag: '04 · Събития',
      s4Title: 'Частни събития',
      s4Desc:
        'Сватби, делегации и междуградски пътувания с персонализирано обслужване.',
    },
    fleet: {
      eyebrow: 'Автопаркът',
      heading: 'Три класа, един безкомпромисен стандарт',
      quoteCar: 'Заяви този автомобил',
      inspectSpecs: 'Технически характеристики',
      businessTitle: 'Бизнес Клас',
      businessDesc:
        'Ексклузивна седан лимузина в черно. Wi-Fi на борда, минерална вода и опитен шофьор.',
      firstTitle: 'Първа Класа',
      firstDesc:
        'Удължена база с регулируеми седалки, звукоизолация и първокласен комфорт.',
      vanTitle: 'Бизнес Ван',
      vanDesc:
        'Простор за делегации, семейства и обемен багаж с конферентни места.',
      passengers: 'пътници',
      luggage: 'куфара',
    },
    cities: {
      eyebrow: 'Локации',
      heading: 'Четири дестинации. Един стандарт.',
      subheading:
        'Еднакви безупречни шофьори и фиксирани цени навсякъде, където кацате.',
    },
    process: {
      eyebrow: 'Как работи',
      heading: 'Три стъпки без затруднения',
      step1Title: 'Изпратете маршрута',
      step1Desc: 'Град, дата, час и междинни точки — минута в онлайн формата.',
      step2Title: 'Получавате оферта',
      step2Desc: 'Екипът ни подготвя персонална фиксирана оферта в писмен вид.',
      step3Title: 'Настанете се удобно',
      step3Desc: 'Шофьорът Ви пристига по-рано и се грижи за всичко останало.',
    },
    booking: {
      eyebrow: 'Частна заявка',
      heading: 'Споделете Вашия маршрут.',
      subheading:
        'Данните Ви се обработват конфиденциално от Driveo консиерж екипа.',
      step1: 'Маршрут',
      step2: 'Автомобил',
      step3: 'Пътник',
      step4: 'Потвърждение',
      selectCity: 'Изберете град',
      selectService: 'Изберете услуга',
      pickup: 'Адрес на взимане',
      destination: 'Крайна дестинация',
      date: 'Дата на пътуване',
      time: 'Час на взимане',
      hours: 'Продължителност (часове)',
      flightNo: 'Номер на полет (по желание)',
      flightPlaceholder: 'напр. FB 437, W6 4301',
      firstName: 'Име',
      lastName: 'Фамилия',
      email: 'Имейл адрес',
      phone: 'Телефонен номер',
      notes: 'Специални изисквания (детско столче, тихо пътуване...)',
      calculateEstimate: 'Изчисли ориентировъчна цена',
      fixedPriceNote:
        'Цената включва безплатно изчакване, бутилирана вода, ДДС и паркинг такси.',
      submitQuote: 'Изпрати запитване',
      successTitle: 'Заявката е приета успешно',
      successMessage:
        'Вашето запитване се обработва. Ще се свържем с Вас за официално писмено потвърждение.',
      refNumber: 'Номер на резервация',
      sendWhatsapp: 'Връзка през WhatsApp',
      newBooking: 'Нова заявка',
    },
    testimonial: {
      quote:
        '„Три държави, единадесет трансфера, нито едно закъснение. Driveo е единствената услуга, на която доверявам графика си без колебание.“',
      author: 'Частен клиент · Международен маршрут',
    },
    footer: {
      brandTagline: 'Пристигнете в абсолютна тишина.',
      requestQuote: 'Запитване за оферта',
      contactTitle: 'Директен контакт',
      citiesTitle: 'Оперативни центрове',
      installApp: 'Инсталирайте Driveo на Вашето устройство',
      allRightsReserved: '© 2026 Driveo Exclusive Limited',
      motto: 'Дискретност · Прецизност · Тишина',
    },
  },
  ar: {
    dir: 'rtl',
    nav: {
      brand: 'درايفو إكسكلوسيف',
      services: 'الخدمات',
      fleet: 'الأسطول',
      cities: 'المدن',
      process: 'خطوات الحجز',
      flightTracker: 'تتبع الرحلات',
      requestQuote: 'طلب تسعيرة',
      contactConcierge: 'الكونسيرج الخاص',
    },
    hero: {
      badge: 'سائق خاص · تأسست في لندن',
      titleLine1: 'خدمة السائق الخاص الفاخرة.',
      titleLine2: 'سافر في هدوء مطلق.',
      subtitle:
        'رحلات بأسعار ثابتة ومعتمدة مع سائقين محترفين بالزي الرسمي، وتتبع دقيق للرحلات الجوية، وسيارات مرسيدس سوداء فائقة الفخامة.',
      ctaPrimary: 'احصل على سعر ثابت',
      ctaSecondary: 'استكشف أسطولنا',
      citiesServed: 'لندن · باريس · بلغاريا · دبي',
      discretionPledge: 'خصوصية · دقة · هدوء تام',
    },
    pillars: {
      p1Title: 'سائقون معتمدون',
      p1Desc: 'مرخصون ومفحوصون أمنياً بالزي الرسمي الكامل.',
      p2Title: 'تتبع الرحلات الجوية',
      p2Desc: 'نتابع موعد هبوط طائرتك ونضبط وقت الاستقبال مجاناً.',
      p3Title: 'أسعار ثابتة ومعلنة',
      p3Desc: 'تسعيرة خطية شاملة بدون رسوم ذروة أو مفاجآت.',
      p4Title: 'سرية وخصوصية تامة',
      p4Desc: 'وجهاتك وضيوفك ومعلوماتك في سرية تامة مطلقة.',
    },
    services: {
      eyebrow: 'خدماتنا الفاخرة',
      heading: 'أربع طرق للتنقل معنا',
      subheading:
        'نقدم تسعيرة خاصة لكل رحلة. أخبرنا بوجهتك وسنرسل لك سعراً نهائياً ومكتوباً.',
      s1Tag: '01 · نقل المطار',
      s1Title: 'توصيل واستقبال المطارات',
      s1Desc:
        'تتبع مباشر منذ إقلاع الطائرة مع استقبال داخل صالة الوصول وانتظار مجاني لمدة 60 دقيقة.',
      s2Tag: '02 · من نقطة لأخرى',
      s2Title: 'رحلات المدينة والنقل المباشر',
      s2Desc:
        'سعر ثابت متفق عليه مسبقاً — من غرف الاجتماعات إلى الفنادق أو القصور.',
      s3Tag: '03 · حجز بالساعة',
      s3Title: 'سائق خاص بالساعات',
      s3Desc:
        'سائقك الخاص يرافقك طوال اليوم لجميع مواعيدك وجولاتك الخاصة.',
      s4Tag: '04 · الفعاليات',
      s4Title: 'المناسبات والوفود الرسمية',
      s4Desc:
        'حفلات الزفاف والوفود والرحلات بين المدن بتنسيق دقيق واحترافي.',
    },
    fleet: {
      eyebrow: 'أسطول السيارات',
      heading: 'ثلاث فئات، بمعيار واحد من الإتقان',
      quoteCar: 'طلب هذه السيارة',
      inspectSpecs: 'المواصفات الفنية',
      businessTitle: 'درجة رجال الأعمال',
      businessDesc:
        'سيدان تنفيذية باللون الأسود الملكي. واي فاي، مياه نقية وسائق متمرس بالمسارات.',
      firstTitle: 'الدرجة الأولى الفارهة',
      firstDesc:
        'مرسيدس الفئة إس بقاعدة عجلات طويلة، مقاعد مساج ومناخ منفصل وهدوء مطلق.',
      vanTitle: 'فان رجال الأعمال',
      vanDesc:
        'مساحة استثنائية للعائلات وفرق العمل مع ترتيب مقاعد اجتماعات وأمتعة واسعة.',
      passengers: 'ركاب',
      luggage: 'حقائب',
    },
    cities: {
      eyebrow: 'وجهاتنا',
      heading: 'أربع محطات عالمية. بمعيار ضيافة واحد.',
      subheading:
        'نفس السائقين المحترفين والسيارات الفاخرة أينما هبطت طائرتك.',
    },
    process: {
      eyebrow: 'طريقة الحجز',
      heading: 'ثلاث خطوات بمنتهى السلاسة',
      step1Title: 'أرسل تفاصيل الرحلة',
      step1Desc: 'المدينة، نوع الخدمة، التاريخ والمسار في أقل من دقيقة.',
      step2Title: 'نوافيك بالسعر الثابت',
      step2Desc: 'يقوم مسؤول الحجوزات بتسعير الطلب وإرسال تكلفة شاملة ومكتوبة.',
      step3Title: 'استمتع برحلتك',
      step3Desc: 'يصل سائقك قبل الموعد، وينتظرك بهدوء لتتولى القيادة عنه.',
    },
    booking: {
      eyebrow: 'طلب خاص',
      heading: 'أين تبدأ رحلتك القادمة؟',
      subheading:
        'شاركنا الأساسيات. ستتم مراجعة طلبك فوراً وبشكل خاص من قِبل كونسيرج درايفو.',
      step1: 'الرحلة',
      step2: 'السيارة',
      step3: 'البيانات',
      step4: 'التأكيد',
      selectCity: 'اختر المدينة',
      selectService: 'اختر نوع الخدمة',
      pickup: 'موقع الاستقبال',
      destination: 'الوجهة / نقطة الوصول',
      date: 'تاريخ الرحلة',
      time: 'وقت الانطلاق',
      hours: 'المدة (بالساعات)',
      flightNo: 'رقم الرحلة الجوية (اختياري)',
      flightPlaceholder: 'مثال: EK 001, SV 110',
      firstName: 'الاسم الأول',
      lastName: 'اسم العائلة',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف مع الرمز الدولي',
      notes: 'أي متطلبات خاصة (مقعد طفل، رحلة صامتة...)',
      calculateEstimate: 'احسب السعر التقريبي',
      fixedPriceNote:
        'تشمل كافة الأسعار وقت الانتظار المجاني، المياه، الضرائب ورسوم مواقف المطار.',
      submitQuote: 'إرسال طلب التسعيرة الثابتة',
      successTitle: 'تم استلام طلبك بنجاح',
      successMessage:
        'تم تسجيل طلبك لدى مكتب الكونسيرج الخاص. سنتواصل معك لتأكيد الحجز خطياً.',
      refNumber: 'رقم المرجع',
      sendWhatsapp: 'محادثة فورية عبر واتساب',
      newBooking: 'طلب حجز رحلة جديدة',
    },
    testimonial: {
      quote:
        '« ثلاث مدن عالمية، إحدى عشرة رحلة، ولم يتأخروا دقيقة واحدة. درايفو هي الخدمة الوحيدة التي أعتمد عليها لجدولي بدون أي تردد. »',
      author: 'عميل خاص · مسار رحلات دولية',
    },
    footer: {
      brandTagline: 'سافر في هدوء مطلق.',
      requestQuote: 'طلب تسعيرة',
      contactTitle: 'الكونسيرج المباشر',
      citiesTitle: 'المدن والمطارات',
      installApp: 'تثبيت تطبيق درايفو على جهازك',
      allRightsReserved: '© 2026 درايفو إكسكلوسيف ليمتد',
      motto: 'خصوصية · دقة · هدوء تام',
    },
  },
};
