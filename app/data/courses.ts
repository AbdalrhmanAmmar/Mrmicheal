import { Course } from '../types';

export const courses: Course[] = [
  {
    title: "كورس المبتدئين",
    description: "كورس مصمم خصيصاً للمبتدئين وأصحاب المستوى الضعيف في اللغة الإنجليزية",
    level: "مبتدئ",
  },
  {
    title: "كورس المحادثة",
    description: "تطوير مهارات المحادثة والتواصل باللغة الإنجليزية",
    level: "متوسط",
    prerequisite: "كورس المبتدئين",
  },
  {
    title: "الكورس المتوسط",
    description: "تعزيز المهارات اللغوية والوصول إلى مستوى متقدم",
    level: "متوسط متقدم",
    prerequisite: "كورس المحادثة",
  },
  {
    title: "تحضير IELTS",
    description: "إعداد شامل لاختبار IELTS مع التركيز على جميع مهارات الاختبار",
    level: "متقدم",
    prerequisite: "الكورس المتوسط",
  },
];