import {motion, useScroll, useTransform} from 'framer-motion';
import Image from 'next/image';
import {useRef} from 'react';

function ParallaxEffect() {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({target: ref});

  // Background zoom effect
  const zoom = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  // Foreground leaves translate effect
  const translateX = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={ref} className="relative h-[200vh] w-full overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute left-0 top-0 h-full w-full"
        style={{scale: zoom}}
      >
        <Image
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          src="https://uploads-ssl.webflow.com/5cff83ac2044e22cb8cf2f11/5cffeaf7b3cb0ed2d33f7943_hero.jpg"
        />
      </motion.div>

      {/* Foreground Leaves Layer */}
      <motion.div
        className="absolute left-0 top-0 z-10 h-full w-full"
        style={{x: translateX}}
      >
        <Image
          alt="Foreground Layer"
          layout="fill"
          objectFit="cover"
          quality={100}
          src="https://uploads-ssl.webflow.com/5cff83ac2044e22cb8cf2f11/5d13364599bb70e3560cc4e5_background-min%203.png"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 flex h-screen items-center justify-center text-white">
        <h1 className="text-4xl">Scroll to Zoom & Move</h1>
      </div>
    </div>
  );
}

export default ParallaxEffect;
