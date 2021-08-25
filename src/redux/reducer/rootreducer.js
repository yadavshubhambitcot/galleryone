import { combineReducers } from "redux";
import userReducer from "../reducer/index";
import imgdata from "../reducer/img"


export default combineReducers({
  users: userReducer,img: imgdata
});
