import { renderHook, act } from "@testing-library/react-hooks";
import useCouter from "../../hooks/useCouter";

describe("Pruebas en useCounter", () => {
  test("Debe de retornar valores por defecto", () => {
    const { result } = renderHook(() => useCouter(100));

    //console.log(result.current);
    expect(result.current.counter).toBe(100);
    // expect(typeof result.current.increment).toBe("function");
    // expect(typeof result.current.decrement).toBe("function");
    // expect(typeof result.current.reset).toBe("function");
  });

  test("Debe incrementar", () => {
    const { result } = renderHook(() => useCouter(100));
    const { increment } = result.current;

    act(() => increment());
    const { counter } = result.current;
    expect(counter).toBe(101);
  });

  test("Debe decrementar", () => {
    const { result } = renderHook(() => useCouter(100));
    const { decrement } = result.current;

    act(() => decrement());
    const { counter } = result.current;
    expect(counter).toBe(99);
  });

  test("Resetear", () => {
    const { result } = renderHook(() => useCouter(100));
    const { increment, reset } = result.current;

    act(() => {
      increment();
      reset();
    });
    const { counter } = result.current;
    expect(counter).toBe(100);
  });
});
