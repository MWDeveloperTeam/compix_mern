import React, { useReducer } from "react";
import { Auth } from "./Auth/Auth";
import { ToastContainer } from "react-toastify";
import "./Style/style.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { reducer, initialState, SidebarReducer, open } from "./reducer";
import dummyApidata from "./lib/DummyData";
import { Store } from "./StateStore";
import Main from "./Components/Main/Main";
import { URL } from "./RoutesUrl/URL";
import {
  QuizModel,
  Quiz,
  QuizResult,
  Dashboard,
  Login,
  ViewStudents,
  Page_Not_Found,
  Register,
  Create_Fee,
  FeeHistory,
  Fee,
  Exam_guides,
} from "../src/Pages/index";
import Demo from "./Components/Courses/Demo";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [sideBarState, sideBarDispatch] = useReducer(SidebarReducer, open);
  const api = dummyApidata;
  const providerData = { state, dispatch, sideBarDispatch, sideBarState, api };
  const { logged, login_session } = Auth();
  return (
    <>
      <Router>
        <Store.Provider value={providerData}>
          <Routes>
            <Route path="*" element={<Page_Not_Found />} />
            <Route path="/demo" element={<Demo />} />
            <Route path={URL.Home} element={<Main />} />
            <Route path={URL.QuizModel} element={<QuizModel />} />
            <Route path={URL.Quiz} element={<Quiz />} />
            <Route path={URL.Result} element={<QuizResult />} />
            <Route path={URL.Exam_guides} element={<Exam_guides />} />
            <Route
              path={URL.Login}
              element={
                login_session === "loggedIn" ? (
                  <Navigate replace to={URL.Dash_view_student} />
                ) : (
                  <Login />
                )
              }
            />
            {/* Dashboard Routes */}
            <Route path={URL.Dashboard} element={<Dashboard />}>
              <Route path={URL.View_Students} element={<ViewStudents />} />
              <Route path={URL.Register} element={<Register />} />
              <Route path={URL.Create_Fee} element={<Create_Fee />} />
              <Route path={URL.Fee_History} element={<FeeHistory />} />
              <Route path={URL.Fee} element={<Fee />} />
            </Route>
          </Routes>
        </Store.Provider>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
