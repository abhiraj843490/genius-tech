import "./library.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [role, setRole] = useState("Student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", { role, email, password });
    if (email && password) {
      console.log("Login Data:", { role, email, password });
      navigate("/dashboard");
    } else {
      alert("Please enter valid credentials!");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="login-title">Learning Management System (LMS)</h2>
        <h5 className="login-subtitle">
          Sign in to access your library account
        </h5>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Select Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="form-input"
            >
              <option value="Student">Student</option>
              <option value="Librarian">Librarian</option>
              <option value="Admin">Admin</option>
            </select>
            <small className="form-hint">
              {role === "Student" &&
                "Browse books, manage borrowings, view history"}
              {role === "Librarian" &&
                "Manage books, reservations, fines"}
              {role === "Admin" &&
                "Full system access and role management"}
            </small>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="btn-primary">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
