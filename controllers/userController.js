const User = require('../models');

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
          .select('-__v');
  
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

}