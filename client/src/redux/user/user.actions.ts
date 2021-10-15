import { UserActionTypes } from "./user.actionTypes";
import { Dispatch } from "redux";
import { UserAction } from "../ts-actions";

export const setUser = (user: object) => (dispatch: Dispatch<UserAction>) => {
  dispatch({
    type: UserActionTypes.SET_USER,
    payload: user,
  });
};
