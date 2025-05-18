"use client";

import { Card } from '@/components/card';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { motion } from 'framer-motion';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function ReportsPage() {
  // Chart Data
  const barData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Attendance %',
      data: [85, 89, 92, 90],
      backgroundColor: 'rgba(79, 70, 229, 0.8)',
      borderRadius: 6
    }]
  };

  const pieData = {
    labels: ['Present', 'Absent', 'Late'],
    datasets: [{
      data: [85, 8, 7],
      backgroundColor: [
        'rgba(74, 222, 128, 0.8)',
        'rgba(248, 113, 113, 0.8)',
        'rgba(251, 191, 36, 0.8)'
      ]
    }]
  };

  // Student Leave Data
  const leaveData = [
    { 
      id: 1, 
      name: 'Rahul Sharma', 
      leaveType: 'Medical', 
      days: 3, 
      dates: 'May 15-17, 2024',
      status: 'Approved'
    },
    { 
      id: 2, 
      name: 'Priya Patel', 
      leaveType: 'Personal', 
      days: 1, 
      dates: 'May 20, 2024',
      status: 'Pending' 
    },
    { 
      id: 3, 
      name: 'Amit Singh', 
      leaveType: 'Family Event', 
      days: 2, 
      dates: 'May 22-23, 2024',
      status: 'Approved' 
    },
    { 
      id: 4, 
      name: 'Neha Gupta', 
      leaveType: 'Medical', 
      days: 5, 
      dates: 'May 25-29, 2024',
      status: 'Rejected' 
    }
  ];

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`
        }
      }
    }
  };

  return (
    <div className="space-y-6">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-yellow-700"
      >
        Attendance Reports
      </motion.h1>
      
      {/* Visualization Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card className="p-6 h-full">
            <h2 className="text-lg font-medium mb-4 text-violet-700">Weekly Trend</h2>
            <div className="h-64">
              <Bar 
                data={barData} 
                options={{
                  ...chartOptions,
                  maintainAspectRatio: false,
                  scales: { y: { min: 70, max: 100 } }
                }} 
              />
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card className="p-6 h-full">
            <h2 className="text-lg font-medium mb-4 text-violet-700">Attendance Distribution</h2>
            <div className="h-64">
              <Pie
                data={pieData}
                options={{
                  ...chartOptions,
                  maintainAspectRatio: false
                }}
              />
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Leave Records Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6 text-yellow-700">Student Leave Records</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leave Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {leaveData.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{student.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{student.leaveType}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{student.days}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{student.dates}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        student.status === 'Approved' ? 'bg-green-100 text-green-800' :
                        student.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {student.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary Statistics */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-blue-800">Total Leaves Approved</h3>
              <p className="mt-1 text-2xl font-semibold text-blue-900">2</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-yellow-800">Leaves Pending</h3>
              <p className="mt-1 text-2xl font-semibold text-yellow-900">1</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-red-800">Leaves Rejected</h3>
              <p className="mt-1 text-2xl font-semibold text-red-900">1</p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}