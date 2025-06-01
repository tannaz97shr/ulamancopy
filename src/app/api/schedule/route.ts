import schedule from "@/data/schedule.json";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(schedule);
}
