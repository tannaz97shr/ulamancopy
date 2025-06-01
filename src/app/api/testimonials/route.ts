import testimonials from "@/data/testimonials.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(testimonials);
}
