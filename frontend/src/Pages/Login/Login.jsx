import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { URL } from "../../RoutesUrl/URL";
import styled from "styled-components";
import { Constant } from "../../constant";
import { Auth } from "../../Auth/Auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLoging, setIsLoging] = useState(false);
  const { LoginEmail, LoginPassword, login_session, logged } = Auth();
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });


  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogin({ ...login, [name]: value });
  };

  const loginHandler = (e) => {
    const { email, password } = login;
    if (email === "") {
      toast.error("Please enter email", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    } else if (password === "") {
      toast.error("Please enter password", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    } else if (
      email !== "sawarnabi2018@gmail.com" ||
      password !== "Sawar@1234"
    ) {
      toast.error("Invalid email or password", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    } else if (email === LoginEmail && password === LoginPassword) {
      toast.success("Login Successfull", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      setLogin({
        email: "",
        password: "",
      })
      navigate(URL.Dash_view_student);
      sessionStorage.setItem("logged", "loggedIn");
    }
    e.preventDefault();
  };

  return (
    <Section>
      <div className="login_container">
        <h1>Login</h1>
        <div className="login_input_wrapper">
          <form onSubmit={loginHandler}>
            <div className="user_name_wrapper">
              <label htmlFor="email">E-mail *</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter Your E-mail"
                onChange={changeHandler}
                value={login.email}
              />
            </div>

            <div className="password_wrapper">
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password"
                value={login.password}
                onChange={changeHandler}
              />
            </div>

            <div className="login_button">
              <button type="submit">
                {isLoging ? <span class="loader"></span> : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Login;

const Section = styled.section`
  font-family: ${Constant.Fonts.primaryFont};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  padding: 1rem;
  .login_container {
    width: 100%;
    max-width: 40rem;
    height: auto;
    background-color: #ffffff;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-radius: 0.4rem;
    padding: 1.8rem;

    h1 {
      font-size: 2.2rem;
      color: ${Constant.Colors.seconderyColor};
      text-align: center;
      border-bottom: 0.2rem solid ${Constant.Colors.secondery};
      padding-bottom: 0.6rem;
    }

    .login_input_wrapper {
      .user_name_wrapper,
      .password_wrapper {
        padding: 0.8rem 0;
      }
      label {
        display: block;
        padding: 0.4rem 0;
        font-size: 1.6rem;
        color: #363636;
      }

      input {
        display: block;
        width: 100%;
        padding: 1rem;
        outline: none;
        border: 0.1rem solid ${Constant.Colors.seconderyColor};
        border-radius: 0.4rem;
        &:focus {
          border: 0.1rem solid ${Constant.Colors.primaryColorLight};
        }
      }

      .login_button {
        padding: 1.6rem 0;

        button {
          width: 100%;
          padding: 1rem 0;
          cursor: pointer;
          background-color: ${Constant.Colors.seconderyColor};
          border: none;
          border-radius: 0.4rem;
          color: #ffffff;
          font-size: 1.6rem;
          transition: ease-in-out 0.3s;
          &:hover {
            background-color: ${Constant.Colors.primaryColorLight};
          }

          .loader {
            width: 24px;
            height: 24px;
            border: 5px solid #fff;
            border-bottom-color: transparent;
            border-radius: 50%;
            display: inline-block;
            box-sizing: border-box;
            animation: rotation 1s linear infinite;
          }

          @keyframes rotation {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        }
      }
    }
  }
`;
