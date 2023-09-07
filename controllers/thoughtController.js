const {Thought, User} = require('../models');

module.exports = {
    //create Thought
    async createThought(req, res) {
        try {
          const thought = await Thought.create(req.body);
        
    
          const user = await User.findOneAndUpdate(
            { _id: req.body.userID },
            { $push: { thought: thought._id } },
            { new: true }
          );
    
          if (!user) {
            return res.status(404).json({
              message: 'No user is found',
            });
          }
    
          res.json({ message: 'Thought created' });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      },
          // Get all thoughts
    async getThoughts(req, res) {
        try {
          const thought = await Thought.find();
          res.json(thought);
        } catch (err) {
          res.status(500).json(err);
        }
      },
      // Get a thought
      async getSingleThought (req, res) {
        try {
          const thought = await Thought.findOne({ _id: req.params.thoughtID })
    
          if (!thought) {
            return res.status(404).json({ message: 'No thought with that thoughtID' });
          }
    
          res.json(thought);
        } catch (err) {
          res.status(500).json(err);
        }
      },
}
