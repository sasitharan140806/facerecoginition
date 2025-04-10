interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}