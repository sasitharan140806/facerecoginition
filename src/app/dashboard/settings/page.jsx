"use client";

import { Card } from '@/components/card';
import { Switch } from '@/components/ui/switch';
import { motion } from 'framer-motion';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-yellow-600"
      >
        System Configuration
      </motion.h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Camera Settings */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2"
        >
          <Card className="p-6 h-full">
            <h2 className="text-lg font-medium mb-4 text-blue-600">Camera Configuration</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-fuchsia-700">Face Detection Sensitivity</h3>
                  <p className="text-sm text-gray-500">Adjust detection threshold</p>
                </div>
                <select className="border rounded-md px-3 py-1 text-black">
                  <option className="text-black" >Low</option>
                  <option className="text-black">Medium</option>
                  <option className="text-black">High</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-fuchsia-700">Drowsiness Detection</h3>
                  <p className="text-sm text-gray-500">Enable eye tracking</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-fuchsia-700">Attendance Auto-Save</h3>
                  <p className="text-sm text-gray-500">Save records automatically</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Notification Settings */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card className="p-6 h-full">
            <h2 className="text-lg font-medium mb-4 text-pink-500">Notification Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-fuchsia-700">Email Alerts</h3>
                  <p className="text-sm text-gray-500">Receive email notifications</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-fuchsia-700">SMS Alerts</h3>
                  <p className="text-sm text-gray-500">Receive text messages</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-fuchsia-700">Daily Reports</h3>
                  <p className="text-sm text-gray-500">End-of-day summary</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Account Security */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="p-6">
          <h2 className="text-lg font-medium mb-4 text-purple-600">Account Security</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-fuchsia-700">Password</h3>
                <p className="text-sm text-gray-500">Last changed 2 weeks ago</p>
              </div>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                Change Password
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-fuchsia-700">Two-Factor Authentication</h3>
                <p className="text-sm text-gray-500">Add extra security layer</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-fuchsia-700">Active Sessions</h3>
                <p className="text-sm text-gray-500">2 devices connected</p>
              </div>
              <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
                View Sessions
              </button>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* System Preferences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="p-6">
          <h2 className="text-lg font-medium mb-4 text-green-600">System Preferences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-fuchsia-700">Dark Mode</h3>
                  <p className="text-sm text-gray-500">Switch interface theme</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-fuchsia-700">Time Zone</h3>
                  <p className="text-sm text-gray-500">Asia/Kolkata (IST)</p>
                </div>
                <button className="px-3 py-1 border rounded-md text-sm hover:bg-gray-900 text-blue-700">
                  Change
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-fuchsia-700">Data Backup</h3>
                  <p className="text-sm text-gray-500">Last backup: Today 02:00 AM</p>
                </div>
                <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                  Backup Now
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-fuchsia-700">System Updates</h3>
                  <p className="text-sm text-gray-500">Version 2.1.4 (Latest)</p>
                </div>
                <button className="px-3 py-1 border rounded-md text-sm hover:bg-gray-50">
                  Check Updates
                </button>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}