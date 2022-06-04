import { combineReducers } from "redux";
import {
  modalStatus,
  paymentModalStatus,
  finalModalStatus,
  optionModalStatus,
} from "./index";

// export type RootState = ReturnType<typeof rootReducer>;
// reducer들을 모아주는 곳.

const rootReducer = combineReducers({
  modalStatus,
  paymentModalStatus,
  finalModalStatus,
  optionModalStatus,
});

export default rootReducer;
