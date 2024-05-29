import AddMovieForm from "@/components/forms/add-movie";
import { currentUser } from "@clerk/nextjs";

const AddMovie = async () => {
  const user = await currentUser();

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <AddMovieForm userId={user?.id} />
    </div>
  );
};
export default AddMovie;
