import { ToastContainer, toast } from "react-toastify";

const notify = (message: string) =>
  toast("🦄" + message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export default notify;
