# Services Documentation

## Asset Service

Handles asset placement and retrieval based on geolocation, and ensures assets are placed within quest boundaries.

### Methods

#### placeAsset(dto)

Inserts a new asset into the database.

##### Params (From dto)

- quest_id (int)
- user_id (int)
- content (string)
- lat (float)
- lon (float)

#### getAssetsByLocation(lat, lon, radiusMeters)

Retrieves all assets within a specified radius of a location.

##### Params

- lat (float)
- lon (float)
- radiusMeters (float, default: 50)

#### validatePlacement(dto)

Validates if asset placement is inside the geo-boundary of a given quest.

##### Params (From dto)

- quest_id (int)
- lat (float)
- lon (float)

## Quest Service

Manages quest creation, retrieval, and filtering based on location.

### Methods

#### createQuest(dto)

Creates a new quest with geo-boundary data.

##### Params (From dto)

- name (string)
- description (string, optional)
- geo_boundary (GeoJSON as string)

#### getQuestById(id)

Fetches a quest by its ID.

##### Params

- id (int)

#### getAllQuests()

Retrieves all quests.

#### getQuestsByLocation(lat, lon)

Filters and returns quests that contain the specified location inside their polygon boundary.

##### Params

- lat (float)
- lon (float)

## Participant Service

Handles user participation in quests (joining, leaving, and listing participants).

### Methods

#### joinQuest(id, quest_id)

Allows a user to join a quest only if not already joined.

##### Params

- id (user ID) (int)
- quest_id (quest ID) (int)

#### leaveQuest(id, quest_id)

Marks a participant as having left the quest.

##### Params

- id (user ID) (int)
- quest_id (quest ID) (int)

#### getParticipantsByQuest(quest_id)

Retrieves all participants for a given quest.

##### Params

- quest_id (quest ID) (int)
