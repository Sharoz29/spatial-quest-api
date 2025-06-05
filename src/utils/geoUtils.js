import inside from "point-in-polygon";

export function pointInPolygon(point, polygon) {
  const [x, y] = point;
  let inside = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i];
    const [xj, yj] = polygon[j];

    const intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;

    if (intersect) inside = !inside;
  }

  return inside;
}

export function isWithinGeoBoundary(lat, lon, polygonGeoJson) {
  if (
    polygonGeoJson.type !== "Polygon" ||
    !Array.isArray(polygonGeoJson.coordinates[0])
  ) {
    return false;
  }

  const point = [lon, lat];
  const polygon = polygonGeoJson.coordinates[0];

  return inside(point, polygon);
}
