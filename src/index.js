import React from "react"
import ReactDOM from "react-dom"

import LoginForm from "./login/ValidateLoginForm"

const handleSubmitForm = data => {
  console.log("data", data)
}

ReactDOM.render(
  <LoginForm onSubmitForm={handleSubmitForm} />,
  document.getElementById("root")
)
