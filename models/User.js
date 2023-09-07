const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /.+\@.+\..+/,
        },
        thought: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            },

        ],
    },
    // {
    //  versionKey: false,
    // }
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);

const User = model('user', userSchema);

module.exports = User;
