import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Heart,
  ShoppingBag,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  X,
  SlidersHorizontal,
  CheckCircle2,
  RotateCcw,
} from "lucide-react";

const categories = [
  "All Products",
  "Makeup",
  "Skincare",
  "Viper",
  "Spirulina",
  "Hair Care",
  "Soap & Body",
  "Perfume",
  "Pomegranate",
];

const categoryImages = {
  Makeup:
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
  Skincare:
    "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=80",
  Viper:
    "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=80",
  Spirulina:
    "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=80",
  "Hair Care":
    "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=700&q=80",
  "Soap & Body":
    "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=700&q=80",
  Perfume:
    "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=80",
  Pomegranate:
    "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=80",
};

const categoryCards = [
  {
    name: "Makeup",
    subtitle: "Makeup essentials",
    image: categoryImages.Makeup,
  },
  {
    name: "Skincare",
    subtitle: "Your skincare routine",
    image: categoryImages.Skincare,
  },
  {
    name: "Viper",
    subtitle: "Viper collection",
    image: categoryImages.Viper,
  },
  {
    name: "Spirulina",
    subtitle: "Face masks",
    image: categoryImages.Spirulina,
  },
  {
    name: "Hair Care",
    subtitle: "Hair care essentials",
    image: categoryImages["Hair Care"],
  },
  {
    name: "Soap & Body",
    subtitle: "Body care",
    image: categoryImages["Soap & Body"],
  },
  {
    name: "Perfume",
    subtitle: "Find your fragrance",
    image: categoryImages.Perfume,
  },
  {
    name: "Pomegranate",
    subtitle: "Pomegranate collection",
    image: categoryImages.Pomegranate,
  },
];

