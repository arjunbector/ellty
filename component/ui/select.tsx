import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CheckboxProps extends React.ComponentPropsWithoutRef<"input"> {
  className?: string;
  label?: ReactNode;
}

export default function Checkbox({
  className,
  label,
  ...props
}: CheckboxProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer justify-between">
      {label && <span className="text-sm">{label}</span>}
      <input
        type="checkbox"
        {...props}
        className={cn(
          "size-5 font-light bg-background rounded-md",
          "checked:bg-[#FFCE22]",
          "focus:outline-none",
          className
        )}
      />
    </label>
  );
}
