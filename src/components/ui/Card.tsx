import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "glass" | "dark" | "bordered";
  hover?: boolean;
}

export default function Card({
  children,
  className,
  variant = "default",
  hover = false,
}: CardProps) {
  const variants = {
    default: "bg-white rounded-2xl shadow-card border border-gray-100",
    glass: "glass rounded-2xl",
    dark: "glass-dark rounded-2xl text-white",
    bordered:
      "bg-white rounded-2xl border-2 border-gray-100 hover:border-electric",
  };

  return (
    <div
      className={cn(
        variants[variant],
        hover && "transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
