"use client";

import { motion } from 'framer-motion';
import { BookOpenIcon } from '@heroicons/react/24/outline';

interface CourseCardProps {
  title: string;
  description: string;
  level: string;
  prerequisite?: string;
}

export default function CourseCard({ title, description, level, prerequisite }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center mb-4">
        <BookOpenIcon className="w-8 h-8 text-[#2C7A7B] mr-3" />
        <h3 className="text-xl font-bold text-[#4A5568]">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="space-y-2">
        <p className="text-sm"><span className="font-semibold">المستوى:</span> {level}</p>
        {prerequisite && (
          <p className="text-sm"><span className="font-semibold">المتطلب السابق:</span> {prerequisite}</p>
        )}
      </div>
    </motion.div>
  );
}