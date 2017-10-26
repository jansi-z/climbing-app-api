// climbers-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const climbers = new Schema({

    userId: { type: Schema.Types.ObjectId, ref: 'users' },

    username: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    age: { type: Number },
    avatar: { type: String },

    reviewIds: [],

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('climbers', climbers);
};
