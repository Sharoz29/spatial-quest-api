# Models Documentation

This document outlines the core models used in the project and their properties.

## Quest Model

Represents a quest that defines a geographical boundary.

### Properties

| Property     | Type              | Description                                   |
| ------------ | ----------------- | --------------------------------------------- |
| id           | number            | Unique identifier for the quest               |
| name         | string            | Name of the quest                             |
| description  | string (nullable) | Optional description of the quest             |
| geo_boundary | string            | GeoJSON with polygon string defining the area |
| created_at   | string            | ISO timestamp when the quest was created      |

### Example

```
{
    "id": 1,
    "name": "Treasure Hunt",
    "description": "Find hidden treasures around the city",
    "geo_boundary": "{\"type\":\"Polygon\",\"coordinates\":[[[...]]]}",
    "created_at": "2025-06-04T15:30:00Z"
}
```

## Participant Model

Represents a user participating in a quest.

### Properties

| Property  | Type   | Description                                     |
| --------- | ------ | ----------------------------------------------- |
| id        | number | Unique identifier of the participant            |
| quest_id  | number | The ID of the quest being joined/left           |
| status    | string | Status of participation                         |
| joined_at | string | ISO timestamp of when the user joined the quest |

### Example

```
{
    "id": 1,
    "quest_id": 123,
    "status": "joined",
    "joined_at": "2025-06-04T15:30:00Z"
}
```

## Asset Model

Represents a digital asset placed on the map within a quest.

### Properties

| Property  | Type   | Description                                |
| --------- | ------ | ------------------------------------------ |
| id        | number | Unique identifier for the asset            |
| user_id   | number | ID of the user who placed the asset        |
| quest_id  | number | The ID of the associated quest             |
| content   | string | Content of the asset                       |
| lat       | number | Latitude where the asset is placed         |
| lon       | number | Longitude where the asset is placed        |
| placed_at | string | ISO timestamp of when the asset was placed |

### Example

```
{
    "id": 1,
    "quest_id": 123,
    "user_id": 1,
    "content": "A hidden treasure chest",
    "lat": 37.7749,
    "lon": -122.4194,
    "placed_at": "2025-06-04T15:30:00Z"
  }
```
