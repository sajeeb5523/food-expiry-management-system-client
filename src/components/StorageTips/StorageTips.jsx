import React from 'react';
import { FaCarrot, FaSnowflake, FaAppleAlt, FaBreadSlice, FaEgg, FaCheese, FaLeaf } from 'react-icons/fa';

const StorageTips = () => {
  const tips = [
    {
      id: 1,
      title: 'Vegetables',
      icon: <FaCarrot className="text-orange-500 text-2xl" />,
      tips: [
        'Store in perforated plastic bags in the crisper drawer',
        'Keep potatoes and onions in a cool, dark place (but not together)',
        'Wrap leafy greens in paper towels to absorb moisture'
      ]
    },
    {
      id: 2,
      title: 'Fruits',
      icon: <FaAppleAlt className="text-red-500 text-2xl" />,
      tips: [
        'Store apples separately as they emit ethylene gas',
        'Keep bananas at room temperature until ripe, then refrigerate',
        'Store berries in a single layer to prevent mold'
      ]
    },
    {
      id: 3,
      title: 'Dairy & Eggs',
      icon: <FaEgg className="text-yellow-500 text-2xl" />,
      tips: [
        'Store milk and dairy on refrigerator shelves, not in the door',
        'Keep eggs in their original carton',
        'Hard cheeses can be frozen for longer storage'
      ]
    },
    {
      id: 4,
      title: 'Bread & Bakery',
      icon: <FaBreadSlice className="text-amber-600 text-2xl" />,
      tips: [
        'Store bread at room temperature in a breadbox or paper bag',
        'Freeze bread if not using within 3-4 days',
        'Revive stale bread by sprinkling with water and reheating'
      ]
    },
    {
      id: 5,
      title: 'Meat & Poultry',
      icon: <FaSnowflake className="text-blue-400 text-2xl" />,
      tips: [
        'Store raw meat on the bottom shelf to prevent cross-contamination',
        'Use within 1-2 days or freeze for longer storage',
        'Thaw frozen meat in the refrigerator, not at room temperature'
      ]
    },
    {
      id: 6,
      title: 'Herbs',
      icon: <FaLeaf className="text-green-500 text-2xl" />,
      tips: [
        'Store fresh herbs like flowers in a glass of water',
        'Wrap in a damp paper towel for refrigerator storage',
        'Freeze herbs in oil for long-term storage'
      ]
    }
  ];

  return (
    <div className="py-8 rounded-lg">
      {/* <h2 className="text-2xl font-bold text-gray-800 mb-2">Food Storage Tips</h2> */}
      <h3 className='text-[32px] md:text-[42px] text-[#1565C0] font-bold text-center mb-4'>Food Storage Tips</h3>
      <p className="text-center mb-8">Keep your food fresh longer with these storage tips</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((category) => (
          <div key={category.id} className="border border-white bg-base-100 rounded-lg p-5 shadow-xl transition-shadow">
            <div className="flex items-center mb-3">
              <div className="bg-base-100 p-2 rounded-full mr-3">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorageTips;
