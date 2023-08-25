const { Schema, model } = require('mongoose');

const courseSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,  
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
)