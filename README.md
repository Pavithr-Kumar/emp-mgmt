# Full Stack Application: Employee Management

## Overview

This is a full-stack web application built using React with Vite for the frontend and Spring Boot with Java for the backend. The application provides functionalities like user authentication (signup, login, and forgot password), role-based access control, CRUD operations for employees, profile page, contact us page, and persistent user sessions using cookies. Toast notifications are implemented throughout the application for improved user interaction and experience.

## Technologies Used

### Frontend
- React
- Vite
- React Router
- Axios
- Toast Notifications Library (e.g., react-toastify)
- ![image](https://github.com/Pavithr-Kumar/emp-mgmt/assets/136888449/d464ab2e-7f84-4a47-809f-50687d0a3653)
- ![image](https://github.com/Pavithr-Kumar/emp-mgmt/assets/136888449/61fbb38c-cfa9-4851-a066-ac64a6ce0db2)
- ![image](https://github.com/Pavithr-Kumar/emp-mgmt/assets/136888449/3d0c8eee-0f2c-4d9e-ba0b-282c52ec34d0)
- ![image](https://github.com/Pavithr-Kumar/emp-mgmt/assets/136888449/165550a1-666f-4279-91e5-442f8450edd3)
- ![image](https://github.com/Pavithr-Kumar/emp-mgmt/assets/136888449/20c58752-b6f6-440a-8f6d-ffbd6f2d2331)
- ![image](https://github.com/Pavithr-Kumar/emp-mgmt/assets/136888449/f2623146-27ba-49a2-a4ad-b7e6f2a564cf)
- ![image](https://github.com/Pavithr-Kumar/emp-mgmt/assets/136888449/baed1e9d-9fa1-4bd9-8af4-719c1056097b)
- ![image](https://github.com/Pavithr-Kumar/emp-mgmt/assets/136888449/3af9d76f-d0fc-4bb8-aa3c-def267a4b000)

### Backend
- Spring Boot
- Java
- Spring Security
- Email Services (for user registration and forgot password)
- PostgreSQL (or any other relational database)

## Features

- **User Authentication:** Users can sign up, log in, and reset their passwords if forgotten.
- **Role-Based Access Control (RBAC):** Users are assigned roles such as admin or manager. The access control rules are as follows:
  - **Admins:**
    - Can perform CREATE, UPDATE, DELETE operations on ADMINS, MANAGERS, EMPLOYEES.
    
  - **Managers:**
   - Can perform CREATE, UPDATE operations on  MANAGERS, EMPLOYEES.
  - **Employees:**
   - Can perform VIEW their information.
     
- **Employee Management:** Admin and manager users can perform CRUD operations on employees, including creating, updating, viewing, and deleting employee records.
- **Persistent User Sessions:** User authentication is maintained across browser sessions using cookies.
- **Profile Page:** Users can view their profile details.
- **Contact Us Page:** Provides a form for users to contact the application administrators.
- **Toast Notifications:** Toast notifications are displayed for various actions and events to enhance the user experience.


## Setup Instructions

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the frontend directory and install dependencies: `cd frontend && npm install`
3. Start the frontend server: `npm run dev`
4. Navigate to the backend directory and install dependencies: `cd ../backend && mvn install`
5. Start the backend server: `mvn spring-boot:run`
6. Access the application at `http://localhost:3000`

## Configuration

- Configure database connection details in the backend application properties.
- Update email service configurations for user registration and forgot password functionality.




