import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }

  try {
    const body = await req.json();
    const {
      title,
      genre,
      daySaw,
      mainCharacter,
      filmDirector,
      review,
      userId,
      filmScore,
    } = body;

    if (!title || !genre || !userId || !filmScore) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const newMovieWatched = await prisma.watchedMovies.create({
      data: {
        title,
        genre,
        daySaw: daySaw ? new Date(daySaw) : null,
        mainCharacter: mainCharacter || null,
        filmDirector: filmDirector || null,
        review: review || null,
        filmScore: Number(filmScore),
        userId,
      },
    });
    // if (newMovieWatched) {
    //   try {
    //     await prisma.user.create({
    //       data: {
    //         userId,
    //         watchedMovieId: newMovieWatched.id,
    //       },
    //     });
    //   } catch (e: any) {
    //     console.log(e);
    //     return NextResponse.json(
    //       { message: "Internal Server Error" },
    //       { status: 500 }
    //     );
    //   }
    // }

    return NextResponse.json({
      message: "Added Movie",
      movie: newMovieWatched,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
