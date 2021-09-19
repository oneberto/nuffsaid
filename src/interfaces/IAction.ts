import { Actions } from "../store/reducer";

export interface IAction<T = any> {
  type: Actions;
  payload?: T;
}
