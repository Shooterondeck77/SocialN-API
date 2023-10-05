const mongoose = require('mongoose');

// Define the reaction schema (nested document)
const reactionSchema = new mongoose.Schema({
  // Define the properties of the reaction here
  // For example, you can have properties like "reactionText," "createdAt," and "username."
});

// Define the Thought schema
const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema], // Array of nested documents created with reactionSchema
});

// Define the virtual field "reactionCount"
thoughtSchema.virtual('reactionCount').get(function () {
  // 'this' refers to the current document
  return this.reactions.length;
});

// Create the Thought model
const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;