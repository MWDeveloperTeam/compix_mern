import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { Constant } from "../../constant";
import axios from "axios";
import { emptyInputData } from "./exampledata";
import { Auth } from "../../Auth/Auth";
import Loader from "../../Components/Loader/Loader";
import { errorAlert, succssAlert } from "../../Components/Alerts/Alerts";
import {
  usePost,
  usePhoto,
  usePatch,
} from "../../lib/useFunctions/useFunctions";
import { URL } from "../../RoutesUrl/URL";

const RegisterStudent = () => {
  const location = useLocation();
  const [submitting, setSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues:
      location?.state == null ? emptyInputData : location?.state?.edit,
    mode: "all",
  });

  const formData = new FormData();
  formData.append("photo", selectedFile);

  const onSubmit = async (data) => {
    console.log(data);
    if (selectedFile === undefined || selectedFile === null) {
      errorAlert("Please Upload Photo");
      setSubmitting(false);
      return;
    } else if (selectedFile.size > 200000) {
      errorAlert("Photo Must be less than 200kb");
      setSubmitting(false);
      return;
    }
    setSubmitting(true);

    if (location.state == null) {
      const res = await usePost("http://localhost:8000/api/v1/students", data);
      if (res.status === 403 || res.status === 500) {
        setSubmitting(false);
      }
      const fileRes = await usePhoto(
        `http://localhost:8000/api/v1/students/upload/${res.data.data._id}`,
        formData
      );

      if (fileRes.status === 403 || fileRes.status === 500) {
        setSubmitting(false);
        errorAlert("Photo Not Uploaded");
      }

      if (res.status === 201) {
        reset(emptyInputData);
        setSubmitting(false);
        succssAlert("Register Successfully");
        navigate(URL.Dash_view_student);
      }

      // Else Part Start
    } else {
      const res = await usePatch(
        `http://localhost:8000/api/v1/students/${location?.state?.edit?._id}`,
        data
      );
      if (res.status === 403 || res.status === 500) {
        setSubmitting(false);
        errorAlert("Please try again");
      }
      console.log(res);

      const fileRes = await usePhoto(
        `http://localhost:8000/api/v1/students/upload/${location?.state?.edit?._id}`,
        formData
      );

      if (fileRes.status === 403 || fileRes.status === 500) {
        setSubmitting(false);
        errorAlert("Photo Not Uploaded");
      }

      if (res.status === 200) {
        reset(emptyInputData);
        setSubmitting(false);
        succssAlert("Update Successfully");
        navigate(URL.Dash_view_student);
      }
    }
  };

  const { login_session } = Auth();

  if (login_session === "loggedIn") {
    return (
      <Section>
        {submitting ? <Loader /> : null}
        <div className="register_main_wrapper">
          <div className="register_header">
            <h1>Register New Student</h1>
          </div>
          <div className="register_input_Wrapper">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="register_form">
                {/* input Wrapper */}
                <div className="input_wrapper">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    {...register("firstName", {
                      required: "Frist Name is Required",
                      minLength: {
                        value: 4,
                        message: "First must be at least 4 digits",
                      },
                    })}
                  />
                  <p style={{ color: "red" }}>{errors.firstName?.message}</p>
                </div>

                <div className="input_wrapper">
                  <label htmlFor="middleName">Middle Name</label>
                  <input
                    type="text"
                    id="middleName"
                    {...register("middleName")}
                  />
                  <p style={{ color: "red" }}>
                    {errors.middleName && errors.middleName.message}
                  </p>
                </div>

                <div className="input_wrapper">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    {...register("lastName", {
                      required: "Middle Name is Required",
                      minLength: {
                        value: 2,
                        message: "Middle Name must be at least 2 digits",
                      },
                    })}
                  />
                  <p style={{ color: "red" }}>{errors.lastName?.message}</p>
                </div>

                <div className="input_wrapper">
                  <label htmlFor="fatherName">Father Name</label>
                  <input
                    type="text"
                    id="fatherName"
                    {...register("fatherName", {
                      required: "Father Name is Required",
                      minLength: {
                        value: 4,
                        message: "Father Name must be at least 4 digits",
                      },
                    })}
                  />
                  <p style={{ color: "red" }}>{errors.fatherName?.message}</p>
                </div>

                <div className="input_wrapper">
                  <label htmlFor="nationality">Nationality</label>
                  <input
                    type="text"
                    id="nationality"
                    {...register("nationality", {
                      required: "Nationality is Required",
                      minLength: {
                        value: 4,
                        message: "Nationality must be at least 4 digits",
                      },
                    })}
                  />
                  <p style={{ color: "red" }}>{errors.nationality?.message}</p>
                </div>

                <div className="input_wrapper">
                  <label htmlFor="domicile">State of Domicile</label>
                  <input
                    type="text"
                    id="domicile"
                    {...register("domicile", {
                      required: "Domicile is Required",
                      minLength: {
                        value: 4,
                        message: "Domicile must be at least 4 digits",
                      },
                    })}
                  />
                  <p style={{ color: "red" }}>{errors.domicile?.message}</p>
                </div>

                <div className="input_wrapper">
                  <label htmlFor="dateOfBirth">Date of Birth</label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    {...register("dateOfBirth", {
                      required: "Date of Birth is required",
                    })}
                  />
                  <p style={{ color: "red" }}>{errors.dateOfBirth?.message}</p>
                </div>

                <div className="input_wrapper">
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    {...register("gender", {
                      required: "Gender is required",
                    })}
                    defaultValue="Choose Gender"
                  >
                    <option value="Choose">Choose Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <p style={{ color: "red" }}>{errors.gender?.message}</p>
                </div>

                <div className="input_wrapper">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email Address is required",
                      pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: "Please enter valid Email",
                      },
                    })}
                  />
                  <p style={{ color: "red" }}>{errors.email?.message}</p>
                </div>

                <div className="input_wrapper">
                  <label htmlFor="phone">Contact</label>
                  <input
                    type="text"
                    id="phone"
                    {...register("phone", {
                      required: "Contact is required",
                      pattern: {
                        value: /^\d{10}$/,
                        message: "Please enter a valid 10 digit Phone Number",
                      },
                    })}
                  />
                  <p style={{ color: "red" }}>{errors.phone?.message}</p>
                </div>

                <div className="input_wrapper">
                  <label htmlFor="sourceOfInformation">
                    Sourse in Information
                  </label>
                  <select
                    id="sourceOfInformation"
                    {...register("sourceOfInformation", {
                      required: "Sourse in Information is required",
                    })}
                    defaultValue="Choose Gender"
                  >
                    <option value="Choose">Choose One</option>
                    <option value="web serach">Web Serach</option>
                    <option value="friends recomendation">
                      Friends Recomendation
                    </option>
                    <option value="newspaper">Newspaper</option>
                    <option value="visual add">Visual Add</option>
                  </select>
                  <p style={{ color: "red" }}>
                    {errors.sourceOfInformation?.message}
                  </p>
                </div>

                <div className="input_wrapper">
                  <label htmlFor="qualification">
                    Education Qualifications
                  </label>
                  <input
                    type="text"
                    id="qualification"
                    {...register("qualification", {
                      required: "Education Qualifications is required",
                    })}
                  />
                  <p style={{ color: "red" }}>
                    {errors.qualification?.message}
                  </p>
                </div>

                <div className="input_wrapper" id="address">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    {...register("address", {
                      required: "Address is required",
                    })}
                  />
                  <p style={{ color: "red" }}>{errors.address?.message}</p>
                </div>

                <div className="input_wrapper" id="programCode">
                  <label htmlFor="programCode">Program Code</label>
                  <input
                    type="number"
                    id="programCode"
                    {...register("programCode", {
                      required: "Program Code is required",
                      minLength: {
                        value: 4,
                        message: "Program Code must be 4 digits",
                      },
                    })}
                  />
                  <p style={{ color: "red" }}>{errors.programCode?.message}</p>
                </div>

                <div className="input_wrapper" id="programName">
                  <label htmlFor="programName">Program Name</label>
                  <select
                    name="programName"
                    defaultValue="Choose"
                    id="programName"
                    {...register("programName", {
                      required: "Program Name is required",
                    })}
                  >
                    <option value="Choose">Choose One</option>
                    <option value="Web Development Frontend">
                      Web Development Front End
                    </option>
                    <option value="web development backend">
                      Web Development Back End
                    </option>
                    <option value="web development full stack">
                      Web Development Full Stack
                    </option>
                    <option value="graphic designing">Graphic Designing</option>
                    <option value="architecture designing">
                      Architecture Designing
                    </option>
                    <option value="product and packaging">
                      Product and Packaging
                    </option>
                    <option value="motion graphics">Motion Graphics</option>
                    <option value="3d designing">3D Designing</option>
                  </select>
                  <p style={{ color: "red" }}>{errors.programName?.message}</p>
                </div>

                <div className="input_wrapper" id="academicSession">
                  <label htmlFor="academicSession">Acedemic Session</label>
                  <input
                    type="text"
                    id="academicSession"
                    {...register("academicSession", {
                      required: "Academic Session is required",
                    })}
                  />
                  <p style={{ color: "red" }}>
                    {errors.acedemicSession?.message}
                  </p>
                </div>

                <div className="input_wrapper" id="lastInstituteName">
                  <label htmlFor="lastInstituteName">Last Institute Name</label>
                  <input
                    type="text"
                    id="lastInstituteName"
                    {...register("lastInstituteName", {
                      required: "Institute Name is required",
                    })}
                  />
                  <p style={{ color: "red" }}>
                    {errors.lastInstituteName?.message}
                  </p>
                </div>

                <div className="input_wrapper" id="lastBoardCollege">
                  <label htmlFor="lastBoardCollege">
                    Last Board/College/Univesity
                  </label>
                  <input
                    type="text"
                    id="lastBoardCollege"
                    {...register("lastBoardCollege", {
                      required: "Board/College/Univesity is required",
                    })}
                  />
                  <p style={{ color: "red" }}>
                    {errors.lastBoardCollege?.message}
                  </p>
                </div>

                <div className="input_wrapper" id="yearOfPassing">
                  <label htmlFor="yearOfPassing">Year of Passing</label>
                  <input
                    type="text"
                    id="yearOfPassing"
                    {...register("yearOfPassing", {
                      required: "Passing Year is required",
                    })}
                  />
                  <p style={{ color: "red" }}>
                    {errors.yearOfPassing?.message}
                  </p>
                </div>

                <div className="input_wrapper" id="stream">
                  <label htmlFor="stream">Stream</label>
                  <input
                    type="text"
                    id="stream"
                    {...register("stream", {
                      required: "Stream is required",
                    })}
                  />
                  <p style={{ color: "red" }}>{errors.stream?.message}</p>
                </div>

                <div className="input_wrapper" id="marks">
                  <label htmlFor="marks">Marks % </label>
                  <input
                    type="text"
                    id="marks"
                    {...register("marks", {
                      required: "Marks is required",
                    })}
                  />
                  <p style={{ color: "red" }}>{errors.marks?.message}</p>
                </div>

                <div className="input_wrapper">
                  <label htmlFor="photo">Choose Photo</label>
                  <input
                    type="file"
                    id="photo"
                    // onChange={fileHandler}
                    onChange={(e) => setSelectedFile(e.target.files[0])}
                  />
                </div>
              </div>
              <div className="submit_wrapper">
                <button type="submit">
                  {/* {location.state == null ? submitting : "Update"} */}
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    );
  } else {
    return <div>Please Login First</div>;
  }
};

