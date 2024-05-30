import AddMovieForm from "@/components/forms/add-movie";
import { currentUser } from "@clerk/nextjs";

const AddMovie = async () => {
  const user = await currentUser();

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full pt-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-r from-gray-600/50 via-gray-700 to-gray-600/50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
      <div className="w-full max-w-3xl">
        <AddMovieForm userId={user?.id} />
      </div>
    </div>
  );
};

export default AddMovie;
