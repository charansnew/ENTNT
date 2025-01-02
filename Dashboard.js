import React from "react";

const Dashboard = ({ companies }) => {
  const getCommunicationStatus = (company) => {
    const now = new Date();
    const nextDate = new Date(company.lastCommunication);
    nextDate.setDate(nextDate.getDate() + company.periodicity);

    if (nextDate < now) return "overdue";
    if (nextDate.toDateString() === now.toDateString()) return "due";
    return "upcoming";
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Last 5 Communications</th>
            <th>Next Scheduled</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id} className={getCommunicationStatus(company)}>
              <td>{company.name}</td>
              <td>{company.lastCommunication}</td>
              <td>{getCommunicationStatus(company)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;