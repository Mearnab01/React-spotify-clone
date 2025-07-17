import { Loader2 } from "lucide-react";

const Loader = ({ size = "md", variant = "default" }) => {
  const sizeClasses = {
    sm: "h-5 w-5",
    md: "h-8 w-8",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  };

  const variantClasses = {
    default: "text-white",
    primary: "text-blue-500",
    success: "text-green-500",
    danger: "text-red-500",
    premium: "text-purple-500",
    gradient:
      "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500",
  };

  return (
    <div className="flex items-center justify-center">
      <Loader2
        className={`animate-spin ${sizeClasses[size]} ${variantClasses[variant]}`}
        style={{
          animationDuration: "0.8s",
          strokeWidth: size === "xl" ? 1.5 : 2,
        }}
      />
    </div>
  );
};

export default Loader;
