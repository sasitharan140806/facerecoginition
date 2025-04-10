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
  // Bar Chart Data
  const barData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Attendance %',
      data: [85, 89, 92, 90],
      backgroundColor: 'rgba(79, 70, 229, 0.8)',
      borderRadius: 6
    }]
  };

  // Pie Chart Data
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
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
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

        {/* Pie Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card className="p-6 h-full">
                      <h2 className="text-lg font-medium mb-4 text-violet-700">Attendance</h2>
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
    </div>
  );
}