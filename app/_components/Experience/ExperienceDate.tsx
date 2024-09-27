import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const TimelineDate = ({ date, isOdd }: { date: string; isOdd: boolean }) => (
  <div
    className={`lg:absolute mb-2  ${
      isOdd
        ? "left-[40%] lg:pl-4 pr-4 lg:pr-0 md:-translate-x-4 lg:translate-x-2"
        : "right-[40%] md:-translate-x-4 lg:-translate-x-2 pr-4"
    } lg:transform lg:-translate-y-1/2 min-w-fit lg:min-w-0`}
  >
    <div className="hidden lg:flex items-center gap-2 text-gray-200 text-xs font-semibold md:px-2 py-1 rounded-custom">
      {!isOdd && <ChevronLeft size={16} />}
      {date}
      {isOdd && <ChevronRight size={16} />}
    </div>
    <div className="hidden md:flex lg:hidden items-center gap-2 text-gray-200 text-xs font-semibold md:px-2 py-1 rounded-custom shrink-0">
      {date} <ChevronRight size={16} />
    </div>
    <div className="flex md:hidden lg:hidden items-center gap-2 text-gray-200 text-xs font-semibold md:px-2 py-1 rounded-custom shrink-0">
      {date} <ChevronDown size={16} />
    </div>
  </div>
);

export default TimelineDate;
