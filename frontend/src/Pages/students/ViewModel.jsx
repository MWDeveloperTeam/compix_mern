import axios from "axios";
import React from "react";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useEffect } from "react";
import styled from "styled-components";
import { Constant } from "../../constant/index";
import LogoImg from "../../Media/Compix-Logo.png";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
  Font,
} from "@react-pdf/renderer";
import MyFonts from "./fonts/Roboto-Bold.ttf";

Font.register({ family: "Fontss", src: MyFonts });

const styles = StyleSheet.create({
  page: {
    display: "initiat",
    width: "100%",
    height: "100%",
    padding: 15,
  },
  header_section: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "red",
    width: "100%",
    height: 100,
  },
  header_left: {
    backgroundColor: "white",
    width: "20%",
  },
  header_middle: {
    // backgroundColor: "green",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,

    enroll: {
      borderBottom: "1px solid #000",
      textTransform: "uppercase",
      fontSize: "20px",
      // fontFamily: Constant.Fonts.primaryFont,
      fontFamily: "Fontss",
    },
  },
  header_right: {
    // backgroundColor: "blue",
    width: "20%",
    padding: 2,
    border: "1px solid #000",
    borderRadius: 3,
  },
  // program Name Code Style

  proName_code: {
    // backgroundColor: "red",
    marginTop: 10,
    width: "100%",
    padding: "10px 0",
    gap: 35,
    flexDirection: "row",
    fontSize: 16,
  },

  // Student Name Code Style
  std_name: {
    // backgroundColor: "blue",
    padding: "10px 0",
    fontSize: 16,
    flexDirection: "row",
    // gap: 15,
    justifyContent: "space-between",
  },

  fieldStyle: {
    borderBottom: "1px solid #000",
    padding: "0 10px",
    textTransform: "capitalize",
    letterSpacing: 2,
  },

  // father Name Code Style
  fatherName: {
    flexDirection: "row",
    gap: 20,
    padding: "10px 0",
    fontSize: 16,
  },

  fatherNameTitle: {
    fontFamily: "Fontss",
  },
  fatherNameContent: {
    // backgroundColor: "blue",
    width: "80%",
    borderBottom: "1px solid #000",
    textTransform: "capitalize",
    letterSpacing: 2,
  },

  // Date and Gender Style

  date_gender: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 16,
    padding: "10px 0",
  },

  // address and contact

  address_contact: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    padding: "10px 0",
    fontSize: 16,
  },

  add_con: {
    flexDirection: "row",
    gap: 10,
  },

  address: {
    // backgroundColor: "blue",
    width: "65%",
    borderBottom: "1px solid #000",
    textTransform: "capitalize",
    letterSpacing: 2,
    padding: "0 15px",
  },

  // Source
  source: {
    flexDirection: "row",
    padding: "10px 0",
    fontSize: 16,
    marginTop: "10px",
    justifyContent: "space-between",
    alignItems: "flex-end",

    source_text: {
      fontSize: "11px",
      flexDirection: "row",
      gap: "6px",
    },
  },

  logo_img: {
    width: "100%",
    height: "100%",
  },

  // Education
  education: {
    fontSize: 16,
    marginTop: "10px",

    edua_Table: {
      border: "1px solid #000",
      borderRadius: 4,
      marginTop: "10px",
    },
  },

  signature: {
    flexDirection: "row",
    marginTop: "10px",
    padding: "10px 0",
    fontSize: "12px",
  },
});

