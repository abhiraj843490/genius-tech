import React from "react";
import "./dashboard.css";

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <h2>Good morning, Emily Davis!</h2>
      <p>Library management dashboard</p>

      <div className="stats-grid">
        <div className="stat-card">Total Books: 2,485</div>
        <div className="stat-card">Books Issued: 156</div>
        <div className="stat-card">Overdue Books: 23</div>
        <div className="stat-card">Active Members: 342</div>
      </div>

      <div className="transactions">
        <h3>Recent Transactions</h3>
        <ul>
          <li>John Smith borrowed *To Kill a Mockingbird*</li>
          <li>Sarah Johnson returned *1984*</li>
          <li>Mike Chen borrowed *The Catcher in the Rye*</li>
        </ul>
      </div>

      <div className="overdue-books">
        <h3>Overdue Books</h3>
        <ul>
          <li>Alice Brown - *The Great Gatsby* (5 days overdue)</li>
          <li>Bob Wilson - *1984* (12 days overdue)</li>
          <li>Carol Davis - *To Kill a Mockingbird* (3 days overdue)</li>
        </ul>
        <button>Send Reminders</button>
      </div>
    </div>
  );
};

export default DashboardPage;
