import "@testing-library/jest-dom";
import React from "react";
import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas en primera app", () => {
  //   test("Debe mostrar hola soy goku", () => {
  //     const saludo = "hola soy goku";
  //     const { getByText } = render(<PrimeraApp saludo={saludo} />);
  //     expect(getByText(saludo)).toBeInTheDocument;
  //   });

  test("debe mostrar PrimeraApp correctamente", () => {
    const saludo = "hola soy goku";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar el subtitulo con props", () => {
    const saludo = "hola soy goku";
    const subtitulo = "Soy un sub";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );

    const textoParrafo = wrapper.find("p").text();

    expect(textoParrafo).toBe(subtitulo);
  });
});
