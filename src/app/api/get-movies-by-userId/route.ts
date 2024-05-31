import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  if (req.method !== "GET") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }
  const userId = req.nextUrl.searchParams.get("userId");
  if (!userId) {
    return NextResponse.json({ message: "No user found" }, { status: 405 });
  }

  try {
    const movieListByUser = await prisma.watchedMovies.findMany({
      where: {
        userId,
      },
    });

    return NextResponse.json({
      message: "List of movie you saw",
      movies: movieListByUser,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
