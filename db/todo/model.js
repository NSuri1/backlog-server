
  import mongoose from 'mongoose'

  const ObjectId = mongoose.Schema.Types.ObjectId;
  const schema = new mongoose.Schema({
    userID: ObjectId,
    title:  {type: String, required: true},
    description: String,
    priority: Number,
    createDate: { type: Date, default: Date.now },
    dueDate: Date,
    status: Boolean,
  });

  export default mongoose.model('Todo', schema);