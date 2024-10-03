export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 1,
    },
  },
};

/**
 * A strongly-typed variant for sliding in.
 *
 * @param {Direction} direction - The direction in which the element should slide in.
 * @param {import('framer-motion').TransitionType} type - The type of the transition.
 * @param {number} delay - The delay in milliseconds before the animation starts.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @returns {import('framer-motion').Variants} - The variants object.
 */
export const slideIn = (
  direction: 'left' | 'right' | 'up' | 'down',
  type: string,
  delay: number,
  duration: number,
): import('framer-motion').Variants => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});


export const createStaggerContainer = (
  staggerChildren: number,
  delayChildren: number,
): import('framer-motion').Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});


/**
 * A strongly-typed variant for fading in.
 *
 * @param {number} delay - The delay in milliseconds before the animation starts.
 * @returns {import('framer-motion').Variants} - The variants object.
 */
export const textVariant = (delay: number): import('framer-motion').Variants => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

/**
 * A strongly-typed variant for fading in.
 *
 * @param {Direction} direction - The direction in which the element should fade in.
 * @param {import('framer-motion').TransitionType} type - The type of the transition.
 * @param {number} delay - The delay in milliseconds before the animation starts.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @returns {import('framer-motion').Variants} - The variants object.
 */
export const fadeIn = (
  direction: 'left' | 'right' | 'up' | 'down',
  type: string,
  delay: number,
  duration: number,
): import('framer-motion').Variants => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

/**
 * A strongly-typed variant for moving planets.
 *
 * @param {Direction} direction - The direction in which the planet should move.
 * @returns {import('framer-motion').Variants} - The variants object.
 */
export const planetVariants = (direction: 'left' | 'right'): import('framer-motion').Variants => ({
  hidden: {
    x: direction === 'left' ? '-100%' : '100%',
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      duration: 1.8,
      delay: 0.5,
    },
  },
});

/**
 * A strongly-typed variant for zooming in.
 *
 * @param {number} delay - The delay in milliseconds before the animation starts.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @returns {import('framer-motion').Variants} - The variants object.
 */
export const zoomIn = (
  delay: number,
  duration: number,
): import('framer-motion').Variants => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});


export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.5,
    },
  },
};