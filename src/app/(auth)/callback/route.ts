import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Handle auth callback from Clerk/Supabase
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Exchange code for session
  // This would be implemented based on your auth provider

  return NextResponse.redirect(new URL("/dashboard", request.url));
}
