import "./Auth.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="btn-primary">Login</button>
          <p className="redirect-text">
            Don’t have an account? <Link to="/register">Register</Link></p>
        </form>
      </div>
    </div>
  );
}
