import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");
  if (!url) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  try {
    const res = await fetch(url, {
      method: "HEAD",
      cache: "no-store",
      headers: { "User-Agent": "LeafPlay/1.0" },
    });
    return NextResponse.json({ ok: res.ok });
  } catch {
    return NextResponse.json({ ok: false });
  }
}
