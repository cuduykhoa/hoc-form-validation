import React from "react"

const LoginForm = ({ onSubmit, errors }) => (
  <form onSubmit={onSubmit}>
    <div>
      <input type="text" name="username" placeholder="Username" />
      {errors.username && <span>{errors.username}</span>}
    </div>
    <div>
      <input type="password" name="password" placeholder="Password" />
      {errors.password && <span>{errors.password}</span>}
    </div>
    <div>
      <button type="submit">Login</button>
    </div>
  </form>
)

export default LoginForm
