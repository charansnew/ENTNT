import React, { useState } from "react";

const AdminPage = () => {
  const [companies, setCompanies] = useState([]);
  const [form, setForm] = useState({ name: "", location: "", linkedIn: "", emails: "", phone: "", comments: "", periodicity: 14 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const addCompany = () => {
    setCompanies([...companies, { ...form, id: companies.length + 1 }]);
    setForm({ name: "", location: "", linkedIn: "", emails: "", phone: "", comments: "", periodicity: 14 });
  };

  return (
    <div>
      <h2>Admin - Manage Companies</h2>
      <form>
        <input name="name" placeholder="Company Name" value={form.name} onChange={handleInputChange} />
        <input name="location" placeholder="Location" value={form.location} onChange={handleInputChange} />
        <input name="linkedIn" placeholder="LinkedIn Profile" value={form.linkedIn} onChange={handleInputChange} />
        <input name="emails" placeholder="Emails" value={form.emails} onChange={handleInputChange} />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleInputChange} />
        <textarea name="comments" placeholder="Comments" value={form.comments} onChange={handleInputChange}></textarea>
        <input name="periodicity" placeholder="Communication Periodicity (days)" value={form.periodicity} onChange={handleInputChange} />
        <button type="button" onClick={addCompany}>Add Company</button>
      </form>

      <h3>Companies List</h3>
      <ul>
        {companies.map((company) => (
          <li key={company.id}>{company.name} - {company.location}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;