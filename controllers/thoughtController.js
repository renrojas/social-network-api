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
}
