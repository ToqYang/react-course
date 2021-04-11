import { act, renderHook } from "@testing-library/react-hooks";
import useForm from "../../hooks/useForm";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Goku",
    email: "goku@gmail.com",
  };

  test("Debe regresar formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));

    const [values, handleInputChange, reset] = result.current;
    expect(initialForm).toEqual(values);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("Debe cambiar el valor del formulario(cambiar name)", () => {
    const { result } = renderHook(() => useForm(initialForm));

    const user = {
      name: "name",
      value: "Vegeta",
    };
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({ target: user });
    });
    const [values] = result.current;
    expect(values).toEqual({ ...initialForm, name: "Vegeta" });
  });

  test("Debe reeestablecer el forulario con reset", () => {
    const { result } = renderHook(() => useForm(initialForm));

    const user = {
      name: "name",
      value: "Vegeta",
    };
    const [, handleInputChange, reset] = result.current;
    act(() => {
      handleInputChange({ target: user });
      reset();
    });
    const [values] = result.current;
    expect(values).toEqual({ ...initialForm });
  });
});
