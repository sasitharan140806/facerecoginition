"use client";

import { Card } from '@/components/card';
import { AttendanceChart } from '@/components/attendance-chart';
import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '@/utils/motion';

export default function Dashboard() {
  // Mock data - replace with real data
  const stats = [
    { title: "Today's Attendance", value: "92%", change: "+2% from yesterday" },
    { title: "Absent Today", value: "8", change: "2 late arrivals" },
    { title: "Monthly Average", value: "89%", change: "+5% from last month" },
  ];

  return (
    <div className="space-y-6">
      <motion.h1 
        variants={fadeIn}
        initial="hidden"
        animate="show"
        className="text-2xl font-bold text-yellow-900"
      >
        Dashboard
      </motion.h1>
      
      <motion.div 
        variants={fadeIn}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            initial="hidden"
            animate="show"
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <Card>
              <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
              <p className="mt-1 text-3xl font-semibold text-gray-900">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-gray-500">{stat.change}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={slideIn}
        initial="hidden"
        animate="show"
      >
        <Card className="p-6">
          <h2 className="text-lg font-medium mb-4 text-yellow-700">Attendance Overview</h2>
          <AttendanceChart />
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          variants={slideIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
        >
          <Card className="p-6">
            <h2 className="text-lg font-medium mb-4 text-orange-600">Recent Absences</h2>
            <div className="space-y-4 text-yellow-900">
              {['John Doe', 'Jane Smith', 'Mike Johnson'].map((name, i) => (
                <motion.div
                  key={name}
                  variants={fadeIn}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <span>{name}</span>
                  <span className="text-sm text-red-500">Absent</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          variants={slideIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
        >
          <Card className="p-6">
            <h2 className="text-lg font-medium mb-4 text-orange-600">Upcoming Leaves</h2>
            <div className="space-y-4 text-yellow-900">
              {['Sarah Williams (Tomorrow)', 'David Brown (Next Week)'].map((item, i) => (
                <motion.div
                  key={item}
                  variants={fadeIn}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <span>{item}</span>
                  <span className="text-sm text-yellow-500">Pending</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}