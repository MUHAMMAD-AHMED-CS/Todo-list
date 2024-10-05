# Todo List Application

## Overview

This project is a simple Todo List application built using Node.js, Express, MongoDB, and React. It allows users to create, update, and delete tasks with a clean and responsive interface.

## Features

- **Add Tasks**: Create new tasks to your todo list.
- **Update Tasks**: Mark tasks as completed.
- **Delete Tasks**: Remove tasks from your list.
- **Responsive UI**: Works well on both desktop and mobile devices.

## Technology Stack

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React
- **Styling**: Tailwind CSS (optional)

## Project Structure
```bash
/project-root
│
├── server          # Entry point for the backend server
|   ├── server.js        # Mongoose model for Todo items
|   ├── package.json     # Project metadata and dependencies
|   └── Models
│       └── Todo.js        # Mongoose model for Todo items
│
├── frontend
│   ├── src
│       ├── App.jsx        # Main application component
│       ├── Home.jsx       # Component for displaying and managing todos
|       ├── package.json   # Project metadata and dependencies
│       └── Creat.jsx      # Component for adding new tasks

└── README.md           # Project documentation
```

## Setup Instructions

### Prerequisites

- Node.js (v12 or higher)
- MongoDB (local or remote)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-directory>
  bash```
2.Install the backend dependencies:

  ```bash
cd server
npm install
```
3.Install front end dependencies:
  ```bash
cd frontend
npm install
```

## Running the Application

### Start the MongoDB Server (if running locally)

```bash
mongod
```
###Start the Backend Server
```bash
npm start
```
###Start the Frontend Application
```bash
npm start
```

##Access the Application
Open your browser and navigate to http://localhost:3000 to see the application in action.

###API Endpoints
GET /get: Retrieve all tasks.
POST /add: Add a new task. Expects a JSON body with the format { "task": "Your task here" }.
PUT /update/:id: Mark a task as completed.
PUT /del/:id: Delete a task by ID.

##License
This project is licensed under the MIT License. See the LICENSE file for details.


   
