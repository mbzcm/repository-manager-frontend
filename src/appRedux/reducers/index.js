import {combineReducers} from "redux";
import Settings from "./Settings";
import Common from "./Common";
import {connectRouter} from 'connected-react-router'
import Commit from "../reducers/Commit";

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  settings: Settings,
  common: Common,
  commit: Commit,
});

export default createRootReducer;
