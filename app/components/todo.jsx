"use client";
import { useState, useEffect } from "react";

export default function Todo() {
  const [Todo, setTodo] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);

  return (
    <div>
      <h1>Todo</h1>
      <div>
        <h1>{Todo.title} </h1>
      </div>
    </div>
  );
}
