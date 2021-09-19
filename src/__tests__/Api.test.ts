import { generateMessage } from "../utils/generateMessage";

test("api returns a correct message", () => {
  const { priority, message, id } = generateMessage();

  expect(message).toBeTruthy();
  expect(id).toBeTruthy();
  expect(priority).toBeGreaterThanOrEqual(0);
});
