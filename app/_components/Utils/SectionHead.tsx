import { cn } from "@/lib/utils";
import React from "react";

const SectionHead = ({
  first,
  second,
  className,
}: {
  first: string;
  second: string;
  className?: string;
}) => {
  return (
    <h3 className={cn("section-head py-5", className)}>
      {first} <span className="font-semibold">{second}</span>
    </h3>
  );
};

export default SectionHead;
