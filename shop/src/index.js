import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import ReviewJs from "./pages/reviewJs"
import DemoMeterial from "./pages/DemoMeterial"
import reportWebVitals from "./reportWebVitals"
import RouterScreen from "./routes"
import Provider from "./context/todoProvider"
import AddTodo from "./components/todo/AddToDo"
import ToDoList from "./components/todo/ToDoList"

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <RouterScreen /> */}
    <Provider>
      <AddTodo />
      <ToDoList />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
