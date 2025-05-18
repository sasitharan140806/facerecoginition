"use client";

import { useState, useEffect } from 'react';

interface NewLeave {
  name: string;
  type: string;
  dates: string;
  days: number;
}

interface NewLeaveModalProps {
  isOpen: boolean;
  onClose: () => void;
  newLeave: NewLeave;
  setNewLeave: (leave: NewLeave) => void;
  onSubmit: () => void;
}

export function NewLeaveModal({ isOpen, onClose, newLeave, setNewLeave, onSubmit }: NewLeaveModalProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

    if (!isClient || !isOpen) {
        return null;
    }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewLeave({
      ...newLeave,
      [name]: name === 'days' ? parseInt(value) || 1 : value
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 text-gray-900">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">New Leave Request</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={newLeave.name}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter name"
              required
            />
          </div>
          
          <div>
            <label htmlFor="type" className="block text-sm font-medium mb-1">
              Leave Type
            </label>
            <select
              id="type"
              name="type"
              value={newLeave.type}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="Medical">Medical</option>
              <option value="Personal">Personal</option>
              <option value="Family">Family</option>
              <option value="Exam">Exam</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="dates" className="block text-sm font-medium mb-1">
              Dates
            </label>
            <input
              id="dates"
              name="dates"
              type="text"
              value={newLeave.dates}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g. May 15-17"
              required
            />
          </div>
          
          <div>
            <label htmlFor="days" className="block text-sm font-medium mb-1">
              Days
            </label>
            <input
              id="days"
              name="days"
              type="number"
              value={newLeave.days}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              min="1"
              required
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onSubmit}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
            disabled={!newLeave.name.trim() || !newLeave.dates.trim()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}