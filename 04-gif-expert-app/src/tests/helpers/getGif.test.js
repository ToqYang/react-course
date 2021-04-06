import { getGifs } from "../../helpers/getGifs";

describe("Async consult", () => {
  test("Traer 10 elementos", async () => {
    const gifs = await getGifs("One Punch");
    expect(gifs.length).toBe(10);
  });

  test("No debe haber nada", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
