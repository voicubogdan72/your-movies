import { cn } from "@/lib/utils";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  mainCharacter,
  title,
  review,
  genre,
  filmScore,
  daySaw,
  header,
  className,
}: {
  title?: string | React.ReactNode;
  mainCharacter?: string | React.ReactNode;
  review?: string | React.ReactNode;
  genre?: React.ReactNode;
  daySaw?: React.ReactNode;
  filmScore?: React.ReactNode;
  header?: React.ReactNode;
  className?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
        {title}
      </div>

      <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
        Main mainCharacter: {mainCharacter}
      </div>
      <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
        Day when you saw the movie: {daySaw}
      </div>
      <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
        Film score: {filmScore}
      </div>
    </div>
  );
};
