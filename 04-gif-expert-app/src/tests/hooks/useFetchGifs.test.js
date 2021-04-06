import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en el hook", () => {
  test("Debe de retornar el estado inicial", async () => {
    const { result, waitForNextUpdate } = renderHook(() => {
      return useFetchGifs("One Punch");
    });
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("Debe retornar imgs y loading en false", async () => {
    const { result, waitForNextUpdate } = renderHook(() => {
      return useFetchGifs("One Punch");
    });

    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toEqual(10);
    expect(loading).toBe(false);
  });
});
