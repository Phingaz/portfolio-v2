"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { DocumentDownload } from "iconsax-react";
import { Button } from "@/components/ui/button";
import { navItems } from "../../constants";
import ThemeToggle from "../Utils/ThemeToggle";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header-height sticky top-0 z-50 duration-300 dark:text-white transition-all ${
        hasScrolled ? "shadow-md bg-gray-50 dark:bg-black" : ""
      }`}
    >
      <div className="container h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold">
              prosper
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-gray-900 font-[500] transition-all duration-300 dark:text-white dark:hover:text-gray-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <span className="md:block hidden">
              <ThemeToggle />
            </span>
            <a
              href="/cv.pdf"
              download="Prosper Agwegiokhe Cv"
              aria-label="link to download cv"
            >
              <Button variant="icon" className="hidden md:inline-flex">
                Resume
                <DocumentDownload
                  size={16}
                  className="group-hover:animate-bounce"
                />
              </Button>
            </a>
          </div>
          <div className="md:hidden">
            <Button
              variant="neutral"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 p-1"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-50 dark:bg-black pb-6"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:text-gray-300 dark:hover:bg-gray-800 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-5">
              <a
                href="/cv.pdf"
                download="Prosper Agwegiokhe Cv"
                aria-label="link to download cv"
              >
                <button className="flex md:hidden ml-6 gap-2 items-center font-[500] border border-black bg-black text-white hover:bg-white hover:border-gray-700 hover:text-black transition-all px-4 py-2 rounded-md group dark:border-white">
                  Resume
                  <DocumentDownload
                    size={16}
                    className="group-hover:animate-bounce"
                  />
                </button>
              </a>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
