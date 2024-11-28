"use client";

import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export default function LevelTest() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#F0F8FF] rounded-lg shadow-lg p-8 text-center mt-12"
    >
      <h3 className="text-2xl font-bold text-[#4A5568] mb-4">اختبر مستواك مجاناً</h3>
      <p className="text-gray-600 mb-6">
        قم بتحديد مستواك في اللغة الإنجليزية من خلال اختبار IH العالمي
      </p>
      <a
        href="https://ihworld.com/learn/ih-english-language-level-test/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-[#2C7A7B] text-white px-6 py-3 rounded-lg hover:bg-[#236B6B] transition-colors"
      >
        ابدأ الاختبار الآن
        <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" />
      </a>
    </motion.div>
  );
}