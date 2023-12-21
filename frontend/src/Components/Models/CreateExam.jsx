import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import "./examModel.css";
import { useCreateExam } from "../../lib/useFunctions/useFunctions";
import { errorAlert, succssAlert } from "../Alerts/Alerts";
import Loader from "../Loader/Loader";

const CreateExam = ({ close, userData }) => {
  const [course, setCourse] = useState("");
  const [loader, setLoader] = useState(false);

  const allCourses = [
    "choose",
    "photoshop",
    "illustrator",
    "premiere pro",
    "html",
    "css",
    "reactjs",
    "javascript",
  ];

  const submitHandler = async () => {
    setLoader(true);
    if (course === "choose" || course === "") {
      errorAlert("Please select a course");
      setLoader(false);
      return;
    } else {
      try {
        const res = await useCreateExam(
          `http://localhost:8000/api/v1/studets/${userData?._id}`,
          {
            examCourse: course,
          }
        );
        succssAlert("Exam Created successfully");
        setLoader(false);
        close();
      } catch (error) {
        errorAlert("Something went wrong");
        setLoader(false);
      }
    }
  };

  console.log(course);
  return (
    <div className="exam_model_container">
      {loader ? <Loader /> : null}
      <div className="exam_model_wrraper">
        <div className="exam_model_wrraper_header">
          <button onClick={close}>
            <IoIosCloseCircle />
          </button>
        </div>
        <div className="exam_model_wrraper_inputs">
          <div className="user_details">
            <p>Name : {userData?.fullName?.toUpperCase()}</p>
            <p>Course : {userData?.programName?.toUpperCase()}</p>
            <p>Email : {userData?.email}</p>
          </div>
          <div className="create_exam">
            <label htmlFor="exam_name">Enter Exam</label>
            <select
              name="exam_courses"
              id="exam_name"
              onChange={(e) => setCourse(e.target.value)}
            >
              {allCourses.map((ele) => (
                <option value={ele} key={ele} defaultValue={ele}>
                  {ele.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="submit_button"
            onClick={submitHandler}
          >
            Create Exam
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateExam;
