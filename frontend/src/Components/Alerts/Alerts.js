import { toast } from "react-toastify";

export const succssAlert = (msg) => {
  const Alerts = {
    success: toast.success(msg, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    }),
  };
};

export const errorAlert = (msg) => {
  const Alerts = {
    error: toast.error(msg, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    }),
  };
};

export const warningAlert = (msg) => {
  const Alerts = {
    error: toast.warning(msg, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    }),
  };
};
