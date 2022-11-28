import React from "react";

const InputField = ({ addTodoHandler, text, setText }) => {
  return (
    <form>
      <label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <button onClick={addTodoHandler} type="submit">
        {" "}
        Add Todo
      </button>
    </form>
  );
};

export default InputField;
