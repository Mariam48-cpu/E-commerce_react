import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin) {
      
      const user = {
        name,
        email,
        password,
      };

      localStorage.setItem("user", JSON.stringify(user));
      alert("Account Created Successfully ");

      setIsLogin(true);
    } else {
      
      const savedUser = JSON.parse(localStorage.getItem("user"));

      if (
        savedUser &&
        savedUser.email === email &&
        savedUser.password === password
      ) {
        localStorage.setItem("loggedInUser", JSON.stringify(savedUser));
        alert("Login Successful ");
        navigate("/");
      } else {
        alert("Wrong Email or Password ");
      }
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>{isLogin ? "Login" : "Create Account"}</h2>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <p>
          {isLogin ? (
            <>
              Don't have an account?
              <span onClick={() => setIsLogin(false)}>
                {" "}Create Account
              </span>
            </>
          ) : (
            <>
              Already have an account?
              <span onClick={() => setIsLogin(true)}>
                {" "}Log In
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Auth;