import mapData from "@/data/mapPoints.json";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(mapData);
}
