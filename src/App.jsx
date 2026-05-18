import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showContent, setShowContent] = useState(true);

  const students = [
    {
      id: 1,
      name: "Manosri",
      course: "React JS",
      city: "Chennai",
    },
    {
      id: 2,
      name: "Arun",
      course: "JavaScript",
      city: "Coimbatore",
    },
    {
      id: 3,
      name: "Divya",
      course: "HTML & CSS",
      city: "Madurai",
    },
    {
      id: 4,
      name: "Karthik",
      course: "Frontend Development",
      city: "Salem",
    },
    {
      id: 5,
      name: "Priya",
      course: "UI/UX Design",
      city: "Trichy",
    },
  ];

  return (
    <div className="container">
      <h1 className="main-heading">
        React Conditional & List Rendering
      </h1>

      {/* Login / Logout */}
      <div className="card">
        <h2 className="sub-heading">
          {isLoggedIn ? "Welcome Back 👋" : "Please Login 🔐"}
        </h2>

        <button
          className="btn"
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>

      {/* Show / Hide Content */}
      <div className="card">
        <button
          className="btn"
          onClick={() => setShowContent(!showContent)}
        >
          {showContent ? "Hide Content" : "Show Content"}
        </button>

        {showContent && (
          <p className="text">
            This content is displayed using Conditional Rendering.
          </p>
        )}
      </div>

      {/* List Rendering */}
      <div className="card">
        <h2 className="sub-heading">Student List</h2>

        <div className="student-grid">
          {students.map((student) => (
            <div className="student-card" key={student.id}>
              <h3>{student.name}</h3>

              <p>
                <strong>Course:</strong> {student.course}
              </p>

              <p>
                <strong>City:</strong> {student.city}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;