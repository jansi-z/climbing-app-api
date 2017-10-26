// reviews-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const reviews = new Schema({

    title: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String },

    routeId: { type: Schema.Types.ObjectId, ref: 'routes' },
    authorId: { type: Schema.Types.ObjectId, ref: 'users' },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('reviews', reviews);
};
