"use client";

import { motion } from 'framer-motion';
import Qualification from './Qualification';
import Experience from './Experience';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#F0F8FF]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center text-[#4A5568] mb-12">السيرة الذاتية والمؤهلات</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#2C7A7B] mb-6">الخبرات العملية</h3>
              <Experience 
                title="مدرس اللغة الإنجليزية"
                company="Michael Youssef's English"
              />
              <Experience 
                title="مترجم مستقل"
                company="Translator/Editor/Proofreader"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#2C7A7B] mb-6">المؤهلات العلمية</h3>
              <Qualification 
                title="دبلوم مستوى 6 في تدريس اللغة الإنجليزية لغير الناطقين بها (OFQUAL)"
                institution="London Teacher Training College"
              />
              <Qualification 
                title="شهادة CELTA"
                institution="University of Cambridge"
              />
              <Qualification 
                title="دبلوم مستوى 7 في تدريس اللغة الإنجليزية لغير الناطقين بها"
                institution="London Teacher Training College"
              />
              <Qualification 
                title="شهادة تدريس IELTS"
                institution="London Teacher Training College"
              />
              <Qualification 
                title="شهادة Cambridge Train the Trainer"
                institution="University of Cambridge"
              />
              <Qualification 
                title="بكالوريوس الترجمة والترجمة الفورية"
                institution="جامعة القاهرة"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}