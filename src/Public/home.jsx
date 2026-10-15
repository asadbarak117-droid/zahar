import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShoppingBag,
  Sparkles,
  Heart,
  Star,
  Truck,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const categories = [
  {
    name: "Makeup",
    description: "Express your beauty",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Skincare",
    description: "Care for your skin",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Fashion",
    description: "Complete your look",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=85",
  },
];

const products = [
  {
    id: 1,
    name: "Radiant Foundation",
    category: "Makeup",
    price: "$19.99",
    image:
      "https://images.unsplash.com/photo-1631214540242-7b7c7f2a4c6b?auto=format&fit=crop&w=600&q=85",
    badge: "Popular",
  },
  {
    id: 2,
    name: "Everyday Lip Tint",
    category: "Lip Makeup",
    price: "$12.50",
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=85",
    badge: "New",
  },
  {
    id: 3,
    name: "Skin Care Essentials",
    category: "Skincare",
    price: "$24.00",
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=600&q=85",
    badge: "",
  },
  {
    id: 4,
    name: "Beauty Collection",
    category: "Beauty",
    price: "$29.99",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=85",
    badge: "Trending",
  },
];

const benefits = [
  {
    icon: Truck,
    title: "Easy Shopping",
    description: "A simple shopping experience",
  },
  {
    icon: ShieldCheck,
    title: "Quality First",
    description: "Products selected with care",
  },
  {
    icon: Headphones,
    title: "Friendly Support",
    description: "We're here to help you",
  },
];

function Home() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* Hero Section with Video Background */}
      <section className="relative isolate min-h-[650px] overflow-hidden bg-sky-950">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sky-950/85 via-sky-900/55 to-sky-800/25" />

        <div className="mx-auto flex min-h-[650px] max-w-7xl items-center px-5 py-20 md:px-8">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-md">
              <Sparkles size={16} />
              Discover Your Beauty
            </div>

            <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Your Beauty.
              <span className="mt-2 block text-sky-300">Your Story.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/90 sm:text-lg">
              Discover beauty and fashion essentials that express your
              individuality. Find your favorite products and create a look that
              feels uniquely yours.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <motion.div
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/products"
                  className="inline-flex items-center gap-3 rounded-full bg-sky-400 px-7 py-4 font-semibold text-white shadow-lg shadow-sky-950/20 transition hover:bg-sky-300 hover:text-sky-950"
                >
                  Shop Collection
                  <ArrowRight size={19} />
                </Link>
              </motion.div>

              <Link
                to="/consultation"
                className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-sky-900"
              >
                Explore More
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <Star size={17} className="fill-sky-300 text-sky-300" />
                Beauty & Fashion
              </div>

              <span className="hidden h-5 w-px bg-white/40 sm:block" />

              <div className="flex items-center gap-2">
                <Heart size={17} className="text-sky-300" />
                Made for You
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-sky-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-9 sm:grid-cols-2 md:px-8 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="flex items-center gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                  <Icon size={23} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
              Find Your Favorites
            </p>

            <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Explore Our Categories
            </h2>

            <p className="mt-3 text-slate-500">
              Discover products that fit your style.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 font-semibold text-sky-600 transition hover:text-sky-700"
          >
            All Products <ArrowRight size={18} />
          </Link>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -7 }}
            >
              <Link
                to="/products"
                className="group relative block overflow-hidden rounded-3xl bg-sky-50"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white">
                  <div>
                    <h3 className="font-serif text-2xl font-bold">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-sm text-white/80">
                      {category.description}
                    </p>
                  </div>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sky-600 transition duration-300 group-hover:bg-sky-400 group-hover:text-white">
                    <ArrowRight size={20} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-sky-50/70 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
              Curated for You
            </p>

            <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Featured Products
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-500">
              Discover our beauty favorites and find your next everyday
              essential.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-3xl border border-sky-100/80 bg-white p-3 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-sky-100"
              >
                <Link
                  to="/products"
                  className="relative block overflow-hidden rounded-2xl bg-sky-50"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {product.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-sky-600 shadow-sm">
                      {product.badge}
                    </span>
                  )}

                  <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-sky-600 shadow-md transition duration-300 group-hover:bg-sky-400 group-hover:text-white">
                    <ArrowRight size={18} />
                  </span>
                </Link>

                <div className="px-2 pb-2 pt-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-sky-500">
                    {product.category}
                  </p>

                  <h3 className="mt-2 font-semibold text-slate-800">
                    {product.name}
                  </h3>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-lg font-bold text-slate-900">
                      {product.price}
                    </span>

                    <Link
                      to="/products"
                      aria-label={`View ${product.name}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-50 text-sky-600 transition hover:bg-sky-400 hover:text-white"
                    >
                      <ShoppingBag size={17} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-3 rounded-full bg-sky-400 px-8 py-4 font-semibold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-1 hover:bg-sky-500"
            >
              Explore All Products
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="px-5 py-20 md:px-8 md:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-300 via-sky-400 to-blue-400 px-7 py-14 text-center text-white sm:px-14 sm:py-20"
        >
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[40px] border-white/10" />
          <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full border-[40px] border-white/10" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <Sparkles size={32} className="mx-auto mb-5" />

            <h2 className="font-serif text-3xl font-bold sm:text-5xl">
              A Little Beauty, A Lot of Confidence
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-white/90">
              Discover beauty essentials that help you express yourself and feel
              confident every day.
            </p>

            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-sky-600 shadow-lg transition hover:-translate-y-1 hover:bg-sky-50"
            >
              Start Shopping
              <ArrowRight size={19} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-sky-100 bg-sky-50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 text-center sm:flex-row sm:text-left md:px-8">
          <Link
            to="/"
            className="font-serif text-2xl font-bold tracking-widest text-slate-900"
          >
            FASHION<span className="text-sky-400">.</span>
          </Link>

          <p className="text-sm text-slate-500">
            Your style, your story. Find what feels like you.
          </p>

          <div className="flex gap-5 text-sm font-medium text-slate-600">
            <Link to="/products" className="transition hover:text-sky-500">
              Products
            </Link>
            <Link to="/consultation" className="transition hover:text-sky-500">
              Consultation
            </Link>
            <Link to="/connect" className="transition hover:text-sky-500">
              Contact
            </Link>
          </div>
        </div>

        <div className="border-t border-sky-100 px-5 py-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} FASHION. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

export default Home;
