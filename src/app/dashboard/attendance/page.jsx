"use client";

import { Card } from '@/components/card';

export default function AttendancePage() {
  const attendanceData = [
    { name: 'John Doe', status: 'Present', time: '08:30 AM' },
    { name: 'Jane Smith', status: 'Absent', time: '-' },
    { name: 'Mike Johnson', status: 'Late', time: '09:15 AM' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-yellow-700">Attendance Records</h1>
      
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-violet-700 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-violet-700 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-violet-700 uppercase tracking-wider">Time</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-cyan-800">
              {attendanceData.map((student) => (
                <tr key={student.name}>
                  <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                  <td className={`px-6 py-4 whitespace-nowrap ${
                    student.status === 'Present' ? 'text-green-600' : 
                    student.status === 'Absent' ? 'text-red-600' : 'text-yellow-600'
                  }`}>
                    {student.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}