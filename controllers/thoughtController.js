const {Thought, User} = require("../models")

const thoughtController =  {
  async getAllThought(req, res) {
    Thought.find()
    .then((thoughts) => res.json(thoughts))
    .catch((err) => res.status(500).json(err));
  },
  async getThoughtById(req, res) {

  },
  async createThought(req, res) {

  },
  async updateThought(req, res) {

  },
  async deleteThought(req, res) {

  },
  async addReaction(req, res) {

  },
  async removeReaction(req, res) {

  },
}

module.exports = thoughtController
