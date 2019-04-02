
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
      date: {
        type: Date,
        required: true,
      },
      location: {
        type: {
          street: {
            type: String,
            required: true
          },
          number: {
            type: String,
            required: true
          },
          zip: {
            type: String,
            required: true
          },
          city: {
            type: String,
            required: true
          },
          country: {
            type: String,
            required: true
          }
        },
        required: true
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
      }
    }],
    required: true
  }
}

export default const Group = mongoose.model('Group', GroupSchema);
