const {Thought, User} = require("../models")

const thoughtController =  {
  async getAllThought(req, res) {
    Thought.find()
    .then((thoughts) => res.json(thoughts))
    .catch((err) => res.status(500).json(err));
  },
  async getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
    .then((thought) =>
      !thought
        ? res.status(404).json({ message: 'No Thought with that ID' })
        : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
  },
  async createThought(req, res) {
    Thought.create(req.body)
    .then((thought) => {
      return User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thoughts: thought._id } },
        { new: true }
      );
    })
    .then((user) =>
      !user
        ? res.status(404).json({
            message: 'Thought created, but found no user with that ID',
          })
        : res.json('Created the Thought 🎉')
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
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
