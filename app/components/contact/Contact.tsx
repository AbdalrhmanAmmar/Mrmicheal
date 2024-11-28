"use client";

import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import WhatsAppIcon from '../icons/WhatsAppIcon';

const whatsappLink = "https://api.whatsapp.com/send?phone=201096226828&text=%D8%B4%D9%81%D8%AA%20%D8%A7%D9%84%D8%A7%D8%B9%D9%84%D8%A7%D9%86%20%D9%88%20%D9%85%D9%87%D8%AA%D9%85%20%D8%A8%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D9%83%D9%88%D8%B1%D8%B3%20%D8%A7%D9%84%D9%85%D8%A8%D8%AA%D8%AF%D8%A6%D9%8A%D9%86";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-[#4A5568] mb-12">تواصل معنا</h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <EnvelopeIcon className="w-8 h-8 text-[#2C7A7B] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">البريد الإلكتروني</h3>
              <a href="mailto:example@email.com" className="text-[#2C7A7B] hover:text-[#236B6B]">
                example@email.com
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <PhoneIcon className="w-8 h-8 text-[#2C7A7B] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">رقم الهاتف</h3>
              <a href="tel:+201096226828" className="text-[#2C7A7B] hover:text-[#236B6B]">
                +20 109 622 6828
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <WhatsAppIcon className="w-8 h-8 text-[#2C7A7B] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">واتساب</h3>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2C7A7B] hover:text-[#236B6B]"
              >
                تواصل عبر واتساب
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}