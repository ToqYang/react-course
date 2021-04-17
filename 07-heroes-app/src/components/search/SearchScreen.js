import React, { useMemo } from "react";
import queryString from "query-string";
import { heroes } from "../../data/heroes";
import HeroCard from "../heroes/HeroCard";
import useForm from "../../hooks/useForm/useForm";
import { useLocation } from "react-router";
import { getHeroesByName } from "../../selectors/getHeroesByName";

const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const [formValues, handleInputChange, reset] = useForm({ name: q });
  const { name } = formValues;

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${name}`);
  };
  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Find your hero"
              onChange={handleInputChange}
              value={name}
              autoComplete="off"
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === "" && <div className="alert alert-info">Search a hero</div>}
          {q !== "" && heroesFiltered.length === 0 && (
            <div className="alert alert-danger">{`There is no a hero with ${q}`}</div>
          )}

          {heroesFiltered.map((hero) => {
            return <HeroCard key={hero.id} {...hero} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
