import axios from "axios";
import { Link, json, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { BiShow, BiEdit } from "react-icons/bi";
import { MdDelete, MdAddCircle } from "react-icons/md";
import { SiTestcafe } from "react-icons/si";
import { HiCurrencyRupee } from "react-icons/hi";
import { FaHistory } from "react-icons/fa";
import styled from "styled-components";
import { Constant } from "../../constant";
import ViewModel from "./ViewModel";
import { Auth } from "../../Auth/Auth";
import { URL } from "../../RoutesUrl/URL";
import { useDelete } from "../../lib/useFunctions/useFunctions";
import { succssAlert } from "../../Components/Alerts/Alerts";
import Loader from "../../Components/Loader/Loader";
import CreateExam from "../../Components/Models/CreateExam";

const ViewAllStudents = () => {
  const [userData, setUserData] = useState(null);
  const [examState, setExamState] = useState(false);
  const [loader, setLoader] = useState(false);
  const [search, setSearch] = useState("");
  const [feeSearch, setFeeSearch] = useState("");
  const [examSearch, setExamSearch] = useState("");
  const [students, setStudents] = useState([]);
  const [fee, setFee] = useState([]);
  const [exams, setExams] = useState([]);
  const [filterExams, setFilterExams] = useState([]);
  const [filterStudents, setFilterStudents] = useState([]);
  const [feeFilterStudents, setFeeFilterStudents] = useState([]);
  const [viweModel, setViewModel] = useState(false);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  const closeViewModel = () => {
    setViewModel(!viweModel);
  };

  const getAllData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/students");
      const fee_res = await axios.get("http://localhost:8000/api/v1/fees");
      const exam_res = await axios.get("http://localhost:8000/api/v1/exam");
      setExams(exam_res.data.data);
      setFilterExams(exam_res.data.data);
      setStudents(res.data.data);
      setFee(fee_res.data.data);
      setFilterStudents(res.data.data);
      setFeeFilterStudents(fee_res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const actionStyle = {
    backgroundColor: "transparent",
    border: "none",
    bottonStyle: {
      fontSize: "2rem",
      cursor: "pointer",
    },
  };

  const columns = [
    {
      name: "ID",
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: "Photo",
      cell: (row) => (
        <div style={{ display: "flex" }}>
          <img
            style={{ borderRadius: "50%", width: "35px" }}
            src={row.photo}
            alt="Photo"
          />
        </div>
      ),
    },
    {
      name: " Full Name",
      selector: (row) => row.fullName.toUpperCase(),
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address.toUpperCase(),
    },
    {
      name: "Email",
      selector: (row) => row.email.toLowerCase(),
    },
    {
      name: "Course",
      selector: (row) => row.programName.toUpperCase(),
    },
    {
      name: "Action",
      cell: (row) => (
        <div style={{ display: "flex", gap: "6px" }}>
          <button style={actionStyle}>
            <BiShow
              style={actionStyle.bottonStyle}
              onClick={() => {
                closeViewModel();
                setUserId(row);
              }}
            />
          </button>
          <button style={actionStyle}>
            <BiEdit
              style={actionStyle.bottonStyle}
              onClick={() => {
                navigate(`/dashboard/register`, {
                  state: { edit: row },
                });
              }}
            />
          </button>
          <button style={actionStyle}>
            <MdDelete
              style={actionStyle.bottonStyle}
              onClick={async () => {
                if (window.confirm("Do You Want to Delete")) {
                  setLoader(true);
                  const res = await useDelete(
                    `http://localhost:8000/api/v1/students/${row._id}`
                  );
                  succssAlert("Student Deleted");
                  setLoader(false);
                  setFilterStudents((prevState) =>
                    prevState.filter((item) => {
                      return item._id != row._id;
                    })
                  );
                }
              }}
            />
          </button>
          <button style={actionStyle}>
            <HiCurrencyRupee
              style={actionStyle.bottonStyle}
              onClick={() => {
                navigate(`${URL.Dashboard}/${URL.Create_Fee}`, {
                  state: { StdData: row, id: row._id },
                });
              }}
            />
          </button>

          <button style={actionStyle}>
            <FaHistory
              style={actionStyle.bottonStyle}
              onClick={() => {
                navigate(`${URL.Dashboard}/${URL.Fee_History}`, {
                  state: { email: row.email },
                });
              }}
            />
          </button>

          <button style={actionStyle}>
            <SiTestcafe
              style={actionStyle.bottonStyle}
              onClick={() => {
                setExamState(!examState);
                setUserData(row);
                // console.log(row);
              }}
            />
          </button>
        </div>
      ),
    },
  ];

  const columnss = [
    {
      name: "#",
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: "Photo",
      cell: (row) => (
        <div style={{ display: "flex" }}>
          <img
            style={{ borderRadius: "50%", width: "35px" }}
            src={row?.stdId?.photo}
            alt="Photo"
          />
        </div>
      ),
    },
    {
      name: " First Name",
      selector: (row) => row?.stdId?.firstName?.toUpperCase(),
      sortable: true,
    },
    {
      name: "Middle Name",
      selector: (row) => row?.stdId?.middleName?.toUpperCase(),
    },
    {
      name: "Last Name",
      selector: (row) => row?.stdId?.lastName?.toUpperCase(),
    },
    {
      name: "Address",
      selector: (row) => row?.address?.toUpperCase(),
    },
    {
      name: "Action",
      cell: (row) => (
        <div style={{ display: "flex", gap: "6px" }}>
          <button style={actionStyle}>
            <BiShow
              style={actionStyle.bottonStyle}
              onClick={() => {
                navigate(`${URL.Dashboard}/${URL.Fee}`, {
                  state: {
                    feeData: row,
                    id: row._id,
                  },
                });
              }}
            />
          </button>
          <button style={actionStyle}>
            <MdDelete
              style={actionStyle.bottonStyle}
              onClick={async () => {
                try {
                  if (window.confirm("Are you sure you want to delete")) {
                    setLoader(true);
                  }
                  const res = await axios.delete(
                    `http://localhost:8000/api/v1/fees/${row._id}`
                  );
                  succssAlert("Successfully Deleted");
                  setLoader(false);

                  setFeeFilterStudents((prevState) =>
                    prevState.filter((item) => {
                      return item._id != row._id;
                    })
                  );
                } catch (error) {
                  setLoader(false);
                  console.log(error);
                }
              }}
            />
          </button>
        </div>
      ),
    },
  ];

  const examColumns = [
    {
      name: "#",
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: "Photo",
      cell: (row) => (
        <div style={{ display: "flex" }}>
          <img
            style={{ borderRadius: "50%", width: "35px" }}
            src={row?.stdId?.photo}
            alt="Photo"
          />
        </div>
      ),
    },
    {
      name: " Name",
      selector: (row) => row?.stdId?.firstName?.toUpperCase(),
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row?.stdId?.address?.toUpperCase(),
    },
    {
      name: "E-mail",
      selector: (row) => row?.stdId?.email?.toUpperCase(),
    },
    {
      name: "Course",
      selector: (row) => row?.course?.toUpperCase(),
    },
    {
      name: "Action",
      cell: (row) => (
        <div style={{ display: "flex", gap: "6px" }}>
          <button style={actionStyle}>
            <BiShow
              style={actionStyle.bottonStyle}
              onClick={() => {
                navigate(URL.Result, {
                  state: {
                    data: row,
                  },
                });
              }}
            />
          </button>
          <button style={actionStyle}>
            <MdDelete
              style={actionStyle.bottonStyle}
              onClick={async () => {
                try {
                  setLoader(true);
                  if (window.confirm("Are you sure you want to delete")) {
                    const res_exam = await axios.delete(
                      `http://localhost:8000/api/v1/exam/${row._id}`
                    );
                    const res_course = await axios.delete(
                      `http://localhost:8000/api/v1/examTaken?id=${row.stdId._id}&course=${row.course}`
                    );

                    succssAlert("Successfully Deleted");
                    setLoader(false);
                    setFilterExams((prevState) =>
                      prevState.filter((item) => {
                        return item._id != row._id;
                      })
                    );
                  }
                  setLoader(false);
                } catch (error) {
                  setLoader(false);
                  console.log(error);
                }
              }}
            />
          </button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    getAllData();
  }, []);

  useEffect(() => {
    const result = students.filter((ele) => {
      return ele.fullName.toLowerCase().match(search.toLowerCase());
    });
    const feeResult = fee.filter((ele) => {
      return ele.fullName.toLowerCase().match(feeSearch.toLowerCase());
    });
    const examResult = exams.filter((ele) => {
      return ele.fullName.toLowerCase().match(examSearch.toLowerCase());
    });
    setFilterExams(examResult)
    setFilterStudents(result);
    setFeeFilterStudents(feeResult);
  }, [search, feeSearch, examSearch]);

  const { login_session } = Auth();

  if (login_session === "loggedIn") {
    return (
      <Section>
        {loader ? <Loader /> : null}
        {examState ? (
          <CreateExam close={() => setExamState(false)} userData={userData} />
        ) : null}
        <div className="view_student_wrapper">
          <div className="view_students_header">
            <h1>Students</h1>
            <Link to="/dashboard/register" className="add_student_wrapper">
              <MdAddCircle />
            </Link>
          </div>
          <div className="table_wrapper">
            <DataTable
              columns={columns}
              data={filterStudents}
              pagination
              fixedHeader
              highlightOnHover
              subHeader
              subHeaderComponent={
                <div className="input_wrapper">
                  <input
                    type="search"
                    placeholder="Search By First Name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              }
            />
          </div>
        </div>
        {viweModel ? (
          <ViewModel userDetails={userId} closeViewModel={closeViewModel} />
        ) : null}

        <div className="view_fee_container">
          <div className="fee_students_header">
            <h1>Fee Receipts</h1>
          </div>

          <div className="table_wrapper">
            <DataTable
              columns={columnss}
              data={feeFilterStudents.reverse()}
              pagination
              fixedHeader
              highlightOnHover
              subHeader
              subHeaderComponent={
                <div className="input_wrapper">
                  <input
                    type="search"
                    placeholder="Search By First Name"
                    value={feeSearch}
                    onChange={(e) => setFeeSearch(e.target.value)}
                  />
                </div>
              }
            />
          </div>
        </div>

        <div className="view_fee_container">
          <div className="fee_students_header">
            <h1>Examination</h1>
          </div>

          <div className="table_wrapper">
            <DataTable
              columns={examColumns}
              data={filterExams}
              pagination
              fixedHeader
              highlightOnHover
              subHeader
              subHeaderComponent={
                <div className="input_wrapper">
                  <input
                    type="search"
                    placeholder="Search By First Name"
                    value={examSearch}
                    onChange={(e) => setExamSearch(e.target.value)}
                  />
                </div>
              }
            />
          </div>
        </div>
      </Section>
    );
  } else {
    return <div>Please Login First</div>;
  }
};

export default ViewAllStudents;

const Section = styled.section`
  font-family: ${Constant.Fonts.primaryFont};
  padding: 4rem;
  @media only screen and (max-width: 768px) {
    padding: 4rem 1rem;
  }
  .view_student_wrapper {
    padding: 8px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 4px;
    .view_students_header {
      display: flex;
      justify-content: space-between;
      padding: 0 15px;
      h1 {
        font-size: 3rem;
        color: ${Constant.Colors.seconderyColor};
        letter-spacing: 1px;
        text-transform: uppercase;
        @media only screen and (max-width: 540px) {
          font-size: 2.4rem;
        }
      }
      .add_student_wrapper {
        align-items: flex-end;

        svg {
          font-size: 30px;
          color: ${Constant.Colors.seconderyColor};
          transition: ease-in-out 0.3s;
          cursor: pointer;
          &:hover {
            color: #000;
          }

          @media only screen and (max-width: 540px) {
            font-size: 2.4rem;
          }
        }
      }
    }

    .table_wrapper {
      .input_wrapper {
        input {
          padding: 8px;
          outline: none;
          border: 2px solid ${Constant.Colors.seconderyColor};
          border-radius: 3px;
        }
      }
    }
  }

  .view_fee_container {
    margin-top: 6rem;
    padding: 3rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    .table_wrapper {
      .input_wrapper {
        input {
          padding: 8px;
          outline: none;
          border: 2px solid ${Constant.Colors.seconderyColor};
          border-radius: 3px;
        }
      }
    }
  }

  /* Fee */

  .fee_students_header {
    display: flex;
    justify-content: space-between;
    h1 {
      font-size: 30px;
      color: ${Constant.Colors.seconderyColor};
      letter-spacing: 1px;
      text-transform: uppercase;
      @media only screen and (max-width: 540px) {
        font-size: 2.4rem;
      }
    }
  }
`;
