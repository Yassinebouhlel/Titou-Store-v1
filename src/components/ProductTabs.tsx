import React, { useState } from "react";
import {useTranslations} from 'next-intl';

// const t = useTranslations('Product');
const tabs = [
  { id: "description", label: "DESCRIPTION", content: 
    <p>
      {/* {t('Description1')} */}
      Discover Titou's Shine Collection hardside luggage, expertly crafted from a durable blend of polypropylene. These cases feature removable wheels, telescopic handles, TSA locks, and well-organized interiors, designed to meet all your travel needs.
    </p>
  },
  { id: "size_details", label: "SIZE & DETAILS", content: 
    <div className="overflow-x-auto mt-4">
        <table className="w-full text-left text-[14px] sm:text-[16px] text-gray-600 leading-[150%] tracking-[0.00938rem] font-sans">
        <thead>
            <tr className="bg-gray-200 font-bold">
            <th className="px-4 py-2">Size</th>
            <th className="px-4 py-2">Dimensions</th>
            <th className="px-4 py-2">Volume</th>
            <th className="px-4 py-2">Capacity</th>
            <th className="px-4 py-2">Weight</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td className="border px-4 py-2">Big</td>
            <td className="border px-4 py-2">75 x 49 x 32 cm</td>
            <td className="border px-4 py-2">106 liters</td>
            <td className="border px-4 py-2">30 Kg</td>
            <td className="border px-4 py-2">4.51 Kg</td>
            </tr>
            <tr>
            <td className="border px-4 py-2">Medium</td>
            <td className="border px-4 py-2">65 x 42 x 39 cm</td>
            <td className="border px-4 py-2">70 liters</td>
            <td className="border px-4 py-2">20 Kg</td>
            <td className="border px-4 py-2">3.25 Kg</td>
            </tr>
            <tr>
            <td className="border px-4 py-2">Small</td>
            <td className="border px-4 py-2">55 x 32 x 24 cm</td>
            <td className="border px-4 py-2">55 liters</td>
            <td className="border px-4 py-2">15 Kg</td>
            <td className="border px-4 py-2">3.66 Kg</td>
            </tr>
        </tbody>
        </table>
    </div>
  },
  { id: "shipping_returns", label: "SHIPPING & RETURNS", content: 
    <p>
      Free shipping on all orders above $100. Returns are accepted within 30 days of purchase.
      Please ensure the product is unused and in original packaging.
    </p>
  },
];

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="w-full border border-gray-300 rounded-lg shadow-md bg-white">
      
      {/* Desktop Mode (Tabs) */}
      <div className="hidden md:flex border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 text-center py-3 text-sm font-semibold tracking-wide 
                        ${
                          activeTab === tab.id
                            ? "border-b-2 border-black text-black"
                            : "text-gray-500 hover:text-black"
                        }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Desktop Content Display */}
      <div className="hidden md:block p-5 text-gray-700 text-sm leading-relaxed">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>

      {/* Mobile Mode (Accordion) */}
      <div className="block md:hidden">
        {tabs.map((tab) => (
          <div key={tab.id} className="border-t border-gray-300">
            <button
              className="w-full text-left p-4 font-semibold text-sm flex justify-between items-center"
              onClick={() => setActiveTab(activeTab === tab.id ? "" : tab.id)}
            >
              {tab.label}
              <span className="text-xl">{activeTab === tab.id ? "−" : "+"}</span>
            </button>
            {activeTab === tab.id && (
              <div className="p-4 text-gray-700 text-sm">{tab.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTabs;