const MyDocument = ({ user }) => {
  return (
    <Document
      title={`${user?.firstName} ${user?.middleName} ${user?.lastName}`}
    >
      <Page size="A4" style={styles.page}>
        {/* Header Section Wrapper */}
        <View style={styles.header_section}>
          {/* Logo Section Start */}
          <View style={styles.header_left}>
            <Image style={styles.logo_img} source={LogoImg} />
          </View>
          {/* Header Enrollment Section */}
          <View style={styles.header_middle}>
            <Text style={styles.header_middle.enroll}>
              Student Enrollment Form
            </Text>
            <Text
              style={{
                borderBottom: 2,
                borderColor: "white",
                borderStyle: "dashed",
              }}
            >
              Acedemic Session 2023
            </Text>
          </View>
          {/* Photo Section Start */}
          <View style={styles.header_right}>
            <Image
              style={styles.logo_img}
              source={user?.photo}
            />
          </View>
        </View>
        {/* Program Name Program Code Section Wrapper */}
        <View style={styles.proName_code}>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <View>
              <Text style={{ fontFamily: "Fontss" }}>Program Name :</Text>
            </View>
            <View
              style={{
                borderBottom: "1px solid #000",
                padding: "0 15px 2px 15px",
              }}
            >
              <Text style={{ textTransform: "capitalize" }}>
                {user?.programName}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <View>
              <Text>Program Code :</Text>
            </View>
            <View
              style={{
                borderBottom: "1px solid #000",
                padding: "0 15px 2px 15px",
              }}
            >
              <Text>{user?.programCode}</Text>
            </View>
          </View>
        </View>
        {/* Student Name Section */}
        <View style={styles.std_name}>
          <View style={{ gap: 4, alignItems: "center" }}>
            <Text style={{ fontFamily: "Fontss" }}>Full Name of Student :</Text>
            <Text style={{ fontSize: 8 }}>
              (in Block Letters as per School Certificate)
            </Text>
          </View>
          <View style={{ gap: 4, alignItems: "center" }}>
            <Text style={styles.fieldStyle}>Mr</Text>
            <Text style={{ fontSize: 8 }}>Title </Text>
          </View>
          <View style={{ gap: 4, alignItems: "center" }}>
            <Text style={styles.fieldStyle}>{user?.firstName}</Text>
            <Text style={{ fontSize: 8 }}>First Name </Text>
          </View>
          <View style={{ gap: 4, alignItems: "center" }}>
            <Text style={styles.fieldStyle}>
              {user?.middleName == "" ? " " : user?.middleName}
            </Text>
            <Text style={{ fontSize: 8 }}>Middle Name </Text>
          </View>
          <View style={{ gap: 4, alignItems: "center" }}>
            <Text style={styles.fieldStyle}>
              {user?.lastName}
              </Text>
            <Text style={{ fontSize: 8 }}>Last Name </Text>
          </View>
        </View>
        {/* Father Name */}
        <View style={styles.fatherName}>
          <Text style={styles.fatherNameTitle}>Father's Name :</Text>
          <Text style={styles.fatherNameContent}>
            {user?.fatherName}
            </Text>
        </View>
        {/* Nationality & Domicile */}
        <View style={styles.proName_code}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <View>
              <Text style={{ fontFamily: "Fontss" }}>Nationality :</Text>
            </View>
            <View
              style={{
                borderBottom: "1px solid #000",
                padding: "0 15px 2px 15px",
              }}
            >
              <Text style={{ textTransform: "capitalize" }}>
                {user?.nationality}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 20 }}>
            <View>
              <Text style={{ fontFamily: "Fontss" }}>State of Domicile :</Text>
            </View>
            <View
              style={{
                borderBottom: "1px solid #000",
                padding: "0 15px 2px 15px",
              }}
            >
              <Text style={{ textTransform: "capitalize" }}>
                {user?.domicile}
              </Text>
            </View>
          </View>
        </View>
        {/* Date of Birth Gender */}
        <View style={styles.date_gender}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Text style={{ fontFamily: "Fontss" }}>Date of Birth :</Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <View style={{ gap: 4, alignItems: "center" }}>
                <Text style={styles.fieldStyle}>
                  {user?.dateOfBirth?.slice(5, 7)}
                </Text>
                <Text style={{ fontSize: 8 }}>Date</Text>
              </View>
              <View style={{ gap: 4, alignItems: "center" }}>
                <Text style={styles.fieldStyle}>
                  {user?.dateOfBirth?.slice(8, 10)}
                </Text>
                <Text style={{ fontSize: 8 }}>Month</Text>
              </View>
              <View style={{ gap: 4, alignItems: "center" }}>
                <Text style={styles.fieldStyle}>
                  {user?.dateOfBirth?.slice(0, 4)}
                </Text>
                <Text style={{ fontSize: 8 }}>Year</Text>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: "row", gap: 10 }}>
            <Text style={{ fontFamily: "Fontss" }}>Sex :</Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Text>
                {user?.gender}
                </Text>
              <View
                style={{
                  width: 16,
                  height: 16,
                  backgroundColor:
                    user?.gender == "male"
                      ? Constant.Colors.mainColor
                      : "",
                  border: "2px solid #000",
                  borderRadius: 50,
                }}
              ></View>
              <Text>Female</Text>
              <View
                style={{
                  width: 16,
                  height: 16,
                  backgroundColor:
                    user?.gender == "female"
                      ? Constant.Colors.mainColor
                      : "",
                  border: `2px solid ${Constant.Colors.mainColor}`,
                  borderRadius: 50,
                }}
              ></View>
            </View>
          </View>
        </View>
        {/* email & contact */}
        <View style={styles.address_contact}>
          <View style={styles.add_con}>
            <Text style={{ fontFamily: "Fontss" }}>E-mail Address :</Text>
            <Text
              style={{
                fontSize: 10,
                color: "blue",
                borderBottom: "1px solid #000",
                padding: "0 10px",
              }}
            >
              {user?.email}
            </Text>
          </View>
          <View style={styles.add_con}>
            <Text style={{ fontFamily: "Fontss" }}>Contact Number :</Text>
            <Text style={styles.fieldStyle}>
              {user?.phone}
              </Text>
          </View>
        </View>
        {/* Address */}
        <View style={styles.fatherName}>
          <Text style={styles.fatherNameTitle}>Correspondence Address :</Text>
          <Text style={styles.address}>
            {user?.address}
            </Text>
        </View>
        {/* address blank line */}
        <View style={{ borderBottom: "1px solid #000", marginTop: 20 }}></View>
        {/* source of Information */}
        <View style={styles.source}>
          <Text style={{ fontFamily: "Fontss" }}>Source of Information :</Text>
          <View style={styles.source.source_text}>
            <Text>Web Search</Text>
            <View
              style={{
                width: 13,
                height: 13,
                backgroundColor:
                  user?.sourceOfInformation == "web serach"
                    ? Constant.Colors.mainColor
                    : "",
                borderRadius: 50,
                border: `2px solid ${Constant.Colors.mainColor}`,
              }}
            ></View>
          </View>
          <View style={styles.source.source_text}>
            <Text>Friends Reconmondation</Text>
            <View
              style={{
                width: 13,
                height: 13,
                backgroundColor:
                  user?.sourceOfInformation == "friends recomendation"
                    ? Constant.Colors.mainColor
                    : "",
                borderRadius: 50,
                border: `2px solid ${Constant.Colors.mainColor}`,
              }}
            ></View>
          </View>
          <View style={styles.source.source_text}>
            <Text>Newspaper</Text>
            <View
              style={{
                width: 13,
                height: 13,
                backgroundColor:
                  user?.sourceOfInformation == "newspaper"
                    ? Constant.Colors.mainColor
                    : "",
                borderRadius: 50,
                border: `2px solid ${Constant.Colors.mainColor}`,
              }}
            ></View>
          </View>
          <View style={styles.source.source_text}>
            <Text>Visual Add</Text>
            <View
              style={{
                width: 13,
                height: 13,
                backgroundColor:
                  user?.sourceOfInformation == "visual add"
                    ? Constant.Colors.mainColor
                    : "",
                borderRadius: 50,
                border: `2px solid ${Constant.Colors.mainColor}`,
              }}
            ></View>
          </View>
        </View>
        {/* Educattion */}
        <View style={styles.education}>
          <Text style={{ fontFamily: "Fontss" }}>
            Education Qualification :
          </Text>
          <View style={styles.education.edua_Table}>
            {/* row Table Start */}
            <View
              style={{
                borderBottom: "1px solid #000",
                height: 30,
                fontSize: 12,
                flexDirection: "row",
                // justifyContent: "space-between",
                alignItems: "center",
                // backgroundColor: "green",
                width: "100%",
              }}
            >
              <View
                style={{
                  borderRight: "1px solid #000",
                  height: "100%",
                  width: "30%",
                  // backgroundColor: "red",
                  justifyContent: "center",
                  padding: "0 10px",
                }}
              >
                <Text style={{ fontFamily: "Fontss" }}>
                  Name of School / University
                </Text>
              </View>
              <View
                style={{
                  borderRight: "1px solid #000",
                  height: "100%",
                  justifyContent: "center",
                  width: "10%",
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text style={{ fontFamily: "Fontss" }}>Year of</Text>
                  <Text style={{ fontFamily: "Fontss" }}>Passing</Text>
                </View>
              </View>

              <View
                style={{
                  borderRight: "1px solid #000",
                  height: "100%",
                  justifyContent: "center",
                  padding: "0 10px",
                  width: "20%",
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text style={{ fontFamily: "Fontss" }}>Board/ College/</Text>
                  <Text style={{ fontFamily: "Fontss" }}>University</Text>
                </View>
              </View>

              <View
                style={{
                  borderRight: "1px solid #000",
                  height: "100%",
                  // backgroundColor: "red",
                  justifyContent: "center",
                  padding: "0 10px",
                  width: "15%",
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text style={{ fontFamily: "Fontss" }}>Stream</Text>
                </View>
              </View>

              <View
                style={{
                  height: "100%",
                  justifyContent: "center",
                  padding: "0 10px",
                  width: "25%",
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text style={{ fontFamily: "Fontss" }}>Aggregate of</Text>
                  <Text style={{ fontFamily: "Fontss" }}>Marks</Text>
                </View>
              </View>
            </View>
            {/* row Table End */}

            {/* row  Second Table Start */}
            <View
              style={{
                borderBottom: "1px solid #000",
                height: 30,
                fontSize: 12,
                flexDirection: "row",
                // justifyContent: "space-between",
                alignItems: "center",
                // backgroundColor: "green",
                width: "100%",
              }}
            >
              <View
                style={{
                  borderRight: "1px solid #000",
                  height: "100%",
                  width: "30%",
                  // backgroundColor: "red",
                  justifyContent: "center",
                  padding: "0 10px",
                }}
              >
                <Text>{user?.lastInstituteName.toUpperCase()}</Text>
              </View>
              <View
                style={{
                  borderRight: "1px solid #000",
                  height: "100%",
                  justifyContent: "center",
                  width: "10%",
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text>{user?.yearOfPassing}</Text>
                </View>
              </View>

              <View
                style={{
                  borderRight: "1px solid #000",
                  height: "100%",
                  justifyContent: "center",
                  padding: "0 10px",
                  width: "20%",
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text>{user?.lastBoardCollege.toUpperCase()}</Text>
                </View>
              </View>

              <View
                style={{
                  borderRight: "1px solid #000",
                  height: "100%",
                  // backgroundColor: "red",
                  justifyContent: "center",
                  padding: "0 10px",
                  width: "15%",
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text>{user?.stream.toUpperCase()}</Text>
                </View>
              </View>

              <View
                style={{
                  height: "100%",
                  justifyContent: "center",
                  padding: "0 10px",
                  width: "25%",
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text>{user?.marks}%</Text>
                </View>
              </View>
            </View>
            {/* row Table End */}
          </View>
        </View>
        {/* Date of Enrollment */}
        <View
          style={{ flexDirection: "row", gap: 10, fontSize: 16, marginTop: 20 }}
        >
          <Text style={{ fontFamily: "Fontss" }}>ENROLLMENT DATE :</Text>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <View style={{ gap: 4, alignItems: "center" }}>
              <Text style={styles.fieldStyle}>
                {user?.createdAt?.slice(8, 10)}
              </Text>
              <Text style={{ fontSize: 8 }}>Date</Text>
            </View>
            <View style={{ gap: 4, alignItems: "center" }}>
              <Text style={styles.fieldStyle}>
                {user?.createdAt?.slice(5, 7)}
              </Text>
              <Text style={{ fontSize: 8 }}>Month</Text>
            </View>
            <View style={{ gap: 4, alignItems: "center" }}>
              <Text style={styles.fieldStyle}>
                {user?.createdAt?.slice(0, 4)}
              </Text>
              <Text style={{ fontSize: 8 }}>Year</Text>
            </View>
          </View>
        </View>
        {/* Enrollment End */}
        {/* Signature of Student */}
        <View style={styles.signature}>
          <Text style={{ width: "40%", fontFamily: "Fontss" }}>
            STUDENT SIGNATURE :
          </Text>
          <View style={{ borderBottom: "1px solid #000", width: 200 }}></View>
        </View>
        {/* Parent of Student */}
        <View style={styles.signature}>
          <Text style={{ width: "40%", fontFamily: "Fontss" }}>
            PARENT / GUARDIAN SIGNATURE :
          </Text>
          <View style={{ borderBottom: "1px solid #000", width: 200 }}></View>
        </View>
        <View
          style={{ alignItems: "flex-end", fontSize: "12px", marginTop: 40 }}
        >
          <View style={{ alignItems: "center" }}>
            <Text>Compix</Text>
            <Text>Visual Art Age Inida</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

const ViewModel = ({ userDetails, closeViewModel }) => {
  // const [user, setUser] = useState([]);

  // const gerUser = async () => {
  //   try {
  //     const res = await axios.get(
  //       `http://localhost:8000/api/v1/students/${userId}`
  //     );
  //     setUser(res.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   gerUser();
  // }, []);

  // console.log(user);
  return (
    <Model>
      <div className="model">
        <div className="model_header">
          <button onClick={closeViewModel}>
            <AiFillCloseCircle />
          </button>
        </div>
        <div className="model_content_wrapper">
          <PDFViewer width={"100%"} height={"700px"}>
            <MyDocument user={userDetails} />
          </PDFViewer>
        </div>
      </div>
    </Model>
  );
};

export default ViewModel;

const Model = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  opacity: 0.97;
  z-index: 9622;
  padding: 100px;

  .model {
    background-color: #f8f8f8;
    padding: 10px;
    border-radius: 6px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    height: auto !important;

    .model_header {
      display: flex;
      justify-content: flex-end;

      button {
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
        svg {
          font-size: 30px;
          display: block;
          transition: ease-in-out 0.3s;
          &:hover {
            color: ${Constant.Colors.seconderyColor};
          }
        }
      }
    }

    .model_content_wrapper {
      height: auto;
      padding-top: 20px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 10px;
  }
`;
