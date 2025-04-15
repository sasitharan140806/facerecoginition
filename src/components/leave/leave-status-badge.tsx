"use client";

interface LeaveStatusBadgeProps {
  status: 'Pending' | 'Approved' | 'Rejected';
  className?: string;
}

export function LeaveStatusBadge({ status, className = "" }: LeaveStatusBadgeProps) {
  const statusClasses = {
    Pending: 'bg-yellow-100 text-yellow-800',
    Approved: 'bg-green-100 text-green-800',
    Rejected: 'bg-red-100 text-red-800'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm ${statusClasses[status]} ${className}`}>
      {status}
    </span>
  );
}