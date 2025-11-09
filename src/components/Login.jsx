import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <input placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>

      {/* Signup link/button */}
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
