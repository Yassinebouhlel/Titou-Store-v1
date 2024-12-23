import {motion, AnimatePresence} from 'framer-motion';
import React, {useState} from 'react';

const colors = [
  {name: 'Teal', hex: '#4FD1C5'},
  {name: 'Sky Blue', hex: '#38B2AC'},
  {name: 'Black', hex: '#1A202C'},
  {name: 'Yellow', hex: '#ECC94B'},
  {name: 'Maroon', hex: '#9B2C2C'},
  {name: 'Navy', hex: '#2C5282'},
  {name: 'Gray', hex: '#718096'},
  {name: 'Mauve', hex: '#B794F4'},
  {name: 'Burgundy', hex: '#702459'},
  {name: 'Light Gray', hex: '#CBD5E0'}
];

function ColorPicker({productColors, selectedColor, setSelectedColor}: any) {
  const [showAllColors, setShowAllColors] = useState(false);
  const dotsContainerVariants = {
    hover: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const dotVariants = {
    initial: {y: 0},
    hover: {
      y: [0, -5, 0],
      transition: {
        duration: 0.5
      }
    }
  };

  const buttonVariants = {
    hover: {scale: 1.1},
    tap: {scale: 0.95}
  };

  const containerVariants = {
    hidden: {opacity: 0, y: -20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    }
  };

  const colorVariants = {
    hidden: {opacity: 0, y: -10},
    visible: {opacity: 1, y: 0, transition: {duration: 0.4}}
  };
  const buttonVariantsClose = {
    hover: {
      scale: 1.1
    },
    tap: {
      scale: 0.95
    }
  };

  const dotVariantsClose = {
    initial: {opacity: 1},
    hover: {opacity: 0}
  };

  // Function to apply background style based on the number of colors
  const getBackgroundStyle = (codes: string[]) => {
    if (codes.length > 1) {
      return {
        background: `linear-gradient(45deg, ${codes[0]} 50%, ${codes[1]} 50%)`,
      };
    }
    return { backgroundColor: codes[0] };
  };

  return (
    <div className=" my-2 flex flex-wrap gap-4">
      {/* Display initial color buttons */}
      {productColors.slice(0, 4).map((color: any) => (
        <motion.button
          key={color.code}
          className={"h-4 w-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"+`${color.code === selectedColor.code && "ring-offset-2 ring-2 outline-none  " }`}
          onClick={() => setSelectedColor(color)}
          style={getBackgroundStyle(color.code)}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        />
      ))}

      {productColors.length > 3 && (
        <div className="relative">
          {!showAllColors ? (
            <motion.button
              className="flex h-4  w-4 items-center justify-center rounded-full bg-white "
              onClick={() => setShowAllColors(true)}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div
                className="flex h-5 w-5 flex-row-reverse items-center justify-center gap-1 rounded-full border p-0.5 "
                variants={dotsContainerVariants}
              >
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="h-[0.13rem] w-[0.13rem] rounded-full bg-black"
                    variants={dotVariants}
                  />
                ))}
              </motion.div>
            </motion.button>
          ) : (
            <motion.button
              className="flex h-4  w-4 items-center justify-center rounded-full bg-white "
              onClick={() => setShowAllColors(false)}
              variants={buttonVariantsClose}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div
                className="flex h-5 w-5 flex-row-reverse items-center justify-center gap-1 rounded-full border p-0.5  "
                variants={dotsContainerVariants}
              >
                {[0, 1].map((index) => (
                  <motion.div
                    key={index}
                    className="h-[0.13rem] w-[0.13rem] rounded-full bg-black"
                    variants={dotVariantsClose}
                  />
                ))}
                <div className="h-[0.13rem] w-[0.13rem] rounded-full bg-black" />
              </motion.div>
            </motion.button>
          )}

          {/* Absolute positioned dropdown for additional colors */}
          <AnimatePresence>
            {showAllColors && (
              <motion.div
                animate="visible"
                className="absolute -right-1 top-4 flex flex-col gap-2 rounded-lg bg-white p-2 shadow-lg"
                exit="hidden"
                initial="hidden"
                variants={containerVariants}
              >
                {productColors.slice(4).map((color: any) => (
                  <motion.button
                    key={color.code}
                    className={"h-4 w-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"+`${color.code === selectedColor.code && "ring-offset-2 ring-2 outline-none  " }`}
                    onClick={() => setSelectedColor(color)}
                    style={getBackgroundStyle(color.code)}
                    variants={colorVariants}
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

export default ColorPicker;
