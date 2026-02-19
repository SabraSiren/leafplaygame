import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET() {
  try {
    const content = await readFile(
      join(process.cwd(), "app-adds.txt"),
      "utf-8"
    );
    return new NextResponse(content, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch {
    return new NextResponse("Not Found", { status: 404 });
  }
}
