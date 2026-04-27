import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { labData } from '../../data/projects';

const screenshots: Record<string, string> = {
  stepwise: '/image/screenshot-stepwise.png',
  careerflow: '/image/screenshot-careerflow.png',
  groupclaw: '/image/screenshot-groupclaw.png',
  'pitch-annotator': '/image/pitch_annotator.png',
};

interface ProjectCardProps {
  project: any;
  lang: 'cn' | 'en';
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, lang, index }) => {
  const isEven = index % 2 === 0;
  const content = project[lang];
  const screenshot = screenshots[project.id];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
    >
      {/* Screenshot */}
      <div className={`relative group ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40"
        >
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={screenshot}
              alt={content.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </a>
        {/* Decorative glow */}
        <div className="absolute -inset-4 bg-accent-purple/10 rounded-3xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Info */}
      <div className={`space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="flex items-center gap-3">
          <span className="text-5xl font-serif font-bold text-white/10">
            0{index + 1}
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
          {content.title}
        </h3>

        <p className="text-white/60 leading-relaxed text-lg">
          {content.desc}
        </p>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-colors group/link"
        >
          {lang === 'cn' ? '访问项目' : 'Visit Project'}
          <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

export const VibeCodingLab: React.FC = () => {
  const { lang, t } = useLanguage();
  const ld = t(labData);

  return (
    <section id="coding" className="min-h-screen py-24 px-6 md:px-12 bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent-purple/15 rounded-full blur-[80px] md:blur-[180px] opacity-20" />
        <div className="absolute bottom-1/4 right-1/3 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-600/10 rounded-full blur-[60px] md:blur-[150px] opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16 lg:space-y-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-accent-purple/40" />
            <Code2 className="w-8 h-8 text-accent-purple" />
            <div className="h-px w-12 bg-accent-purple/40" />
          </div>
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6">{ld.tag}</h2>
          <p className="text-xl text-white/50 leading-relaxed text-balance">
            {ld.subtitle}
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-16 lg:space-y-24">
          {labData.projects.map((project: any, idx: number) => (
            <ProjectCard
              key={project.id}
              project={project}
              lang={lang}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
