import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  className?: string;
  children?: ReactNode;
}

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "bg-[#FFCE22] p-2 rounded-sm text-black cursor-pointer hover:bg-[#FFD84D] active:bg-[#FFCE22]",
        className
      )}
    >
      {children}
    </button>
  );
}
