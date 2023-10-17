const {Thought, User} = require("../models")

const userController =  {
  async getAllUser(req, res) {
    User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
  },
  async getUserById(req, res) {
    User.findOne({ _id: req.params.userId })
    .select('-__v')
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No user with that ID' })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
  },
  async createUser(req, res) {
    User.create(req.body)
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => res.status(500).json(err));
  },
  async updateUser(req, res) {

  },
  async deleteUser(req, res) {

  },
  async addFriend(req, res) {

  },
  async removeFriend(req, res) {

  },
}

module.exports = userController