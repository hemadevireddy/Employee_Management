# Employee Management System

A full-stack web application for managing employee records using React, Spring Boot, and MySQL. The application provides complete CRUD operations through a RESTful backend and a responsive web interface.

## Project Overview

The Employee Management System provides a centralized interface for creating, viewing, updating, and deleting employee information.

The project demonstrates practical implementation of:

* Full-stack web development
* RESTful API design
* Spring Boot application development
* JPA/Hibernate-based database interaction
* MySQL database management
* React-based frontend development
* CRUD operations
* Controller-Service-Repository architecture
* API testing using Postman
* Frontend-backend integration

## Features

### Employee Management

* Add new employees
* View all employees
* View individual employee details
* Update employee information
* Delete employee records

### Employee Information

Each employee record contains:

* Employee ID
* Name
* Email
* Department
* Designation

### Backend

* RESTful API endpoints
* Layered architecture
* JPA/Hibernate ORM
* MySQL database integration
* CORS configuration
* Exception handling for employee operations

### Frontend

* React-based user interface
* Vite development environment
* Employee management interface
* Frontend-backend API integration

## Prototype Screenshots

### Add Employee

![Add Employee](Add_employee.png)

### Employee Records

![Employee Records](search_employee.png)

### Update Employee

![Update and Delete Employee](Update_delete_Employee.png)

> Screenshots demonstrate the implemented prototype and user interface.

## System Architecture

```text
                    React Frontend
                         |
                         | REST API
                         v
                  Spring Boot API
                         |
              +----------+----------+
              |          |           |
              v          v           v
         Controller   Service   Repository
              |          |           |
              +----------+----------+
                         |
                         v
                  JPA / Hibernate
                         |
                         v
                  MySQL Database
```

## Application Flow
<img width="1226" height="556" alt="Option Pricing and Risk Management A Real-Time Approach - Selection" src="https://github.com/user-attachments/assets/8b197e61-e43b-4ea5-ac73-6f199862dc3b" />



## Technology Stack

### Frontend

| Technology | Purpose             |
| ---------- | ------------------- |
| React      | User interface      |
| Vite       | Frontend build tool |
| JavaScript | Application logic   |
| HTML5      | Page structure      |
| CSS3       | Styling             |

### Backend

| Technology      | Purpose               |
| --------------- | --------------------- |
| Java            | Backend programming   |
| Spring Boot     | REST API development  |
| Spring Data JPA | Database abstraction  |
| Hibernate       | ORM                   |
| Maven           | Dependency management |

### Database

| Technology | Purpose             |
| ---------- | ------------------- |
| MySQL 8.4  | Relational database |
| SQL        | Database operations |

### Development and Testing

| Tool                    | Purpose             |
| ----------------------- | ------------------- |
| Git                     | Version control     |
| GitHub                  | Source code hosting |
| Postman                 | REST API testing    |
| VS Code / IntelliJ IDEA | Development         |

## Project Structure

```text
Employee_Management/
|
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
|
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── employee/
│   │   │           └── employee_management/
│   │   │               ├── EmployeeManagementApplication.java
│   │   │               ├── controller/
│   │   │               │   └── EmployeeController.java
│   │   │               ├── entity/
│   │   │               │   └── Employee.java
│   │   │               ├── repository/
│   │   │               │   └── EmployeeRepository.java
│   │   │               └── service/
│   │   │                   └── EmployeeService.java
│   │   └── resources/
│   │
│   └── test/
|
├── .gitignore
├── pom.xml
├── mvnw
├── mvnw.cmd
└── README.md
```

## REST API Endpoints

Base URL:

```text
http://localhost:8080/api/employees
```

| Method | Endpoint              | Description             |
| ------ | --------------------- | ----------------------- |
| POST   | `/api/employees`      | Add a new employee      |
| GET    | `/api/employees`      | Retrieve all employees  |
| GET    | `/api/employees/{id}` | Retrieve employee by ID |
| PUT    | `/api/employees/{id}` | Update employee         |
| DELETE | `/api/employees/{id}` | Delete employee         |

### Example Request

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "department": "Engineering",
  "designation": "Software Engineer"
}
```

## Installation and Setup

### Prerequisites

* Java 17 or compatible JDK
* Maven
* MySQL 8.x
* Node.js
* npm
* Git

### Clone the Repository

```bash
git clone https://github.com/hemadevireddy/Employee_Management.git
```

Navigate into the project:

```bash
cd Employee_Management
```

### Configure MySQL

Create the database:

```sql
CREATE DATABASE employee_management;
```

Configure the local database connection in:

```text
src/main/resources/application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employee_management
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```

Do not commit real database credentials to GitHub.

### Run the Backend

From the project root:

```powershell
.\mvnw.cmd spring-boot:run
```

The backend runs at:

```text
http://localhost:8080
```

### Run the Frontend

Open a new terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend runs at:

```text
http://localhost:5173
```

## API Testing

The REST APIs were tested using Postman.

Supported operations:

```text
POST    Create Employee
GET     Retrieve Employees
GET     Retrieve Employee by ID
PUT     Update Employee
DELETE  Delete Employee
```

## Backend Architecture

The backend follows a layered architecture.

### Controller Layer

Handles HTTP requests and responses.

```text
EmployeeController
```

### Service Layer

Contains application and business logic.

```text
EmployeeService
```

### Repository Layer

Provides database access through Spring Data JPA.

```text
EmployeeRepository
```

### Entity Layer

Defines the employee data model.

```text
Employee
```

This separation improves maintainability, readability, and scalability.

## Security Considerations

Local database configuration containing sensitive credentials is excluded from version control.

Sensitive information such as database passwords, API keys, and credentials should not be committed to a public repository.

For production deployment, environment variables or a secure secrets-management solution should be used.

## Learning Outcomes

This project provided practical experience with:

* Java and object-oriented programming
* Spring Boot REST API development
* RESTful API design
* CRUD operations
* Spring Data JPA
* Hibernate ORM
* MySQL database integration
* React frontend development
* Frontend-backend communication
* CORS configuration
* API testing with Postman
* Git and GitHub
* Layered software architecture

## Future Enhancements

Potential improvements include:

* Employee authentication and role-based access control
* Search and advanced filtering
* Pagination
* Input validation
* Global exception handling
* Automated unit and integration testing
* Docker-based deployment
* Cloud database integration
* CI/CD pipeline
* Production deployment

## Author

**Hema Sudarshini Devireddy**

B.Tech - Computer and Communication Engineering
Amrita Vishwa Vidyapeetham

GitHub: [hemadevireddy](https://github.com/hemadevireddy)

## License

This project is developed for educational and portfolio purposes.