const productData = [
  ["کرم‌پودر مات", "A471", "Makeup"],
  ["کرم‌پودر مات", "A472", "Makeup"],
  ["کرم‌پودر مات", "A473", "Makeup"],
  ["تینت آبرسان بژ روشن", "LT01", "Makeup"],
  ["تینت آبرسان بژ طبیعی", "LT02", "Makeup"],
  ["ریمل مشکی", "LM01", "Makeup"],
  ["ریمل سرمه‌ای", "LM02", "Makeup"],
  ["ریمل قهوه‌ای", "LM03", "Makeup"],
  ["سایه چشم مایع", "LLE07", "Makeup"],
  ["رژلب مایع نیمه‌مات", "LG14", "Makeup"],
  ["رژلب جامد", "LS09", "Makeup"],
  ["رژلب جامد", "LS13", "Makeup"],
  ["سایر رژلب‌های مایع و جامد", "MU13", "Makeup"],

  ["شیر پاک‌کن ویتامینه ۲۰۰ میل", "SK01", "Skincare"],
  ["محلول آرایش‌پاک‌کن دوفاز ویتامینه ۲۰۰ میل", "SK02", "Skincare"],
  ["تونر پوست نرمال تا خشک ۲۰۰ میل", "SK03", "Skincare"],
  ["تونر پوست چرب و مختلط ۲۰۰ میل", "SK04", "Skincare"],
  ["کرم آبرسان قوی ۱۲۰ میل", "SK05", "Skincare"],
  ["کرم لیفتینگ صورت و گردن ۱۰۰ میل", "SK06", "Skincare"],
  ["کرم دور چشم جوان‌ساز و رفع تیرگی ۳۰ میل", "SK07", "Skincare"],
  ["کرم ضدچروک عصاره خاویار ۵۰ میل", "SK08", "Skincare"],
  ["کرم ضدلک و جوش عصاره خاویار ۵۰ میل", "SK09", "Skincare"],
  ["سرم صورت عصاره خاویار ۸۰ میل", "SK10", "Skincare"],
  ["ضدآفتاب بی‌رنگ SPF50+، ۸۰ میل", "SK11", "Skincare"],
  ["ضدآفتاب رنگی ضدآب SPF50+", "SK12", "Skincare"],
  ["اسکراب قهوه صورت و بدن", "SK13", "Skincare"],
  ["ماسک اسکراب صدف دریایی", "SK14", "Skincare"],
  ["ماسک پیل‌آف", "SK15", "Skincare"],
  ["کرم چندمنظوره ترک پا ۱۰۰ گرم", "SK16", "Skincare"],
  ["کرم گیاهی نرم‌کننده دست و صورت ۵۰ میل", "SK17", "Skincare"],

  ["سرم پرکننده و سفت‌کننده صورت وایپر ۳۰ میل", "VP01", "Viper"],
  ["کرم سفت‌کننده صورت وایپر", "VP02", "Viper"],
  ["کرم سفت‌کننده دور چشم و لب وایپر ۱۵ میل", "VP03", "Viper"],

  ["پودر ماسک آبرسان اسپیرولینا، ۶ عدد", "SP01", "Spirulina"],
  ["پودر ماسک روشن‌کننده اسپیرولینا، ۱۰ عدد", "SP02", "Spirulina"],
  ["پودر ماسک ضدجوش اسپیرولینا، ۱۰ عدد", "SP03", "Spirulina"],
  ["ماسک هیدروژل کائولین، ۱۲ عدد", "SP04", "Spirulina"],
  ["ماسک هیالورونیک اسید و کلاژن، ۱۲ عدد", "SP05", "Spirulina"],
  ["ماسک سفیده تخم‌مرغ و Q10، ۱۲ عدد", "SP06", "Spirulina"],
  ["ماسک هیدروژل مورینگا، ۱۲ عدد", "SP07", "Spirulina"],
  ["ماسک کازئین و بذر کتان، ۱۲ عدد", "SP08", "Spirulina"],

  ["شامپو موی معمولی ۳۰۰ میل", "HC01", "Hair Care"],
  ["شامپو موی چرب ۳۰۰ میل", "HC02", "Hair Care"],
  ["شامپو موی خشک و آسیب‌دیده ۳۰۰ میل", "HC03", "Hair Care"],
  ["شامپو گیاهی ضدشوره ۳۰۰ میل", "HC04", "Hair Care"],
  ["شامپو روزانه ۲۰۰ میل", "HC05", "Hair Care"],
  ["شامپو تقویت رشد مو ۲۰۰ میل", "HC06", "Hair Care"],
  ["تونیک گیاهی ضدریزش مو ۴۰ میل", "HC07", "Hair Care"],
  ["تونیک گیاهی تقویت ابرو ۴۰ میل", "HC08", "Hair Care"],
  ["ماسک گیاهی نرم‌کننده و تقویت‌کننده مو ۲۰۰ میل", "HC09", "Hair Care"],
  ["ماسک پروتئین و کراتین مو ۲۰۰ میل", "HC10", "Hair Care"],
  ["سرم موی عصاره خاویار ۱۰۰ میل", "HC11", "Hair Care"],

  ["صابون عسل و زعفران ۷۰ گرم", "SB01", "Soap & Body"],
  ["صابون کاج و مریم‌گلی ۷۰ گرم", "SB02", "Soap & Body"],
  ["صابون اسطوخودوس ۷۰ گرم", "SB03", "Soap & Body"],
  ["شامپو بدن گیاهی ۳۰۰ میل", "SB04", "Soap & Body"],

  ["عطر PALAZZO CARLI", "PF01", "Perfume"],
  ["عطر CASPIAN", "PF02", "Perfume"],
  ["عطر SMOKY MOUNTAINS", "PF03", "Perfume"],
  ["عطر TAIGA", "PF04", "Perfume"],
  ["عطر KIAWA", "PF05", "Perfume"],
  ["عطر REETHI RAH", "PF06", "Perfume"],
  ["عطر NAVAGIO", "PF07", "Perfume"],
  ["بادی اسپلش Queen", "PF08", "Perfume"],
  ["بادی اسپلش Leadership", "PF09", "Perfume"],
  ["بادی اسپلش Rise", "PF10", "Perfume"],
  ["بادی اسپلش Shine", "PF11", "Perfume"],
  ["بادی اسپلش Level Up", "PF12", "Perfume"],
  ["رول‌آن Emotional", "PF13", "Perfume"],
  ["رول‌آن Free Mind", "PF14", "Perfume"],
  ["رول‌آن Manful", "PF15", "Perfume"],

  ["سرم روشن‌کننده انار", "PG01", "Pomegranate"],
  ["کرم روز انار", "PG02", "Pomegranate"],
  ["کرم شب انار", "PG03", "Pomegranate"],
  ["تونر انار", "PG04", "Pomegranate"],
  ["ماسک انار", "PG05", "Pomegranate"],
];

const products = productData.map(([name, code, category], index) => ({
  id: index + 1,
  name,
  code,
  category,
  image: categoryImages[category],
}));

