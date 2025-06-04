// src/models/quest.model.js

class Quest {
  /**
   * @param {Object} data
   * @param {number} data.id
   * @param {string} data.name
   * @param {string|null} data.description
   * @param {string} data.geo_boundary
   * @param {string} data.created_at
   */
  constructor({ id, name, description, geo_boundary, created_at }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.geo_boundary = geo_boundary;
    this.created_at = created_at;
  }
}

export default Quest;
