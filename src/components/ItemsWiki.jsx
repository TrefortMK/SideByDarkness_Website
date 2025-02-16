import React, { useState, useEffect } from 'react';

const ItemsWiki = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('/api/items'); 
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
    <>
      <div className='flex items-center justify-center mb-8'>
        <label className="input w-96 input-bordered flex items-center gap-2">
          <input 
            type="text" 
            className="grow"
            placeholder="Item Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd" />
          </svg>
        </label>
      </div>

      <div className="overflow-x-auto px-4">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Img</th>
              <th>Name</th>
              <th>Description</th>
              <th>Base stats</th>
              <th>Buffs</th>
              <th>Debuffs</th>
              <th>More info</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.item_id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                     
                      <img 
                        src={item.image_url || '/placeholder-item.png'} 
                        alt={item.name} 
                      />
                    </div>
                  </div>
                </td>
                <td className="font-bold">{item.name}</td>
                <td>{item.description}</td>
                <td>
                  {item.base_stat_id && (
                    <span className="badge badge-primary">
                      +{item.base_stat_id} Base value
                    </span>
                  )}
                </td>
                <td>
                  <div className="flex flex-wrap gap-1">
                    {item.buffs?.map((buff) => (
                      <span key={buff.buff_id} className="badge badge-success">
                        {buff.name} +{buff.amount}
                      </span>
                    ))}
                  </div>
                </td>
                <td>
                  <div className="flex flex-wrap gap-1">
                    {item.debuffs?.map((debuff) => (
                      <span key={debuff.debuff_id} className="badge badge-error">
                        {debuff.name} -{debuff.amount}
                      </span>
                    ))}
                  </div>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs">
                    More info
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ItemsWiki;