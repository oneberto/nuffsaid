import { INITIAL_STATE, State } from ".";
import { IAction } from "../interfaces/IAction";
import { getPluralPriorityName } from "../utils/getPluralPriorityName";
import _get from "lodash/get";
import { IMessage } from "../interfaces/IMessage";

export enum Actions {
  ToggleStop = "TOGGLE_STOP",
  ClearAll = "CLEAR_ALL",
  ClearMessage = "CLEAR_MESSAGE",
  AddMessage = "ADD_MESSAGE",
}

// Actions
const toggleStop = (): IAction => ({
  type: Actions.ToggleStop,
});

const clearAll = (): IAction => ({
  type: Actions.ClearAll,
});

const clearMessage = (message: IMessage): IAction<IMessage> => ({
  type: Actions.ClearMessage,
  payload: message,
});

const addMessage = (message: IMessage): IAction<IMessage> => ({
  type: Actions.AddMessage,
  payload: message,
});

export const storeActions = {
  clearAll,
  addMessage,
  clearMessage,
  toggleStop,
};

// Reducer
export const storeReducer = (state = INITIAL_STATE, action: IAction): State => {
  try {
    const priority = getPluralPriorityName(action.payload?.priority);
    const currentPriorityState: IMessage[] = [..._get(state, priority, [])];

    switch (action.type) {
      case Actions.ToggleStop:
        return { ...state, isStopped: !state.isStopped };

      case Actions.ClearAll:
        return { ...INITIAL_STATE, isStopped: !!state?.isStopped };

      case Actions.ClearMessage:
        const filterMessages = currentPriorityState.filter(
          ({ id }) => id !== action.payload?.id
        );

        return {
          ...state,
          [priority]: filterMessages,
        };

      case Actions.AddMessage:
        const updatePriority = [action.payload, ...currentPriorityState];

        return {
          ...state,
          [priority]: updatePriority,
        };

      default:
        return state;
    }
  } catch (error) {
    return state;
  }
};
