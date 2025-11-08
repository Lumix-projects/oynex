// src/lib/products.ts
export const products = [
  {
    id: 1,
    title: "Kelden Anti-Hair Loss Shampoo",
    description:
      "A clinically proven formula designed to reduce hair loss, strengthen follicles, and promote healthy regrowth.",
    img: "/shampoo.jpg",

    details: {
      longDescription:
        "Experience Kelden's advanced anti-hair loss innovation — developed with dermatological expertise to address multiple causes of hair thinning while nourishing and revitalizing the scalp.",

      keyBenefits: [
        "Targets multiple types of hair loss (hormonal, stress-induced, post-pregnancy, etc.)",
        "Strengthens hair follicles and supports natural regrowth",
        "Dermatologist-tested and suitable for daily use",
        "Free from parabens and harsh chemicals",
      ],

      productInfo: {
        size: "200ml / 6.7 fl oz",
        type: "Anti-Hair Loss Shampoo",
      },

      howToUse: [
        {
          step: 1,
          title: "For Hormonal Hair Loss (Androgenetic Alopecia)",
          text: "Kelden Anti-Hair Loss Shampoo is ideal for both men and women experiencing thinning or shedding due to hormonal imbalances. It targets the root cause of hair loss and strengthens the follicles.",
        },
        {
          step: 2,
          title: "For Post-Pregnancy Hair Loss",
          text: "Perfect for post-pregnancy hair thinning — it helps stimulate new hair growth and prevents excessive shedding during recovery.",
        },
        {
          step: 3,
          title: "For Stress-Induced Hair Loss",
          text: "Helps restore scalp balance, nourish follicles, and encourage regrowth, making it ideal for stress-related hair loss.",
        },
        {
          step: 4,
          title: "For Scalp Inflammation or Irritation",
          text: "Provides relief from irritation and inflammation, creating a healthier environment for hair growth and reducing loss from scalp sensitivity.",
        },
        {
          step: 5,
          title: "For Thinning Hair Due to Nutrient Deficiencies",
          text: "If hair thinning is caused by poor nutrition or low vitamins (e.g., biotin, iron), this shampoo nourishes the scalp and strengthens hair from root to tip.",
        },
        {
          step: 6,
          title: "For Preventing Seasonal Hair Shedding",
          text: "During shedding seasons like spring or autumn, it minimizes hair loss and maintains strong, healthy hair.",
        },
        {
          step: 7,
          title: "For Post-Treatment Hair Care",
          text: "Ideal after color, bleaching, or keratin treatments. Restores moisture, reduces breakage, and protects from chemical damage.",
        },
        {
          step: 8,
          title: "For Early Signs of Hair Thinning",
          text: "Perfect for those noticing first signs of thinning or shedding — regular use strengthens follicles and prevents future loss.",
        },
      ],

      keyIngredients: [
        {
          category: "Hair Growth Factors & Follicle Stimulators",
          ingredients: [
            {
              name: "Apigenin",
              text: "Boosts blood flow to your scalp, feeding the follicles and helping hair grow stronger.",
            },
            {
              name: "Sophora Angustifolia Root Extract",
              text: "Naturally blocks the hormones that cause thinning and keeps the scalp calm and healthy.",
            },
            {
              name: "Saw Palmetto Extract",
              text: "Stops the main cause of hormonal hair loss and supports thicker regrowth.",
            },
            {
              name: "Rosemary Extract",
              text: "Wakes up dormant follicles and encourages faster, denser growth.",
            },
            {
              name: "Ginkgo Biloba Extract",
              text: "Improves scalp circulation for healthier, more resilient roots.",
            },
            {
              name: "Biotin",
              text: "Strengthens each strand from root to tip and reduces breakage.",
            },
            {
              name: "Biotinoyl Tripeptide-1",
              text: "Keeps hair anchored, reduces shedding, and promotes lasting growth.",
            },
            {
              name: "Caffeine",
              text: "Energizes roots and helps prevent hair fall.",
            },
            {
              name: "Oleanolic Acid",
              text: "Protects follicles from stress and keeps growth cycles balanced.",
            },
          ],
        },
        {
          category: "Hair Conditioners & Moisturizing Agents",
          ingredients: [
            {
              name: "Keratin",
              text: "Repairs damage, smooths frizz, and gives silky strength.",
            },
            {
              name: "Aloe Vera",
              text: "Provides deep hydration and soothing comfort for scalp and hair.",
            },
            {
              name: "Argan Oil",
              text: "Offers ultimate nourishment that leaves hair shiny and soft.",
            },
            {
              name: "Olive Oil",
              text: "Locks in moisture and shields hair from dryness.",
            },
            {
              name: "Jojoba Oil",
              text: "Balances oil levels and keeps scalp fresh and healthy.",
            },
            {
              name: "Panthenol (Provitamin B5)",
              text: "Adds lasting softness, elasticity, and natural shine.",
            },
            {
              name: "Lanolin",
              text: "Seals in hydration, leaving strands smooth and manageable.",
            },
            {
              name: "Polyquaternium-10 / 7",
              text: "Protects hair from damage, improves texture, and makes detangling easy.",
            },
            {
              name: "Citric Acid",
              text: "Keeps hair pH-balanced, smooth, and radiant.",
            },
          ],
        },
      ],

      clinicalResults: [
        { percentage: "92%", text: "noticed reduced hair fall within 4 weeks" },
        { percentage: "88%", text: "reported thicker, fuller hair" },
        { percentage: "90%", text: "experienced improved scalp health" },
      ],

      safetyInfo: [
        "For external use only",
        "Avoid contact with eyes. If contact occurs, rinse thoroughly with water",
        "Discontinue use if irritation or rash occurs",
        "Keep out of reach of children",
        "Store in a cool, dry place away from direct sunlight",
        "Consult a healthcare professional if you are pregnant or nursing",
      ],

      faq: [
        {
          question: "How long until I see results?",
          answer:
            "Most users notice visible improvement within 4–6 weeks of consistent use. Continued use helps maintain results.",
        },
        {
          question: "Can it be used daily?",
          answer:
            "Yes, the shampoo is gentle enough for daily use and suitable for all hair types.",
        },
        {
          question: "Is it suitable for chemically treated hair?",
          answer:
            "Absolutely — it helps restore balance and strength after coloring, bleaching, or keratin treatments.",
        },
      ],

      badges: [
        { icon: "🧪", label: "Clinically Tested" },
        { icon: "🌿", label: "Natural Ingredients" },
        { icon: "🐰", label: "Cruelty Free" },
        { icon: "✓", label: "Dermatologist Approved" },
      ],
    },
  },
];
