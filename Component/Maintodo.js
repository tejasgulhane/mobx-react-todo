import React from "react";
import Todo from './Todo'
import { observer } from 'mobx-react'

const Maintodo = observer(({ store }) => {
    console.log(store);

  const addtotodo = () => {
    console.log(store);
    store.addtodo();
  };
  return (
    <>
      <div className="App">
        <h1>TO DO APP</h1>
        <input
          type="text"
          placeholder="TODO..."
          onChange={(e) => {
            store.updateinput(e.target.value);
          }}
        />
        <button onClick={addtotodo}>Add</button>
      </div>
      <div>
        {store.todoitem.map((item) => {
          return <Todo item={item} />;
        })}
      </div>
    </>
  );
}
)

export default Maintodo;
