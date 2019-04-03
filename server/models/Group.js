
const mongoose = require('mongoose');

const GroupSchema = new mongooe.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  members: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    required: true
  },
  admins: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    required: true
  },
  image: {
    type: String,
    required: false
  },
  upcomingEvents: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'Event'
    }],
    required: true
  }
}

export default const Group = mongoose.model('Group', GroupSchema);
