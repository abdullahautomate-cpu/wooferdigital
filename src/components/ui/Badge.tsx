import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "navy" | "white" | "green" | "gray";
  className?: string;
}

export default function Badge({ children, variant = "blue", className }: BadgeProps) {
  const variants = {
    blue: "bg-electric/10 text-electric border border-electric/20",
    navy: "bg-navy text-white",
    white: "bg-white/10 text-white border border-white/20",
    green: "bg-green-100 text-green-700 border border-green-200",
    gray: "bg-gray-100 text-gray-600 border border-gray-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
