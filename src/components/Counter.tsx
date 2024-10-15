import {motion} from 'framer-motion';
import {useState} from 'react';
import {useTranslations} from 'next-intl';

function Counter() {
  const [count, setCount] = useState(1);
  const t = useTranslations('Product');

  return (
    <div className="mt-8 w-full flex items-start justify-start space-x-4">
      <div className="flex flex-col items-center">
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="relative flex items-center justify-between rounded-[24px] border-2 border-black bg-yellow-400 px-6 py-2 w-32"  // Increased width to w-32
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div className="text-center">
            <button
              className="font-bold text-xl text-black focus:outline-none"
              onClick={() => {
                if (count >= 2) setCount(count - 1);
              }}
            >
              -
            </button>
          </motion.div>
          <motion.div className="text-center">
            <h1 className="select-none font-bold text-xl">{count}</h1>
          </motion.div>
          <motion.div className="text-center">
            <button
              className="font-bold text-xl text-black focus:outline-none"
              onClick={() => {
                if (count <= 9) setCount(count + 1);
              }}
            >
              +
            </button>
          </motion.div>
        </motion.div>
      </div>

      <div className="flex items-center">
        <button className="w-full rounded-3xl bg-[#FFD500] px-6 py-3 font-bold text-xl text-black hover:bg-black hover:text-white">
          {t('AddToCart')}
        </button>
      </div>
    </div>
        
  );
}

export default Counter;
