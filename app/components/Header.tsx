"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon } from '@heroicons/react/24/outline';
import MobileMenu from './navigation/MobileMenu';
import { navigation } from '@/app/constants/navigation';
import { whatsappLink } from '@/app/constants/links';
import { colors } from '@/app/constants/theme';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white shadow-md z-40"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className={`text-2xl font-bold text-[${colors.primary}]`}>مستر مايكل يوسف</h1>

          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-gray-700 hover:text-[${colors.primary}] transition-colors`}
              >
                {item.name}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-[${colors.secondary}] text-white px-6 py-2 rounded-lg hover:bg-[${colors.secondaryHover}] transition-colors`}
            >
              احجز الآن
            </a>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </motion.header>
  );
}