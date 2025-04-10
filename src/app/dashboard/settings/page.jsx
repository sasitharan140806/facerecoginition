"use client";

import { Card } from '@/components/card';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-yellow-600">System Settings</h1>
      
      <Card className="p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-medium mb-2 text-blue-600">Account Settings</h2>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Change Password
            </button>
          </div>
          
          <div>
            <h2 className="text-lg font-medium mb-2 text-pink-500">Notification Preferences</h2>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="rounded" />
                <span className="ml-2 text-green-500">Email Notifications</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded" checked />
                <span className="ml-2 text-green-500">SMS Notifications</span>
              </label>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}