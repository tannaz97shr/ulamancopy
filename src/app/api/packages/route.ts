import packages from "@/data/packages.json";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(packages);
}
