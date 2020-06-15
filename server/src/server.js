import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";

let fakeTodos = [
  {
    id: "1e63f232-facc-4093-ac5a-26c0e75c5d8e",
    text: "Learn about React Ecosystems",
    isCompleted: false,
    createdAt: new Date(),
  },
  {
    id: "0300c968-73ef-400d-afff-5d736bf4dd6c",
    text: "Find a job",
    isCompleted: false,
    createdAt: new Date(Date.now() - 86400000 * 7),
  },
  {
    id: "a741e385-05a2-4981-a3c1-b12d33811a1e",
    text: "Buy groceries",
    isCompleted: true,
    createdAt: new Date(Date.now() - 86400000 * 14),
  },
];

const app = express();

app.use(bodyParser.json());
app.use(cors());

// The route for getting a list of all todos
app.get("/todos", (req, res) => {
  res.status(200).json(fakeTodos);
});

// The route for getting a list of all todos, but with delay
// (to display the loading component better)
app.get("/todos-delay", (req, res) => {
  setTimeout(() => res.status(200).json(fakeTodos), 2000);
});

// The route for creating new todo-list items
app.post("/todos", (req, res) => {
  const { text } = req.body;
  if (text) {
    const insertedTodo = {
      id: uuidv4(),
      createdAt: Date.now(),
      isCompleted: false,
      text,
    };
    fakeTodos.push(insertedTodo);
    res.status(200).json(insertedTodo);
  } else {
    res
      .status(400)
      .json({ message: "Request body should have a text property" });
  }
});

app.post("/todos/:id/completed", (req, res) => {
  const { id } = req.params;
  const matchingTodo = fakeTodos.find((todo) => todo.id === id);
  const updatedTodo = {
    ...matchingTodo,
    isCompleted: true,
  };
  if (updatedTodo) {
    fakeTodos = fakeTodos.map((todo) => (todo.id === id ? updatedTodo : todo));
    res.status(200).json(updatedTodo);
  } else {
    res.status(400).json({ message: "There is no todo with that id" });
  }
});

// The route for deleting a todo-list item
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  const removedTodo = fakeTodos.find((todo) => todo.id === id);
  fakeTodos = fakeTodos.filter((todo) => todo.id !== id);
  res.status(200).json(removedTodo);
});

app.listen(8080, () => console.log("Server listening on port 8080"));
