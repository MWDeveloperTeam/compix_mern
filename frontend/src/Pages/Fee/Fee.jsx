import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { useLocation } from "react-router-dom";
import { Constant } from "../../constant";
import CompixLogo from "../../Media/Compix-Logo.png";

const styles = StyleSheet.create({
  page: {
    // backgroundColor: "red",
    fontSize: "17px",
  },
  fee_header: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    alignItems: "center",
    borderBottom: "2px solid #000",
    paddingBottom: "6px",
    fontSize: "18px",
  },
  receipt_header: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 200,
    padding: "10px 0",
    borderBottom: "2px solid #000",
  },
  // fee Content Style
  reNum_date_address: {
    display: "flex",
    padding: "10px 0",
    justifyContent: "space-between",
    // backgroundColor: 'red'
  },
  stu_curr_re_from_wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  cheque_wrapper: {
    display: "flex",
    justifyContent: "space-evenly",
  },

  fee_table_wrapper: {
    display: "flex",
  },
  fee_table: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    textTransform: "uppercase",
    // backgroundColor: "red",

    fee_row: {
      width: 300,
      display: "flex",
      gap: 10,
      justifyContent: "space-between",
      borderBottom: "2px solid #000",
      paddingBottom: 4,

      fee_rowBorderLess: {
        width: 300,
        display: "flex",
        gap: 10,
        justifyContent: "space-between",
        paddingBottom: 4,
        border: "none",
      },
    },
    fee_text: {
      width: "100%",
    },
  },

  for_auth: {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    width: "100%",
    // backgroundColor: 'red',
    padding: "0 0 0 100px",
  },
});

const Fee = () => {
  
  const location = useLocation();
  const {
    address,
    feeAmount,
    feeAmountInWords,
    fullName,
    createdAt,
  } = location.state.feeData;
  return (
    <div
      style={{
        width: "900px",
        height: "auto",
        backgroundImage: `url(${CompixLogo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "46%",
        // opacity: '.1',
        padding: "20px",
        fontFamily: Constant.Fonts.primaryFont,
      }}
    >
      <div
        className="innerBack"
        style={{
          backgroundColor: `rgba(255,255,255,.9)`,
          border: "2px solid #000",
          padding: 20,
        }}
      >
        <Document style={styles.document}>
          <Page size={"A4"} style={styles.page}>
            {/* Fee Header Section */}
            <View style={styles.fee_header}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 28,
                  textTransform: "uppercase",
                  textDecoration: "underline",
                }}
              >
                compix
              </Text>
              <Text>A Division f Visual Art Age India.</Text>
              <Text>
                Parrapora Srinagar-190005, www.compix.in, email: info@compix.in,
                Tel. No. +911943-551690
              </Text>
            </View>

            <View style={styles.receipt_header}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 22,
                  textTransform: "uppercase",
                }}
              >
                receipt
              </Text>
              <Text>Receipt Print Date: {createdAt.slice(0, 10)}</Text>
            </View>
            {/* Fee Content Section */}
            <View style={styles.fee_content_wrapper}>
              <View style={styles.reNum_date_address}>
                <View>
                  <Text>Receipt Number :</Text>
                  <Text> 2280
                    {/* {location.state.id} */}
                    </Text>
                </View>
                <View>
                  <Text>Date :</Text>
                  <Text> {createdAt.slice(0, 10)}</Text>
                </View>
                <View style={{ width: "250px" }}>
                  <Text>Address :</Text>
                  <Text style={{ textTransform: "capitalize" }}>
                    {" "}
                    {address} 
                  </Text>
                </View>
              </View>
              {/*  */}
              <View style={styles.stu_curr_re_from_wrapper}>
                <View>
                  <Text>Student Number :</Text>
                  <Text
                    style={{ fontWeight: "bold", textTransform: "uppercase" }}
                  >
                    {" "}
                    student01
                    {/* {location?.state?.id} */}
                  </Text>
                </View>
                <View>
                  <Text>Currency :</Text>
                  <Text> INR</Text>
                </View>
                <View>
                  <Text>Recieved a Sum of :</Text>
                  <Text style={{ textTransform: "uppercase" }}>
                    {" "}
                    INR {feeAmountInWords}
                  </Text>
                </View>
                <View>
                  <Text>From :</Text>
                  <Text
                    style={{ fontWeight: "bold", textTransform: "uppercase" }}
                  >
                     {" "}{fullName}
                  </Text>
                </View>
              </View>
            </View>
            {/*  */}
            <View style={styles.cheque_wrapper}>
              <View>
                <Text></Text>
              </View>
              <View
                style={{ display: "flex", flexDirection: "column", gap: 4 }}
              >
                <Text>Cheque/Draft Number:</Text>
                <Text>Drawn On:</Text>
                <Text>Cheque Draft Amount:</Text>
                <Text>Cash Amount:</Text>
                <Text>Credit Card Amount:</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Text>Cheque/Draft Dated:</Text>
                <Text>Authorization Number:</Text>
              </View>
            </View>
            {/*  */}

            <View style={styles.fee_table_wrapper}>
              <View style={styles.fee_table}>
                <View style={styles.fee_table.fee_row}>
                  <Text style={styles.fee_table.fee_text}>Admission Fee </Text>
                  <Text style={styles.fee_table.fee_text}>
                    : {feeAmount}.00
                  </Text>
                </View>
                <View style={styles.fee_table.fee_row}>
                  <Text style={styles.fee_table.fee_text}>Service Tax </Text>
                  <Text style={styles.fee_table.fee_text}>: 00</Text>
                </View>
                <View style={styles.fee_table.fee_row.fee_rowBorderLess}>
                  <Text style={styles.fee_table.fee_text}>
                    Education CESS and Higher CESS
                  </Text>
                  <Text style={styles.fee_table.fee_text}>: 00</Text>
                </View>
                <View style={styles.fee_table.fee_row.fee_rowBorderLess}>
                  <Text style={{ width: "100%", textAlign: "center" }}>
                    Total
                  </Text>
                  <Text style={styles.fee_table.fee_text}>
                    : {feeAmount}.00
                  </Text>
                </View>
                <View style={styles.fee_table.fee_row.fee_rowBorderLess}>
                  <Text
                    style={{
                      fontSize: "12px",
                      padding: "0 10px",
                      lineHeight: "16px",
                    }}
                  >
                    cheques are subject to realisation this reciept must be
                    producd when demanded fes once paid are not refundable
                  </Text>
                </View>
              </View>
              {/*  */}
              <View style={styles.for_auth}>
                <View style={{ flexGrow: 1 }}></View>
                <View>For :</View>
                <View style={{ textAlign: "center" }}>
                  Authorised Signatory
                </View>
              </View>
            </View>
          </Page>
        </Document>
      </div>
    </div>
  );
};

export default Fee;
