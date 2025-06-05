# Spatial Quest API

A backend system for a multiplayer quest feature with geo-fencing capabilities.  
Built with Node.js, Express, SQLite, and Swagger for API documentation.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Running Locally](#running-locally)
- [Using Docker](#using-docker)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Database](#database)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

Spatial Quest API provides backend support for multiplayer quests that involve geo-fencing to detect player locations within quest areas. It uses SQLite as the database and Express.js for RESTful APIs. The API supports quest discovery, participation, and location-based validations.

---

## Features

- Geo-fencing support using polygon boundaries
- SQLite database with schema initialized on app start
- RESTful API endpoints for quest management
- Swagger UI for interactive API documentation
- Easy local development and Docker containerization

---

## Tech Stack

- Node.js (ES Modules)
- Express
- SQLite3
- Swagger (swagger-jsdoc & swagger-ui-express)
- Docker & Docker Compose

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm
- Docker & Docker Compose (optional but recommended)

---

## Running Locally

1. Clone the repo:

```bash
git clone https://github.com/yourusername/spatial-quest-api.git
cd spatial-quest-api
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm run dev
```

4. The API will run on `http://localhost:3000`.

5. The SQLite database file `spatial_quest.db` will be created in the `/database` directory on first run.

---

## Using Docker

### Build and run with Docker Compose

```bash
docker compose up --build
```

This will:

- Build the Docker image
- Mount your source code for live reload
- Create a volume for persistent SQLite data
- Start the app with nodemon in development mode

### Access API

- API URL: `http://localhost:3000`
- Swagger UI: `http://localhost:3000/api-docs`

---

## API Documentation

The API is documented with Swagger. Once the server is running, access:

```
http://localhost:3000/api-docs
```

to view interactive API documentation and test endpoints.

---

## Project Structure

```
/src
  /config            # Config files for the app
  /controllers       # API route controllers
  /services          # Db services
  /routes            # Express routes
  /models            # Db models
  /utils             # Utility files for the app functionalities
  server.js          # App entry point
  app.js             # Express app setup with middleware and route mounting
/database
  init.sql           # SQL schema for database initialization
docker-compose.yml  # Docker Compose config
Dockerfile          # Docker image build config
package.json
README.md
```

---

## Database

- Uses SQLite as a lightweight embedded DB.
- `init.sql` contains schema and is run on app startup to create tables if needed.
- `spatial_quest.db` is created in the `/database` folder on first run.
- Docker volume persists the database between container restarts.

---
