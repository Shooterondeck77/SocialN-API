const {Thought, User} = require("../models")

const userController =  {
  async getAllUser(req, res) {
    User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
  },
  async getUserById(req, res) {

  },
  async createUser(req, res) {

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
