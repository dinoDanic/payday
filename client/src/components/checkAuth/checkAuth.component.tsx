import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { UserStateReducer } from "../../redux/rootReducer";
import { UserStateInterface } from "../../redux/user/user.reducer";

const CheckAuth: FC = () => {
  const history = useHistory();
  const currentUrl = history.location.pathname.split("/")[2];
  const user: UserStateInterface = useSelector(
    (state: UserStateReducer) => state.user
  );
  useEffect(() => {
    if (!user.email) {
      history.push("/auth");
    }
    if (currentUrl === "/auth") {
      history.push("/");
    }
  }, [user]);
  return <div></div>;
};

export default CheckAuth;
