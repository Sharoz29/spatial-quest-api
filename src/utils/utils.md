# Utils Documentation

## Geospatial Utilities (geoUtils.js)

Contains utility functions for geospatial calculations used across the Spatial Quest backend.

### pointInPolygon(point, polygon)

Determines if a given [lon, lat] point is inside a polygon using the ray-casting algorithm.

#### Parameters:

- point (Array): An array in the format [lon, lat].

- polygon (Array): An array of points representing the polygon.

#### Returns:

Boolean: true if the point lies within the polygon, false otherwise.

### isWithinGeoBoundary(lat, lon, polygonGeoJson)

Checks if a [lat, lon] coordinate lies within a polygon defined in GeoJSON format.

#### Parameters:

- lat (Number): Latitude of the point.

- lon (Number): Longitude of the point.

- polygonGeoJson (Object): GeoJSON object of type "Polygon".

#### Returns:

Boolean: true if the point lies within the boundary, false otherwise.

## Database Initialization Utility (initializeDatabase.js)

Initializes the database schema using an SQL file during startup.

### initializeDatabase()

Reads and executes the init.sql file to create required tables and schema.
