import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { numberToWords } from "amount-to-words";
import { Constant } from "../../constant/index";
import Loader from "../../Components/Loader/Loader";
import axios from "axios";
import { feeEmptyInputData } from "../students/exampledata";
import { Auth } from "../../Auth/Auth";
import { errorAlert, succssAlert } from "../../Components/Alerts/Alerts";
import PleaseLogin from "../RedirctPage/PleaseLogin";

const FeeCreate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [toWordNum, setToWordNum] = useState("");
  const { firstName, lastName, middleName, address, email } =
    location.state.StdData;
  const id = location.state.id;
  const {
    watch,
    getValues,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      stdId: id,
      fullName: firstName + " " + middleName + " " + lastName,
      address,
      email,
      feeAmount: "",
    },
  });
  useEffect(() => {
    if (watch().feeAmount == "") {
      return;
    } else {
      const num = watch().feeAmount;
      const toWods = numberToWords(num);
      setToWordNum(toWods);
    }
  }, [getValues()]);

  const onSubmit = async (data) => {
    setLoader(true);
    try {
      const res = await axios.post("http://localhost:8000/api/v1/fees", {
        stdId: id,
        fullName: data.fullName,
        address: data.address,
        feeAmount: data.feeAmount,
        feeAmountInWords: toWordNum,
        email: data.email,
      });
      succssAlert("Successfull Created");
      reset(feeEmptyInputData);
      setLoader(false);
      navigate("/dashboard/viewstudents");
    } catch (error) {
      errorAlert("Somethings Wents Wrong...!");
      console.error(error);
    }
  };
  const { login_session } = Auth();
  if (login_session === "loggedIn") {
    return (
      <FeeSection>
        {loader ? <Loader /> : null}
        <div className="fee_wrapper">
          <h1 className="fee_header_title">Create Fee</h1>
          <div className="fee_form_container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="amount_wrapper">
                <label htmlFor="amount">Enter Amount</label>
                <input
                  type="number"
                  name="feeAmount"
                  id="amount"
                  {...register("feeAmount", {
                    required: "Please Enter Amount",
                  })}
                />
                <p style={{ color: "red" }}>{errors?.feeAmount?.message}</p>
              </div>
              <div className="amount_in_words_wrapper">
                <label htmlFor="amountInWords">Enter Amount In Words</label>
                <input type="text" disabled value={toWordNum} />
              </div>
              <div className="submit_fee">
                <button type="submit">Create</button>
              </div>
            </form>
          </div>
        </div>
      </FeeSection>
    );
  } else {
    return <PleaseLogin />;
  }
};

export default FeeCreate;

const FeeSection = styled.section`
  font-family: ${Constant.Fonts.primaryFont};
  padding: 15px;
  width: 100%;
  /* height: auto !important; */
  .fee_wrapper {
    margin: 0 auto !important;
    width: 100%;
    max-width: 540px;
    height: auto;
    background-color: #ffffff;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    padding: 1.5rem;
    border-radius: 4px;

    .fee_header_title {
      text-align: center;
      font-size: 2rem;
      border-bottom: 2px solid #000;
      padding-bottom: 0.6rem;
    }

    /* inputs */
    .fee_form_container {
      padding: 1.6rem 0 0 0;
      /* background-color: maroon; */

      .amount_wrapper,
      .amount_in_words_wrapper {
        label {
          display: block;
          padding: 1.2rem 0;
          font-size: 1.6rem;
        }

        input {
          width: 100%;
          padding: 1rem;
          outline: none;
          border: 0.1rem solid ${Constant.Colors.seconderyColor};
          border-radius: 0.3rem;

          &:focus {
            border: 0.1rem solid ${Constant.Colors.seconderyColorLight};
          }
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }

      .submit_fee {
        padding: 1.6rem 0;
        button {
          width: 100%;
          padding: 1.2rem 1rem;
          cursor: pointer;
          background-color: ${Constant.Colors.seconderyColor};
          border: none;
          text-transform: uppercase;
          color: #fff;
          border-radius: 0.4rem;
          transition: ease-in-out 0.3s;

          &:hover {
            background-color: ${Constant.Colors.seconderyColorLight};
          }
        }
      }
    }
  }
`;
