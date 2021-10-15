interface SetUserAction {
  type: "SET_USER";
  payload: object;
}

export type UserAction = SetUserAction;
