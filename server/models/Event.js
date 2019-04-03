

const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
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
})

export default const Event = mongoose.model('Event', EventSchema);
