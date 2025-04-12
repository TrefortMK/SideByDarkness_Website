import React, { useState, useEffect } from 'react';

const ItemsWiki = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:8000/user/allitem');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Hiba az adatok fetchelésénél:', error);
      }
    };

    fetchItems();
  }, []);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-8">
      {/* Search Input */}
      <div className="flex items-center justify-center mb-12">
        <div className="relative w-full max-w-2xl">
          <input
            type="text"
            className="input input-lg w-full bg-black/50 border-purple-900/50 text-purple-100 placeholder-purple-400 focus:outline-none focus:border-purple-500"
            placeholder="Tárgyak keresése..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 absolute right-4 top-4 text-purple-500">
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Items Table */}
      <div className="overflow-x-auto rounded-2xl border border-purple-900/50 bg-black/50">
        <table className="table w-full">
          <thead className="bg-purple-900/20 text-purple-300">
            <tr>
              <th className="text-center"></th>
              <th className="text-lg">Név</th>
              <th className="text-lg">Leírás</th>
              <th className="text-lg">Alapértékek</th>
              <th className="text-lg">Buffok</th>
              <th className="text-lg">Debuffok</th>
              <th className="text-lg"></th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.item_id} className="hover:bg-purple-900/10 transition-colors">
                {/* Item Image */}
                <td>
                  <div className="avatar">
                    <div className="mask mask-hexagon w-16 h-16 p-1 bg-purple-900/20">
                      <img
                        src={item.image_url || '/placeholder-item.png'}
                        alt={item.name}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </td>

                {/* Item Name */}
                <td className="font-bold text-purple-200 text-lg">{item.name}</td>

                {/* Description */}
                <td className="text-purple-100 max-w-xs">{item.description}</td>

                {/* Base Stats */}
                <td>
                  {item.base_stat_id && (
                    <div className="badge badge-lg badge-primary bg-purple-800/50 border-purple-900 text-purple-200">
                      +{item.base_stat_id} Alapérték
                    </div>
                  )}
                </td>

                {/* Buffs */}
                <td>
                  <div className="flex flex-wrap gap-2">
                    {item.buffs?.map((buff) => (
                      <span
                        key={buff.buff_id}
                        className="badge badge-lg bg-green-800/50 border-green-900 text-green-200">
                        {buff.name} +{buff.amount}
                      </span>
                    ))}
                  </div>
                </td>

                {/* Debuffs */}
                <td>
                  <div className="flex flex-wrap gap-2">
                    {item.debuffs?.map((debuff) => (
                      <span
                        key={debuff.debuff_id}
                        className="badge badge-lg bg-red-800/50 border-red-900 text-red-200">
                        {debuff.name} -{debuff.amount}
                      </span>
                    ))}
                  </div>
                </td>

                {/* More Info Button */}
                <td>
                  <button className="btn btn-sm bg-purple-800/50 hover:bg-purple-700/50 border-purple-900 text-purple-200">
                    Részletek
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-purple-500 rounded-full animate-float"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ItemsWiki;