"use client";

import { ReactNode } from "react";

interface SettingItemProps {
  title: string;
  description: string;
  control: ReactNode;
  className?: string;
}

export function SettingItem({
  title,
  description,
  control,
  className = "",
}: SettingItemProps) {
  return (
    <div className={`flex items-center justify-between py-3 ${className}`}>
      <div className="space-y-1">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="ml-4">
        {control}
      </div>
    </div>
  );
}