class Asset {
  /**
   * @param {number} id
   * @param {number} quest_id
   * @param {string} user_id
   * @param {string} content
   * @param {number} lat
   * @param {number} lon
   * @param {string} placed_at
   */
  constructor(id, quest_id, user_id, content, lat, lon, placed_at) {
    this.id = id;
    this.quest_id = quest_id;
    this.user_id = user_id;
    this.content = content;
    this.lat = lat;
    this.lon = lon;
    this.placed_at = placed_at;
  }
}

export default Asset;
