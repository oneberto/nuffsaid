import random from "lodash/random";
import { Observable } from "rxjs";
import { IMessage } from "./interfaces/IMessage";
import { generateMessage } from "./utils/generateMessage";

const observable = new Observable<IMessage>((subscriber) => {
  const generate = () => {
    const message = generateMessage();
    const nextInMS = random(500, 3000);
    subscriber.next(message);
    setTimeout(generate, nextInMS);
  };
  generate();
});

const subscribe = (callback: (message: IMessage) => void) => {
  const subscription = observable.subscribe({
    next: callback,
  });
  return () => subscription.unsubscribe();
};

export default subscribe;
