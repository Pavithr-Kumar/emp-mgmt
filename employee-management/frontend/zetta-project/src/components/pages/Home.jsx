import React, { useContext } from "react";

import { FaUser } from "react-icons/fa";
import "../css/home.css";
import { GrTasks } from "react-icons/gr";
import { GrDocumentPerformance } from "react-icons/gr";

const Home = () => {
  // console.log(user);
  return (
    <div className="home">
      <div className="header">
        <h1>Welcome to Zettamine</h1>
        <p>Efficiently Manage Your Workforce</p>
      </div>
      <main>
        <section className="features">
          <div className="feature">
            <FaUser className="icon" />
            <h2>Employee Management</h2>
            <p>
              Streamline your HR processes with our powerful employee management
              tools.
            </p>
          </div>
          <div className="feature">
            <GrTasks className="icon" />
            <h2>Task Assignment</h2>
            <p>
              Assign tasks, track progress, and ensure productivity with ease.
            </p>
          </div>
          <div className="feature">
            <GrDocumentPerformance className="icon" />
            <h2>Performance Analytics</h2>
            <p>
              Gain insights into employee performance and make data-driven
              decisions.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
