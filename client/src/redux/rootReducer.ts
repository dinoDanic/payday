import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
});

export type UserStateReducer = ReturnType<typeof rootReducer>;
