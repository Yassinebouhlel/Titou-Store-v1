import {motion} from 'framer-motion';
import {useState} from 'react';

function Counter() {
  const [count, setCount] = useState(1);

  return (
    <div className="mt-4">
      <h3 className="text-sm font-medium text-gray-900">Count</h3>
      <div className="mt-2 flex space-x-3">
        <motion.div
          animate={{opacity: 1, scale: 1}}
          className="relative flex w-1/6 items-center justify-between rounded-[24px] border-2 border-black bg-yellow-400 p-2"
          initial={{opacity: 0, scale: 0.8}}
          transition={{duration: 0.3}}
        >
          <motion.div className="w-2/5 text-center">
            <button
              className=" font-bold text-xl text-black focus:outline-none"
              onClick={() => {
                if (count >= 2) setCount(count - 1);
              }}
            >
              -
            </button>
          </motion.div>
          <motion.div className="w-1/5 text-center">
            <h1 className="select-none font-bold text-xl">{count}</h1>
          </motion.div>
          <motion.div className="w-2/5 text-center">
            <button
              className=" font-bold text-xl text-black focus:outline-none"
              onClick={() => {
                if (count <= 9) setCount(count + 1);
              }}
            >
              +
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Counter;
