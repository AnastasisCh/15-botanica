export type Lang = 'en' | 'el';

export interface Translations {
  nav: { about: string; menu: string; gallery: string; hours: string; findUs: string; reservations: string; };
  hero: { eyebrow: string; title1: string; title2: string; title3: string; subtitle: string; btnMenu: string; btnReserve: string; };
  about: { label: string; titlePre: string; titleEm: string; p1: string; p2: string; stat1: string; stat2: string; stat3: string; };
  menu: { label: string; titlePre: string; titleEm: string; categories: Array<{ id: string; label: string; items: Array<{ name: string; description: string; price: string }>; }>; };
  gallery: { label: string; titlePre: string; titleEm: string; alts: string[]; };
  hours: { label: string; titlePre: string; titleEm: string; intro: string; kitchenNote: string; entries: Array<{ day: string; time: string }>; moods: Array<{ time: string; title: string; description: string; accent?: boolean }>; };
  contact: { label: string; titlePre: string; titleEm: string; addressTitle: string; phoneTitle: string; phoneSubtitle: string; emailTitle: string; emailSubtitle: string; followTitle: string; followSubtitle: string; mapsLink: string; };
  cta: { titlePre: string; titleEm: string; titlePost: string; subtitle: string; btn: string; };
  footer: { tagline: string; copyright: string; };
  reservations: { label: string; titlePre: string; titleEm: string; subtitle: string; nameLabel: string; namePlaceholder: string; phoneLabel: string; phonePlaceholder: string; emailLabel: string; emailPlaceholder: string; dateLabel: string; timeLabel: string; partySizeLabel: string; partySizePlaceholder: string; notesLabel: string; notesPlaceholder: string; submitBtn: string; successTitle: string; successMsg: string; errorMsg: string; };
}

