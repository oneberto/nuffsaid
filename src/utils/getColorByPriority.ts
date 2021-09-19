import _get from "lodash/get";
import theme from "../configs/theme";
import { Priority } from "../interfaces/IMessage";
import { getPriorityName } from "./getPriorityName";

export function getColorByPriority(priority: Priority) {
  return _get(
    theme.palette,
    `${getPriorityName(priority)?.toLowerCase()}.main`,
    "#ccc"
  );
}
