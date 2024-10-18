"use client";
 
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
 
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
 
export type CalendarProps = React.ComponentProps<typeof DayPicker>;
 
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-5 bg-[#FEFFF8]", className)} // Achtergrondkleur wit
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-between pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-2 flex items-center justify-end", // Margin tussen de knoppen
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-[#002626] p-0 hover:opacity-100 text-[#FEFFF8]" // Kleur knoppen
        ),
        nav_button_previous: "absolute right-9",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-[#002626] rounded-md w-9 font-normal text-[0.8rem]", // Kleur van de header cellen
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-[#002626] text-[#A8FF1A] hover:bg-[#003d3d] focus:bg-[#003d3d] rounded-md", // Aangepaste kleuren voor geselecteerde dagen
        day_today:
          "bg-[#FEFFF8] text-[#A8FF1A] border-[#A8FF1A] border-[1.5px] rounded-md", // Transparante achtergrond voor vandaag
        day_outside:
          "day-outside text-[#002626] opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30", // Kleur voor dagen buiten de huidige maand
        day_disabled: "text-[#002626] opacity-50", // Kleur voor niet-beschikbare dagen
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <ChevronLeft className="h-4 w-4 text-[#A8FF1A]" />
        ),
        IconRight: ({ ...props }) => (
          <ChevronRight className="h-4 w-4 text-[#A8FF1A]" />
        ),
      }}
      {...props}
    />
  );
}
 
Calendar.displayName = "Calendar";
 
export { Calendar };