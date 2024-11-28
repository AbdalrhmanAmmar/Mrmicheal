"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const whatsappLink = "https://api.whatsapp.com/send?phone=201096226828&text=%D8%B4%D9%81%D8%AA%20%D8%A7%D9%84%D8%A7%D8%B9%D9%84%D8%A7%D9%86%20%D9%88%20%D9%85%D9%87%D8%AA%D9%85%20%D8%A8%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D9%83%D9%88%D8%B1%D8%B3%20%D8%A7%D9%84%D9%85%D8%A8%D8%AA%D8%AF%D8%A6%D9%8A%D9%86";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-[#F0F8FF] to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-1/2 text-right"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#4A5568] mb-6">
              تعلم الإنجليزية بطريقة احترافية
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              دروس مخصصة لاحتياجاتك مع مدرس ذو خبرة في تعليم اللغة الإنجليزية. نساعدك في تحقيق أهدافك اللغوية بأسلوب تعليمي فعال ومتطور.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF6F61] text-white px-8 py-3 rounded-lg text-lg hover:bg-[#ff8577] transition-colors text-center"
              >
                ابدأ رحلتك التعليمية
              </a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#2C7A7B] text-[#2C7A7B] px-8 py-3 rounded-lg text-lg hover:bg-[#2C7A7B] hover:text-white transition-colors text-center"
              >
                تواصل معنا
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-1/2"
          >
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/373535942_2243386619183717_2255790354304461354_n.jpg"
                alt="صورة المدرس"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}