export const translations: Record<Lang, Translations> = {
  en: {
    nav: { about: 'About', menu: 'Menu', gallery: 'Garden', hours: 'Hours', findUs: 'Find Us', reservations: 'Reserve' },
    hero: {
      eyebrow: 'Est. 2017 · Exarchia, Athens',
      title1: 'Coffee.', title2: 'Garden.', title3: 'Botanica.',
      subtitle: 'A green corner in the middle of the city.\nOrganic, seasonal, unhurried — Botanica is the garden café Athens needed.',
      btnMenu: 'See the Menu', btnReserve: 'Book a Table'
    },
    about: {
      label: 'Our Story', titlePre: 'Grown from the', titleEm: 'ground up',
      p1: 'Botanica began as a small herb garden on a Exarchia rooftop and grew into a full café in 2017. We believe food should taste of the season, coffee should be honest, and the space between breakfast and dinner should feel like a garden.',
      p2: 'Everything we serve is sourced from small Greek producers, organic farms within 200km, or grown in our own rooftop beds. The menu changes with the harvest.',
      stat1: 'Seasonal Dishes', stat2: 'Local Producers', stat3: 'Years in Exarchia'
    },
    menu: {
      label: 'What We Grow & Serve', titlePre: 'Seasonal, honest,', titleEm: 'botanical',
      categories: [
        { id: 'coffee', label: 'Coffee & Drinks', items: [
          { name: 'Botanica Signature Pour', description: 'Single origin Ethiopian, hand-poured over botanicals, served cold', price: '€5.50' },
          { name: 'Wild Rose Latte',         description: 'Oat milk, rose hip syrup, cardamom, ceremonial matcha',             price: '€5.00' },
          { name: 'Forest Mushroom Brew',    description: 'Adaptogenic chaga & lion\'s mane, oat milk, cinnamon, honey',       price: '€5.50' },
          { name: 'Garden Kombucha',         description: 'House-brewed with seasonal botanicals, jasmine, elderflower',       price: '€4.50' },
          { name: 'Natural Wine Glass',      description: 'Rotating selection of low-intervention Greek producers',            price: 'from €7.00' },
          { name: 'Herbal Infusion',         description: 'Fresh herbs from our garden: lavender, mint, lemon verbena',        price: '€4.00' }
        ]},
        { id: 'food', label: 'Seasonal Food', items: [
          { name: 'Garden Bowl',             description: 'Seasonal greens, roasted veg, tahini dressing, seeds, herbs',       price: '€12.00' },
          { name: 'Sourdough Toast',         description: 'Long-ferment house loaf, seasonal jam, cultured butter',            price: '€6.00' },
          { name: 'Shakshuka',               description: 'Spiced tomatoes, poached eggs, preserved lemon, feta, pita',        price: '€11.00' },
          { name: 'Mushroom Omelette',       description: 'Forest mushrooms, goat cheese, chives, sourdough soldiers',         price: '€10.00' },
          { name: 'Avocado Tartine',         description: 'House rye, smashed avocado, heritage tomato, pumpkin seeds',        price: '€9.00' },
          { name: 'Seasonal Cake Slice',     description: 'Baker\'s choice of plant-forward whole-grain cakes and tarts',      price: '€5.50' }
        ]},
        { id: 'brunch', label: 'Weekend Brunch', items: [
          { name: 'Full Botanica Plate',     description: 'Eggs, seasonal roast veg, mushrooms, feta, sourdough, jam',         price: '€16.00' },
          { name: 'Buckwheat Pancakes',      description: 'Blueberry compote, toasted seeds, maple, mint',                    price: '€12.00' },
          { name: 'Chia Pudding',            description: 'Coconut milk chia, mango coulis, fresh fruit, granola',             price: '€9.00' },
          { name: 'Green Eggs',              description: 'Herb-marbled scrambled eggs, wild garlic pesto, heritage tomato',    price: '€11.00' },
          { name: 'Brunch Board',            description: 'Selection for two: breads, dips, eggs, seasonal veg, pastry',       price: '€28.00' },
          { name: 'Raw Cacao Tart',          description: '70% cacao ganache, hazelnut base, sea salt, edible flowers',        price: '€6.00' }
        ]}
      ]
    },
    gallery: { label: 'Our Garden', titlePre: 'Step into', titleEm: 'Botanica', alts: ['Garden café terrace', 'Seasonal food bowl', 'Botanical coffee art', 'Plant-filled interior', 'Fresh herbs detail', 'Natural wine selection'] },
    hours: {
      label: 'When To Visit', titlePre: 'Open', titleEm: 'every day',
      intro: 'From morning coffee to natural wine at sundown, the garden is always open.',
      kitchenNote: 'Kitchen closes 1 hour before closing time',
      entries: [
        { day: 'Monday – Friday', time: '08:00 – 22:00' },
        { day: 'Saturday',        time: '09:00 – 23:00' },
        { day: 'Sunday',          time: '09:00 – 21:00' }
      ],
      moods: [
        { time: '08:00 – 12:00', title: 'Morning Garden',   description: 'Start slow. A pour-over, fresh air, the garden waking up around you.' },
        { time: '12:00 – 17:00', title: 'Afternoon Light',  description: 'Seasonal bowls, natural wine, the hum of Exarchia through the leaves.' },
        { time: '17:00 – Close', title: 'Golden Hour',      description: 'The garden glows amber. Share a bottle, stay as long as you like.', accent: true }
      ]
    },
    contact: { label: 'Find Us', titlePre: 'Visit us in', titleEm: 'Exarchia', addressTitle: 'Address', phoneTitle: 'Phone', phoneSubtitle: 'Reservations & Enquiries', emailTitle: 'Email', emailSubtitle: 'General enquiries', followTitle: 'Follow Us', followSubtitle: 'Tag us in your moments', mapsLink: 'Open in Maps →' },
    cta: { titlePre: 'Ready for a', titleEm: 'garden', titlePost: 'afternoon?', subtitle: 'Come as you are — the garden has room for everyone.', btn: 'Book a Table' },
    footer: { tagline: 'Organic, seasonal, grown with love', copyright: 'All rights reserved.' },
    reservations: {
      label: 'Book a Table', titlePre: 'Make a', titleEm: 'Reservation',
      subtitle: 'Reserve your garden table. We\'ll have it ready for you, rain or shine.',
      nameLabel: 'Full Name', namePlaceholder: 'Your name',
      phoneLabel: 'Phone', phonePlaceholder: '+30 210 000 0000',
      emailLabel: 'Email', emailPlaceholder: 'your@email.com',
      dateLabel: 'Date', timeLabel: 'Time',
      partySizeLabel: 'Party Size', partySizePlaceholder: 'Number of guests',
      notesLabel: 'Special Requests', notesPlaceholder: 'Dietary requirements, garden seating preference, allergies…',
      submitBtn: 'Request Reservation',
      successTitle: 'Reservation Received!',
      successMsg: 'Thank you! We\'ll confirm your garden table by phone or email within a few hours.',
      errorMsg: 'Something went wrong. Please call us directly to reserve.'
    }
  },

  el: {
    nav: { about: 'Σχετικά', menu: 'Μενού', gallery: 'Κήπος', hours: 'Ωράριο', findUs: 'Βρείτε μας', reservations: 'Κράτηση' },
    hero: {
      eyebrow: 'Est. 2017 · Εξάρχεια, Αθήνα',
      title1: 'Καφές.', title2: 'Κήπος.', title3: 'Botanica.',
      subtitle: 'Μια πράσινη γωνιά στη μέση της πόλης.\nΟργανικό, εποχιακό, αμέριμνο — το Botanica είναι ο κήπος-καφέ που χρειαζόταν η Αθήνα.',
      btnMenu: 'Δείτε το Μενού', btnReserve: 'Κράτηση Τραπεζιού'
    },
    about: {
      label: 'Η Ιστορία μας', titlePre: 'Μεγαλωμένο από', titleEm: 'τη γη',
      p1: 'Το Botanica ξεκίνησε ως ένας μικρός κήπος βοτάνων σε μια ταράτσα των Εξαρχείων και έγινε ολοκληρωμένο καφέ το 2017. Πιστεύουμε ότι το φαγητό πρέπει να μυρίζει εποχή, ο καφές να είναι ειλικρινής, και ο χώρος ανάμεσα στο πρωινό και το βραδινό να μοιάζει με κήπο.',
      p2: 'Όλα όσα σερβίρουμε προέρχονται από μικρούς Έλληνες παραγωγούς, βιολογικά αγροκτήματα σε ακτίνα 200χλμ ή καλλιεργούνται στα δικά μας ταρατσόκηπα. Το μενού αλλάζει με τη συγκομιδή.',
      stat1: 'Εποχιακά Πιάτα', stat2: 'Τοπικοί Παραγωγοί', stat3: 'Χρόνια στα Εξάρχεια'
    },
    menu: {
      label: 'Τι Καλλιεργούμε & Σερβίρουμε', titlePre: 'Εποχιακό, ειλικρινές,', titleEm: 'βοτανικό',
      categories: [
        { id: 'coffee', label: 'Καφές & Ποτά', items: [
          { name: 'Botanica Signature Pour', description: 'Αιθιοπικής προέλευσης, χυμένο στο χέρι πάνω από βότανα, σερβίρεται κρύο', price: '€5.50' },
          { name: 'Wild Rose Latte',         description: 'Βρώμη, σιρόπι ροδόκολλου, κάρδαμο, matcha τελετής',                    price: '€5.00' },
          { name: 'Ρόφημα Δασικών Μανιταριών', description: 'Adaptogenic chaga & lion\'s mane, βρώμη, κανέλα, μέλι',              price: '€5.50' },
          { name: 'Κήπος Kombucha',          description: 'Σπιτικό με εποχιακά βότανα, γιασεμί, elderflower',                      price: '€4.50' },
          { name: 'Ποτήρι Natural Wine',     description: 'Εναλλασσόμενη επιλογή low-intervention Ελλήνων παραγωγών',             price: 'από €7.00' },
          { name: 'Βοτανική Έγχυση',         description: 'Φρέσκα βότανα από τον κήπο μας: λεβάντα, δυόσμος, λεμονόχορτο',       price: '€4.00' }
        ]},
        { id: 'food', label: 'Εποχιακό Φαγητό', items: [
          { name: 'Κήπος Bowl',              description: 'Εποχιακά χόρτα, ψητά λαχανικά, ντρέσινγκ ταχινιού, σπόροι, βότανα',   price: '€12.00' },
          { name: 'Ψωμί Sourdough',          description: 'Σπιτικό αργής ζύμωσης, εποχιακή μαρμελάδα, γαλακτοκομικό βούτυρο',   price: '€6.00' },
          { name: 'Shakshuka',               description: 'Μπαχαρικές ντομάτες, αυγά, διατηρημένο λεμόνι, φέτα, πίτα',           price: '€11.00' },
          { name: 'Ομελέτα Μανιταριών',      description: 'Δασικά μανιτάρια, τυρί κατσίκας, σχοινόπρασο, sourdough',             price: '€10.00' },
          { name: 'Tartine Αβοκάντο',        description: 'Σπιτική σίκαλη, αβοκάντο, κληρονομική ντομάτα, σπόροι κολοκύθας',    price: '€9.00' },
          { name: 'Φέτα Εποχιακής Πίτας',   description: 'Επιλογή αρτοποιού από ολόσιτα κέικ και τάρτες',                        price: '€5.50' }
        ]},
        { id: 'brunch', label: 'Brunch Σαββατοκύριακου', items: [
          { name: 'Full Botanica Plate',      description: 'Αυγά, εποχιακά ψητά λαχανικά, μανιτάρια, φέτα, sourdough, μαρμελάδα', price: '€16.00' },
          { name: 'Τηγανίτες Φαγόπυρου',    description: 'Compote μύρτιλλου, ψημένοι σπόροι, σιρόπι σφενδάμου, δυόσμος',        price: '€12.00' },
          { name: 'Pudding Chia',            description: 'Chia σε γάλα καρύδας, κουλί μάνγκο, φρέσκα φρούτα, granola',          price: '€9.00' },
          { name: 'Πράσινα Αυγά',           description: 'Αβγά με βότανα, pesto αγριόσκορδο, κληρονομική ντομάτα',               price: '€11.00' },
          { name: 'Πιατέλα Brunch',         description: 'Επιλογή για δύο: ψωμιά, dips, αυγά, εποχιακά λαχανικά, αρτοποιίματα', price: '€28.00' },
          { name: 'Τάρτα Raw Κακάο',        description: 'Ganache 70% κακάο, βάση φουντουκιού, θαλασσινό αλάτι, βρώσιμα λουλούδια', price: '€6.00' }
        ]}
      ]
    },
    gallery: { label: 'Ο Κήπος μας', titlePre: 'Μπείτε στο', titleEm: 'Botanica', alts: ['Βεράντα garden café', 'Εποχιακό bowl', 'Βοτανική τέχνη καφέ', 'Εσωτερικό με φυτά', 'Λεπτομέρεια φρέσκων βοτάνων', 'Επιλογή natural wine'] },
    hours: {
      label: 'Πότε να μας Επισκεφτείτε', titlePre: 'Ανοιχτά', titleEm: 'κάθε μέρα',
      intro: 'Από τον πρωινό καφέ έως το natural wine στο ηλιοβασίλεμα, ο κήπος είναι πάντα ανοιχτός.',
      kitchenNote: 'Η κουζίνα κλείνει 1 ώρα πριν το κλείσιμο',
      entries: [
        { day: 'Δευτέρα – Παρασκευή', time: '08:00 – 22:00' },
        { day: 'Σάββατο',             time: '09:00 – 23:00' },
        { day: 'Κυριακή',             time: '09:00 – 21:00' }
      ],
      moods: [
        { time: '08:00 – 12:00', title: 'Πρωινός Κήπος',     description: 'Ξεκινήστε αργά. Ένας pour-over, φρέσκος αέρας, ο κήπος ξυπνά γύρω σας.' },
        { time: '12:00 – 17:00', title: 'Απογευματινό Φως',  description: 'Εποχιακά bowls, natural wine, ο ήχος των Εξαρχείων μέσα από τα φύλλα.' },
        { time: '17:00 – Κλείσιμο', title: 'Χρυσή Ώρα',     description: 'Ο κήπος λάμπει κεχριμπαρένιος. Μοιραστείτε ένα μπουκάλι, μείνετε όσο θέλετε.', accent: true }
      ]
    },
    contact: { label: 'Βρείτε μας', titlePre: 'Επισκεφτείτε μας στα', titleEm: 'Εξάρχεια', addressTitle: 'Διεύθυνση', phoneTitle: 'Τηλέφωνο', phoneSubtitle: 'Κρατήσεις & Πληροφορίες', emailTitle: 'Email', emailSubtitle: 'Γενικές ερωτήσεις', followTitle: 'Ακολουθήστε μας', followSubtitle: 'Tagκάρετε μας στις στιγμές σας', mapsLink: 'Άνοιγμα στους Χάρτες →' },
    cta: { titlePre: 'Έτοιμοι για ένα', titleEm: 'κήπο', titlePost: 'απόγευμα;', subtitle: 'Ελάτε όπως είστε — ο κήπος έχει χώρο για όλους.', btn: 'Κράτηση Τραπεζιού' },
    footer: { tagline: 'Οργανικό, εποχιακό, με αγάπη', copyright: 'Με επιφύλαξη παντός δικαιώματος.' },
    reservations: {
      label: 'Κράτηση Τραπεζιού', titlePre: 'Κάντε μια', titleEm: 'Κράτηση',
      subtitle: 'Κλείστε το τραπέζι σας στον κήπο. Θα το ετοιμάσουμε, βροχή ή λιακάδα.',
      nameLabel: 'Ονοματεπώνυμο', namePlaceholder: 'Το όνομά σας',
      phoneLabel: 'Τηλέφωνο', phonePlaceholder: '+30 210 000 0000',
      emailLabel: 'Email', emailPlaceholder: 'your@email.com',
      dateLabel: 'Ημερομηνία', timeLabel: 'Ώρα',
      partySizeLabel: 'Αριθμός Ατόμων', partySizePlaceholder: 'Αριθμός επισκεπτών',
      notesLabel: 'Ειδικές Απαιτήσεις', notesPlaceholder: 'Διατροφικές απαιτήσεις, προτίμηση κήπου, αλλεργίες…',
      submitBtn: 'Αίτημα Κράτησης',
      successTitle: 'Η Κράτηση Ελήφθη!',
      successMsg: 'Ευχαριστούμε! Θα επιβεβαιώσουμε το τραπέζι στον κήπο τηλεφωνικά ή μέσω email.',
      errorMsg: 'Κάτι πήγε στραβά. Παρακαλούμε καλέστε μας απευθείας για κράτηση.'
    }
  }
};
