import random from "lodash/random";
import faker from "faker";
import { v4 as uuid } from "uuid";
import { IMessage, Priority } from "../interfaces/IMessage";

export function generateMessage(): IMessage {
  const message = faker.lorem.sentence();
  const priority = random(0, 2) as Priority;
  const id = uuid();

  return { message, priority, id };
}
