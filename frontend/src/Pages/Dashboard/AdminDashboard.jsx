import React from "react";
import styled from "styled-components";
import { URL } from "../../RoutesUrl/URL";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Constant } from "../../constant";
import { Auth } from "../../Auth/Auth";
import PleaseLogin from "../RedirctPage/PleaseLogin";
import Login from "../Login/Login";
const AdminDashboard = () => {
  const navigate = useNavigate();
  const adminNav = [
    { nav: "view", to: "viewstudents" },
    { nav: "register", to: "register" },
  ];
  const { login_session, logged } = Auth();
  if (login_session === "loggedIn") {
    return (
      <Section>
        <nav className="dashboard_nav">
          <div className="navi_wrapper">
            {adminNav.map((currEl, i) => (
              <NavLink to={currEl.to} key={i}>
                {currEl.nav}
              </NavLink>
            ))}
          </div>
          <div className="logout_wrapper">
            <button
              onClick={() => {
                sessionStorage.removeItem("logged");
                navigate(URL.Login);
              }}
            >
              Log out
            </button>
          </div>
        </nav>
        <div className="admin_content_container">
          <Outlet />
        </div>
      </Section>
    );
  } else {
    return <PleaseLogin />;
    // return <Login />;
  }
};
export default AdminDashboard;

const Section = styled.section`
position: relative;
  font-family: ${Constant.Fonts.primaryFont};
  display: flex;
  flex-direction: column;
  align-items: center;
  .dashboard_nav {
    width: 100%;
    max-width: 1378px;
    height: 6rem;
    background-color: ${Constant.Colors.mainColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4rem;
    @media only screen and (max-width: 540px) {
      padding: 0 1rem;
    }
    .navi_wrapper {
      display: flex;
      gap: 1rem;
      a {
        font-size: 1.6rem;
        text-transform: capitalize;
        letter-spacing: 0.1rem;
        color: #fff;
        padding: 1rem 1.5rem;
        border-radius: 0.4rem;
        transition: ease-in-out 0.3s;
        &:hover {
          background-color: ${Constant.Colors.seconderyColor};
        }
      }

      .active {
        background-color: ${Constant.Colors.seconderyColor};
      }
    }

    .logout_wrapper {
      button {
        padding: 1rem 1.4rem;
        cursor: pointer;
        border: none;
        /* border-radius: 0.2rem; */
        background-color: transparent;
        color: #fff;
        font-size: 1.6rem;
        font-weight: 700;
        text-transform: capitalize;
        transition: ease-in-out 0.3s;
        &:hover {
          color: ${Constant.Colors.seconderyColor};
        }

        @media only screen and (max-width: 540px) {
          font-size: 1.4rem;
        }
      }
    }
  }

  .admin_content_container {
    /* text-align: center; */
    /* background-color: red; */
    width: 100%;
    max-width: 1378px;
  }
`;
