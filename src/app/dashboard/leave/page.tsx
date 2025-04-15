"use client";

import { Card } from '@/components/card';
import { motion } from 'framer-motion';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useState } from 'react';
import { LeaveStatusBadge } from '@/components/leave/leave-status-badge';
import { NewLeaveModal } from '@/components/leave/new-leave-modal';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function LeavePage() {
  // State for leave requests
  const [leaveRequests, setLeaveRequests] = useState([
    { id: 1, name: 'Sarah Williams', type: 'Medical', dates: 'May 15-17', days: 3, status: 'Pending' },
    { id: 2, name: 'David Brown', type: 'Personal', dates: 'May 20', days: 1, status: 'Approved' },
    { id: 3, name: 'Priya Patel', type: 'Family', dates: 'May 22-24', days: 3, status: 'Pending' },
    { id: 4, name: 'Rahul Sharma', type: 'Exam', dates: 'May 28', days: 1, status: 'Rejected' },
  ]);

  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newLeave, setNewLeave] = useState({
    name: '',
    type: 'Medical',
    dates: '',
    days: 1
  });

  // Chart data
  const weeklyLeaveData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      label: 'Leave Count',
      data: [3, 5, 2, 4, 1],
      backgroundColor: 'rgba(79, 70, 229, 0.8)',
    }]
  };

  const monthlyLeaveData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Leaves Approved',
      data: [12, 9, 15, 11, 8],
      backgroundColor: 'rgba(74, 222, 128, 0.8)',
    }, {
      label: 'Leaves Rejected',
      data: [2, 3, 1, 4, 2],
      backgroundColor: 'rgba(248, 113, 113, 0.8)',
    }]
  };

  // Handle new leave submission
  const handleNewLeave = () => {
    const newRequest = {
      id: leaveRequests.length + 1,
      ...newLeave,
      status: 'Pending'
    };
    setLeaveRequests([...leaveRequests, newRequest]);
    setIsModalOpen(false);
    setNewLeave({ name: '', type: 'Medical', dates: '', days: 1 });
  };

  // Handle approval/rejection - Corrected function
  // Handle approval/rejection - Corrected function
const handleStatusChange = (id: number, status: 'Approved' | 'Rejected') => {
  setLeaveRequests(leaveRequests.map(request => 
    request.id === id ? { ...request, status } : request
  ));
};

  return (
    <div className="space-y-6">
      <NewLeaveModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        newLeave={newLeave}
        setNewLeave={setNewLeave}
        onSubmit={handleNewLeave}
      />

      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-yellow-700"
      >
        Leave Management
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-green-700">Leave Requests</h2>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              + New Leave
            </button>
          </div>
          
          <div className="space-y-4">
            {leaveRequests.map((request) => (
              <motion.div
                key={request.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring' }}
                className="flex items-center justify-between p-4 border-b hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div>
                  <p className="font-medium text-gray-900">{request.name}</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>{request.type}</span>
                    <span>{request.dates}</span>
                    <span>{request.days} day(s)</span>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <LeaveStatusBadge status={request.status} />
                  {request.status === 'Pending' && (
                    <>
                      <button 
                        onClick={() => handleStatusChange(request.id, 'Approved')}
                        className="px-3 py-1 bg-green-600 text-white rounded-md text-sm hover:bg-green-700"
                      >
                        Approve
                      </button>
                      <button 
                        onClick={() => handleStatusChange(request.id, 'Rejected')}
                        className="px-3 py-1 bg-red-600 text-white rounded-md text-sm hover:bg-red-700"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-6 h-full">
            <h2 className="text-lg font-medium mb-4 text-blue-600">Weekly Leave Trends</h2>
            <div className="h-64">
              <Bar 
                data={weeklyLeaveData} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                      ticks: {
                        stepSize: 1
                      }
                    }
                  }
                }} 
              />
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-6 h-full">
            <h2 className="text-lg font-medium mb-4 text-purple-600">Monthly Leave Comparison</h2>
            <div className="h-64">
              <Bar 
                data={monthlyLeaveData} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                      ticks: {
                        stepSize: 1
                      }
                    }
                  }
                }} 
              />
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}