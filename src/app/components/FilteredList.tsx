'use client';
import { useState } from 'react';
import { Item } from '../types/Item';

const items: Item[] = [
  { id: 1, name: 'Task 1', status: 'active' },
  { id: 2, name: 'Task 2', status: 'inactive' },
  { id: 3, name: 'Task 3', status: 'active' },
  { id: 4, name: 'Task 4', status: 'inactive' },
];

export default function FilteredList() {
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all');

  const filteredItems = items.filter(item => 
    filter === 'all' ? true : item.status === filter
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-full ${
            filter === 'all' 
              ? 'bg-foreground text-background' 
              : 'border border-black/[.08] hover:bg-[#f2f2f2]'
          }`}
        >
          Show All
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`px-4 py-2 rounded-full ${
            filter === 'active' 
              ? 'bg-foreground text-background' 
              : 'border border-black/[.08] hover:bg-[#f2f2f2]'
          }`}
        >
          Show Active
        </button>
        <button
          onClick={() => setFilter('inactive')}
          className={`px-4 py-2 rounded-full ${
            filter === 'inactive' 
              ? 'bg-foreground text-background' 
              : 'border border-black/[.08] hover:bg-[#f2f2f2]'
          }`}
        >
          Show Inactive
        </button>
      </div>
      <ul className="space-y-2">
        {filteredItems.map(item => (
          <li 
            key={item.id}
            className="p-4 bg-foreground/[.06] rounded-lg flex justify-between"
          >
            <span>{item.name}</span>
            <span className={`px-2 py-1 rounded text-sm ${
              item.status === 'active' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              {item.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
