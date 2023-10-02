const {User} = require('../models');

module.exports = {
    // Get all users
    async getUsers(req, res) {
      try {
        const users = await User.find();
        res.json(users);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    // Get a user
    async getSingleUser(req, res) {
      try {
        const user = await User.findOne({ _id: req.params.userID })
  
        if (!user) {
          return res.status(404).json({ message: 'No user with that userID' });
        }
  
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    // Create a user
    async createUser(req, res) {
      try {
        const user = await User.create(req.body);
        res.json(user);
      } catch (err) {
        console.log(err);
        return res.status(500).json(err);
      }
    },
    //Delete a user
    async deleteUser(req, res) {
      try {
        const user = await User.findOneAndDelete({ _id: req.params.userID });
  
        if (!user) {
          res.status(404).json({ message: 'No user with that ID' });
        }
  
        // await User.deleteMany({ _id: { $in: course.thoughts } });
        res.json({ message: 'User and thoughts deleted!' });
      } catch (err) {
        res.status(500).json(err);
      }
    },
    // Update a user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userID },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //adding friend
  async addFriend (req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        { _id: req.params.userID },
        { $push: {friends: req.params.friendID} },
        { runValidators: true, new: true }
      );

      if (!user) {
        res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
    },
  async deleteFriend (req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        { _id: req.params.userID },
        { $pull: {friends: req.params.friendID }},
        { runValidators: true, new: true }
        );

      if (!user) {
        res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
    }
  }
    