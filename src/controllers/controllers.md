# Controllers Documentation

This document outlines the core controllers of the application and their exposed REST endpoints.

## Quest Controller

Handles operations related to quest creation and retrieval.

### Endpoints

| Method | Endpoint                       | Description                         |
| ------ | ------------------------------ | ----------------------------------- |
| POST   | /quests/create                 | Create a new quest                  |
| GET    | /quests/all                    | Get all quests                      |
| GET    | /quests/location?lat=..&lon=.. | Get quests near a specific location |
| GET    | /quests/:questId               | Get quest by ID                     |

### POST /quests

#### Description

Creates a new quest.

#### Example Request Body

```

{
  "name": "Treasure Hunt",
  "description": "Find hidden clues",
  "geo_boundary": "{\"type\":\"Polygon\",\"coordinates\":[[[55.2797,25.1972],[55.2897,25.1972],[55.2897,25.2072],[55.2797,25.2072],[55.2797,25.1972]]]}"
}

```

### GET /quests

#### Description

Gets all the quests

### GET /quests/location?lat=..&lon=..

#### Description

Returns quests near a given latitude and longitude.

#### Example Query Params

```

lat = 25.1972
lon = 55.2797

```

### GET /quests/:questId

#### Description

Fetch quest details by ID.

## Participant Controller

Handles user participation in quests.

### Endpoints

| Method | Endpoint                             | Description                     |
| ------ | ------------------------------------ | ------------------------------- |
| POST   | /participants/:questId/join/:userId  | User joins a quest              |
| POST   | /participants/:questId/leave/:userId | User leaves a quest             |
| GET    | /participants/:questId/participants  | Get all participants of a quest |

### POST /quests/:questId/join/:userId

#### Description

Join a user to a quest.

### POST /quests/:questId/leave/:userId

#### Description

Remove a user from a quest.

### GET /quests/:questId/participants

#### Description

List all participants of a quest.

## Asset Controller

### Description

Handles placement and retrieval of digital assets.

### Endpoints

| Method | Endpoint                       | Description                                   |
| ------ | ------------------------------ | --------------------------------------------- |
| POST   | /assets                        | Places a digital asset at a specific location |
| GET    | /assets/location?lat=..&lon=.. | Retrieve assets near a specific location      |

### POST /assets

#### Description

Places a digital asset at a specific location.

#### Example Request Body

```

{
  "quest_id": 1,
  "user_id": 1,
  "content": "A hidden treasure chest",
  "lat": 37.7749,
  "lon": -122.4194,
  "placed_at": "2025-06-04T15:30:00Z"
}

```

### GET /assets/location?lat=..&lon=..

#### Description

Get all assets placed near the given coordinates.

#### Example Query Params

```

lat = 25.1972
lon = 55.2797

```
