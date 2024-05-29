"use client";

import React, { ChangeEvent, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import notifyError from "../notify/errorNotify";
import notify from "../notify/succesNotify";

const AddMovieForm = (userId: any) => {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    daySaw: "",
    mainCharacter: "",
    filmDirector: "",
    review: "",
    filmScore: 0,
    userId: userId.userId,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFormData({
      title: "",
      genre: "",
      daySaw: "",
      mainCharacter: "",
      filmDirector: "",
      review: "",
      filmScore: 0,
      userId: userId.userId,
    });
    try {
      const res = await fetch("/api/add-movie", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoading(false);
      if (!res.ok) {
        setError((await res.json()).message);
        notifyError("Error added the movie!");
        return;
      } else {
        notify("Movie was added!");
      }
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Your-Movies
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Add the movie you watched
      </p>

      <form className="my-8" onSubmit={onSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="title">Title of movie</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Tyler"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="genre">Genre</Label>
            <Input
              id="genre"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              placeholder="Horror"
              type="text"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="daySaw">The day you saw him</Label>
          <Input
            id="daySaw"
            name="daySaw"
            value={formData.daySaw}
            onChange={handleChange}
            placeholder="01-01-2024"
            type="date"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="mainCharacter">Main Character</Label>
          <Input
            id="mainCharacter"
            name="mainCharacter"
            value={formData.mainCharacter}
            onChange={handleChange}
            placeholder="Bogdan Voicu"
            type="text"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="filmDirector">Film Director</Label>
          <Input
            id="filmDirector"
            name="filmDirector"
            value={formData.filmDirector}
            onChange={handleChange}
            placeholder="Quentin Tarantino"
            type="text"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <Label htmlFor="review">Your opinions</Label>
          <Textarea
            id="review"
            name="review"
            value={formData.review}
            onChange={handleChange}
            placeholder="What do you think about the movie"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="filmScore">Film Score</Label>
          <Input
            type="number"
            min={1}
            max={10}
            id="filmScore"
            name="filmScore"
            value={formData.filmScore}
            onChange={handleChange}
            placeholder="rate the movie between 1-10"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Add &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default AddMovieForm;
