"use client";

import * as React from "react";
import { Switch as RadixSwitch } from "@radix-ui/react-switch";

interface SwitchProps {
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
}

export function Switch({
  defaultChecked = false,
  onCheckedChange,
  className = "",
}: SwitchProps) {
  const [checked, setChecked] = React.useState(defaultChecked);

  const handleChange = (newChecked: boolean) => {
    setChecked(newChecked);
    onCheckedChange?.(newChecked);
  };

  return (
    <RadixSwitch
      checked={checked}
      onCheckedChange={handleChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
        checked ? 'bg-indigo-600' : 'bg-gray-200'
      } ${className}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </RadixSwitch>
  );
}