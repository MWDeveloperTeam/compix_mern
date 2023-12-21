import axios from "axios";
import { errorAlert } from "../../Components/Alerts/Alerts";

export const usePost = async (url, data) => {
  try {
    const res = await axios.post(url, data);
    return res;
  } catch (error) {
    errorAlert(error.response.data.message);
    return error.response;
  }
};

export const usePatch = async (url, data) => {
  try {
    const res = await axios.patch(url, data);
    return res;
  } catch (error) {
    errorAlert(error.response.data.message);
    return error.response;
  }
};

export const usePhoto = async (url, data) => {
  try {
    const res = await axios.patch(url, data);
    return res;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export const useDelete = async (url) => {
  try {
    const res = await axios.delete(url);
    return res;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

// fee

export const useFeePost = async (url, data) => {
  try {
    const res = await axios.post(url, data);
    return res;
  } catch (error) {
    errorAlert(error.response.data.message);
    return error.response;
  }
};

// examination

export const useExamGet = async (url) => {
  try {
    const res = await axios.get(url);
    return res;
  } catch (error) {
    // errorAlert(error.response.data.message);
    return error.response;
  }
};

export const useExamPost = async (url, data) => {
  try {
    const res = await axios.post(url, data);
    return res;
  } catch (error) {
    errorAlert(error.response);
    console.log(error.response);
    return error.response;
  }
};

export const useCreateExam  = async (url, data) => {
  try {
    const res = await axios.patch(url, data);
    return res;
  } catch (error) {
    errorAlert(error.response.data.message);
    return error.response;
  }
}
