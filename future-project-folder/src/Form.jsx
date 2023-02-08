import { useState } from "react";

export const ReactForm = (props) => {
  const [Name, setName] = useState();
  const [Age, setAge] = useState();
  const [Gender, setGender] = useState();
  const [Greeting, setGreeting] = useState();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <div>
      <p>{Greeting}</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (Gender === "male") {
            setGreeting(`Hello, Mr. ${Name}`);
          } else if (Gender === "female") {
            if (Age <= 30) {
              setGreeting(`Hello, Ms. ${Name}`);
            } else {
              setGreeting(`Hello, Mrs ${Name}`);
            }
          } else {
            setGreeting (`Hello, Misc. ${Name}`);
          }
        }}
      >
        <label>
          Name:_
          <input
            type="text"
            value={Name}
            name="name"
            onChange={handleNameChange}
          />
        </label>
        <br />
        <label>
          Age:_
          <input
            type="number"
            value={Age}
            name="age"
            onChange={handleAgeChange}
          />
        </label>
        <br />
        <label>
          Gender:
          <select value={Gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="non-binary">non-binary</option>
          </select>
        </label>
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};
