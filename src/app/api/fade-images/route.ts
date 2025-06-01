import fadeImages from "@/data/fadeImages.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(fadeImages);
}
