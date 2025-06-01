"use client";

import { fetchSchedule } from "@/lib/fetchSchedule";
import { ISchedule } from "@/types/general";
import { useEffect, useState } from "react";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function ScheduleSection() {
  const [schedule, setSchedule] = useState<ISchedule[]>([]);

  useEffect(() => {
    fetchSchedule().then(setSchedule).catch(console.error);
  }, []);

  const getBgClass = (activity: string) => {
    if (activity.includes("Yoga")) return "bg-[#d9ebc4]";
    if (activity.includes("Sound")) return "bg-[#c6d4d3]";
    if (activity.includes("Yin")) return "bg-[#d6f2f1]";
    return "";
  };

  return (
    <section className="bg-beige py-20 px-4">
      <div className="text-center mb-10">
        <h2 className="text-gold text-3xl font-serif">Weekly Schedule</h2>
        <p className="text-brown mt-2">Advanced Booking Is Recommended</p>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="min-w-[800px] table-fixed border-separate border-spacing-0 mx-auto">
          <thead>
            <tr>
              <th className="w-20"></th>
              {days.map((day) => (
                <th
                  key={day}
                  className="text-gold text-sm font-medium py-4 border-b border-l border-gold"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {schedule.map((row) => (
              <tr key={row.time}>
                <td className="text-gold text-sm py-4 pr-2 border-b border-r border-gold align-top">
                  {row.time}
                </td>
                {row.activities.map((activity, i) => (
                  <td
                    key={i}
                    className="border-b border-r border-gold h-[80px] align-top px-2"
                  >
                    {activity ? (
                      <div
                        className={`text-center text-sm py-4 rounded-md ${getBgClass(
                          activity
                        )}`}
                      >
                        {activity}
                      </div>
                    ) : null}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-sm text-gold underline text-left">
        <a href="/api/schedule-pdf" target="_blank">
          DOWNLOAD PDF
        </a>
      </div>
    </section>
  );
}
