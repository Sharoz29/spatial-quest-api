# API Routes Documentation

## Quests Routes

| Method | Endpoint         | Description                              |
| ------ | ---------------- | ---------------------------------------- |
| GET    | /quests/location | Retrieve quests near a specific location |
| GET    | /quests/all      | Retrieve all available quests            |
| POST   | /quests/create   | Create a new quest                       |
| GET    | /quests/:questId | Get a quest by its ID                    |

## Assets Routes

| Method | Endpoint         | Description                                      |
| ------ | ---------------- | ------------------------------------------------ |
| POST   | /assets          | Place a new digital asset at a specific location |
| GET    | /assets/location | Retrieve assets near a specific location         |

## Participants Routes

| Method | Endpoint                             | Description                      |
| ------ | ------------------------------------ | -------------------------------- |
| POST   | /participants/:questId/join/:userId  | Join a quest                     |
| POST   | /participants/:questId/leave/:userId | Leave a quest                    |
| GET    | /participants/:questId               | Get all participants for a quest |
