import { cn } from "@/utils/lib";
import React from "react";

const Button = ({ children, className, variant = "default", ...props }) => {
  const styles = {
    default: "bg-primary text-white font-bold py-2 px-4 rounded",
    outlined:
      "border border-primary text-primary font-bold py-2 px-4 rounded hover:bg-primary hover:text-white transition-all duration-300 ease-in-out",
  };

  return (
    <button className={cn(styles[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
