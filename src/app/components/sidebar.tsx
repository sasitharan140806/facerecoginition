"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FiHome, 
  FiUser, 
  FiCalendar, 
  FiClipboard, 
  FiLogOut,
  FiPieChart,
  FiSettings
} from 'react-icons/fi';

export function Sidebar() {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: FiHome },
    { name: 'Attendance', href: '/dashboard/attendance', icon: FiClipboard },
    { name: 'Calendar', href: '/dashboard/calendar', icon: FiCalendar },
    { name: 'Leave', href: '/dashboard/leave', icon: FiUser },
    { name: 'Reports', href: '/dashboard/reports', icon: FiPieChart },
    { name: 'Settings', href: '/dashboard/settings', icon: FiSettings },
  ];

  return (
    <div className="w-64 bg-white shadow-lg flex flex-col">
      <div className="p-6 border-b">
        <h1 className="text-xl font-bold text-indigo-600">ClassTrack</h1>
        <p className="text-sm text-gray-500">Attendance System</p>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center p-3 rounded-lg transition-colors ${
              pathname === item.href
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <item.icon className="mr-3" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
      
      <div className="p-4 border-t">
        <button className="flex items-center w-full p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <FiLogOut className="mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}