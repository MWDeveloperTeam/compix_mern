import { ReducerText } from "./Components/Utils/HelperText";
export const initialState = "";
export const open = false;

export const reducer = (state, action) => {
  if (action.type === ReducerText.ReduStudent) {
    return action.payload;
  } else if (action.type === ReducerText.ReduAttendence) {
    return action.payload;
  } else if (action.type === ReducerText.ReduPayment) {
    return action.payload;
  }

  return state;
};


export const SidebarReducer = (state, action) => {
  if(action.type === "SIDE_OPEN") {
    return action.payload
  }

  return state
}



