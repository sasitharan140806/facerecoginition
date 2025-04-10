import { Card } from '@/components/card';
import { AttendanceChart } from '@/components/attendance-chart';

export default function Dashboard() {
  // Mock data - replace with real data
  const stats = [
    { title: "Today's Attendance", value: "92%", change: "+2% from yesterday" },
    { title: "Absent Today", value: "8", change: "2 late arrivals" },
    { title: "Monthly Average", value: "89%", change: "+5% from last month" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
            <p className="mt-1 text-3xl font-semibold text-gray-900">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-gray-500">{stat.change}</p>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-medium mb-4">Attendance Overview</h2>
        <AttendanceChart />
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-medium mb-4">Recent Absences</h2>
          <div className="space-y-4">
            {['John Doe', 'Jane Smith', 'Mike Johnson'].map((name) => (
              <div key={name} className="flex items-center justify-between">
                <span>{name}</span>
                <span className="text-sm text-red-500">Absent</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-medium mb-4">Upcoming Leaves</h2>
          <div className="space-y-4">
            {['Sarah Williams (Tomorrow)', 'David Brown (Next Week)'].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <span>{item}</span>
                <span className="text-sm text-yellow-500">Pending</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}