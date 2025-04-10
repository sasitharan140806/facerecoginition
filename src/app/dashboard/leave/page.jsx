"use client";

import { Card } from '@/components/card';

export default function LeavePage() {
  const leaveRequests = [
    { id: 1, name: 'Sarah Williams', type: 'Sick', dates: 'May 15-17', status: 'Pending' },
    { id: 2, name: 'David Brown', type: 'Personal', dates: 'May 20', status: 'Approved' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-yellow-700">Leave Management</h1>
      
      <Card className="p-6">
        <h2 className="text-lg font-medium mb-4 text-green-700">Pending Requests</h2>
        <div className="space-y-4">
          {leaveRequests.map((request) => (
            <div key={request.id} className="flex items-center justify-between p-3 border-b text-violet-700">
              <div>
                <p className="font-medium">{request.name}</p>
                <p className="text-sm text-gray-500">{request.type} • {request.dates}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                request.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
              }`}>
                {request.status}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}