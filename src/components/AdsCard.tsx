import {motion, useAnimation} from 'framer-motion';
import React, {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';

interface GalaxyAdProps {
  backgroundUrl: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const CardAd: React.FC<GalaxyAdProps> = ({
  backgroundUrl,
  ctaLink,
  ctaText,
  description,
  title
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div
      className="relative my-8 flex flex-col sm:flex-row h-[300px] w-full overflow-hidden rounded-[36px] bg-cover bg-center shadow-lg"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="relative flex h-full w-full sm:w-1/2 flex-col items-start justify-center p-4 sm:p-8">
        <motion.h2
          ref={ref}
          animate={controls}
          className="mb-4 font-bold text-2xl sm:text-4xl text-black"
          initial="hidden"
          variants={textVariants}
        >
          {title}
        </motion.h2>
        <motion.p
          animate={controls}
          className="mb-6 text-lg sm:text-xl text-black"
          initial="hidden"
          variants={textVariants}
        >
          {description}
        </motion.p>
      </div>
    </div>

  );
};

export default CardAd;
