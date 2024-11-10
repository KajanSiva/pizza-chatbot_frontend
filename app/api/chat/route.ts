import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message, sessionId } = await req.json();

    // Use the environment variable for the backend URL
    const backendUrl = process.env.BACKEND_URL;

    if (!backendUrl) {
      throw new Error("Backend URL is not defined in environment variables");
    }

    const response = await fetch(`${backendUrl}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, sessionId }),
    });

    if (!response.ok) {
      // Handle HTTP errors
      const errorData = await response.json();
      console.error("Backend error:", errorData);
      return NextResponse.json(
        { error: "Failed to process the request" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
