import { UserAction } from "../ts-actions";
import { UserActionTypes } from "./user.actionTypes";

export interface UserStateInterface {
  email: string;
  _id: string;
}

const INITIAL_STATE = {
  email: "",
  _id: "",
};

const userReducer = (
  state: UserStateInterface = INITIAL_STATE,
  action: UserAction
) => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
