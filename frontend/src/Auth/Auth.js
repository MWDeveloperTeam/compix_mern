import { useEffect, useState } from "react";

export const Auth = () => {
  const [login_session, setLogin_session] = useState(null);
  useEffect(() => {
    setLogin_session(sessionStorage.getItem("logged"));
  }, [login_session]);

  let logged = "loggedIn";
  const LoginEmail = "sawarnabi2018@gmail.com";
  const LoginPassword = "Sawar@1234";
  return { login_session, LoginEmail, LoginPassword, logged };
};
