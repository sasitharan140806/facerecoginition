"use client";

import { Card } from '@/components/card';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '@/utils/motion';
import { useEffect, useState } from 'react';

export default function CalendarPage() {
  const [isMounted, setIsMounted] = useState(false);
  const events = [
    { title: 'Class Holiday', date: '2025-05-10', color: '#F59E0B' },
    { title: 'PT Meeting', date: '2025-05-15', color: '#3B82F6' },
    { title: 'Exam Starts', date: '2025-05-20', color: '#EF4444' },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="space-y-6">
      <motion.h1
        variants={fadeIn}
        initial="hidden"
        animate="show"
        className="text-2xl font-bold text-yellow-600"
      >
        Academic Calendar
      </motion.h1>
      
      <motion.div
        variants={slideIn}
        initial="hidden"
        animate="show"
      >
        <Card className="p-6">
          {isMounted && (
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={events}
              height="auto"
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,dayGridWeek'
              }}
              eventClick={(info) => {
                info.jsEvent.preventDefault();
                alert(`Event: ${info.event.title}\nDate: ${info.event.startStr}`);
              }}
              eventMouseEnter={(info) => {
                info.el.style.cursor = 'pointer';
                info.el.style.transform = 'scale(1.05)';
                info.el.style.transition = 'transform 0.2s ease';
              }}
              eventMouseLeave={(info) => {
                info.el.style.transform = 'scale(1)';
              }}
              dayCellClassNames="hover:bg-gray-50 transition-colors duration-200"
              dayHeaderClassNames="font-semibold"
            />
          )}
        </Card>
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-cyan-900"
      >
        {events.map((event, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="p-3 rounded-lg border"
            style={{ borderLeft: `4px solid ${event.color}` }}
          >
            <div className="font-medium">{event.title}</div>
            <div className="text-sm text-blue-500">
              {new Date(event.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}