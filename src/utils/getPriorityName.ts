import { Priority } from "../interfaces/IMessage";

export function getPriorityName(priority: number) {
  return Priority[priority];
}
