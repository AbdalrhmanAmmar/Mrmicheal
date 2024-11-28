"use client";

import { motion } from 'framer-motion';
import { AcademicCapIcon, UserGroupIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'دروس فردية',
    description: 'دروس مخصصة حسب مستواك واحتياجاتك',
    icon: AcademicCapIcon,
  },
  {
    title: 'دروس جماعية',
    description: 'تعلم مع مجموعة صغيرة بأسعار مناسبة',
    icon: UserGroupIcon,
  },
  {
    title: 'تحضير IELTS',
    description: 'تدريب متخصص لاختبار IELTS',
    icon: DocumentTextIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#4A5568] mb-12">خدماتنا</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#F0F8FF] p-6 rounded-lg shadow-md"
            >
              <service.icon className="w-12 h-12 text-[#2C7A7B] mb-4" />
              <h3 className="text-xl font-semibold text-[#4A5568] mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}