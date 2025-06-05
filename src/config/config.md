# Config Documentation

## Database Configuration (db.js)

Initializes and exports the SQLite database connection used across the application.

### Overview

- Uses sqlite3 for lightweight database support.

- Dynamically resolves the path to the database file: database/spatial_quest.db.

- Exports a db instance for querying and interacting with SQLite.

### Key Features

- Logs a message when connected.

- Centralized DB access for all services (assets, quests, participants, etc.).

## Swagger Configuration (swagger.js)

Sets up Swagger documentation for the API using swagger-jsdoc.

### Overview

- Provides automatic generation of OpenAPI (3.0) documentation.

- Uses JSDoc-style annotations from route and controller files.
