import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  participants: [String],
  messages: [{
    sender: String,
    content: String,
    timestamp: {
      type: Date,
      default: Date.now
    }
  }]
}, { timestamps: true });

export const Chat = mongoose.model('Chat', chatSchema);