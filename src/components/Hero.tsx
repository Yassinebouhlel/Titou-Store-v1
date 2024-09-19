import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const ParallaxEffect = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  // Background zoom effect
  const zoom = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  // Foreground leaves translate effect
  const translateX = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={ref} className="relative h-[200vh] w-full overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{ scale: zoom }}
      >
        <Image
          src="https://uploads-ssl.webflow.com/5cff83ac2044e22cb8cf2f11/5cffeaf7b3cb0ed2d33f7943_hero.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </motion.div>

      {/* Foreground Leaves Layer */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{ x: translateX }}
      >
        <Image
          src="https://uploads-ssl.webflow.com/5cff83ac2044e22cb8cf2f11/5d13364599bb70e3560cc4e5_background-min%203.png"
          alt="Foreground Layer"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-white flex items-center justify-center h-screen">
        <h1 className="text-4xl">Scroll to Zoom & Move</h1>
      </div>
    </div>
  );
};

export default ParallaxEffect;