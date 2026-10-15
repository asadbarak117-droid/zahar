import { Link, NavLink } from "react-router-dom";
import {
  Home,
  ShoppingBag,
  MessageCircle,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/", icon: Home },
    { name: "Products", path: "/products", icon: ShoppingBag },
    { name: "Consultation", path: "/consultation", icon: MessageCircle },
  ];

  const linkVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-sky-100 bg-sky-50/95 text-sky-950 shadow-lg shadow-sky-200/30 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="group flex shrink-0 items-center gap-3"
        >
          <motion.div
            whileHover={{ rotate: -8, scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-300 via-sky-400 to-blue-400 shadow-lg shadow-sky-300/40 group-hover:rounded-full"
          >
            <span className="font-serif text-3xl italic text-white">F</span>
          </motion.div>

          <div>
            <h1 className="font-serif text-xl font-bold tracking-widest transition-colors group-hover:text-sky-500 sm:text-2xl">
              FASHION<span className="text-sky-400">.</span>
            </h1>
            <p className="mt-1 text-[8px] tracking-[0.25em] text-sky-700/70">
              YOUR STYLE, YOUR STORY
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-sky-100 bg-white/90 p-1.5 shadow-sm md:flex">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `group flex items-center gap-2 rounded-full px-4 py-3 text-sm transition-all duration-300 lg:px-5 ${
                    isActive
                      ? "bg-sky-400 text-white shadow-md shadow-sky-200"
                      : "text-slate-600 hover:bg-sky-50 hover:text-sky-600"
                  }`
                }
              >
                {({ isActive }) => (
                  <motion.span
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex items-center gap-2"
                  >
                    <Icon size={17} />
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="h-1.5 w-1.5 rounded-full bg-white"
                      />
                    )}
                  </motion.span>
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <motion.div
            whileHover={{ y: -3, scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
          >
            <Link
              to="/products"
              aria-label="Go to products"
              title="Shop products"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-100 bg-white text-sky-600 transition-colors duration-300 hover:bg-sky-400 hover:text-white hover:shadow-lg hover:shadow-sky-200"
            >
              <ShoppingBag size={20} />
            </Link>
          </motion.div>

          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/connect"
              className="group flex items-center gap-3 rounded-full bg-sky-400 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-200"
            >
              Connect
              <motion.span whileHover={{ x: 3, y: -3 }} className="flex">
                <ArrowUpRight size={17} />
              </motion.span>
            </Link>
          </motion.div>
        </div>

        <motion.button
          type="button"
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400 text-white transition hover:bg-sky-500 md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
              transition={{ duration: 0.18 }}
              className="flex"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-sky-100 bg-sky-50 md:hidden"
          >
            <div className="flex flex-col gap-2 px-5 py-5">
              {links.map((link, index) => {
                const Icon = link.icon;

                return (
                  <motion.div
                    key={link.path}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.07, duration: 0.25 }}
                  >
                    <NavLink
                      to={link.path}
                      end={link.path === "/"}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between rounded-2xl border p-4 transition-all duration-300 ${
                          isActive
                            ? "border-sky-400 bg-sky-400 text-white"
                            : "border-sky-100 bg-white text-slate-600 hover:border-sky-300 hover:bg-sky-100 hover:text-sky-600"
                        }`
                      }
                    >
                      <span className="flex items-center gap-3">
                        <Icon size={19} />
                        <span>{link.name}</span>
                      </span>
                      <span className="text-xs opacity-60">0{index + 1}</span>
                    </NavLink>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.07, duration: 0.25 }}
              >
                <Link
                  to="/connect"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 flex items-center justify-between rounded-2xl bg-gradient-to-r from-sky-400 to-blue-400 p-4 font-semibold text-white shadow-md shadow-sky-200/50"
                >
                  <span className="flex items-center gap-3">
                    <MessageCircle size={19} />
                    Connect
                  </span>
                  <ArrowUpRight size={19} />
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