const skinTypeOptions = [
  {
    value: "oily",
    label: "Oily",
    description: "Shiny skin or excess oil",
  },
  {
    value: "dry",
    label: "Dry",
    description: "Tightness or flaky areas",
  },
  {
    value: "combination",
    label: "Combination",
    description: "Oily and dry areas",
  },
  {
    value: "normal",
    label: "Normal",
    description: "Usually feels balanced",
  },
  {
    value: "sensitive",
    label: "Sensitive",
    description: "Often reacts to products",
  },
  {
    value: "unsure",
    label: "Not sure",
    description: "Help me explore options",
  },
];

const concernOptions = [
  "Dryness",
  "Oiliness",
  "Blemishes",
  "Dark spots",
  "Fine lines",
  "Sun protection",
  "Everyday care",
];

const interestOptions = [
  "Skincare",
  "Makeup",
  "Hair Care",
  "Perfume",
  "Body Care",
];

function getRecommendationCategories(form) {
  const result = new Set();

  if (form.interests.includes("Skincare")) result.add("Skincare");
  if (form.interests.includes("Makeup")) result.add("Makeup");
  if (form.interests.includes("Hair Care")) result.add("Hair Care");
  if (form.interests.includes("Perfume")) result.add("Perfume");

  if (form.interests.includes("Body Care")) {
    result.add("Soap & Body");
  }

  if (
    form.concerns.includes("Dryness") ||
    form.concerns.includes("Oiliness") ||
    form.concerns.includes("Blemishes") ||
    form.concerns.includes("Dark spots") ||
    form.concerns.includes("Fine lines") ||
    form.concerns.includes("Sun protection") ||
    form.concerns.includes("Everyday care")
  ) {
    result.add("Skincare");
  }

  if (
    form.concerns.includes("Dark spots") ||
    form.concerns.includes("Everyday care")
  ) {
    result.add("Pomegranate");
  }

  if (form.concerns.includes("Fine lines")) {
    result.add("Viper");
  }

  if (form.concerns.includes("Blemishes")) {
    result.add("Spirulina");
  }

  if (result.size === 0) {
    result.add("Skincare");
    result.add("Makeup");
    result.add("Hair Care");
  }

  return [...result];
}

