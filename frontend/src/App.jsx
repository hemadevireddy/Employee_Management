import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://localhost:8080/api/employees";

function App() {
  const [employees, setEmployees] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    designation: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [designationFilter, setDesignationFilter] = useState("All");

  const loadEmployees = async () => {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to load employees");
      }

      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error("Error loading employees:", error);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const url = editingId
        ? `${API_URL}/${editingId}`
        : API_URL;

      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to save employee");
      }

      setForm({
        name: "",
        email: "",
        department: "",
        designation: "",
      });

      setEditingId(null);

      await loadEmployees();
    } catch (error) {
      console.error("Error saving employee:", error);
    }
  };

  const handleEdit = (employee) => {
    setForm({
      name: employee.name,
      email: employee.email,
      department: employee.department,
      designation: employee.designation,
    });

    setEditingId(employee.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete employee");
      }

      await loadEmployees();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const handleCancel = () => {
    setEditingId(null);

    setForm({
      name: "",
      email: "",
      department: "",
      designation: "",
    });
  };

  const departments = [
    "All",
    ...new Set(
      employees
        .map((employee) => employee.department)
        .filter(Boolean)
    ),
  ];

  const designations = [
    "All",
    ...new Set(
      employees
        .map((employee) => employee.designation)
        .filter(Boolean)
    ),
  ];

  const filteredEmployees = employees.filter((employee) => {
    const search = searchTerm.toLowerCase().trim();

    const matchesSearch =
      employee.name.toLowerCase().includes(search) ||
      employee.email.toLowerCase().includes(search);

    const matchesDepartment =
      departmentFilter === "All" ||
      employee.department === departmentFilter;

    const matchesDesignation =
      designationFilter === "All" ||
      employee.designation === designationFilter;

    return (
      matchesSearch &&
      matchesDepartment &&
      matchesDesignation
    );
  });

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div>
            <h1>Employee Management System</h1>
            <p>Manage employees efficiently</p>
          </div>

          <div className="header-badge">
            {employees.length}{" "}
            {employees.length === 1 ? "Employee" : "Employees"}
          </div>
        </div>
      </header>

      <main className="container">

        {/* Employee Form */}
        <section className="form-card">

          <div className="section-title">
            <div>
              <h2>
                {editingId ? "Edit Employee" : "Add Employee"}
              </h2>

              <p>
                {editingId
                  ? "Update employee information"
                  : "Enter employee details below"}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Employee Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter employee name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Department</label>

              <input
                type="text"
                name="department"
                placeholder="Enter department"
                value={form.department}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Designation</label>

              <input
                type="text"
                name="designation"
                placeholder="Enter designation"
                value={form.designation}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-actions">

              <button type="submit" className="primary-btn">
                {editingId
                  ? "Update Employee"
                  : "Add Employee"}
              </button>

              {editingId && (
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              )}

            </div>

          </form>
        </section>

        {/* Employee Section */}
        <section className="employees-section">

          <div className="employees-header">

            <div>
              <h2>Employees</h2>

              <p>
                Showing {filteredEmployees.length} of{" "}
                {employees.length} employees
              </p>
            </div>

          </div>

          {/* Search and Filters */}
          <div className="filter-panel">

            <div className="search-wrapper">

              <span className="search-icon">⌕</span>

              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
              />

            </div>

            <select
              value={departmentFilter}
              onChange={(event) =>
                setDepartmentFilter(event.target.value)
              }
            >
              {departments.map((department) => (
                <option
                  key={department}
                  value={department}
                >
                  {department === "All"
                    ? "All Departments"
                    : department}
                </option>
              ))}
            </select>

            <select
              value={designationFilter}
              onChange={(event) =>
                setDesignationFilter(event.target.value)
              }
            >
              {designations.map((designation) => (
                <option
                  key={designation}
                  value={designation}
                >
                  {designation === "All"
                    ? "All Designations"
                    : designation}
                </option>
              ))}
            </select>

          </div>

          {/* Employee Cards */}
          {filteredEmployees.length === 0 ? (

            <div className="empty">
              <h3>No employees found</h3>
              <p>
                Try changing your search or filter options.
              </p>
            </div>

          ) : (

            <div className="employee-grid">

              {filteredEmployees.map((employee) => (

                <article
                  className="employee-card"
                  key={employee.id}
                >

                  <div className="employee-top">

                    <div className="employee-avatar">
                      {employee.name
                        .charAt(0)
                        .toUpperCase()}
                    </div>

                    <div>
                      <h3>{employee.name}</h3>

                      <span className="employee-id">
                        Employee #{employee.id}
                      </span>
                    </div>

                  </div>

                  <div className="employee-details">

                    <div className="detail">
                      <span>Email</span>
                      <strong>{employee.email}</strong>
                    </div>

                    <div className="detail">
                      <span>Department</span>
                      <strong>
                        {employee.department}
                      </strong>
                    </div>

                    <div className="detail">
                      <span>Designation</span>
                      <strong>
                        {employee.designation}
                      </strong>
                    </div>

                  </div>

                  <div className="actions">

                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(employee)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        handleDelete(employee.id)
                      }
                    >
                      Delete
                    </button>

                  </div>

                </article>

              ))}

            </div>

          )}

        </section>

      </main>

    </div>
  );
}

export default App;