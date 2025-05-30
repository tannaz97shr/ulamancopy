import data from "@/data/ulamandata.json";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_req: NextRequest) {
  return NextResponse.json(data);
}
