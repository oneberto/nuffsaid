import { Priority } from "../interfaces/IMessage";
import { getPriorityName } from "./getPriorityName";

export function getPluralPriorityName(priority: Priority): string {
  const dictionary = new Map([
    ["Error", "errors"],
    ["Warning", "warnings"],
    ["Info", "infos"],
  ]);

  return dictionary.get(getPriorityName(priority)) || "Info";
}