function getSkinTip(form) {
  if (form.skinType === "sensitive") {
    return "Consider fragrance-free products where available, check the ingredient list, and patch-test new products.";
  }

  if (form.skinType === "dry" || form.concerns.includes("Dryness")) {
    return "Look for gentle cleansers and moisturizing products. Avoid over-exfoliating dry skin.";
  }

  if (form.skinType === "oily" || form.concerns.includes("Oiliness")) {
    return "Look for lightweight, non-comedogenic products and use a gentle cleanser.";
  }

  if (form.skinType === "combination") {
    return "You may prefer lightweight products on oily areas and extra moisture on dry areas.";
  }

  if (form.concerns.includes("Sun protection")) {
    return "Daily broad-spectrum sunscreen is an important part of a skincare routine.";
  }

  return "Keep your routine simple: gentle cleansing, moisturizing, and daytime sun protection.";
}

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showFinder, setShowFinder] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [finderForm, setFinderForm] = useState({
    skinType: "",
    concerns: [],
    interests: [],
    ageRange: "",
  });

  const categorySliderRef = useRef(null);

  const filteredProducts = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All Products" ||
        product.category === selectedCategory;

      const matchesSearch =
        !search ||
        product.name.toLowerCase().includes(search) ||
        product.code.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search);

      const matchesFavorites = !showFavorites || favorites.includes(product.id);

      return matchesCategory && matchesSearch && matchesFavorites;
    });
  }, [searchTerm, selectedCategory, favorites, showFavorites]);

  const recommendationCategories = useMemo(
    () => getRecommendationCategories(finderForm),
    [finderForm],
  );

  const recommendedProducts = useMemo(() => {
    return products
      .filter((product) => recommendationCategories.includes(product.category))
      .slice(0, 8);
  }, [recommendationCategories]);

  const updateFinderField = (field, value) => {
    setFinderForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const toggleFinderChoice = (field, value) => {
    setFinderForm((current) => {
      const selected = current[field];

      return {
        ...current,
        [field]: selected.includes(value)
          ? selected.filter((item) => item !== value)
          : [...selected, value],
      };
    });
  };

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  const openInquiry = (product) => {
    window.location.href =
      "/connect?product=" + encodeURIComponent(product.name);
  };

  const scrollToProducts = () => {
    document.getElementById("product-grid")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const slideCategories = (direction) => {
    categorySliderRef.current?.scrollBy({
      left: direction * 300,
      behavior: "smooth",
    });
  };

  const resetFinder = () => {
    setFinderForm({
      skinType: "",
      concerns: [],
      interests: [],
      ageRange: "",
    });
    setShowRecommendations(false);
  };

  const applyRecommendations = () => {
    const targetCategory =
      finderForm.interests.length > 0
        ? finderForm.interests[0] === "Body Care"
          ? "Soap & Body"
          : finderForm.interests[0]
        : "Skincare";

    setSearchTerm("");
    setShowFavorites(false);
    setSelectedCategory(
      categories.includes(targetCategory) ? targetCategory : "Skincare",
    );
    setShowRecommendations(true);
  };

  return (
    <main className="min-h-screen bg-white px-4 py-10 text-slate-900 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
            <Sparkles size={16} />
            Beauty & Care Collection
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Discover Your <span className="text-sky-600">Beauty</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
            Explore makeup, skincare, hair care, perfumes, and more. Find
            products that fit your beauty routine.
          </p>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mb-14 overflow-hidden rounded-3xl bg-gradient-to-r from-sky-100 via-white to-cyan-100 p-8 md:p-14"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-sky-200/60 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 right-1/4 h-52 w-52 rounded-full bg-cyan-200/50 blur-3xl" />

          <div className="relative z-10 max-w-xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
              Your Beauty, Your Confidence
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Discover Your New Beauty Favorites
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              From everyday essentials to your favorite fragrances, explore
              products for your personal routine.
            </p>

            <button
              onClick={scrollToProducts}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-sky-600 px-7 py-3 font-semibold text-white transition hover:bg-sky-700 hover:shadow-lg"
            >
              Explore Products
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.section>

        <section className="mb-14">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
                Explore Our Collection
              </p>

              <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                Shop by Category
              </h2>

              <p className="mt-2 text-slate-500">
                Slide to explore all categories.
              </p>
            </div>

            <div className="hidden shrink-0 gap-2 sm:flex">
              <button
                onClick={() => slideCategories(-1)}
                aria-label="Previous categories"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 transition hover:border-sky-400 hover:bg-sky-50"
              >
                <ArrowLeft size={20} />
              </button>

              <button
                onClick={() => slideCategories(1)}
                aria-label="Next categories"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 transition hover:border-sky-400 hover:bg-sky-50"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={categorySliderRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:thin]"
          >
            {categoryCards.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSelectedCategory(category.name);
                  setShowFavorites(false);
                  setSearchTerm("");
                  scrollToProducts();
                }}
                className="group relative h-52 w-64 shrink-0 snap-start overflow-hidden rounded-2xl text-left sm:h-60 sm:w-72"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-xs font-medium uppercase tracking-widest text-white/80">
                    {category.subtitle}
                  </p>

                  <div className="mt-2 flex items-center justify-between gap-3">
                    <h3 className="text-xl font-bold">{category.name}</h3>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 transition group-hover:bg-white group-hover:text-sky-700">
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <p className="text-xs text-slate-400">
            Tip: You can also swipe left or right on mobile.
          </p>
        </section>

        <section className="mb-14 overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-cyan-50">
          <div className="grid gap-8 p-6 md:grid-cols-[0.8fr_1.2fr] md:p-10">
            <div className="flex flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-bold uppercase tracking-wider text-sky-700 shadow-sm">
                <Sparkles size={15} />
                Optional Beauty Finder
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
                Find Your Beauty Match
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Not sure which products to explore? Answer a few optional
                questions about your skin and interests to see a suggested
                collection.
              </p>

              <div className="mt-5 flex items-start gap-3 text-sm leading-6 text-slate-500">
                <CheckCircle2
                  size={19}
                  className="mt-1 shrink-0 text-sky-600"
                />
                <p>
                  This is a simple shopping guide, not a skin diagnosis. You can
                  skip it and shop normally.
                </p>
              </div>

              <button
                onClick={() => setShowFinder((current) => !current)}
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-700"
              >
                {showFinder ? "Close Beauty Finder" : "Find My Products"}
                {showFinder ? <X size={18} /> : <ArrowRight size={18} />}
              </button>
            </div>

            <div className="rounded-2xl border border-white bg-white/90 p-5 shadow-sm md:p-7">
              {!showFinder && !showRecommendations && (
                <div className="flex h-full min-h-56 flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                    <SlidersHorizontal size={30} />
                  </div>

                  <h3 className="mt-4 text-xl font-bold">
                    Your Personal Beauty Guide
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                    Choose your skin type, concerns, and product interests to
                    explore a more relevant selection.
                  </p>
                </div>
              )}

              {showFinder && (
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    applyRecommendations();
                  }}
                  className="space-y-7"
                >
                  <div>
                    <label className="text-base font-bold">
                      1. What is your skin type?
                    </label>

                    <p className="mb-3 mt-1 text-sm text-slate-500">
                      Choose one, or select “Not sure.”
                    </p>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {skinTypeOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() =>
                            updateFinderField("skinType", option.value)
                          }
                          className={`rounded-xl border p-3 text-left transition ${
                            finderForm.skinType === option.value
                              ? "border-sky-500 bg-sky-50 ring-2 ring-sky-100"
                              : "border-slate-200 hover:border-sky-300"
                          }`}
                        >
                          <span className="block text-sm font-bold">
                            {option.label}
                          </span>

                          <span className="mt-1 block text-xs leading-5 text-slate-500">
                            {option.description}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-bold">
                      2. What would you like help with?
                    </label>

                    <p className="mb-3 mt-1 text-sm text-slate-500">
                      Select any that apply. This question is optional.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {concernOptions.map((concern) => {
                        const selected = finderForm.concerns.includes(concern);

                        return (
                          <button
                            key={concern}
                            type="button"
                            onClick={() =>
                              toggleFinderChoice("concerns", concern)
                            }
                            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                              selected
                                ? "border-sky-600 bg-sky-600 text-white"
                                : "border-slate-200 bg-white text-slate-600 hover:border-sky-300"
                            }`}
                          >
                            {selected && "✓ "}
                            {concern}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-bold">
                      3. Which products interest you?
                    </label>

                    <p className="mb-3 mt-1 text-sm text-slate-500">
                      Select as many as you like.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {interestOptions.map((interest) => {
                        const selected =
                          finderForm.interests.includes(interest);

                        return (
                          <button
                            key={interest}
                            type="button"
                            onClick={() =>
                              toggleFinderChoice("interests", interest)
                            }
                            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                              selected
                                ? "border-sky-600 bg-sky-600 text-white"
                                : "border-slate-200 bg-white text-slate-600 hover:border-sky-300"
                            }`}
                          >
                            {selected && "✓ "}
                            {interest}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="ageRange" className="text-base font-bold">
                      4. What is your age range?
                    </label>

                    <p className="mb-3 mt-1 text-sm text-slate-500">
                      Optional. You can leave this blank.
                    </p>

                    <select
                      id="ageRange"
                      value={finderForm.ageRange}
                      onChange={(event) =>
                        updateFinderField("ageRange", event.target.value)
                      }
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                    >
                      <option value="">Prefer not to say</option>
                      <option value="under18">Under 18</option>
                      <option value="18-24">18–24</option>
                      <option value="25-34">25–34</option>
                      <option value="35-44">35–44</option>
                      <option value="45plus">45+</option>
                    </select>
                  </div>

                  <div className="flex flex-wrap gap-3 border-t border-slate-100 pt-5">
                    <button
                      type="submit"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3 font-bold text-white transition hover:bg-sky-700"
                    >
                      Show My Suggestions
                      <ArrowRight size={18} />
                    </button>

                    <button
                      type="button"
                      onClick={resetFinder}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 font-semibold text-slate-600 transition hover:bg-slate-50"
                    >
                      <RotateCcw size={16} />
                      Reset
                    </button>
                  </div>
                </form>
              )}

              {showRecommendations && !showFinder && (
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-700">
                    <CheckCircle2 size={17} />
                    Your suggestions are ready
                  </span>

                  <h3 className="mt-4 text-2xl font-bold">
                    A Collection to Explore
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {getSkinTip(finderForm)}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    We selected categories based on your answers. Check
                    individual product ingredients and instructions before
                    choosing a product.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {recommendationCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setSearchTerm("");
                          setShowFavorites(false);
                          scrollToProducts();
                        }}
                        className="rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700 transition hover:bg-sky-100"
                      >
                        {category} →
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setShowFinder(true);
                    }}
                    className="mt-6 text-sm font-semibold text-sky-700 underline underline-offset-4"
                  >
                    Edit my answers
                  </button>
                </div>
              )}
            </div>
          </div>

          {showRecommendations && (
            <div className="border-t border-sky-100 px-6 py-7 md:px-10">
              <h3 className="text-xl font-bold">
                Suggested Products to Explore
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                These are category-based suggestions, not a personalized medical
                assessment.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
                {recommendedProducts.slice(0, 4).map((product) => (
                  <button
                    key={product.id}
                    onClick={() => openInquiry(product)}
                    className="overflow-hidden rounded-xl border border-slate-100 bg-white text-left transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-32 w-full object-cover sm:h-40"
                    />

                    <div className="p-3">
                      <span className="text-xs font-bold text-sky-600">
                        {product.category}
                      </span>

                      <p className="mt-1 line-clamp-2 text-sm font-semibold leading-6">
                        {product.name}
                      </p>

                      <p className="mt-2 text-xs text-slate-500">
                        Code: {product.code}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  setSelectedCategory("All Products");
                  setShowFavorites(false);
                  setSearchTerm("");
                  scrollToProducts();
                }}
                className="mt-5 inline-flex items-center gap-2 font-semibold text-sky-700 hover:text-sky-900"
              >
                Browse all products
                <ArrowRight size={18} />
              </button>
            </div>
          )}
        </section>

        <section className="mb-8">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
              Find Your Favorites
            </p>

            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              Our Beauty Collection
            </h2>

            <p className="mt-2 text-slate-500">
              Search by product name, code, or category.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="relative flex-1">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search products, codes, categories..."
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-12 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
              />

              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            <button
              onClick={() => setShowFavorites((current) => !current)}
              className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-5 py-4 font-semibold transition ${
                showFavorites
                  ? "border-rose-200 bg-rose-50 text-rose-600"
                  : "border-slate-200 bg-white text-slate-700 hover:border-rose-200 hover:text-rose-600"
              }`}
            >
              <Heart size={19} fill={showFavorites ? "currentColor" : "none"} />
              Favorites ({favorites.length})
            </button>
          </div>

          <div className="mt-5 flex gap-2 overflow-x-auto pb-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setShowFavorites(false);
                }}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  selectedCategory === category
                    ? "bg-sky-600 text-white shadow-md shadow-sky-100"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-sky-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-bold text-slate-900">
                {filteredProducts.length}
              </span>{" "}
              products
            </p>

            {(searchTerm ||
              selectedCategory !== "All Products" ||
              showFavorites) && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All Products");
                  setShowFavorites(false);
                }}
                className="text-sm font-semibold text-sky-700 hover:text-sky-900"
              >
                Clear all filters
              </button>
            )}
          </div>
        </section>

        <section id="product-grid" className="scroll-mt-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product, index) => (
                <motion.article
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.35,
                    delay: (index % 4) * 0.05,
                  }}
                  className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-100/60"
                >
                  <div className="relative h-64 overflow-hidden bg-slate-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
                      {product.category}
                    </span>

                    <button
                      onClick={() => toggleFavorite(product.id)}
                      aria-label={
                        favorites.includes(product.id)
                          ? "Remove from favorites"
                          : "Add to favorites"
                      }
                      className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full shadow-sm backdrop-blur transition ${
                        favorites.includes(product.id)
                          ? "bg-rose-500 text-white"
                          : "bg-white/95 text-slate-600 hover:bg-rose-50 hover:text-rose-500"
                      }`}
                    >
                      <Heart
                        size={19}
                        fill={
                          favorites.includes(product.id)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    </button>
                  </div>

                  <div className="p-5">
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                        Code: {product.code}
                      </span>

                      <Sparkles size={16} className="text-sky-400" />
                    </div>

                    <h3 className="min-h-14 text-base font-bold leading-7 text-slate-800">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Price available on request
                    </p>

                    <button
                      onClick={() => openInquiry(product)}
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-sky-50 px-4 py-3 font-semibold text-sky-700 transition hover:bg-sky-600 hover:text-white"
                    >
                      <ShoppingBag size={18} />
                      Ask About Product
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
              <Search size={42} className="mx-auto text-slate-300" />

              <h3 className="mt-4 text-xl font-bold text-slate-800">
                No products found
              </h3>

              <p className="mt-2 text-slate-500">
                Try another search term or choose a different category.
              </p>

              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All Products");
                  setShowFavorites(false);
                }}
                className="mt-6 rounded-full bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-700"
              >
                Show All Products
              </button>
            </div>
          )}
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-16 overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 text-center text-white md:px-12 md:py-16"
        >
          <div className="pointer-events-none absolute -left-12 -top-16 h-56 w-56 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <Sparkles size={30} className="mx-auto text-cyan-300" />

            <h2 className="mt-5 text-3xl font-bold md:text-4xl">
              Need Help Choosing?
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Have questions about a product? Contact us to learn more about our
              collection.
            </p>

            <a
              href="/connect"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-slate-900 transition hover:bg-cyan-100"
            >
              Contact Us
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
