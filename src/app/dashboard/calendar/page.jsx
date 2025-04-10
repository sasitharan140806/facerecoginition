"use client";

import { Card } from '@/components/card';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default function CalendarPage() {
  const events = [
    { title: 'Class Holiday', date: '2024-05-10' },
    { title: 'PT Meeting', date: '2024-05-15' },
    { title: 'Exam Starts', date: '2024-05-20' },
  ];

  return (
    <div className="space-y-6 text-black">
      <h1 className="text-2xl font-bold text-yellow-600">Academic Calendar</h1>
      
      <Card className="p-6">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          height="auto"
        />
      </Card>
    </div>
  );
}