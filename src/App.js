import React from "react";
import { hot } from "react-hot-loader";
import styled from "styled-components";
import TodoList from "./todos/TodoList";

const AppConteiner = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #222222;
  width: 100vw;
  height: 100vh;
`;

const App = () => (
  <AppConteiner>
    <TodoList />
  </AppConteiner>
);

export default hot(module)(App);
