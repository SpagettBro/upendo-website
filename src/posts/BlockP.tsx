"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

const BlockP: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="pt-[5rem] pb-0 bg-[#002626] px-[20px] md:px-[120px] flex">
      <div className="grid grid-cols-12 gap-[20px] w-full items-stretch">
        {/* Left Text Column */}
        <div className="col-span-12 md:col-start-1 md:col-span-6 flex flex-col items-start text-left">
          <h2 className="font-heading text-heading text-[#EAFFBD] mb-1">
            Heading
          </h2>
          <p className="font-body text-body text-white mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            vitae risus nec tortor viverra molestie vel non mauris. Nulla
            porttitor sit amet quam quis dapibus. Sed porttitor lectus in erat
            cursus, nec commodo ligula accumsan.
          </p>
          <div className="mt-4 mb-[5rem]">
            <button className="font-button bg-[#a8ff1a] text-buttonText px-6 h-[40px] rounded-full">
              Submit
            </button>
          </div>
        </div>

        {/* Calendar */}
        <div className="col-span-12 md:col-span-6 flex items-center justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border mx-auto w-full max-w-max mb-16"
          />
        </div>
      </div>
    </div>
  );
};

export default BlockP;
