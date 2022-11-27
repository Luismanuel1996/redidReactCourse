import { useState } from "react";

export default function HomePage(props) {
  const [list, setList] = useState(["ready", "set", "go"]);
  const [text, setText] = useState("");

  function handleInput(event) {
    setText(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    setList([list, text]);
  }

  return (
    <div>
      <h1>Hello World!</h1>
      <form onSubmit={onSubmit}>
        <input onChange={handleInput} type="text" value={text} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {list.map((item, index) => {
          return <li key={item + index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
