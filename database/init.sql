-- Create table for quests with geo-fence boundaries as polygons (stored as GeoJSON)
CREATE TABLE IF NOT EXISTS quests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    geo_boundary TEXT NOT NULL, -- Stored as GeoJSON Polygon
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create table for participants
CREATE TABLE IF NOT EXISTS participants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    quest_id INTEGER NOT NULL,
    status TEXT DEFAULT 'joined', 
    joined_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (quest_id) REFERENCES quests(id)
);

-- Create table for digital assets placed by users
CREATE TABLE IF NOT EXISTS assets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    quest_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    content TEXT NOT NULL, 
    lat REAL NOT NULL,
    lon REAL NOT NULL,
    placed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (quest_id) REFERENCES quests(id)
    FOREIGN KEY (user_id) REFERENCES participants(id)
);
