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


interface ProductColor {
  color: string;
  code: string[];
}

interface ColorPicker2Props {
  productColors: ProductColor[];
}

const ColorPicker2: React.FC<ColorPicker2Props> = ({ productColors }) => {
  const [showAllColors, setShowAllColors] = useState(false);

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  const getBackgroundStyle = (code: string[]) => {
    if (code.length > 1) {
      // Create a linear gradient if there are multiple colors
      return {
        background: `linear-gradient(to right, ${code[0]} 50%, ${code[1]} 50%)`,
      };
    } else {
      // Use a solid color for a single color code
      return { backgroundColor: code[0] };
    }
  };

  return (
    <div className="my-2 flex flex-wrap gap-4 rounded-[20px] bg-white py-4 pl-4 pr-2 shadow-md">
      {/* Display color buttons */}
      {productColors.map((color) => (
        <motion.button
          key={color.color}
          className="h-6 w-6 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={getBackgroundStyle(color.code)}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        />
      ))}
    </div>
  );
};

export default ColorPicker2;
