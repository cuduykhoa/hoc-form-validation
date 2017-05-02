import LoginForm from "./LoginForm"
import Validation from "../validation/Validation"

import isRequired from "../validation/rules/isRequired"
import hasMinLength from "../validation/rules/hasMinLength"

const rules = {
  username: [[isRequired, "Username is required"]],
  password: [
    [isRequired, "Password is required"],
    [hasMinLength(6), "Password is too short"]
  ]
}

const ValidateLoginForm = Validation(rules)(LoginForm)

export default ValidateLoginForm
