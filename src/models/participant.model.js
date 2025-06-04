class Participant {
  /**
   * @param {number} id
   * @param {number} quest_id
   * @param {string} status
   * @param {string} joined_at
   */
  constructor(id, quest_id, status, joined_at) {
    this.id = id;
    this.quest_id = quest_id;
    this.status = status;
    this.joined_at = joined_at;
  }
}

export default Participant;
