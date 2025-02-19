import { resetDB } from "./resetDB";

beforeEach(async () => {
  await resetDB();
});
