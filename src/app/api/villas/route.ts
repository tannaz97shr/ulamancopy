import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "src/data/villas.json");
  const fileContent = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(fileContent);
  return NextResponse.json(data);
}