export default RegisterStudent;

const Section = styled.section`
  font-family: ${Constant.Fonts.primaryFont};
  width: 100%;
  height: auto;
  padding: 50px;
  display: flex;
  justify-content: center;
  .register_main_wrapper {
    width: 100%;
    max-width: 1366px;
    height: 100%;

    padding: 2rem;
    border-radius: 0.4rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

    .register_header {
      text-align: center;
      color: ${Constant.Colors.seconderyColor};
      font-size: 2.5rem;
    }

    .register_input_Wrapper {
      padding-top: 2rem;

      .register_form {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 3rem;
        .input_wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;

          > div {
            display: flex;
            > div {
              /* background-color: red; */
              display: flex;
              flex-direction: column;
              text-align: center;
              label {
                margin-right: 10px;
              }
              input {
                margin: 0 1rem;
              }
            }
          }

          label {
            font-size: 1.6rem;
            color: #444444;
            text-transform: uppercase;
          }

          input,
          select {
            padding: 1rem;
            outline: none;
            border: 1px solid ${Constant.Colors.seconderyColor};
            border-radius: 4px;

            &:focus {
              border: 1px solid ${Constant.Colors.primaryColorLight};
              box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
            }
          }

          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          input[type="file"] {
            padding: 0.7rem 1rem;
          }

          input[type="number"] {
            appearance: textfield;
          }
        }
      }

      .submit_wrapper {
        padding-top: 3rem;
        button {
          padding: 15px 140px;
          background-color: ${Constant.Colors.primaryColor};
          border: none;
          border-radius: 4px;
          outline: none;
          color: #fff;
          cursor: pointer;
          letter-spacing: 1px;
          font-size: 2rem;
          transition: ease-in-out 0.3s;

          &:hover {
            background-color: ${Constant.Colors.seconderyColor};
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 10px;

    .register_main_wrapper {
      padding: 5px;
    }

    .register_header {
      font-size: 1.6rem !important;
      padding: 0px !important;
    }

    .register_form {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
    }

    .submit_wrapper {
      width: 100%;
      button {
        padding: 15px 0 !important;
        width: 100%;
      }
    }
  }
`;
