import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Constant } from "../../constant";

const FeeHistory = () => {
  const [history, setHistory] = useState([]);
  const location = useLocation();
  const email = location.state.email;

  const feehistory = async () => {
    const res = await axios.get("http://localhost:8000/api/v1/fees");
    const filterData = res.data.data.filter((item) => item.email === email);
    setHistory(filterData);
  };

  useEffect(() => {
    feehistory();
  }, []);

  return (  
    <Section>
      {history.length === 0 ? (
        <div>No Record Found</div>
      ) : (
        history.map((item, i) => {
          console.log(item.fullName);
          console.log(item, "all items");
          return (
            <div className="fee_history_wrraper">
              <div key={i}>
                <span>Receipt Number</span> : {item?._id}
              </div>
              <div key={i}>
                <span>Name</span> : {item?.fullName}
              </div>
              <div key={i}>
                <span>Address</span> : {item?.address}
              </div>
              <div key={i}>
                <span>Amount</span> : <b>₹</b> {item?.feeAmount}
              </div>
              <div key={i}>
                <span>Date</span> : {item?.createdAt?.slice(0, 10)}
              </div>
              <div key={i}>
                <span>Email</span> : {item?.email}
              </div>
            </div>
          );
        })
      )}
    </Section>
  );
};

export default FeeHistory;

const Section = styled.section`
  font-size: 1.6rem;
  font-family: ${Constant.Fonts.primaryFont};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .fee_history_wrraper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 0.4rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

    span {
      font-weight: bold;
    }
  }
`;
