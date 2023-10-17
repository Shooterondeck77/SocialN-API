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
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No User with this id!' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  async deleteUser(req, res) {

  },
  async addFriend(req, res) {

  },
  async removeFriend(req, res) {

  },
}

module.exports = userController
