'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

/**
 * @param {{ title: string; textStyles?: string }} props
 * @returns {JSX.Element}
 */
export const TypingText: React.FC<{ title: string; textStyles?: string }> = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

/**
 * @param {{ title: string; textStyles?: string }} props
 * @returns {React.ReactElement}
 */
export const TitleText: React.FC<{ title: string; textStyles?: string }> = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);