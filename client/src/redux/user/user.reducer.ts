import { UserAction } from "../ts-actions";
import { UserActionTypes } from "./user.actionTypes";

const INITIAL_STATE = {
  email: "",
  _id: "",
};

const userReducer = (state = INITIAL_STATE, action: UserAction) => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
