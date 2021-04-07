import React from "react";
import useForm from "../../hooks/useForm";

const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  console.log("my: ", description);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo);

    reset();
  };
  return (
    <>
      <h4>Agregar Todo</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Aprender..."
          autoComplete="off"
          className="form-control"
          onChange={handleInputChange}
          value={description}
        />
        <button
          type="submit"
          className="btn btn-outline-primary mt-2 btn-block"
        >
          Agregar
        </button>
      </form>
    </>
  );
};

export default TodoAdd;
